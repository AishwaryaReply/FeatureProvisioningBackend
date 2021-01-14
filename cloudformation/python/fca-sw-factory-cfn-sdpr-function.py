import os
import troposphere
from troposphere import (
    Parameter,
    FindInMap,
    Ref,
    Join,
    GetAtt,
)
from troposphere.awslambda import (
    VPCConfig,
)
from troposphere.serverless import Function
from troposphere.awslambda import Environment as LambdaEnvironment
from troposphere.awslambda import Permission as LambdaPermission
from troposphere.iam import Role, ManagedPolicy
from troposphere.dynamodb import Table, AttributeDefinition, KeySchema, ProvisionedThroughput
from component_info import (
    base_info,
    service_scheduler_manager_lambda_function_info,
    global_policy_for_lambda_function_execution_iam_policy_info,
    lambda_function_execution_role_iam_role_info,
    service_scheduler_manager_lambda_permission_info,
    specific_policy_for_lambda_function_execution_iam_policy_info,
    available_aws_regions,
    available_environments
)
import version
from policies import global_policy_document, assume_role_policy_document

# 1. Template definition
# 1.1. Descriptions
description = version.DESCRIPTION
short_description = version.SHORT_DESCRIPTION
template = troposphere.Template(
    Description=f'FCA SW Factory - Connectivity Project - Function Template - Description: {description}'
)

# 1.2. Transformation
template.set_transform('AWS::Serverless-2016-10-31')

# 1.3. Parameters
parameters = dict()
parameters['env'] = Parameter(
    '0001ParamEnvironment',
    Type='String',
    AllowedValues=['dev', 'int', 'prep', 'prod'],
    ConstraintDescription='One value of [\'dev\', \'int\', \'prep\', \'prod\']',
    Description='Name of the Environment')
parameters['project_name'] = Parameter(
    '0002ParamProjectName',
    Type='String',
    Default=base_info['Project Name'],
    Description='Name of the Project')
parameters['project_component'] = Parameter(
    '0003ParamProjectComponent',
    Type='String',
    Default=base_info['Project Component'],
    Description='Name of the Component')
parameters['feature_name'] = Parameter(
    '0004ParamFeatureName',
    Type='String',
    Default=base_info['Feature Name'],
    Description='Name of the Feature')
parameters['feature_code'] = Parameter(
    '0005ParamFeatureCode',
    Type='String',
    Default=base_info['Feature Code'],
    Description='Feature Code for this feature')
parameters['lambda_layer_arn'] = Parameter(
    '0006ParamLambdaTracerLayer',
    Type='String',
    Description='Lambda layer to attach to the lambda functions')
parameters['multichannels_api_id'] = Parameter(
    '0201ParamMultichannelsApiID',
    Type='String',
    Description='Existing API used by Web and Mobile App where new Schedule resource is added')
parameters['multichannels_api_account_id'] = Parameter(
    '0202ParamMultichannelsAPIAccountID',
    Type='String',
    Description='AWS Account id in which the applicative api is deployed')
parameters['subnet_id_list_lambda'] = Parameter(
    '0301ParamLambdaSubnetIdList',
    Type='List<AWS::EC2::Subnet::Id>',
    Description='Comma Separated List of VPC Subnets in the above VPC for Lambda functions')
parameters['securitygroup_id_list_lambda'] = Parameter(
    '0302ParamLambdaSecuritygroupIdList',
    Type='List<AWS::EC2::SecurityGroup::Id>',
    Description='Comma Separated List of VPC security group ID in the above VPC for Lambda functions')
# 1.3.X Add all created parameters in template
for parameter in parameters.values():
    template.add_parameter(parameter)

# 1.4. Mapping
mappings = dict()
mappings['EnvRegionIndexMap'] = {
    aws_region: {
        environment: f'{environment}-{aws_region}'
        for environment in available_environments
    }
    for aws_region in available_aws_regions
}
# The list of models to exclude is provided as environment variable
# in particular the format of the expexted variable is '<model_1>#<model_2>#<model_n>
mappings['EnvRegionMap'] = {
    'dev-eu-west-1': {
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Memory': '128',
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Timeout': '15',
        'logLevel': 'debug',
    },
    'int-eu-west-1': {
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Memory': '128',
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Timeout': '15',
        'logLevel': 'debug',
    },
    'prep-eu-west-1': {
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Memory': '512',
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Timeout': '15',
        'logLevel': 'debug',
    },
    'prod-eu-west-1': {
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Memory': '512',
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Timeout': '15',
        'logLevel': 'debug',
    },
    'dev-us-east-1': {
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Memory': '128',
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Timeout': '15',
        'logLevel': 'debug',
    },
    'int-us-east-1': {
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Memory': '128',
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Timeout': '15',
        'logLevel': 'debug',
    },
    'prep-us-east-1': {
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Memory': '512',
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Timeout': '15',
        'logLevel': 'debug',
    },
    'prod-us-east-1': {
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Memory': '512',
        f'{service_scheduler_manager_lambda_function_info.template_logical_id}Timeout': '15',
        'logLevel': 'debug',
    }
}
# util function to extract values from the EnvRegionMap
def get_value_from_env_region_map_by_key(key):
  return FindInMap('EnvRegionMap', 
                  FindInMap('EnvRegionIndexMap', 
                            Ref(troposphere.AWS_REGION), 
                            Ref(parameters['env'])), 
                  key)

# 1.4.X Add all created mappings in template
for mapping_name, mapping in mappings.items():
    template.add_mapping(mapping_name, mapping)

# 1.5. Resources
resources = dict()

