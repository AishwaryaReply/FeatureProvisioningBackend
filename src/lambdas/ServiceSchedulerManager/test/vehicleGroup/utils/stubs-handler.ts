import { DataModels } from "../../../src/interfaces";
import { UtilityObjects, GCVErrors } from 'gcv-utils';

export namespace stubsHandler { 

    //getVehicleGroupParams
    export const mockInputEventPostVehicleGroupByCode: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/vehicleGroup\/{id}',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventInvalidPostVehicleGroupByCode: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/vehicleGroup\/{id}',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventDeleteVehicleGroupByCode: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/vehicleGroup\/{id}',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputInvalidEventDeleteVehicleGroupByCode: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/vehicleGroup\/{id}',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventInvalidHTTPMethodForCode: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/vehicleGroup\/{id}',
            httpMethod: 'GET'
        }
    }

    export const mockInputEventGetVehicleGroupBySearch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup',
            httpMethod: 'GET'
        }
    }

    export const mockInputEventPostVehicleGroupBySearch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventInvalidHTTPMethodForSearch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup',
            httpMethod: 'PUT'
        }
    }

    export const mockInputEventDeleteVehicleGroupByID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventPutVehicleGroupByID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}',
            httpMethod: 'PUT'
        }
    }

    export const mockInputEventInvalidHTTPMethodForID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}',
            httpMethod: 'PATCH'
        }
    }

    export const mockInputEventInvalidHTTPMethodResourcePath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'PATCH'
        }
    }

    export const mockInputEventInvalidResourcePath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'PUT'
        }
    }



    

    export const mockOutputVGSearchList: DataModels.VehicleGroupSearchListData = {
        requestedService: 'VEHICLEGROUP_SEARCH_LIST',
        feature: "XXX"
    }

    export const mockOutputVGSearchListSpecialChar: DataModels.VehicleGroupSearchListData = {
        requestedService: 'VEHICLEGROUP_SEARCH_LIST',
        feature: "@#$%"
    }

    export const mockInputVGSearchList: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:  '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup',
            httpMethod: 'GET'
        },
        queryString: {
            feature: "XXX"
        }
    }

    export const mockOutputVGCreate: DataModels.VehicleGroupCreateData= {
        requestedService: 'VEHICLEGROUP_CREATE',
        description: "XXX"
    }

    export const mockOutputVGCreateSpecialChar: DataModels.VehicleGroupCreateData = {
        requestedService: 'VEHICLEGROUP_CREATE',
        description: "@#$%"
    }

    export const mockInputVGCreate: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup',
            httpMethod: 'POST'
        },
        requestBody: {
            description: "XXX"
        }
    }

}