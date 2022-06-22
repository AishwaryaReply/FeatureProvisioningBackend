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

    //insertVehicleGroup
    export const mockInputInsertVehicleGroup: DataModels.VehicleGroupCreateData={
        description: "XXX",
        requestedService: "VEHICLEGROUP_CREATE"
    };

    export const mockInputInsertVehicleGroupNull: DataModels.VehicleGroupCreateData={
        description: null,
        requestedService: "VEHICLEGROUP_CREATE"
    };

    export const mockInputInsertVehicleGroupSpecialChar: DataModels.VehicleGroupCreateData={
        description: "@#$%&",
        requestedService: "VEHICLEGROUP_CREATE"
    };

    export const mockInputInsertVehicleGroupLowercase: DataModels.VehicleGroupCreateData={
        description: "xxx",
        requestedService: "VEHICLEGROUP_CREATE"
    };

    export const mockInputInsertVehicleGroupNumerics: DataModels.VehicleGroupCreateData={
        description: "1234",
        requestedService: "VEHICLEGROUP_CREATE"
    };

    export const mockOutputInsertVehicleGroup: DataModels.PostResponse={
        message: "inserted"
    };

    export const mockOutputInsertVehicleGroupDelete: DataModels.PostResponse={
        message: "deleted"
    };

    export const mockOutputInsertVehicleGroupUpdate: DataModels.PostResponse={
        message: "updates"
    };

    //deleteFeatureVehicleGroup
    export const mockInputDeleteFeatureVehicleGroup: DataModels.VehicleGroupFeatureDeleteData={
        code: "XXX",
        id: 123,
        requestedService: "VEHICLEGROUP_FEATURE_DELETE"
    };

    export const mockInputDeleteFeatureVehicleGroupNull: DataModels.VehicleGroupFeatureDeleteData={
        code: null,
	    id: null,
        requestedService: "VEHICLEGROUP_FEATURE_DELETE"
    };

    export const mockInputDeleteFeatureVehicleGroupNumerics: DataModels.VehicleGroupFeatureDeleteData={
        code: "123",
	    id: 123,
        requestedService: "VEHICLEGROUP_FEATURE_DELETE"
    };

    export const mockOutputDeleteFeatureVehicleGroup: DataModels.DeleteResponse={
        message: "deleted"
    };

    export const mockOutputDeleteFeatureVehicleGroupInsert: DataModels.DeleteResponse={
        message: "inserted"
    };

    export const mockOutputDeleteFeatureVehicleGroupUpdate: DataModels.DeleteResponse={
        message: "updated"
    };



    //getVehicleGroup
    export const mockInputGetVehicleGroup: DataModels.VehicleGroupSearchListData={
        feature: "XXX",
        requestedService: "VEHICLEGROUP_SEARCH_LIST"
    };

    export const mockInputGetVehicleGroupNumerics: DataModels.VehicleGroupSearchListData={
        feature: "123x",
        requestedService: "VEHICLEGROUP_SEARCH_LIST"
    };

    export const mockInputGetVehicleGroupSpecialChar: DataModels.VehicleGroupSearchListData={
        feature: "@#$%",
        requestedService: "VEHICLEGROUP_SEARCH_LIST"
    };

    export const mockInputGetVehicleGroupNull: DataModels.VehicleGroupSearchListData={
        feature: null,
        requestedService: "VEHICLEGROUP_SEARCH_LIST"
    };


    export const mockOutputGetVehicleGroup: DataModels.GetGroupsResponse={
        features: [{ id: 1, description: "Group 1" }, 
        { id: 2, description: "Group 2" }]
    };

    export const mockOutputGetVehicleGroupNull: DataModels.GetGroupsResponse={
        features: [{ id: null, description: null }, 
        { id: null, description: null }]
    };

    //insertFeatureVehicleGroup
    export const mockInputInsertFeatureVehicleGroup: DataModels.VehicleGroupFeatureCreateData={
        code: "XXX",
        id: 123,
        requestedService: "VEHICLEGROUP_FEATURE_INSERT"
    };

    export const mockInputInsertFeatureVehicleGroupNull: DataModels.VehicleGroupFeatureCreateData={
        code: null,
	    id: null,
        requestedService: "VEHICLEGROUP_FEATURE_INSERT"
    };

    export const mockInputInsertFeatureVehicleGroupNumerics: DataModels.VehicleGroupFeatureCreateData={
        code: "123",
	    id: 123,
        requestedService: "VEHICLEGROUP_FEATURE_INSERT"
    };

    export const mockInputInsertFeatureVehicleGroupSpecialChar: DataModels.VehicleGroupFeatureCreateData={
        code: "@#$%",
	    id: 123,
        requestedService: "VEHICLEGROUP_FEATURE_INSERT"
    };

    export const mockOutputInsertFeatureVehicleGroup: DataModels.PostResponse={
        message: "inserted"
    };

    export const mockOutputInsertFeatureVehicleGroupUpdate: DataModels.PostResponse={
        message: "updated"
    };

    export const mockOutputInsertFeatureVehicleGroupDelete: DataModels.PostResponse={
        message: "deleted"
    };

    //updateVehicleGroup
    export const mockInputUpdateVehicleGroup: DataModels.VehicleGroupUpdateData={
        id: 123,
	    description: "XXX",
        requestedService: "VEHICLEGROUP_UPDATE"
    };

    export const mockInputUpdateVehicleGroupSpecialChar: DataModels.VehicleGroupUpdateData={
        id: 123,
	    description: "@#$%",
        requestedService: "VEHICLEGROUP_UPDATE"
    };

    export const mockInputUpdateVehicleGroupNumerics: DataModels.VehicleGroupUpdateData={
        id: 123,
	    description: "123",
        requestedService: "VEHICLEGROUP_UPDATE"
    };

    export const mockInputUpdateVehicleGroupNull: DataModels.VehicleGroupUpdateData={
        id: null,
	    description: null,
        requestedService: "VEHICLEGROUP_UPDATE"
    };

    export const mockOutputUpdateVehicleGroup: DataModels.PatchResponse={
        message: "updated"
    };

    export const mockOutputUpdateVehicleGroupDelete: DataModels.PatchResponse={
        message: "deleted"
    };

    export const mockOutputUpdateVehicleGroupInsert: DataModels.PatchResponse={
        message: "Inserted"
    };

    //deleteVehicleGroup
    export const mockInputDeleteVehicleGroup: DataModels.VehicleGroupDeleteData={
        id: 123,
        requestedService: "VEHICLEGROUP_DELETE"
    };

    export const mockInputDeleteVehicleGroupNull: DataModels.VehicleGroupDeleteData={
        id: null,
        requestedService: "VEHICLEGROUP_DELETE"
    };

    export const mockOutputDeleteVehicleGroup: DataModels.DeleteResponse={
        message: "deleted"
    };

    export const mockOutputDeleteVehicleGroupUpdate: DataModels.DeleteResponse={
        message: "updated"
    };

    export const mockOutputDeleteVehicleGroupInsert: DataModels.DeleteResponse={
        message: "inserted"
    };

    export const mockOutputDeleteVehicleGroupNull: DataModels.DeleteResponse={
        message: null
    };

}