// GLOBAL
// environment variables that must be available in all stages
def loadEnvVariablesGlobal() {
  env.REPOSITORY_NAME = 'SDPR_S-service-shceduler'
  env.PROJECT_NAME = 'GSDP'
  env.PROJECT_COMPONENT = 'SDPR'
  env.FEATURE_NAME = 'ServiceScheduler'
  env.NORMALIZED_FEATURE_NAME = 'servicescheduler'
  env.FEATURE_CODE = 'SSC'
  env.MASTER_AWS_REGION = 'eu-west-1'
  env.MASTER_S3_BUCKET = 'gcv-s3tc-eu-west-1'
}
// TEST
// unit testing environment variables
def loadUnitTestingEnvVariables() {
  env.REPORT_BUCKET = "${MASTER_S3_BUCKET}"
}
// static analysis environment variables
def loadStaticAnalysisEnvVariables() {
  env.NODE_PATH = "/usr/lib/node_modules"
  env.REPORT_BUCKET = "${MASTER_S3_BUCKET}"
  env.SCANNER_HOME = tool 'sonarqube-nafta'
  env.SCANNER_PROJECT = "${REPOSITORY_NAME}"
  env.SCANNER_PROJECT_VERSION = "${GIT_COMMIT}"
  env.SCANNER_PROJECT_KEY = "${REPOSITORY_NAME}"
  env.SCANNER_PROJECT_ORGANIZATION = "${PROJECT_COMPONENT}"
  env.SCANNER_REPORTS_PATH = "test-reports/sonarqube"
  env.SCANNER_PROJECT_SOURCES = "${WORKSPACE}/src/lambdas/ServiceSchedulerManager/src"
  env.SCANNER_PROJECT_UNIT_TEST = "${WORKSPACE}/src/lambdas/ServiceSchedulerManager/test"
  env.SCANNER_UNIT_TEST_COVERAGE = "${WORKSPACE}/unit_test/ServiceSchedulerManager/coverage/lcov.info"
}
// BUILD
// environment variables
def loadBuildEnvVariables() {
  env.GIT_SSL_NO_VERIFY = 'true'
  env.PYTHON_VIRTUALENV_NAME = "env-${GIT_COMMIT}"
}

return this