import { DataModels } from "../../../src/interfaces";

export namespace Stubs {

    const TEST_DEALER_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHA6Ly9sb2NhbC9kZWFsZXItaWQiOjUxNTEsInVybjpkZng6YXBwOnRoZW1lIjoiZmNhIiwidXJuOmRmeDphcHA6Y3VsdHVyZSI6ImVuLXVzIiwiYXBwOi8vbG9jYWwvY2xpZW50LWFkZHJlc3MiOiIxMC4wLjAuMTU3IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDIwLTEyLTE2VDExOjE4OjQ2LjQyNTAxOTBaIiwidXJuOmFwcDphdXRoOmVuZHBvaW50IjoiaHR0cHM6Ly90ZXN0c2NoZWR1bGVyLmRlYWxlci1meC5jb20vIiwiYXBwOi8vbG9jYWwvZW5hYmxlLXBhY2thZ2VzIjoiRmFsc2UiLCJhcHA6Ly9sb2NhbC9kZWFsZXItdHoiOiJFYXN0ZXJuIFN0YW5kYXJkIFRpbWUiLCJhcHA6Ly9hdXRob3JpemF0aW9uL2FwcG9pbnRtZW50L3NlcnZpY2UtYWR2aXNvci9zZWxlY3Rpb24iOiJvbmxpbmUtb25seSIsImFwcDovL2F1dGhvcml6YXRpb24vc2VydmljZS1kZXBhcnRtZW50L3RpbWUtc2VnbWVudC9zZXJ2aWNlLW1lbWJlciI6Im9ubGluZS1vbmx5IiwibmJmIjoxNjA4MTE3NTI2LCJleHAiOjE2MDgyMDM5MjYsImlhdCI6MTYwODExNzUyNiwiaXNzIjoiT1NTIElkZW50aXR5IFByb3ZpZGVyIiwiYXVkIjoidXJuOm9zcyJ9.exPdtlz8wL63I4MiKdV3zExcolcLJmxd7X2HAprnawGMF4apY0X_iZeB60WBWX2mEpCjE6MX43zXTt7HiBaHdMmcuLacMq0enrjqO7s6U9jKMlfgk5D0Z__mfd3ZrZ5ZXCEa2-ma_KJae2VR5syAOBsufHOeiKIM-4XFDV25_0jD3OIUZWKaRKlVU6GrXE5gfPVQfDalRbnrIIG0KPvwJrpCQTctE23Pmcpcif3YEc6y0mt2Q1-ZMviHo2yJkBNWkeRRoLPNE1xdN3c7-nhfjRdKgE2REdRA9IMPwY_B9YHbnleiwBdzBdQLTAqJhC8fDToQtCXYTjWFdr-7TaEFig"
    const TEST_USERID = "userid";
    const TEST_VIN = "vin";
    const TEST_EMAIL = "test@test.it";
    const TEST_DEALER = "dealer";
    const TEST_MILEAGE = "mileage";
    const TEST_TRAIN = "train";
    const TEST_ENGINE = "engine";
    const TEST_TRANSMISSION = "transmission";
    const TEST_MODEL = "model";
    const TEST_YEAR = "2020";
    const TEST_MAKE = "make";
    const TEST_CUST_ID = "cust_id";
    const ONE_DAY = 1000 * 60 * 60 *24;
    const TEST_SERVICE_LIST = [{ id: 0 }, { id: 1 }, { id: 2 }];
    const headers = {
        "clientrequestid": "mock",
        "x-originator-type": "mock",
        "dealer-authorization": "mock",
        "x-clientapp-version": "mock",
        "content-type": "application/json"
    };

    //getVehicleFromVehicleGroup
    export const mockInputGetVehicleFromVehicleGroup: DataModels.VehicleSearchListData={
        id: "XXX",
        requestedService: "VEHICLE_SEARCH_LIST"
    };

    export const mockInputGetVehicleFromVehicleGroupNull: DataModels.VehicleSearchListData={
        id: null,
        requestedService: "VEHICLE_SEARCH_LIST"
    };

    export const mockInputGetVehicleFromVehicleGroupNumerics: DataModels.VehicleSearchListData={
        id: "123x",
        requestedService: "VEHICLE_SEARCH_LIST"
    };

    export const mockInputGetVehicleFromVehicleGroupSpecialChar: DataModels.VehicleSearchListData={
        id: "@#$%",
        requestedService: "VEHICLE_SEARCH_LIST"
    };

    export const mockOutputGetVehicleFromVehicleGroup: DataModels.GetVehiclesResponse={
        vehicles: [ "VIN1", "VIN2" ]
    };

    export const mockOutputGetVehicleFromVehicleGroupNull: DataModels.GetVehiclesResponse={
        vehicles: [ null, null ]
    };

    //insertVehicleForVehicleGroup
    export const mockInputInsertVehicleForVehicleGroup: DataModels.VehicleCreateDeleteData={
        id: "XXX",
	    vin: "XXX",
        requestedService: "VEHICLE_CREATE"
    };

    export const mockInputInsertVehicleForVehicleGroupNull: DataModels.VehicleCreateDeleteData={
        id: null,
	    vin: null,
        requestedService: "VEHICLE_CREATE"
    };

    export const mockInputInsertVehicleForVehicleGroupNumericsFirst: DataModels.VehicleCreateDeleteData={
        id: "123x",
	    vin: "123x",
        requestedService: "VEHICLE_CREATE"
    };

    export const mockInputInsertVehicleForVehicleGroupSpecialChar: DataModels.VehicleCreateDeleteData={
        id: "@#$%",
	    vin: "@#$%",
        requestedService: "VEHICLE_CREATE"
    };

    export const mockInputInsertVehicleForVehicleGroupNumericsLast: DataModels.VehicleCreateDeleteData={
        id: "x123",
	    vin: "x123",
        requestedService: "VEHICLE_CREATE"
    };

    export const mockOutputInsertVehicleForVehicleGroup: DataModels.PostResponse={
        message: "inserted"
    };

    export const mockOutputInsertVehicleForVehicleGroupDelete: DataModels.PostResponse={
        message: "deleted"
    };

    export const mockOutputInsertVehicleForVehicleGroupUpdate: DataModels.PostResponse={
        message: "updated"
    };

    //deleteVehicleFromVehicleGroup
    export const mockInputDeleteVehicleFromVehicleGroup: DataModels.VehicleCreateDeleteData={
        id: "XXX",
	    vin: "XXX",
        requestedService: "VEHICLE_DELETE"
    };

    export const mockInputDeleteVehicleFromVehicleGroupNull: DataModels.VehicleCreateDeleteData={
        id: null,
	    vin: null,
        requestedService: "VEHICLE_DELETE"
    };

    export const mockInputDeleteVehicleFromVehicleGroupNumerics: DataModels.VehicleCreateDeleteData={
        id: "123x",
	    vin: "123x",
        requestedService: "VEHICLE_DELETE"
    };

    export const mockInputDeleteVehicleFromVehicleGroupSpecialChar: DataModels.VehicleCreateDeleteData={
        id: "@#$%",
	    vin: "@#$%",
        requestedService: "VEHICLE_DELETE"
    };

    export const mockOutputDeleteVehicleFromVehicleGroup: DataModels.DeleteResponse={
        message: "deleted"
    };

    export const mockOutputDeleteVehicleFromVehicleGroupInsert: DataModels.DeleteResponse={
        message: "inserted"
    };

    export const mockOutputDeleteVehicleFromVehicleGroupUpdate: DataModels.DeleteResponse={
        message: "updated"
    };
}