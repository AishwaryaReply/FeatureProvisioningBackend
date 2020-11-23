#!/usr/bin/env bash
echo "DEBUG: environment variables"
printenv

set -e

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

function build_lambda {
  lambda_name=${1}
  echo "Building lambda: ${lambda_name}"
  if [[ -f "package.json" ]]
  then
    echo "package.json file found"
    npm ci --prefer-offline --no-audit --progress=false
    npm run-script build
    npm prune --no-audit --progress=false --production
    cp -r node_modules dist/
  else
    echo "package.json file not found, skipping"
  fi
}

echo "Build script started"
echo "Working directory: $(pwd)"
echo "Directory content:"

REPO_BASE_URL=$(echo "${GIT_URL}" | sed 's/\.git$//1')
REPO_FULL_URL="${REPO_BASE_URL}/tree/${GIT_COMMIT}"
echo "SHORT_DESCRIPTION=\"${REPO_FULL_URL}\"" > ./cloudformation/python/version.py
echo "DESCRIPTION=\"GIT:${REPO_FULL_URL} Jenkins_Build_URL:${BUILD_URL} Jenkins_Job:${JOB_NAME} Jenkins_Build_Number:${BUILD_NUMBER}\"" >> ./cloudformation/python/version.py

echo "Create Cloudformation templates"
sdpr_template_path='./cloudformation/python/fca-sw-factory-cfn-sdpr-function.py'
fcl_template_path='./cloudformation/python/fca-sw-factory-cfn-fcl-function.py'
if [ -f "${sdpr_template_path}" ]
then
  echo "SDPR template"
  python ${sdpr_template_path}
fi
if [ -f "${fcl_template_path}" ]
then
  echo "FCL template"
  python ${fcl_template_path}
fi

if [ -d 'api' ]
then
  echo "Escaping swaggers keywords"
  cd api
  chmod +x ../scripts/build/process-swagger.sh
  ../scripts/build/process-swagger.sh
  cd ..
else
  echo "No swaggers to process"
fi

echo "Config git for npm"
config_git_for_npm

echo "Build every function code with npm"
cd ./src/lambdas/
orig_folder=$(pwd)
for i in $(find $PWD -maxdepth 1 -mindepth 1 -type d)
do
  cd ${i}
  lambda_name=$(basename $(pwd))
  build_lambda ${lambda_name}
  cd ${orig_folder}
done

echo "Build script completed"
