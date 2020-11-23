from troposphere_helpers import ResourceInfo, LambdaFunctionInfo

# BASE INFO: base_info contains information related to entire stack
base_info = {
    'Feature Name': 'ServiceScheduling',
    'Feature Code': 'SSC',
    'Project Name': 'GSDP',
    'Project Component': 'SDPR',
    'Company': 'FCA-EMEA',
    'Owner': 'SOFTWARE-FACTORY-TEAM',
    'Type': 'Feature',
    'Business Unit': 'MOPAR and Connected Vehicle Program',
    'Category': 'Application',
    'Cloud Provider': 'AWS-FCA',
}

# RESOURCES INFO: here are reported in standard format information related to single resources
# LAMBDA FUNCTIONS
service_scheduling_manager_lambda_function_info = LambdaFunctionInfo(
    code='SC001',
    name='ServiceSchedulingManager',
)
service_scheduling_manager_lambda_permission_info = service_scheduling_manager_lambda_function_info.generate_api_gateway_permission_info()

# POLICIES
global_policy_for_lambda_function_execution_iam_policy_info = ResourceInfo(
    code='SC001',
    template_logical_id='IamPolicySC001GlobalPolicyForLambdaFunctionExecution',
)
specific_policy_for_lambda_function_execution_iam_policy_info = ResourceInfo(
    code='SC001',
    template_logical_id='IamPolicySC001SpecificPolicyForLambdaFunctionExecution',
)

# IAM ROLES
lambda_function_execution_role_iam_role_info = ResourceInfo(
    code='SC001',
    template_logical_id='IamRoleSC001RoleForLambdaFunctionExecution',
)

# Extra infos
available_environments = [
    'dev',
    'int',
    'prep',
    'prod',
]
available_aws_regions = [
    'eu-west-1',
    'us-east-1'
]