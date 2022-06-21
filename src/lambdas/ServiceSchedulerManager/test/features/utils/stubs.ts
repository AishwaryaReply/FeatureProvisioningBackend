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

    //insertFeature
    export const mockInputInsertFeature: DataModels.FeatureCreateData={
        cfeature: "XXX",
        featureDescription: "XXX",
        cchannel: [{ code: "XXX", description: "XXX" }, 
                   { code: "YYY", description: "YYY" }],
        requestedService: "FEATURE_CREATE"
    };

    export const mockInputInsertFeatureNumericsFirst: DataModels.FeatureCreateData={
        cfeature: "x123",
        featureDescription: "x243",
        cchannel: [{ code: "x3647", description: "g4657" }, 
                   { code: "y4578", description: "x7485" }],
        requestedService: "FEATURE_CREATE"
    };

    export const mockInputInsertFeatureNumericsLast: DataModels.FeatureCreateData={
        cfeature: "123x",
        featureDescription: "243x",
        cchannel: [{ code: "3647x", description: "4657x" }, 
                   { code: "4578x", description: "748x" }],
        requestedService: "FEATURE_CREATE"
    };

    export const mockInputInsertFeatureNull: DataModels.FeatureCreateData={
        cfeature: null,
        featureDescription: null,
        cchannel: [{ code: null, description: null}, 
                   { code: null, description: null }],
        requestedService: "FEATURE_CREATE"
    };

    export const mockInputInsertFeatureSpecialChar: DataModels.FeatureCreateData={
        cfeature: "@#$&%!~",
        featureDescription: "@#$&%!~",
        cchannel: [{ code: "@#$&%!~", description: "@#$&%!~"}, 
                   { code: "@#$&%!~", description: "@#$&%!~" }],
        requestedService: "FEATURE_CREATE"
    };

    export const mockOutputInsertFeature: DataModels.PostResponse={
        message: "inserted"
    };

    export const mockOutputInsertFeatureUpdate: DataModels.PostResponse={
        message: "updated"
    };

    export const mockOutputInsertFeatureDelete: DataModels.PostResponse={
        message: "deleted"
    };

    //updateFeature
    export const mockInputUpdateFeature:  DataModels.FeatureUpdateData={
        cfeature: "XXX",
        featureDescription: "XXX",
        channels: [{ code: "XXX", description: "XXX" },
                   { code: "YYY", description: "YYY" }],
        requestedService: "FEATURE_UPDATE"
    };

    export const mockInputUpdateFeatureNull:  DataModels.FeatureUpdateData={
        cfeature:  null,
        featureDescription:  null,
        channels: [{ code: null, description: null }, 
                   { code: null, description: null }],
        requestedService: "FEATURE_UPDATE"
    };

    export const mockInputUpdateFeatureSpecialCharNumerics:  DataModels.FeatureUpdateData={
        cfeature: "3546@$%",
        featureDescription: "3546@$%",
        channels: [{ code: "3546@$%", description: "3546@$%" }, 
                   { code: "3546@$%", description: "3546@$%"}],
        requestedService: "FEATURE_UPDATE"
    };

    export const mockInputUpdateFeatureLowercase:  DataModels.FeatureUpdateData={
        cfeature: "XXX",
        featureDescription: "XXX",
        channels: [{ code: "XXX", description: "XXX" }, 
                   { code: "YYY", description: "YYY" }],
        requestedService: "FEATURE_UPDATE"
    };

    export const mockOutputUpdateFeature: DataModels.PatchResponse={
        message: "updated"
    };

    export const mockOutputUpdateFeatureDelete: DataModels.PatchResponse={
        message: "deleted"
    };

    export const mockOutputUpdateFeatureInserted: DataModels.PatchResponse={
        message: "inserted"
    };


    

    //deleteFeature
    export const mockInputDeleteFeature: DataModels.FeatureDeleteData={
        cfeature: "XXX",
        requestedService: "FEATURE_DELETE"
    };

    export const mockInputDeleteFeatureNull: DataModels.FeatureDeleteData={
        cfeature: null,
        requestedService: "FEATURE_DELETE"
    };

    export const mockInputDeleteFeatureNumericsFirst: DataModels.FeatureDeleteData={
        cfeature: "123xx",
        requestedService: "FEATURE_DELETE"
    };

    export const mockInputDeleteFeatureNumericsLast: DataModels.FeatureDeleteData={
        cfeature: "xx123",
        requestedService: "FEATURE_DELETE"
    };

    export const mockInputDeleteFeatureSpecialChar: DataModels.FeatureDeleteData={
        cfeature: "@#$%",
        requestedService: "FEATURE_DELETE"
    };

    export const mockOutputDeleteFeature: DataModels.DeleteResponse={
        message: "deleted"
    };

    export const mockOutputDeleteFeatureUpdated: DataModels.DeleteResponse={
        message: "updated"
    };

    export const mockOutputDeleteFeatureInserted: DataModels.DeleteResponse={
        message: "inserted"
    };

    
    //getListFeatures    

}