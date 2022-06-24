import { DataModels } from "../../../src/interfaces";
import { UtilityObjects, GCVErrors } from 'gcv-utils';

export namespace stubsHandler { 

    //getVehicleParams
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









   

    export const mockInputEventDelete: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule\/{id}',
            httpMethod: 'DELETE'
        }
    }

    export const mockInputEventInvalidHTTPMethodPut: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'PUT'
        }
    }

    export const mockInputEventInvalidPost: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'POST'
        }
    }

    export const mockInputEventInvalidGet: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'GET'
        }
    }

    export const mockInputEventInvalidHTTPMethodPatch: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath: '^\/v[1-9][0-9]*\/featureProvisioning\/feature\/{code}\/rule',
            httpMethod: 'PATCH'
        }
    }
}