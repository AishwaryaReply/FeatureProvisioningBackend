import { DataModels } from "../../../src/interfaces";
import { UtilityObjects, GCVErrors } from 'gcv-utils';

export namespace stubsHandler { 

    //getFeatureParams
    export const mockInputEventGetFeature: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'GET'
        }
    }

    export const mockInputEventGetInvalidPostFeature: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventInvalidHTTPMethod: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'PATCH'
        }
    }

    export const mockInputEventInvalidDeleteFeature: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}',
            httpMethod: 'DELETE'
        }
    }


    export const mockInputEventPostFeature: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventDeleteFeatureByCode: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventDeleteFeatureBySearch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventPutFeature: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'PUT'
        }
    }

    export const mockInputEventInvalidHTTPMethodResourcePath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule\/{id}',
            httpMethod: 'PATCH'
        }
    }

    export const mockInputEventInvalidResourcePath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule\/{id}',
            httpMethod: 'POST'
        }
    }

    export const mockOutputFeatureSearchList: DataModels.FeatureSearchListRequestData = {
        requestedService: 'FEATURE_SEARCH_LIST',
        cfeature: "XXX",
        featureDescription: "XXX",
        cchannel: "XXX"
    }

    export const mockOutputFeatureSearchListSpecialChar: DataModels.FeatureSearchListRequestData = {
        requestedService: 'FEATURE_SEARCH_LIST',
        cfeature: "@#$%",
        featureDescription: "@#$%",
        cchannel: "@#$%"
    }

    export const mockInputFeatureSearchList: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'GET'
        },
        queryString: {
            code: "XXX",
            description: "XXX",
            channel: "XXX"
        }
    }
    
}