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
}