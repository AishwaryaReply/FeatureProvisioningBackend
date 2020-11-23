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

function download_unit_testing_report {
  lambda_name=${1}
  unit_test_repors_folder=${2}
  echo "Downloading report for lambda: ${lambda_name}"
  lambda_report_s3_url="s3://${report_bucket}/${repository_name}/reports/${commit_hash}/lambdas/${1}/report.zip"
  lambda_report_destination_folder="${unit_test_repors_folder}/${lambda_name}"
  echo "Lambda report S3 url: ${lambda_report_s3_url}"
  echo "Lambda report destination folder: ${lambda_report_destination_folder}"
  mkdir "${lambda_report_destination_folder}"
  echo "Retrieving report from S3"
  aws s3 cp \
    "${lambda_report_s3_url}" \
    "${lambda_report_destination_folder}" \
    --region "${MASTER_AWS_REGION}"
  cd "${lambda_report_destination_folder}"
  echo "Unzipping the obtained report"
  unzip report.zip
  echo "Removing the report zip"
  rm -rf report.zip
}

echo "Set-up for Static Analysis script started"
echo "Working directory: $(pwd)"
echo "Directory content:"
ls -la
echo "Config git for npm"
config_git_for_npm
echo "Create folder for unit testing reports"
unit_test_reports_folder=${WORKSPACE}/unit_test
mkdir "${unit_test_reports_folder}"
echo "Download unit test report for each lamdba function"
cd ./src/lambdas/
orig_folder=$(pwd)
for i in $(find $PWD -maxdepth 1 -mindepth 1 -type d)
do
  cd "${i}"
  lambda_name=$(basename $(pwd))
  download_unit_testing_report "${lambda_name}" "${unit_test_reports_folder}"
  cd "${orig_folder}"
done
echo "Set-up for Static Analysis script completed"
