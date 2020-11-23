#!/usr/bin/env bash

# This script executes the following actions:
# - "evaluate" the pseudo-swagger available at the provided path
#   substituting the environment variables
# - update the remote API with put-rest-api command
# - deploy the updated API on the correct stage
#
# Environment Variables used directly in this script:
# - PSEUDO_SWAGGER_FILE_NAME
# - DEPLOY_REGION
# - API_ID
# - API_GW_STAGE_NAME
# - GIT_COMMIT
# Note: there are other environment variables directly used in the pseudo-swagger, look at it
# to discover them
echo "DEBUG: environment variables"
printenv

set -e
echo "API Deploy script started"
echo "Working directory: $(pwd)"
echo "This script deploys swagger on the existing API Gateway"

echo "Create swagger to deploy evaluating input pseudo-swagger"
eval "cat <<EOF
$(<./api/"${PSEUDO_SWAGGER_FILE_NAME}")
EOF
" >./api/swagger-api.json 2> /dev/null

echo "Below the swagger that will be deployed"
cat ./api/swagger-api.json

if [[ -f "./api/swagger-api.json" ]]; then
  echo "Push swagger into API gateway"
  aws \
    --region="${DEPLOY_REGION}" \
    apigateway \
    put-rest-api \
    --rest-api-id="${API_ID}" \
    --body "file://$(pwd)/api/swagger-api.json"


  echo "Start API Gateway deployment"
  aws \
    --region="${DEPLOY_REGION}" \
    apigateway \
    create-deployment \
    --rest-api-id="${API_ID}" \
    --stage-name="${API_GW_STAGE_NAME}" \
    --description="${GIT_COMMIT}"

  echo "API Deploy script completed"
else
  echo "No Swagger to deploy"
fi