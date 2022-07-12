import { DataModels } from "../../../src/interfaces";
import { UtilityObjects, GCVErrors } from 'gcv-utils';

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

    export const mockOutputRuleSearchListSpecialChar: DataModels.RuleSearchListData  = {
        requestedService: 'RULE_SEARCH_LIST',
        code: "@#$%"
    }

    export const mockInputRuleSearchList: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'GET'
        },
        queryString: {
            code: "XXX"
        }
    }

    export const mockOutputRuleDeleteBySearch: DataModels.RuleDeleteData  = {
        requestedService: 'RULE_DELETE',
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
        queryString: {
            code: "XXX",
            id: 123
        }
    }
}