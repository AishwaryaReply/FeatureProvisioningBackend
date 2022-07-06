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

    //getRulesForFeature
    export const mockInputGetRulesForFeature: DataModels.RuleSearchListData={
        code: "XXX",
        requestedService: "RULE_SEARCH_LIST"
    };

    export const mockInputGetRulesForFeatureLowercase: DataModels.RuleSearchListData={
        code: "xxx",
        requestedService: "RULE_SEARCH_LIST"
    };

    export const mockInputGetRulesForFeatureSpecialChar: DataModels.RuleSearchListData={
        code: "@#$%",
        requestedService: "RULE_SEARCH_LIST"
    };

    export const mockInputGetRulesForFeatureNumerics: DataModels.RuleSearchListData={
        code: "123",
        requestedService: "RULE_SEARCH_LIST"
    };

    export const mockOutputGetRulesForFeature: DataModels.GetFeaturesRulesResponse={
        rules: [{ id: 1, region: "XXX", market: "XXX", brand: "XXX", model: "XXX", modelYear: 0, service: "XXX" }, 
                   { id: 345, region: "YYY", market: "YYY", brand: "YYY", model: "YYY", modelYear: 456, service: "YYY" }],
    };

    //insertRuleForFeature
    export const mockInputInsertRuleForFeature: DataModels.RuleCreateData={
        igroup: "XXX",
        cfeature : "XXX",
        cregion: "XXX",
        cmarket: "XXX",
        cbrand:"XXX",
        cmodel: "XXX",
        imodelyear: "XXX",
        cservice: "XXX",
        requestedService: "RULE_CREATE"
    };

    export const mockInputInsertRuleForFeatureLowercase: DataModels.RuleCreateData={
        igroup: "xxx",
        cfeature : "xxx",
        cregion: "xxx",
        cmarket: "xxx",
        cbrand: "xxx",
        cmodel: "xxx",
        imodelyear: "xxx",
        cservice: "xxx",
        requestedService: "RULE_CREATE"
    };

    export const mockInputInsertRuleForFeatureSpecialChar: DataModels.RuleCreateData={
        igroup: "@#$%",
        cfeature : "@#$%",
        cregion: "@#$%",
        cmarket: "@#$%",
        cbrand: "@#$%",
        cmodel: "@#$%",
        imodelyear: "@#$%",
        cservice: "@#$%",
        requestedService: "RULE_CREATE"
    };

    export const mockInputInsertRuleForFeatureNumerics: DataModels.RuleCreateData={
        igroup: "123",
        cfeature : "123",
        cregion: "123",
        cmarket: "123",
        cbrand: "123",
        cmodel: "123",
        imodelyear: "123",
        cservice: "123",
        requestedService: "RULE_CREATE"
    };
    
    export const mockOutputInsertRuleForFeature: DataModels.PostResponse={
        message: "inserted"
    };

    export const mockOutputInsertRuleForFeatureDelete: DataModels.PostResponse={
        message: "deleted"
    };

    export const mockOutputInsertRuleForFeatureUpdate: DataModels.PostResponse={
        message: "updated"
    };

    //deleteRuleFromFeature
    export const mockInputDeleteRuleFromFeature: DataModels.RuleDeleteData={
        cfeature : "XXX",
        irule: 123,
        requestedService: "RULE_DELETE"
    };

    export const mockInputDeleteRuleFromFeatureLowercase: DataModels.RuleDeleteData={
        cfeature : "xxx",
        irule: 123,
        requestedService: "RULE_DELETE"
    };

    export const mockInputDeleteRuleFromFeatureNumerics: DataModels.RuleDeleteData={
        cfeature : "123",
        irule: 123,
        requestedService: "RULE_DELETE"
    };

    export const mockInputDeleteRuleFromFeatureSpecialChar: DataModels.RuleDeleteData={
        cfeature : "@#$%",
        irule: 123,
        requestedService: "RULE_DELETE"
    };
    
    export const mockOutputDeleteRuleFromFeature: DataModels.DeleteResponse={
        message: "deleted"
    };

    export const mockOutputDeleteRuleFromFeatureInsert: DataModels.DeleteResponse={
        message: "inserted"
    };

    export const mockOutputDeleteRuleFromFeatureUpdate: DataModels.DeleteResponse={
        message: "updated"
    };
}

