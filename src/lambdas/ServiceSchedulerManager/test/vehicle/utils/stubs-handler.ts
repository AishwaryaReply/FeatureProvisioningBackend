import { DataModels } from "../../../src/interfaces";
import { UtilityObjects } from 'gcv-utils';

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




    export const mockOutputVehicleCreateById: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_CREATE',
        id: "XXX",
        vin: "XXX"
    }
    
    export const mockOutputVehicleCreateByIdInvalid: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_DELETE',
        id: "XXX",
        vin: "XXX"
    }

    export const mockOutputVehicleCreateByIdSpecialChar: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_CREATE',
        id: "@#$%",
        vin: "@#$%"
    }
    export const mockInputVehicleCreateById: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:  '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'POST'
        },
        pathParams: {
            id: "XXX",
            vin: "XXX"
        }
    }

    export const mockInputVehicleCreateByIdInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:  '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'POST'
        },
        pathParams: {
            id: "XXX",
            vin: "XXX"
        }
    }

    export const mockOutputVehicleCreateByVin: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_CREATE',
        id: "XXX",
        vin: "XXX"
    }
    
    export const mockOutputVehicleCreateByVinInvalid: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_DELETE',
        id: "XXX",
        vin: "XXX"
    }

    export const mockOutputVehicleCreateByVinSpecialChar: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_CREATE',
        id: "@#$%",
        vin: "@#$%"
    }
    export const mockInputVehicleCreateByVin: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:  '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle\/{vin}',
            httpMethod: 'POST'
        },
        pathParams: {
            id: "XXX",
            vin: "XXX"
        }
    }

    export const mockInputVehicleCreateByVinInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:  '^\/v[1-9][0-9]*\/featureProvisioning\/feature',
            httpMethod: 'POST'
        },
        pathParams: {
            id: "XXX",
            vin: "XXX"
        }
    }

    export const mockOutputVehicleSearchList: DataModels.VehicleSearchListData= {
        requestedService: 'VEHICLE_SEARCH_LIST',
        id: "XXX"
    }

    export const mockOutputVehicleSearchListSpecialchar: DataModels.VehicleSearchListData= {
        requestedService: 'VEHICLE_SEARCH_LIST',
        id: "@#$%"
    }


    export const mockOutputVehicleSearchListInvalid: DataModels.VehicleSearchListData= {
        requestedService: 'VEHICLE_DELETE',
        id: "XXX"
    }

    export const mockInputVehicleSearchList: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:  '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'GET'
        },
        pathParams: {
            id: "XXX"        
	    }
    }

    export const mockInputVehicleSearchListInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:  '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle\/{vin}',
            httpMethod: 'GET'
        },
        pathParams: {
            id: "XXX"        
	    }
    }

    export const mockOutputVehicleDeleteById: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_DELETE',
        id: "XXX",
        vin: "XXX",

    }

    export const mockOutputVehicleDeleteByIdSpecialChar: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_DELETE',
        id: "@#$%",
        vin: "@#$%",

    }

    export const mockOutputVehicleDeleteByIdInvalid: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_CREATE',
        id: "XXX",
        vin: "XXX",

    }


    export const mockInputVehicleDeleteById: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:  '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'DELETE'
        },
        pathParams: {
            id: "XXX",
            vin: "XXX",

	    }
    }

    export const mockInputVehicleDeleteByIdInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:  '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle\/{vin}',
            httpMethod: 'DELETE'
        },
        pathParams: {
            id: "XXX",
            vin: "XXX",

	    }
    }

    export const mockOutputVehicleDeleteByVin: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_DELETE',
        id: "XXX",
        vin: "XXX",

    }

    export const mockOutputVehicleDeleteSpecialCharByVin: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_DELETE',
        id: "@#$%",
        vin: "@#$%",

    }

    export const mockOutputVehicleDeleteInvalidByVin: DataModels.VehicleCreateDeleteData= {
        requestedService: 'VEHICLE_CREATE',
        id: "XXX",
        vin: "XXX",

    }


    export const mockInputVehicleDeleteByVin: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:   '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle\/{vin}',
            httpMethod: 'DELETE'
        },
        pathParams: {
            id: "XXX",
            vin: "XXX",

	    }
    }

    export const mockInputVehicleDeleteByVinInvalidPath: UtilityObjects.TransformedInputEvent = {
        runTimeInfo: {
            resourcePath:    '^\/v[1-9][0-9]*\/featureProvisioning\/vehicleGroup\/{id}\/vehicle',
            httpMethod: 'DELETE'
        },
        pathParams: {
            id: "XXX",
            vin: "XXX",

	    }
    }
   
}