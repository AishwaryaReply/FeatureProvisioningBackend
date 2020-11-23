#!/usr/bin/env bash
echo "DEBUG: environment variables"
printenv

set -e

repository_name=${REPOSITORY_NAME}
commit_hash=${GIT_COMMIT}
report_bucket=${REPORT_BUCKET}

function config_git_for_npm {
  npm config set strict-ssl false

  git config --global --add url."https://$(echo ${TOKEN})@gsdp.github.intra.fcagroup.com".insteadOf "ssh://git@gsdp.github.intra.fcagroup.com"
  git config --global --add url."https://$(echo ${TOKEN})@gsdp.github.intra.fcagroup.com/".insteadOf "git+ssh://git@gsdp.github.intra.fcagroup.com:"
  git config --global --add url."https://$(echo ${TOKEN})@gsdp.github.intra.fcagroup.com".insteadOf "git+ssh://git@gsdp.github.intra.fcagroup.com"
  git config --global --add url."https://$(echo ${TOKEN})@gsdp.github.intra.fcagroup.com/".insteadOf "ssh://git@gsdp.github.intra.fcagroup.com:"
  git config --global --add url."https://$(echo ${TOKEN})@gsdp.github.intra.fcagroup.com".insteadOf "ssh://git@gsdp.github.intra.fcagroup.com"
  git config --global --add url."https://$(echo ${TOKEN})@gsdp.github.intra.fcagroup.com/".insteadOf "git@gsdp.github.intra.fcagroup.com:"
  git config --global --add url."https://$(echo ${TOKEN})@gsdp.github.intra.fcagroup.com".insteadOf "git://gsdp.github.intra.fcagroup.com"
}

function execute_lambda_unit_testing {
  lambda_name=${1}
  echo "Testing lambda: ${lambda_name}"
  if [[ -f "package.json" ]]
  then
    echo "package.json file found"
    npm ci #install all dependencies, also dev ones needed for testing
    npm test
    rm -r node_modules #clean-up lambda folder
  else
    echo "package.json file not found, skipping"
  fi
}

function upload_unit_testing_report {
  lambda_name=${1}
  echo "Uploading report for lambda: ${lambda_name}"
  if [[ -d "coverage" ]]
  then
    echo "coverage directory found"
    zip -r report.zip coverage
    echo "created report.zip"
    aws s3 cp report.zip \
      s3://${report_bucket}/${repository_name}/reports/${commit_hash}/lambdas/${1}/ \
      --region ${MASTER_AWS_REGION}
    echo "uploaded report.zip to S3"
    rm -rf coverage
    rm -f report.zip
    echo "cleaned-up lambda directory"
  else
    echo "coverage directory not found, skipping"
  fi
}

echo "Test script started"
echo "Working directory: $(pwd)"

echo "Config git for npm"
config_git_for_npm

echo "Test every function code with Mocha"
cd ./src/lambdas/
orig_folder=$(pwd)
for i in $(find $PWD -maxdepth 1 -mindepth 1 -type d)
do
  cd ${i}
  lambda_name=$(basename $(pwd))
  execute_lambda_unit_testing ${lambda_name}
  upload_unit_testing_report ${lambda_name}
  cd ${orig_folder}
done

echo "Test script completed"