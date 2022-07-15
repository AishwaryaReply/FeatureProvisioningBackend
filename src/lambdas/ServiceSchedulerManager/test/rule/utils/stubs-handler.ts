import { DataModels } from "../../../src/interfaces";
import { UtilityObjects } from 'gcv-utils';

export namespace stubsHandler { 

    //getRuleParams
    export const mockInputEventGetRule: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'GET'
        }
    }

    export const mockInputEventPostRule: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventDeleteRuleByID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule\/{id}',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventDeleteRuleBySearch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventInvalidHTTPMethodPutRule: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'PUT'
        }
    }

    export const mockInputEventInvalidPostRule: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventInvalidGetRule: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'GET'
        }
    }

    export const mockInputEventInvalidHTTPMethodPatchRule: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'PATCH'
        }
    }

    export const mockInputEventInvalidHTTPMethodResourcePath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'PATCH'
        }
    }

    export const mockInputEventInvalidResourcePath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'POST'
        }
    }




    export const mockOutputRuleSearchList: DataModels.RuleSearchListData  = {
        requestedService: 'RULE_SEARCH_LIST',
        code: "XXX"
    }

    export const mockOutputRuleSearchListInvalid: DataModels.RuleSearchListData  = {
        requestedService: 'RULE_DELETE',
        code: "XXX"
    }

    export const mockOutputRuleSearchListSpecialChar: DataModels.RuleSearchListData  = {
        requestedService: 'RULE_SEARCH_LIST',
        code: "@#$%"
    }

    export const mockInputRuleSearchList: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'GET'
        },
        pathParams: {
            code: "XXX"
        }
    }

    export const mockInputRuleSearchListInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'GET'
        },
        pathParams: {
            code: "XXX"
        }
    }

    export const mockOutputRuleDeleteBySearch: DataModels.RuleDeleteData  = {
        requestedService: 'RULE_DELETE',
        cfeature: "XXX",
        irule: 123
    }

    export const mockOutputRuleDeleteBySearchInvalid: DataModels.RuleDeleteData  = {
        requestedService: 'RULE_CREATE',
        cfeature: "XXX",
        irule: 123
    }

    export const mockOutputRuleDeleteBySearchNumerics: DataModels.RuleDeleteData  = {
        requestedService: 'RULE_DELETE',
        cfeature: "123",
        irule: 123
    }

    export const mockInputRuleDeleteBySearch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'DELETE'
        },
        pathParams: {
            code: "XXX",
            id: 123
        }
    }

    export const mockInputRuleDeleteBySearchInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'DELETE'
        },
        pathParams: {
            code: "XXX",
            id: 123
        }
    }

    export const mockOutputRuleDeleteById: DataModels.RuleDeleteData  = {
        requestedService: 'RULE_DELETE',
        cfeature: "XXX",
        irule: 123
    }

    export const mockOutputRuleDeleteByIdInvalid: DataModels.RuleDeleteData  = {
        requestedService: 'RULE_CREATE',
        cfeature: "XXX",
        irule: 123
    }

    export const mockOutputRuleDeleteByIdNumerics: DataModels.RuleDeleteData  = {
        requestedService: 'RULE_DELETE',
        cfeature: "123",
        irule: 123
    }

    export const mockInputRuleDeleteById: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule\/{id}',
            httpMethod: 'DELETE'
        },
        pathParams: {
            code: "XXX",
            id: 123
        }
    }

    export const mockInputRuleDeleteByIdInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'DELETE'
        },
        pathParams: {
            code: "XXX",
            id: 123
        }
    }

    export const mockOutputRuleCreate: DataModels.RuleCreateData = {
        requestedService: 'RULE_CREATE',
        igroup: "XXX",
        cfeature : "XXX",
        cregion: "XXX",
        cmarket:"XXX",
        cbrand: "XXX",
        cmodel: "XXX",
        imodelyear: "XXX",
        cservice: "XXX"
    }

    export const mockOutputRuleCreateInvalid: DataModels.RuleCreateData = {
        requestedService: 'RULE_DELETE',
        igroup: "XXX",
        cfeature : "XXX",
        cregion: "XXX",
        cmarket:"XXX",
        cbrand: "XXX",
        cmodel: "XXX",
        imodelyear: "XXX",
        cservice: "XXX"
    }

    export const mockOutputRuleCreateSpecialChar: DataModels.RuleCreateData = {
        requestedService: 'RULE_CREATE',
        igroup: "@#$%",
        cfeature : "@#$%",
        cregion: "@#$%",
        cmarket:"@#$%",
        cbrand: "@#$%",
        cmodel: "@#$%",
        imodelyear: "@#$%",
        cservice: "@#$%"
    }

    export const mockInputRuleCreate: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'POST'
        },
        pathParams: {
            code: "XXX",
            body: {
                region: "XXX",
                brand: "XXX",
                market: "XXX",
                model: "XXX",
                service: "XXX",
                modelYear: "XXX"
            },
        }
    }

    export const mockInputRuleCreateInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'POST'
        },
        pathParams: {
            code: "XXX",
            body: {
                region: "XXX",
                brand: "XXX",
                market: "XXX",
                model: "XXX",
                service: "XXX",
                modelYear: "XXX"
            },
        }
    }
}