tags = base_info
tags['AWS Region'] = Ref(troposphere.AWS_REGION)
tags['Environment'] = Ref(parameters['env'])
tags['Project Name'] = Ref(parameters['project_name'])
tags['Project Component'] = Ref(parameters['project_component'])
tags['Feature Name'] = Ref(parameters['feature_name'])
tags['Feature Code'] = Ref(parameters['feature_code'])

base_name = Join("_", [
    Ref(parameters['project_component']),
    Ref(parameters['feature_code']),
    Ref(parameters['env']),
    Ref(troposphere.AWS_REGION)
])

# 1.5.1 Lambda Execution Role
resources[global_policy_for_lambda_function_execution_iam_policy_info.template_logical_id] = ManagedPolicy(
    global_policy_for_lambda_function_execution_iam_policy_info.template_logical_id,
    ManagedPolicyName=Join("", [base_name, "_{code}-global-policy".format(
        code=global_policy_for_lambda_function_execution_iam_policy_info.code)]),
    Description='This policy contains all permissions written in inline policy named '
                '"gcv-d-sdpr-lmb-ro-send-command-policypermissions" attached to role created by TCS named '
                '"gcv-lambda-RO-role"',
    PolicyDocument=global_policy_document
)
resources[specific_policy_for_lambda_function_execution_iam_policy_info.template_logical_id] = ManagedPolicy(
    specific_policy_for_lambda_function_execution_iam_policy_info.template_logical_id,
    ManagedPolicyName=Join('', [base_name, '_{code}-specific-policy'.format(
        code=specific_policy_for_lambda_function_execution_iam_policy_info.code)]),
    Description='This policy contains all specific permissions needed to lambda of Service Scheduler',
    PolicyDocument={
        'Version': '2012-10-17',
        'Statement': [
            {
                'Sid': 'GetSecret',
                'Effect': 'Allow',
                'Action': [
                    'secretsmanager:GetSecretValue'
                ],
                'Resource': [
                    {'Fn::Sub': 'arn:aws:secretsmanager:${AWS::Region}:${AWS::AccountId}:secret:GCV_MELD*'}
                ]
            }
        ]
    }
)
resources[lambda_function_execution_role_iam_role_info.template_logical_id] = Role(
    lambda_function_execution_role_iam_role_info.template_logical_id,
    RoleName=Join("", [base_name, "_{code}-role-for-lambda-functions".format(
        code=lambda_function_execution_role_iam_role_info.code)]),
    AssumeRolePolicyDocument=assume_role_policy_document,
    Path='/',
    ManagedPolicyArns=[
        Ref(resources[global_policy_for_lambda_function_execution_iam_policy_info.template_logical_id]),
        Ref(resources[specific_policy_for_lambda_function_execution_iam_policy_info.template_logical_id])
    ],
)

global_lambda_vpc_config = VPCConfig(
    SecurityGroupIds=Ref(parameters['securitygroup_id_list_lambda']),
    SubnetIds=Ref(parameters['subnet_id_list_lambda'])
)

# 1.5.2 ServiceSchedulerManager lambda
resources[service_scheduler_manager_lambda_function_info.template_logical_id] = Function(
    service_scheduler_manager_lambda_function_info.template_logical_id,
    FunctionName=service_scheduler_manager_lambda_function_info.generate_function_name(base_name, 'service-scheduler-manager'),
    CodeUri="../../src/lambdas/ServiceSchedulerManager/dist",
    Handler='src/handler.handler',
    Runtime="nodejs10.x",
    Layers=[Ref(parameters['lambda_layer_arn'])],
    AutoPublishAlias="gsdp",
    Description="Service Scheduler Manager"
                "- version:{}".format(short_description),
    MemorySize=get_value_from_env_region_map_by_key(f'{service_scheduler_manager_lambda_function_info.template_logical_id}Memory'),
    Timeout=get_value_from_env_region_map_by_key(f'{service_scheduler_manager_lambda_function_info.template_logical_id}Timeout'),
    Environment=LambdaEnvironment(
        Variables={
            'stage': Ref(parameters['env']),
            'logLevel': get_value_from_env_region_map_by_key('logLevel')
        }
    ),
    Role=GetAtt(resources[lambda_function_execution_role_iam_role_info.template_logical_id], "Arn"),
    Tags=tags,
    VpcConfig=global_lambda_vpc_config,
)

resources[service_scheduler_manager_lambda_permission_info.template_logical_id] = LambdaPermission(
    service_scheduler_manager_lambda_permission_info.template_logical_id,
    Action='lambda:InvokeFunction',
    FunctionName=Join(':', [GetAtt(
        resources[service_scheduler_manager_lambda_function_info.template_logical_id], "Arn"), 'gsdp']),
    Principal="apigateway.amazonaws.com",
    SourceArn=Join(
        '',
        [
            'arn:aws:execute-api:',
            Ref(troposphere.AWS_REGION),
            ':',
            Ref(parameters['multichannels_api_account_id']),
            ':',
            Ref(parameters['multichannels_api_id']),
            '/*'
        ]),
    DependsOn=[
        # the alias resource is created automatically by SAM since
        # in lambda definition we use attribute "AutoPublishAlias"
        "{lambda_function}Alias{alias_name}".format(
            lambda_function=service_scheduler_manager_lambda_function_info.template_logical_id,
            alias_name="gsdp")
    ]
)

# 1.5.X Add all created resources in template
for resource in resources.values():
    template.add_resource(resource)

# 2. Template compiling
template_path = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    os.pardir,
    'template',
    'infrastructure-SDPR.yaml')
with open(template_path, 'w+') as f:
    f.write(template.to_yaml())
print(f'Template available at:{template_path}')