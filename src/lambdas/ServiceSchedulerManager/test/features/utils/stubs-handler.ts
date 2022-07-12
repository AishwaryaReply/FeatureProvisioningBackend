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

    export const mockOutputFeatureSearchListInvalid: DataModels.FeatureSearchListRequestData = {
        requestedService: 'FEATURE_CREATE',
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

    export const mockInputFeatureSearchListInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule\/{id}',
            httpMethod: 'GET'
        },
        queryString: {
            code: "XXX",
            description: "XXX",
            channel: "XXX"
        }
    }

    export const mockOutputFeatureCreate: DataModels.FeatureCreateData = {
        requestedService: 'FEATURE_CREATE',
        cfeature: "XXX",
        featureDescription: "XXX",
        cchannel: [{code: "XXX", description: "XXX"},
                   {code: "YYY", description: "YYY"}]
    }

    export const mockOutputFeatureCreateInvalid: DataModels.FeatureCreateData = {
        requestedService: 'FEATURE_SEARCH_LIST',
        cfeature: "XXX",
        featureDescription: "XXX",
        cchannel: [{code: "XXX", description: "XXX"},
                   {code: "YYY", description: "YYY"}]
    }

    export const mockOutputFeatureCreateSpecialChar: DataModels.FeatureCreateData = {
        requestedService: 'FEATURE_CREATE',
        cfeature: "@#$%",
        featureDescription: "@#$%",
        cchannel: [{code: "@#$%", description: "@#$%"},
                   {code: "$%#@", description: "$#%@"}]
    }

    export const mockInputFeatureCreate: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'POST'
        },
        requestBody: {
            code: "XXX",
            description: "XXX",
            channels: [{code: "@#$%", description: "@#$%"},
                       {code: "$%#@", description: "$#%@"}]
        }
    }

    export const mockInputFeatureCreateInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule\/{id}',
            httpMethod: 'POST'
        },
        requestBody: {
            code: "XXX",
            description: "XXX",
            channels: [{code: "@#$%", description: "@#$%"},
                       {code: "$%#@", description: "$#%@"}]
        }
    }

    export const mockOutputFeatureUpdate: DataModels.FeatureUpdateData  = {
        requestedService: 'FEATURE_UPDATE',
        cfeature: "XXX",
        featureDescription: "XXX",
        channels: [{code: "XXX", description: "XXX"},
                   {code: "YYY", description: "YYY"}]
    }

    export const mockOutputFeatureUpdateInvalid: DataModels.FeatureUpdateData  = {
        requestedService: 'FEATURE_CREATE',
        cfeature: "XXX",
        featureDescription: "XXX",
        channels: [{code: "XXX", description: "XXX"},
                   {code: "YYY", description: "YYY"}]
    }

    export const mockOutputFeatureUpdateSpecialChar: DataModels.FeatureUpdateData  = {
        requestedService: 'FEATURE_UPDATE',
        cfeature: "@#$%",
        featureDescription: "@#$%",
        channels: [{code: "@#$%", description: "@#$%"},
                   {code: "$%#@", description: "$#%@"}]
    }

    export const mockInputFeatureUpdate: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'PUT'
        },
        queryString: {
            code: "XXX",
            body: {
                description: "XXX",
                channels: [{code: "XXX", description: "XXX"},
                       {code: "YYY", description: "YYY"}]
            }
        }

    }

    export const mockInputFeatureUpdateinvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}',
            httpMethod: 'PUT'
        },
        pathParams: {
            code: "XXX",
            body: {
                description: "XXX",
                channels: [{code: "XXX", description: "XXX"},
                       {code: "YYY", description: "YYY"}]
            }
        }

    }

    export const mockOutputFeatureDeleteByCode: DataModels.FeatureDeleteData  = {
        requestedService: 'FEATURE_DELETE',
        cfeature: "XXX"
    }

    export const mockOutputFeatureDeleteByCodeSpecialChar: DataModels.FeatureDeleteData  = {
        requestedService: 'FEATURE_DELETE',
        cfeature: "@#$%"
    }

    export const mockInputFeatureDeleteByCode: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}',
            httpMethod: 'DELETE'
        },
        requestBody: {
            code: "XXX",
            description: "XXX",
            channels: [{code: "@#$%", description: "@#$%"},
                       {code: "$%#@", description: "$#%@"}]
        }
    }

    
    
}