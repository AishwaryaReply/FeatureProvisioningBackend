def storePipelineParameters(store) {
  try {
    store.EXECUTE_UNIT_TESTING = env.EXECUTE_UNIT_TESTING
    store.EXECUTE_STATIC_ANALYSIS = env.EXECUTE_STATIC_ANALYSIS
    store.DEPLOY_INT = env.DEPLOY_INT
    store.DEPLOY_PREP = env.DEPLOY_PREP
    store.DEPLOY_PROD = env.DEPLOY_PROD
  } catch(Exception ex) {
     println("Exception in storing pipeline parameters: ${ex}");
  }
}

return this