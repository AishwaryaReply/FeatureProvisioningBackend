import { DataModels } from "../../../src/interfaces";
import { UtilityObjects, GCVErrors } from 'gcv-utils';

export namespace stubsHandler { 

    //getVehicleParams
    export const mockInputEventPostVehicleByIDVin: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle\/{vin}',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventDeleteVehicleByIDVin: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle\/{vin}',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventInvalidHTTPMethodPutByIDVin: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle\/{vin}',
            httpMethod: 'PUT'
        }
    }

    export const mockInputEventPostVehicleByID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventDeleteVehicleByID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventInvalidDeleteVehicleByID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventGetVehicleByID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'GET'
        }
    }

    export const mockInputEventInvalidGetVehicleByID: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'GET'
        }
    }

    export const mockInputEventInvalidHTTPMethodPatchByID: UtilityObjects.TransformedInputEvent = {
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