#!/usr/bin/env bash
echo "DEBUG: environment variables"
printenv

set -e

repository_name=${REPOSITORY_NAME}
commit_hash=${GIT_COMMIT}
package_region=${PACKAGE_REGION}
package_bucket=${PACKAGE_BUCKET}

echo "Package script started for commit: ${commit_hash}, region: ${package_region}"
echo "Working directory: $(pwd)"
echo "Directory content:"
ls -la

echo "Create AWS CloudFormation packages"
cd ./cloudformation/template
mkdir ${package_region}
ls -la
# using different names for sdpr and env variables to avoid
# copy-paste which do not include the assignment resulting
# in resource deployed in different account!
template_file_name_sdpr=infrastructure-SDPR.yaml
if [ -f "${template_file_name_sdpr}" ]
then
  echo "SDPR Package"
  aws cloudformation package \
    --template-file ${template_file_name_sdpr} \
    --s3-bucket ${package_bucket} \
    --s3-prefix ${repository_name}/artifacts \
    --output-template-file ./${package_region}/${template_file_name_sdpr} \
    --region ${PACKAGE_REGION} >> /dev/null
  echo "Upload created cloudformation packages on S3 bucket: ${package_bucket}"
  echo "SDPR Package"
  aws s3 cp ${package_region}/${template_file_name_sdpr} \
    s3://${package_bucket}/${repository_name}/templates/${commit_hash}/ \
    --region ${PACKAGE_REGION}
  
fi
template_file_name_fcl=infrastructure-FCL.yaml
if [ -f "${template_file_name_fcl}" ]
then
  echo "FCL Package"
  aws cloudformation package \
    --template-file ${template_file_name_fcl} \
    --s3-bucket ${package_bucket} \
    --s3-prefix ${repository_name}/artifacts \
    --output-template-file ./${package_region}/${template_file_name_fcl} \
    --region ${PACKAGE_REGION} >> /dev/null
  echo "Upload created cloudformation packages on S3 bucket: ${package_bucket}"
  echo "FCL Package"
  aws s3 cp ${package_region}/${template_file_name_fcl} \
    s3://${package_bucket}/${repository_name}/templates/${commit_hash}/ \
    --region ${PACKAGE_REGION}
fi

echo "Package script completed"
