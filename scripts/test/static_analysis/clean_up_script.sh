#!/usr/bin/env bash
echo "DEBUG: environment variables"
printenv

set -e

function remove_lambda_dependencies {
  lambda_name=${1}
  echo "Working on lambda: ${lambda_name}"
  if [[ -d "node_modules" ]]
  then
    echo "node_modules directory found"
    rm -rf node_modules
    echo "node_modules directory removed"
  else
    echo "node_modules directory not found, skipping"
  fi
}

echo "Clean-up for Static Analysis script started"
echo "Working directory: $(pwd)"
echo "Directory content:"
ls -la
echo "Remove all dependencies for each lamdba function"
cd ./src/lambdas/
orig_folder=$(pwd)
for i in $(find $PWD -maxdepth 1 -mindepth 1 -type d)
do
  cd ${i}
  lambda_name=$(basename $(pwd))
  remove_lambda_dependencies ${lambda_name}
  cd ${orig_folder}
done
echo "Remove all unit-testing reports"
rm -rf ${WORKSPACE}/unit-test
echo "Clean-up for Static Analysis script completed"
