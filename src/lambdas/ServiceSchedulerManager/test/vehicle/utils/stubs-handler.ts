import { DataModels } from "../../../src/interfaces";
import { UtilityObjects, GCVErrors } from 'gcv-utils';

export namespace stubsHandler { 

    //getVehicleParams
    export const mockInputEventPostVehicleByID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle\/{vin}',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventDeleteVehicleByID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle\/{vin}',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventInvalidHTTPMethodPut: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle\/{vin}',
            httpMethod: 'PUT'
        }
    }

    export const mockInputEventPostVehicleBySearch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventDeleteVehicleBySearch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventGetVehicleBySearch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'GET'
        }
    }

    export const mockInputEventInvalidHTTPMethodPatch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: { 
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
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
            httpMethod: 'POST'
        }
    }
   
}