export namespace Stubs {

    // const TEST_BRAND = "50";
    // const TEST_MODEL = "674";
    // const TEST_YEAR = "2020";
    // const TEST_ODOMETER = "1200";
    const TEST_USERID = "userid";
    const TEST_VIN = "vin";
    const TEST_EMAIL = "test@test.it";
    const TEST_DEALER = "dealer";
    const TEST_MILEAGE = "mileage";
    
    export const clone = <T>(obj: T): T => {
        return JSON.parse(JSON.stringify(obj))
    }

    // export const mockGetManualResponse: CommonServiceDataModels.GetPublicationResponse = {
    //     publications: [
    //         {
    //             id: "0",
    //             itemtype: "OM",
    //             year: "2020",
    //             brand: "Jeep",
    //             model: "Renegade",
    //             language: "EN",
    //             market: "US",
    //             file_id: "9999",
    //             embargo_date: "1519880400",
    //             title: "Warranty Info",
    //             payload: "https://msmownerassets.z13.web.core.windows.net/assets/publications/en-us/Jeep/2020/Renegade/P111286_20_BV_OM_EN_USC_t.pdf",
    //             pdf: "https://msmownerassets.z13.web.core.windows.net/assets/publications/en-us/Jeep/2020/Renegade/P111286_20_BV_OM_EN_USC_t.pdf",
    //             html: "https://msmownerassets.z13.web.core.windows.net/assets/publications/toc/0.json",
    //             hasHtml: false
    //         }
    //     ]
    // }


    // export const GetManualRequest: DataModels.GetManualRequestData = {
    //     year: 2020,
    //     brand: TEST_BRAND,
    //     model: TEST_MODEL,
    //     requestedService: 'GET_MANUAL'
    // }

    // export const GetManualNoBrandRequest: DataModels.GetManualRequestData = {
    //     year: 2020,
    //     brand: "nobrand",
    //     model: TEST_MODEL,
    //     requestedService: 'GET_MANUAL'
    // }

    // export const GetCoveragesRequest: DataModels.GetCoveragesRequestData = {
    //     vin: "vehicleId",
    //     odometer: '2000',
    //     userid: 'userid',
    //     requestedService: 'GET_COVERAGES'
    // }

    // export const mockGetCoveragesResponse: CommonServiceDataModels.GetCoveragesResponse = {
    //     errors: null,
    //     wcc: '560',
    //     odometer: '2000',
    //     coverages: [
    //         {
    //             coverageCode: 'BAS',
    //             coverageFlag: 'Y',
    //             typeOfCoverage: 'BASIC',
    //             originalCoverage: '36 Months or 36000 miles',
    //             deductible: '0',
    //             expiration: '2022-04-09',
    //             remaining: '17 Months or 34000 miles'
    //         },
    //         {
    //             coverageCode: 'PWT',
    //             coverageFlag: 'Y',
    //             typeOfCoverage: null,
    //             originalCoverage: null,
    //             deductible: null,
    //             expiration: null,
    //             remaining: null
    //         }
    //     ],
    //     odometerType: 'M',
    //     requestDate: '2020-11-05',
    //     vehicleRegisterMarket: 'U',
    //     vin: '1C4RJFAG1KC738166'
    // }

