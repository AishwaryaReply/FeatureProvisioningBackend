import troposphere


class TroposphereTagsHelper:
    """
    It ease creation of troposhere tags starting
    from python dictionaries.
    """
    def __init__(self, tags_dict=None):
        if tags_dict is None:
            tags_dict = dict()
        self.tags_dict = tags_dict.copy()

    def add(self, tags_dict):
        self.tags_dict.update(tags_dict)
        return self

    def create(self):
        return troposphere.Tags(**self.tags_dict)


class ResourceInfo(object):
    def __init__(self, code, template_logical_id):
        self.code = code
        self.template_logical_id = template_logical_id

class LambdaFunctionInfo(ResourceInfo):

    def __init__(self, code, name): 
        self.name = name
        super().__init__(code, f'LambdaFunction{code}{name}')
    

    def generate_function_name(self, base_name, name):
        """util function to generate the name of a lambda function according to the naming convention"""
        return troposphere.Join('', [base_name, f'_{self.code}-{name}'])
    

    def generate_api_gateway_permission_info(self, name=None, cross_account=False):
        """Generates the permission info by default for a same account invocation,
            if cross_account flag is overriden with True then it generates a cross account permission"""
        if name is None:
            name = self.name
        suffix = 'CrossAccountPermission' if cross_account else 'Permission'
        return ResourceInfo(
            code=self.code,
            template_logical_id=f'LambdaFunction{self.code}{name}{suffix}'
        )


    def generate_api_gateway_cross_account_permission_info(self, name=None):
        return self.generate_api_gateway_permission_info(name, cross_account=True)