    // export const mockGetCoveragesMileage: CommonServiceDataModels.MileageResponse = {
    //     msws_service: {
    //         status: "success",
    //         maintenance_schedule: {
    //             past_maintenance_mileage: "",
    //             future_maintenance_mileage: "10000",
    //             latest_odometer_reading: [],
    //             last_odometer_reading: "1",
    //             current_maintenance_mileage: {},
    //             last_odometer_reading_date: "04-16-2020"
    //         },
    //         vin: "3C3CFFGE0FT522336",
    //         service_recommendation_current: {
    //             service_rec: [
    //                 {
    //                     ser_rec_priority: "Y",
    //                     ser_rec_desc: "Change engine oil and filter"
    //                 },
    //                 {
    //                     ser_rec_priority: "N",
    //                     ser_rec_desc: "Rotate the tires at the first sign of irregular wear"
    //                 },
    //                 {
    //                     ser_rec_priority: "N",
    //                     ser_rec_desc: "Inspect brake linings"
    //                 },
    //                 {
    //                     ser_rec_priority: "N",
    //                     ser_rec_desc: "Inspect exhaust system"
    //                 }
    //             ]
    //         },
    //         service_recommendation_past: {
    //             service_rec: [
    //                 {
    //                     ser_rec_priority: "Y",
    //                     ser_rec_desc: "Change engine oil and filter"
    //                 },
    //                 {
    //                     ser_rec_priority: "N",
    //                     ser_rec_desc: "Rotate the tires at the first sign of irregular wear"
    //                 },
    //                 {
    //                     ser_rec_priority: "N",
    //                     ser_rec_desc: "Inspect brake linings"
    //                 },
    //                 {
    //                     ser_rec_priority: "N",
    //                     ser_rec_desc: "Inspect exhaust system"
    //                 }
    //             ]
    //         },
    //         service_recommendation_future: {
    //             service_rec: [
    //                 {
    //                     ser_rec_priority: "Y",
    //                     ser_rec_desc: "Change engine oil and filter"
    //                 },
    //                 {
    //                     ser_rec_priority: "N",
    //                     ser_rec_desc: "Rotate the tires at the first sign of irregular wear"
    //                 },
    //                 {
    //                     ser_rec_priority: "N",
    //                     ser_rec_desc: "Inspect brake linings"
    //                 },
    //                 {
    //                     ser_rec_priority: "N",
    //                     ser_rec_desc: "Inspect exhaust system"
    //                 }
    //             ]
    //         },
    //         user_id: "SXMUSEN_Jd1610162008155032I"
    //     }
    // }

    // export const expectedMockGetCoverages: DataModels.GetCoveragesResponse = {
    //     wcc: '560',
    //     odometer: '2000',
    //     coverages: [
    //         {
    //             coverageCode: 'BAS',
    //             coverageFlag: 'Y',
    //             typeOfCoverage: 'BASIC',
    //             originalCoverage: '36 Months or 36000 miles',
    //             deductible: '0',
    //             expiration: '2022-04-09',
    //             remaining: '17 Months or 34000 miles'
    //         },
    //         {
    //             coverageCode: 'PWT',
    //             coverageFlag: 'Y',
    //         }
    //     ],
    //     odometerType: 'M',
    //     requestDate: '2020-11-05',
    //     vehicleRegisterMarket: 'U',
    //     vin: '1C4RJFAG1KC738166'
    // }

    // export const expectedMockGetMileage: DataModels.GetMileageResponse = {
    //     maintenanceSchedule: {
    //         futureMaintenanceMileage: "10000",
    //         lastOdometerReading: "1",
    //         lastOdometerReadingDate: "04-16-2020",
    //     },
    //     vin: '3C3CFFGE0FT522336'
    // }

    export const DfxSearchByEmailEvent = {
        headers: {
            "clientrequestid": "mock",
            "x-originator-type": "mock",
            "dealer-authorization": "mock",
            "x-clientapp-version": "mock",
            "content-type": "application/json"
        },
        queryString: {
            email: TEST_EMAIL
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/search'
        }
    }

    export const GetTokenEvent = {
        headers: {
            "clientrequestid": "mock",
            "x-originator-type": "mock",
            "dealer-authorization": "mock",
            "x-clientapp-version": "mock",
            "content-type": "application/json"
        },
        queryString: {
            hintDealer: TEST_DEALER
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/token'
        }
    }

    export const DfxSearchByVinEvent = {
        headers: {
            "clientrequestid": "mock",
            "x-originator-type": "mock",
            "dealer-authorization": "mock",
            "x-clientapp-version": "mock",
            "content-type": "application/json"
        },
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/search'
        }
    }

    export const GetVehicleEvent = {
        headers: {
            "clientrequestid": "mock",
            "x-originator-type": "mock",
            "dealer-authorization": "mock",
            "x-clientapp-version": "mock",
            "content-type": "application/json"
        },
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/dfxvehicle'
        }
    }

    export const GetDealerServicesByVinEvent = {
        headers: {
            "clientrequestid": "mock",
            "x-originator-type": "mock",
            "dealer-authorization": "mock",
            "x-clientapp-version": "mock",
            "content-type": "application/json"
        },
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID,
            mileage: TEST_MILEAGE
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/facrtoryservices/mileage/{mileage}'
        }
    }
}