import { SchedulingServiceDataModels } from "gcv-meld";
import { DataModels } from "../../../src/interfaces";

export namespace Stubs {

    const TEST_DEALER_TOKEN = "dealerTokenTest"
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
    const TEST_SERVICE_LIST = [{ id: 0 }, { id: 1 }, { id: 2 }];
    const headers = {
        "clientrequestid": "mock",
        "x-originator-type": "mock",
        "dealer-authorization": "mock",
        "x-clientapp-version": "mock",
        "content-type": "application/json"
    };
    const SERVICE_LIST = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ];
    const TEST_DEPARTMENT = "department";
    const TEST_END_DATE = "1576886647000";
    const TEST_START_DATE = "1576886647000";
    const TEST_POST_BODY = {
        customer: {id: "string"},
        customerConcernsInfo: "string",
        advisorId: 0,
        transportationOptionCode: "string",
        scheduledTime: "string",
        mileage: {
            value: 0,
            unitsKind: "string"
        },
        services: {
            drs: [
                {
                    id: 0,
                    comment: "string"
                }
            ],
            frs: [
                {
                    id: 0,
                    comment: "string"
                }
            ],
            repair: [
                {
                    id: 0,
                    comment: "string"
                }
            ]
        },
        vehicle: {
            links: [
                {
                    rel: "string",
                    href: "string"
                }
            ]
        }
    }
    const TEST_PUT_BODY = {
        customer: {id: "string"},
        customerConcernsInfo: "string",
        advisorId: 0,
        transportationOptionCode: "string",
        scheduledTime: "string",
        mileage: {
            value: 0,
            unitsKind: "string"
        },
        services: {
            drs: [
                {
                    id: 0,
                    comment: "string"
                }
            ],
            frs: [
                {
                    id: 0,
                    comment: "string"
                }
            ],
            repair: [
                {
                    id: 0,
                    comment: "string"
                }
            ]
        },
        vehicle: {
            links: [
                {
                    rel: "string",
                    href: "string"
                }
            ]
        }
    }
    const TEST_APPOINTMENT_ID = "test appointment";

    export const clone = <T>(obj: T): T => {
        return JSON.parse(JSON.stringify(obj))
    }


    export const DfxSearchByEmailEvent = {
        headers: headers,
        queryString: {
            email: TEST_EMAIL
        },
        runTimeInfo: {
            resourcePath: '/v1/servicescheduler/search'
        }
    }

    export const GetTokenEvent = {
        headers: headers,
        queryString: {
            hintdealer: TEST_DEALER
        },
        runTimeInfo: {
            resourcePath: '/v1/servicescheduler/token'
        }
    }

    export const DfxSearchByVinEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/search'
        }
    }

    export const GetVehicleEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/ossvehicle'
        }
    }

    export const GetDealerServicesByVinEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        queryString: {
            mileage: TEST_MILEAGE
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/dealerservices'
        }
    }

    export const GetDealerServicesNoVinEvent = {
        headers: headers,
        pathParams: {
            make: TEST_MAKE,
            year: TEST_YEAR,
            model: TEST_MODEL,
            transmission: TEST_TRANSMISSION,
            engine: TEST_ENGINE,
            train: TEST_TRAIN,
            mileage: TEST_MILEAGE
        },
        runTimeInfo: {
            resourcePath: '/v1/servicescheduler/dealerservices/{make}/{year}/{model}/{transmission}/{engine}/{train}/mileage/{mileage}'
        }
    }

    export const GetFactoryServicesByVinEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        queryString: {
            mileage: TEST_MILEAGE
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/factoryservices'
        }
    }

    export const GetFactoryServicesNoVinEvent = {
        headers: headers,
        pathParams: {
            make: TEST_MAKE,
            year: TEST_YEAR,
            model: TEST_MODEL,
            transmission: TEST_TRANSMISSION,
            engine: TEST_ENGINE,
            train: TEST_TRAIN,
            mileage: TEST_MILEAGE
        },
        runTimeInfo: {
            resourcePath: '/v1/servicescheduler/factoryservices/{make}/{year}/{model}/{transmission}/{engine}/{train}/mileage/{mileage}'
        }
    }

    export const GetRepairServicesByVinEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID,
        },
        queryString: {
            mileage: TEST_MILEAGE
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/repairservices'
        }
    }

    export const GetRepairServicesNoVinEvent = {
        headers: headers,
        pathParams: {
            make: TEST_MAKE,
            year: TEST_YEAR,
            model: TEST_MODEL,
            transmission: TEST_TRANSMISSION,
            engine: TEST_ENGINE,
            train: TEST_TRAIN,
            mileage: TEST_MILEAGE
        },
        runTimeInfo: {
            resourcePath: '/v1/servicescheduler/repairservices/{make}/{year}/{model}/{transmission}/{engine}/{train}/mileage/{mileage}'
        }
    }

    export const GetAppointemntSummaryEvent = {
        headers: headers,

        requestBody: {
            servicesList: SERVICE_LIST
        },
        runTimeInfo: {
            resourcePath: '/v1/servicescheduler/appointmentsummary'
        }
    }

    export const GetAdvisorsEvent = {
        headers: headers,
        pathParams: {
            departmentid: TEST_DEPARTMENT
        },
        runTimeInfo: {
            resourcePath: '/v1/servicescheduler/department/{departmentid}/advisors'
        }
    }

    export const GetTransmissionOptionsEvent = {
        headers: headers,
        pathParams: {
            departmentid: TEST_DEPARTMENT
        },
        runTimeInfo: {
            resourcePath: '/v1/servicescheduler/department/{departmentid}/transportationoption'
        }
    }

    export const GetTimeSegmentsEvent = {
        headers: headers,
        pathParams: {
            departmentid: TEST_DEPARTMENT
        },
        queryString: {
            startdate: TEST_START_DATE,
            enddate: TEST_END_DATE
        },
        runTimeInfo: {
            resourcePath: '/v1/servicescheduler/department/{departmentid}/timesegments'
        }
    }

    export const GetServiceAppointmentsEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/appointments'
        }
    }

    export const PostAppointmentEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID,
            departmentid: TEST_DEPARTMENT
        },
        requestBody: TEST_POST_BODY,
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/department/{departmentid}/appointment',
            httpMethod: 'POST'
        }
    }

    export const PutAppointmentEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID,
            departmentid: TEST_DEPARTMENT,
            appointmentid: TEST_APPOINTMENT_ID
        },
        requestBody: TEST_PUT_BODY,
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/department/{departmentid}/appointment/{appointmentid}',
            httpMethod: 'PUT'
        }
    }

    export const WrongMethodAppointmentEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID,
            departmentid: TEST_DEPARTMENT,
            appointmentid: TEST_APPOINTMENT_ID
        },
        requestBody: TEST_PUT_BODY,
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/department/{departmentid}/appointment/{appointmentid}',
            httpMethod: 'POST'
        }
    }

    export const GetDealerDepartmentEvent = {
        headers: headers,

        requestBody: {
            servicesList: SERVICE_LIST
        },
        runTimeInfo: {
            resourcePath: '/v1/servicescheduler/dealerdepartment'
        }
    }

    export const DeleteAppointmentEvent = {
        headers: headers,
        pathParams: {
            appointmentid: TEST_APPOINTMENT_ID,
            departmentid: TEST_DEPARTMENT,
            userid: TEST_USERID,
            vin: TEST_VIN
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/department/{departmentid}/appointment/{appointmentid}',
            httpMethod: 'DELETE'
        }
    }

    export const GetAppointmentDetailsEvent = {
        headers: headers,
        pathParams: {
            appointmentid: TEST_APPOINTMENT_ID,
            departmentid: TEST_DEPARTMENT,
            userid: TEST_USERID,
            vin: TEST_VIN
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/department/{departmentid}/appointment/{appointmentid}',
            httpMethod: 'GET'
        }
    }

    export const WrongMethodAppointmentDetailsEvent = {
        headers: headers,
        pathParams: {
            appointmentid: TEST_APPOINTMENT_ID,
            departmentid: TEST_DEPARTMENT
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/servicescheduler/department/{departmentid}/appointment/{appointmentid}',
            httpMethod: 'POST'
        }
    }

    export const ResourcePathNotSupportedEvent = {
        headers: headers,
        pathParams: {
            appointmentid: TEST_APPOINTMENT_ID,
            departmentid: TEST_DEPARTMENT
        },
        runTimeInfo: {
            resourcePath: '/v1/not/supported/path'
        }
    }

    export const mockSearchByEmail: SchedulingServiceDataModels.GetSearchResponse = {
        "customerPreviews": [
            {
                "name": "T**T F*A",
                "phone": "2********2",
                "email": "testkh19@gmail.com",
                "foundType": "byEmail",
                "links": [
                    {
                        "rel": "self",
                        "href": "https://scheduler.dealer-fx.com/catalog/search"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/customer-vehicles",
                        "href": "https://scheduler.dealer-fx.com/catalog/customers/urn:dfx:customer:103129767/vehicles"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/customer-verify",
                        "href": "https://scheduler.dealer-fx.com/catalog/customers/urn:dfx:customer:103129767/verify"
                    }
                ]
            }
        ]
    }

    export const mockSearchByEmailFiltered: DataModels.SearchEmailResponse = {
        customerId: "urn:dfx:customer:103129767",
        email: "testkh19@gmail.com",
        foundType: "byEmail"
    }

    export const mockSearchByEmailRequest: DataModels.DfxSearchEmailRequestData = {
        email: TEST_EMAIL,
        dealerToken: TEST_VIN,
        requestedService: 'DFX_SEARCH_EMAIL'
    }

    export const mockSearchByVinFiltered: DataModels.SearchVinResponse = {
        customerId: "urn:dfx:customer:103129767",
        foundType: "byVin",
        vehicles: [{ "vin": "2C3CCAGG7LH2003XM" }]
    }

    export const mockSearchByVin: SchedulingServiceDataModels.GetSearchResponse = {
        "customerPreviews": [
            {
                "vehicle": {
                    "specification": "Automatic 6CYL 4WD",
                    "model": "2020 CHRYSLER 300 (3.6L)",
                    "image": "https://omm1.dealer-fx.com/images/vehiclecolors/109/2020/300_2020.jpg",
                    "links": [
                        {
                            "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                            "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
                        }
                    ]
                },
                "name": "T**T F*A",
                "phone": "2********2",
                "email": "t*******@gmail.com",
                "foundType": "byVin",
                "links": [
                    {
                        "rel": "self",
                        "href": "https://scheduler.dealer-fx.com/catalog/search"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/customer-vehicles",
                        "href": "https://scheduler.dealer-fx.com/catalog/customers/urn:dfx:customer:103129767/vehicles"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/customer-verify",
                        "href": "https://scheduler.dealer-fx.com/catalog/customers/urn:dfx:customer:103129767/verify"
                    }
                ]
            }
        ]
    }

    export const mockSearchByVinRequest: DataModels.DfxSearchVinRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        dealerToken: TEST_VIN,
        requestedService: 'DFX_SEARCH_VIN'
    }

    // GetDfxVehicle
    export const mockGetDfxVehicleRequest: DataModels.GetDfxVehicleRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        dealerToken: TEST_VIN,
        requestedService: 'DFX_SEARCH_VIN'
    }

    export const mockGetDfxVehicle: SchedulingServiceDataModels.GetVehicleResponse = {
        "vin": "2C3CCAGG7LH2003XM",
        "make": {
            "name": "CHRYSLER",
            "links": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/manufacturer",
                    "href": "https://scheduler.dealer-fx.com/catalog/manufacturers/109"
                }
            ]
        },
        "year": {
            "name": "2020",
            "links": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/manufacture-year",
                    "href": "https://scheduler.dealer-fx.com/catalog/manufacturers/109/years/2020"
                }
            ]
        },
        "model": {
            "name": "300 (3.6L)",
            "links": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/car-model",
                    "href": "https://scheduler.dealer-fx.com/catalog/manufacturers/109/years/2020/models/300%20(3.6l)"
                }
            ]
        },
        "transmission": {
            "name": "Automatic",
            "links": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/transmission",
                    "href": "https://scheduler.dealer-fx.com/catalog/manufacturers/109/years/2020/models/300%20(3.6l)/transmissions/automatic"
                }
            ]
        },
        "engine": {
            "name": "6CYL",
            "links": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/cylinder",
                    "href": "https://scheduler.dealer-fx.com/catalog/manufacturers/109/years/2020/models/300%20(3.6l)/transmissions/automatic/cylinders/6cyl"
                }
            ]
        },
        "train": {
            "name": "4WD",
            "links": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/drive",
                    "href": "https://scheduler.dealer-fx.com/catalog/manufacturers/109/years/2020/models/300%20(3.6l)/transmissions/automatic/cylinders/6cyl/drives/4wd"
                }
            ],
            "linkTemplates": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/required-service-collection",
                    "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/maintenance-services/frs/%7Bmileage%7Cmonths%7D/%7Bmileage.value%7D"
                },
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/recommended-service-collection",
                    "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/maintenance-services/drs/%7Bmileage%7Cmonths%7D/%7Bmileage.value%7D"
                }
            ]
        },
        "image": "https://omm1.dealer-fx.com/images/vehiclecolors/109/2020/300_2020.jpg",
        "specification": "Automatic 6CYL 4WD",
        "vehicleName": "2020 CHRYSLER 300 (3.6L)",
        "maintenance": {
            "period": 10000,
            "enrollmentDate": "2020-01-01",
            "enrollmentMileage": 0
        },
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/appointment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/appointments"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/maintenance-interval-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/intervals?culture=en-US"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/recall-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/recalls"
            }
        ]
    }

    export const mockGetDfxVehicleFiltered: DataModels.GetDfxVehicleResponse = {
        vin: "2C3CCAGG7LH2003XM",
        make: "CHRYSLER",
        year: "2020",
        model: "300 (3.6L)",
        transmission: "Automatic",
        engine: "6CYL",
        train: "4WD"
    }

    // GetDfxToken
    export const mockGetDfxTokenRequest: DataModels.GetTokenRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        hintdealer: "TEST_HINT",
        requestedService: 'GET_DFX_TOKEN'
    }

    export const mockGetDfxToken: SchedulingServiceDataModels.TokenResponse = {
        "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHA6Ly9sb2NhbC9kZWFsZXItaWQiOjUxNTEsInVybjpkZng6YXBwOnRoZW1lIjoiZmNhIiwidXJuOmRmeDphcHA6Y3VsdHVyZSI6ImVuLXVzIiwiYXBwOi8vbG9jYWwvY2xpZW50LWFkZHJlc3MiOiIxMC4wLjEzMC4xOCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvYXV0aGVudGljYXRpb25pbnN0YW50IjoiMjAyMC0xMS0yM1QwODoyMDozNy41MzIwMzI3WiIsInVybjphcHA6YXV0aDplbmRwb2ludCI6Imh0dHBzOi8vc2NoZWR1bGVyLmRlYWxlci1meC5jb20vIiwiYXBwOi8vbG9jYWwvZW5hYmxlLXBhY2thZ2VzIjoiRmFsc2UiLCJhcHA6Ly9sb2NhbC9kZWFsZXItdHoiOiJFYXN0ZXJuIFN0YW5kYXJkIFRpbWUiLCJhcHA6Ly9hdXRob3JpemF0aW9uL2FwcG9pbnRtZW50L3NlcnZpY2UtYWR2aXNvci9zZWxlY3Rpb24iOiJvbmxpbmUtb25seSIsImFwcDovL2F1dGhvcml6YXRpb24vc2VydmljZS1kZXBhcnRtZW50L3RpbWUtc2VnbWVudC9zZXJ2aWNlLW1lbWJlciI6Im9ubGluZS1vbmx5IiwibmJmIjoxNjA2MTE5NjM3LCJleHAiOjE2MDYyMDYwMzcsImlhdCI6MTYwNjExOTYzNywiaXNzIjoiT1NTIElkZW50aXR5IFByb3ZpZGVyIiwiYXVkIjoidXJuOm9zcyJ9.UpdIaUwSx-08vBYA7nYJtBWAvaYoTNRbwhHf3PBv4MgFSTtOwZVyFP3WvMVYCRhMIfTIzUNAE_k1qFrkmXOMcso2Yl9yPCqIRtvH9GFqluIr_Q8AEy7HxwWKwAPWzkXE3Nen5aUbkVuRRgFtQqE9qtyQrL2cZguuUb9S-uyOMNpJ4tqfUTxr4DrKI_r6Tb8m2rOaTHOJ4x41VZTqP_dHxnoPwAGICT2yJWJuRBAjAVV8q76yRRmshd1R5ZZRsYL9d5fzs2Yk8usM7XK1AVzhzLeKbztAE-zkwrCFNwysGE1Mso8IPQ1B8LWpENESyY1ruOAvtDKJmMidyHX-1nBS4g",
        "token_type": "bearer",
        "expires_in": 86399
    }

    export const mockGetDfxTokenFiltered: DataModels.GetDfxTokenResponse = {
        accessToken: mockGetDfxToken.access_token,
        tokenType: mockGetDfxToken.token_type,
        expiresIn: mockGetDfxToken.expires_in
    }

    // GetDealerServicesVin
    export const mockGetDealerServicesVinRequest: DataModels.GetServicesVinRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        mileage: TEST_MILEAGE,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_DEALER_SERVICES_VIN'
    }

    export const mockGetDealerServicesVin: SchedulingServiceDataModels.GetDealerServicesResponse = {
        "services": [
            {
                "id": 80163,
                "name": "Four Wheel Alignment",
                "opCode": "ALGN",
                "price": 110.9500,
                "analyticsMsrp": 110.9500,
                "laborHours": 0.00,
                "selected": false,
                "intervalRecommended": true,
                "benefitsDescription": "Four Wheel Alignment",
                "benefitsImage": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/80163"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/20"
                    }
                ]
            },
            {
                "id": 80209,
                "name": "State Inspection",
                "opCode": "40",
                "price": 37.0000,
                "analyticsMsrp": 37.0000,
                "laborHours": 0.40,
                "selected": false,
                "intervalRecommended": true,
                "benefitsDescription": "State Inspection",
                "benefitsImage": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/80209"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    }
                ]
            },
            {
                "id": 80220,
                "name": "Synthetic Oil Upgrade (6 Cyl.)",
                "opCode": "EXLOF",
                "price": 55.0000,
                "analyticsMsrp": 55.0000,
                "laborHours": 0.00,
                "selected": false,
                "intervalRecommended": false,
                "benefitsDescription": "Synthetic Oil Upgrade (6 Cyl.)",
                "benefitsImage": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/80220"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/29"
                    }
                ]
            },
            {
                "id": 2982763,
                "name": "Service Contract Lube, Oil and Filter",
                "opCode": "EXLOF",
                "price": 29.0000,
                "analyticsMsrp": 29.0000,
                "laborHours": 0.30,
                "selected": false,
                "intervalRecommended": true,
                "benefitsDescription": "SVC CONTRACT LOF",
                "benefitsImage": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/2982763"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/41"
                    }
                ]
            }
        ],
        "affectiveMileage": {
            "value": 20000,
            "unitsKind": "mileage"
        },
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/maintenance-services/drs/mileage/15000"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            }
        ]
    }

    export const mockGetDealerServicesVinFiltered: DataModels.GetServicesResponse = {
        services: [
            {
                id: 80163,
                name: "Four Wheel Alignment",
                price: 110.9500
            },
            {
                id: 80209,
                name: "State Inspection",
                price: 37.0000
            },
            {
                id: 80220,
                name: "Synthetic Oil Upgrade (6 Cyl.)",
                price: 55.0000
            },
            {
                id: 2982763,
                name: "Service Contract Lube, Oil and Filter",
                price: 29.0000
            }
        ]
    }

    // GetDealerServicesWithoutVin
    export const mockGetDealerServicesWithoutVinRequest: DataModels.GetServicesNoVinRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        mileage: TEST_MILEAGE,
        make: TEST_MAKE,
        year: TEST_YEAR,
        model: TEST_MODEL,
        transmission: TEST_MAKE,
        train: TEST_TRAIN,
        engine: TEST_ENGINE,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_DEALER_SERVICES_VIN'
    }

    export const mockGetDealerServicesWithoutVin: SchedulingServiceDataModels.GetDealerServicesResponse = {
        "services": [
            {
                "id": 80163,
                "name": "Four Wheel Alignment",
                "opCode": "ALGN",
                "price": 110.9500,
                "analyticsMsrp": 110.9500,
                "laborHours": 0.00,
                "selected": false,
                "intervalRecommended": true,
                "benefitsDescription": "Four Wheel Alignment",
                "benefitsImage": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/80163"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/20"
                    }
                ]
            },
            {
                "id": 80209,
                "name": "State Inspection",
                "opCode": "40",
                "price": 37.0000,
                "analyticsMsrp": 37.0000,
                "laborHours": 0.40,
                "selected": false,
                "intervalRecommended": true,
                "benefitsDescription": "State Inspection",
                "benefitsImage": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/80209"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    }
                ]
            },
            {
                "id": 80220,
                "name": "Synthetic Oil Upgrade (6 Cyl.)",
                "opCode": "EXLOF",
                "price": 55.0000,
                "analyticsMsrp": 55.0000,
                "laborHours": 0.00,
                "selected": false,
                "intervalRecommended": false,
                "benefitsDescription": "Synthetic Oil Upgrade (6 Cyl.)",
                "benefitsImage": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/80220"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/29"
                    }
                ]
            },
            {
                "id": 2982763,
                "name": "Service Contract Lube, Oil and Filter",
                "opCode": "EXLOF",
                "price": 29.0000,
                "analyticsMsrp": 29.0000,
                "laborHours": 0.30,
                "selected": false,
                "intervalRecommended": true,
                "benefitsDescription": "SVC CONTRACT LOF",
                "benefitsImage": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/2982763"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/41"
                    }
                ]
            }
        ],
        "affectiveMileage": {
            "value": 20000,
            "unitsKind": "mileage"
        },
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/maintenance-services/drs/mileage/15000"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            }
        ]
    }

    export const mockGetDealerServicesWithoutVinFiltered: DataModels.GetServicesResponse = {
        services: [
            {
                id: 80163,
                name: "Four Wheel Alignment",
                price: 110.9500
            },
            {
                id: 80209,
                name: "State Inspection",
                price: 37.0000
            },
            {
                id: 80220,
                name: "Synthetic Oil Upgrade (6 Cyl.)",
                price: 55.0000
            },
            {
                id: 2982763,
                name: "Service Contract Lube, Oil and Filter",
                price: 29.0000
            }
        ]
    }

    // GetFactoryServicesVin
    export const mockGetFactoryServicesVinRequest: DataModels.GetServicesVinRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        mileage: TEST_MILEAGE,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_FACTORY_SERVICES_VIN'
    }

    export const mockGetFactoryServicesVin: SchedulingServiceDataModels.GetFactoryServicesResponse = {
        "services": [
            {
                "id": 82893,
                "name": "Replace engine oil and filter",
                "opCode": "30",
                "price": 69.9500,
                "analyticsMsrp": 69.9500,
                "laborHours": 0.30,
                "selected": false,
                "benefitsDescription": "Replace engine oil and filter",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/82893"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/29"
                    }
                ]
            },
            {
                "id": 79277,
                "name": "Multi-point inspection (according to maintenance interval)",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Multi-point inspection (according to maintenance interval)",
                "benefitsImage": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/6-Multi-Point-Inspection.gif",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/79277"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/53"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-services/benefit-image",
                        "href": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/6-Multi-Point-Inspection.gif"
                    }
                ]
            },
            {
                "id": 79144,
                "name": "Rotate tires",
                "opCode": "22",
                "price": 29.9500,
                "analyticsMsrp": 29.9500,
                "laborHours": 0.40,
                "selected": false,
                "benefitsDescription": "Rotate tires",
                "benefitsImage": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/11-Tire-Rotation.gif",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/79144"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/20"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-services/benefit-image",
                        "href": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/11-Tire-Rotation.gif"
                    }
                ]
            },
            {
                "id": 79145,
                "name": "Inspect front suspention, tie rod ends, boot seals, and replace if necessary",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Inspect front suspention, tie rod ends, boot seals, and replace if necessary",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/79145"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    }
                ]
            },
            {
                "id": 79146,
                "name": "Inspect brake linings, parking brake function",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Inspect brake linings, parking brake function",
                "benefitsImage": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/19-Brake-Maintenance-Service.gif",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/79146"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-services/benefit-image",
                        "href": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/19-Brake-Maintenance-Service.gif"
                    }
                ]
            },
            {
                "id": 44754881,
                "name": "Inspect rear axle fluid",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Inspect rear axle fluid",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/44754881"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    }
                ]
            },
            {
                "id": 44754880,
                "name": "Inspect front axle fluid",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Inspect front axle fluid",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/44754880"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    }
                ]
            },
            {
                "id": 79198,
                "name": "Replace air conditioning filter",
                "opCode": "24",
                "price": 99.5800,
                "analyticsMsrp": 99.5800,
                "laborHours": 0.40,
                "selected": false,
                "benefitsDescription": "Replace air conditioning filter",
                "benefitsImage": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/15-Cabin-Air-Filter-Replacement.gif",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/79198"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/33"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-services/benefit-image",
                        "href": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/15-Cabin-Air-Filter-Replacement.gif"
                    }
                ]
            },
            {
                "id": 6359896,
                "name": "Adjust parking brake",
                "opCode": "01",
                "price": 59.9800,
                "analyticsMsrp": 59.9800,
                "laborHours": 0.40,
                "selected": false,
                "benefitsDescription": "Adjust parking brake",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/6359896"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/1"
                    }
                ]
            },
            {
                "id": 62265794,
                "name": "Inspect CV joints",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Inspect CV joints",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/62265794"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    }
                ]
            }
        ],
        "affectiveMileage": {
            "value": 20000,
            "unitsKind": "mileage"
        },
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/maintenance-services/frs/mileage/15000"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            }
        ]
    }

    export const mockGetFactoryServicesVinFiltered: DataModels.GetServicesResponse = {
        services: [
            {
                id: 82893,
                name: "Replace engine oil and filter",
                price: 69.9500
            },
            {
                id: 79277,
                name: "Multi-point inspection (according to maintenance interval)",
                price: 0.0000
            },
            {
                id: 79144,
                name: "Rotate tires",
                price: 29.9500
            },
            {
                id: 79145,
                name: "Inspect front suspention, tie rod ends, boot seals, and replace if necessary",
                price: 0.0000
            },
            {
                id: 79146,
                name: "Inspect brake linings, parking brake function",
                price: 0.0000
            },
            {
                id: 44754881,
                name: "Inspect rear axle fluid",
                price: 0.0000
            },
            {
                id: 44754880,
                name: "Inspect front axle fluid",
                price: 0.0000
            },
            {
                id: 79198,
                name: "Replace air conditioning filter",
                price: 99.5800
            },
            {
                id: 6359896,
                name: "Adjust parking brake",
                price: 59.9800
            },
            {
                id: 62265794,
                name: "Inspect CV joints",
                price: 0.0000
            }
        ]
    }

    // GetFactoryServicesWithoutVin
    export const mockGetFactoryServicesWithoutVinRequest: DataModels.GetServicesNoVinRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        mileage: TEST_MILEAGE,
        make: TEST_MAKE,
        year: TEST_YEAR,
        model: TEST_MODEL,
        transmission: TEST_MAKE,
        train: TEST_TRAIN,
        engine: TEST_ENGINE,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_FACTORY_SERVICES_WITHOUT_VIN'
    }

    export const mockGetFactoryServicesWithoutVin: SchedulingServiceDataModels.GetFactoryServicesResponse = {
        "services": [
            {
                "id": 82893,
                "name": "Replace engine oil and filter",
                "opCode": "30",
                "price": 69.9500,
                "analyticsMsrp": 69.9500,
                "laborHours": 0.30,
                "selected": false,
                "benefitsDescription": "Replace engine oil and filter",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/82893"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/29"
                    }
                ]
            },
            {
                "id": 79277,
                "name": "Multi-point inspection (according to maintenance interval)",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Multi-point inspection (according to maintenance interval)",
                "benefitsImage": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/6-Multi-Point-Inspection.gif",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/79277"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/53"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-services/benefit-image",
                        "href": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/6-Multi-Point-Inspection.gif"
                    }
                ]
            },
            {
                "id": 79144,
                "name": "Rotate tires",
                "opCode": "22",
                "price": 29.9500,
                "analyticsMsrp": 29.9500,
                "laborHours": 0.40,
                "selected": false,
                "benefitsDescription": "Rotate tires",
                "benefitsImage": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/11-Tire-Rotation.gif",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/79144"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/20"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-services/benefit-image",
                        "href": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/11-Tire-Rotation.gif"
                    }
                ]
            },
            {
                "id": 79145,
                "name": "Inspect front suspention, tie rod ends, boot seals, and replace if necessary",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Inspect front suspention, tie rod ends, boot seals, and replace if necessary",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/79145"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    }
                ]
            },
            {
                "id": 79146,
                "name": "Inspect brake linings, parking brake function",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Inspect brake linings, parking brake function",
                "benefitsImage": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/19-Brake-Maintenance-Service.gif",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/79146"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-services/benefit-image",
                        "href": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/19-Brake-Maintenance-Service.gif"
                    }
                ]
            },
            {
                "id": 44754881,
                "name": "Inspect rear axle fluid",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Inspect rear axle fluid",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/44754881"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    }
                ]
            },
            {
                "id": 44754880,
                "name": "Inspect front axle fluid",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Inspect front axle fluid",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/44754880"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    }
                ]
            },
            {
                "id": 79198,
                "name": "Replace air conditioning filter",
                "opCode": "24",
                "price": 99.5800,
                "analyticsMsrp": 99.5800,
                "laborHours": 0.40,
                "selected": false,
                "benefitsDescription": "Replace air conditioning filter",
                "benefitsImage": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/15-Cabin-Air-Filter-Replacement.gif",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/79198"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/33"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-services/benefit-image",
                        "href": "https://graphics.dealer-fx.com/ServiceBenefits/en-us/15-Cabin-Air-Filter-Replacement.gif"
                    }
                ]
            },
            {
                "id": 6359896,
                "name": "Adjust parking brake",
                "opCode": "01",
                "price": 59.9800,
                "analyticsMsrp": 59.9800,
                "laborHours": 0.40,
                "selected": false,
                "benefitsDescription": "Adjust parking brake",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/6359896"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/1"
                    }
                ]
            },
            {
                "id": 62265794,
                "name": "Inspect CV joints",
                "opCode": "01",
                "price": 0.0000,
                "analyticsMsrp": 0.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "Inspect CV joints",
                "benefitsImage": "",
                "maintenanceKind": "Required",
                "comment": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/62265794"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/31"
                    }
                ]
            }
        ],
        "affectiveMileage": {
            "value": 20000,
            "unitsKind": "mileage"
        },
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/maintenance-services/frs/mileage/15000"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            }
        ]
    }

    export const mockGetFactoryServicesWithoutVinFiltered: DataModels.GetServicesResponse = {
        services: [
            {
                id: 82893,
                name: "Replace engine oil and filter",
                price: 69.9500
            },
            {
                id: 79277,
                name: "Multi-point inspection (according to maintenance interval)",
                price: 0.0000
            },
            {
                id: 79144,
                name: "Rotate tires",
                price: 29.9500
            },
            {
                id: 79145,
                name: "Inspect front suspention, tie rod ends, boot seals, and replace if necessary",
                price: 0.0000
            },
            {
                id: 79146,
                name: "Inspect brake linings, parking brake function",
                price: 0.0000
            },
            {
                id: 44754881,
                name: "Inspect rear axle fluid",
                price: 0.0000
            },
            {
                id: 44754880,
                name: "Inspect front axle fluid",
                price: 0.0000
            },
            {
                id: 79198,
                name: "Replace air conditioning filter",
                price: 99.5800
            },
            {
                id: 6359896,
                name: "Adjust parking brake",
                price: 59.9800
            },
            {
                id: 62265794,
                name: "Inspect CV joints",
                price: 0.0000
            }
        ]
    }

    // GetRepairServicesVin
    export const mockGetRepairServicesVinRequest: DataModels.GetServicesVinRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        mileage: TEST_MILEAGE,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_REPAIR_SERVICES_VIN'
    }

    export const mockGetRepairServicesVin: SchedulingServiceDataModels.GetFactoryServicesResponse = {
        "services": [
            {
                "id": 47007611,
                "name": "AC/Heating Concern",
                "opCode": "14",
                "price": 165.0000,
                "analyticsMsrp": 165.0000,
                "laborHours": 1.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007611"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/3"
                    }
                ]
            },
            {
                "id": 47007612,
                "name": "Automatic Transmission Concern",
                "opCode": "11",
                "price": 165.0000,
                "analyticsMsrp": 165.0000,
                "laborHours": 1.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007612"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/2"
                    }
                ]
            },
            {
                "id": 47007613,
                "name": "Axle/Driveshaft/Differential Concern",
                "opCode": "03",
                "price": 165.0000,
                "analyticsMsrp": 165.0000,
                "laborHours": 1.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007613"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/4"
                    }
                ]
            },
            {
                "id": 47007614,
                "name": "Body Systems/Trim Concern (Non-Electrical)",
                "opCode": "96",
                "price": 55.0000,
                "analyticsMsrp": 55.0000,
                "laborHours": 0.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007614"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/6"
                    }
                ]
            },
            {
                "id": 47007615,
                "name": "Radio/Nav/Telematics Concern",
                "opCode": "76",
                "price": 110.0000,
                "analyticsMsrp": 110.0000,
                "laborHours": 1.00,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007615"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/16"
                    }
                ]
            },
            {
                "id": 47007616,
                "name": "Brake Systems Concern",
                "opCode": "05",
                "price": 110.0000,
                "analyticsMsrp": 110.0000,
                "laborHours": 1.00,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007616"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/7"
                    }
                ]
            },
            {
                "id": 47007617,
                "name": "Electrical/Non PCM Flashes Concern",
                "opCode": "08",
                "price": 165.0000,
                "analyticsMsrp": 165.0000,
                "laborHours": 1.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007617"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/8"
                    }
                ]
            },
            {
                "id": 47007618,
                "name": "Engine Mechanical Concern",
                "opCode": "09",
                "price": 165.0000,
                "analyticsMsrp": 165.0000,
                "laborHours": 1.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007618"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/9"
                    }
                ]
            },
            {
                "id": 47007619,
                "name": "Engine Performance Concern (Diesel)",
                "opCode": "09",
                "price": 220.0000,
                "analyticsMsrp": 220.0000,
                "laborHours": 2.00,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007619"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/11"
                    }
                ]
            },
            {
                "id": 47007620,
                "name": "Manual Transmission Concern",
                "opCode": "M11",
                "price": 110.0000,
                "analyticsMsrp": 110.0000,
                "laborHours": 1.00,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007620"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/15"
                    }
                ]
            },
            {
                "id": 70417532,
                "name": "DIAGNOSE ESP LIGHT",
                "opCode": "08",
                "price": 160.0000,
                "analyticsMsrp": 160.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/70417532"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/37"
                    }
                ]
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/maintenance-services/repairs"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            }
        ]
    }

    export const mockGetRepairServicesVinFiltered: DataModels.GetServicesResponse = {
        services: [
            {
                id: 47007611,
                name: "AC/Heating Concern",
                price: 165.0000
            },
            {
                id: 47007612,
                name: "Automatic Transmission Concern",
                price: 165.0000
            },
            {
                id: 47007613,
                name: "Axle/Driveshaft/Differential Concern",
                price: 165.0000
            },
            {
                id: 47007614,
                name: "Body Systems/Trim Concern (Non-Electrical)",
                price: 55.0000
            },
            {
                id: 47007615,
                name: "Radio/Nav/Telematics Concern",
                price: 110.0000
            },
            {
                id: 47007616,
                name: "Brake Systems Concern",
                price: 110.0000
            },
            {
                id: 47007617,
                name: "Electrical/Non PCM Flashes Concern",
                price: 165.0000
            },
            {
                id: 47007618,
                name: "Engine Mechanical Concern",
                price: 165.0000
            },
            {
                id: 47007619,
                name: "Engine Performance Concern (Diesel)",
                price: 220.0000
            },
            {
                id: 47007620,
                name: "Manual Transmission Concern",
                price: 110.0000
            },
            {
                id: 70417532,
                name: "DIAGNOSE ESP LIGHT",
                price: 160.0000
            }
        ]
    }

    // GetRepairServicesWithoutVin
    export const mockGetRepairServicesWithoutVinRequest: DataModels.GetServicesNoVinRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        mileage: TEST_MILEAGE,
        make: TEST_MAKE,
        year: TEST_YEAR,
        model: TEST_MODEL,
        transmission: TEST_MAKE,
        train: TEST_TRAIN,
        engine: TEST_ENGINE,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_REPAIR_SERVICES_WITHOUT_VIN'
    }

    export const mockGetRepairServicesWithoutVin: SchedulingServiceDataModels.GetFactoryServicesResponse = {
        "services": [
            {
                "id": 47007611,
                "name": "AC/Heating Concern",
                "opCode": "14",
                "price": 165.0000,
                "analyticsMsrp": 165.0000,
                "laborHours": 1.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007611"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/3"
                    }
                ]
            },
            {
                "id": 47007612,
                "name": "Automatic Transmission Concern",
                "opCode": "11",
                "price": 165.0000,
                "analyticsMsrp": 165.0000,
                "laborHours": 1.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007612"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/2"
                    }
                ]
            },
            {
                "id": 47007613,
                "name": "Axle/Driveshaft/Differential Concern",
                "opCode": "03",
                "price": 165.0000,
                "analyticsMsrp": 165.0000,
                "laborHours": 1.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007613"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/4"
                    }
                ]
            },
            {
                "id": 47007614,
                "name": "Body Systems/Trim Concern (Non-Electrical)",
                "opCode": "96",
                "price": 55.0000,
                "analyticsMsrp": 55.0000,
                "laborHours": 0.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007614"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/6"
                    }
                ]
            },
            {
                "id": 47007615,
                "name": "Radio/Nav/Telematics Concern",
                "opCode": "76",
                "price": 110.0000,
                "analyticsMsrp": 110.0000,
                "laborHours": 1.00,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007615"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/16"
                    }
                ]
            },
            {
                "id": 47007616,
                "name": "Brake Systems Concern",
                "opCode": "05",
                "price": 110.0000,
                "analyticsMsrp": 110.0000,
                "laborHours": 1.00,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007616"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/7"
                    }
                ]
            },
            {
                "id": 47007617,
                "name": "Electrical/Non PCM Flashes Concern",
                "opCode": "08",
                "price": 165.0000,
                "analyticsMsrp": 165.0000,
                "laborHours": 1.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007617"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/8"
                    }
                ]
            },
            {
                "id": 47007618,
                "name": "Engine Mechanical Concern",
                "opCode": "09",
                "price": 165.0000,
                "analyticsMsrp": 165.0000,
                "laborHours": 1.50,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007618"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/9"
                    }
                ]
            },
            {
                "id": 47007619,
                "name": "Engine Performance Concern (Diesel)",
                "opCode": "09",
                "price": 220.0000,
                "analyticsMsrp": 220.0000,
                "laborHours": 2.00,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007619"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/11"
                    }
                ]
            },
            {
                "id": 47007620,
                "name": "Manual Transmission Concern",
                "opCode": "M11",
                "price": 110.0000,
                "analyticsMsrp": 110.0000,
                "laborHours": 1.00,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/47007620"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/15"
                    }
                ]
            },
            {
                "id": 70417532,
                "name": "DIAGNOSE ESP LIGHT",
                "opCode": "08",
                "price": 160.0000,
                "analyticsMsrp": 160.0000,
                "laborHours": 0.00,
                "selected": false,
                "benefitsDescription": "",
                "links": [
                    {
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/70417532"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/maintenance-service-category",
                        "href": "https://scheduler.dealer-fx.com/catalog/maintenance-service-categories/37"
                    }
                ]
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM/maintenance-services/repairs"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            }
        ]
    }

    export const mockGetRepairServicesWithoutVinFiltered: DataModels.GetServicesResponse = {
        services: [
            {
                id: 47007611,
                name: "AC/Heating Concern",
                price: 165.0000
            },
            {
                id: 47007612,
                name: "Automatic Transmission Concern",
                price: 165.0000
            },
            {
                id: 47007613,
                name: "Axle/Driveshaft/Differential Concern",
                price: 165.0000
            },
            {
                id: 47007614,
                name: "Body Systems/Trim Concern (Non-Electrical)",
                price: 55.0000
            },
            {
                id: 47007615,
                name: "Radio/Nav/Telematics Concern",
                price: 110.0000
            },
            {
                id: 47007616,
                name: "Brake Systems Concern",
                price: 110.0000
            },
            {
                id: 47007617,
                name: "Electrical/Non PCM Flashes Concern",
                price: 165.0000
            },
            {
                id: 47007618,
                name: "Engine Mechanical Concern",
                price: 165.0000
            },
            {
                id: 47007619,
                name: "Engine Performance Concern (Diesel)",
                price: 220.0000
            },
            {
                id: 47007620,
                name: "Manual Transmission Concern",
                price: 110.0000
            },
            {
                id: 70417532,
                name: "DIAGNOSE ESP LIGHT",
                price: 160.0000
            }
        ]
    }

    // GetDealerDepartment
    export const mockGetDealerDepartmentRequest: DataModels.GetDealerDepartmentRequestData = {
        servicesList: TEST_SERVICE_LIST,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_DEALER_DEPARTMENT'
    }

    export const mockGetDealerDepartment: SchedulingServiceDataModels.GetDealerDepartmentResponse = {
        "id": 4836,
        "name": "Riverdale Chrysler Jeep - Service",
        "code": "3QC",
        "email": "service@riverdalechryslerjeep.com",
        "segmentIncrement": 15,
        "maxAppsPerSegment": 3,
        "permittedRescheduleTime": 9999,
        "default": true,
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/appointment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/appointments"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-advisor-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/advisors"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            }
        ],
        "linkTemplates": [
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            }
        ]
    }

    export const mockGetDealerDepartmentFiltered: DataModels.GetDealerDepartmentResponse = {
        id: 4836
    };

    // GetAppointmentSummary
    export const mockGetAppointmentSummaryRequest: DataModels.GetAppointmentSummaryRequestData = {
        servicesList: TEST_SERVICE_LIST,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_APPOINTMENT_SUMMARY'
    }

    export const mockGetAppointmentSummary: SchedulingServiceDataModels.GetAppointmentSummaryResponse = {
        "taxes": 10,
        "taxesGt": 0.10,
        "total": 30.20,
        "totalLabourHours": 2.10
    }

    export const mockGetAppointmentSummaryFiltered: DataModels.GetAppointmentSummaryResponse = {
        total: 30.20,
        subTotal: 20.10,
        taxes: 10.10
    };

    // GetAdvisors
    export const mockGetAdvisorsRequest: DataModels.GetAdvisorsRequestData = {
        departmentId: TEST_DEPARTMENT,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_APPOINTMENT_SUMMARY'
    }

    export const mockGetAdvisors: SchedulingServiceDataModels.GetAdvisorsResponse = {
        "serviceAdvisors": [
            {
                "id": 332708,
                "name": "Albert Pico",
                "photoUrl": "https://ommadmin1.dealer-fx.com/UserPictures/5151/5151_332708.jpg",
                "memberId": 101336,
                "departmentId": 4836,
                "teamId": 5098,
                "links": [
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-department",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-advisor",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/advisors/101336"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/advisors/101336/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
                    }
                ]
            },
            {
                "id": 959285,
                "name": "Crystal Rentas",
                "memberId": 127487,
                "departmentId": 4836,
                "teamId": 5098,
                "links": [
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-department",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-advisor",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/advisors/127487"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/advisors/127487/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
                    }
                ]
            },
            {
                "id": 274509,
                "name": "Jose Gomez",
                "photoUrl": "https://ommadmin1.dealer-fx.com/UserPictures/5151/5151_274509.jpg",
                "memberId": 43032,
                "departmentId": 4836,
                "teamId": 5098,
                "links": [
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-department",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-advisor",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/advisors/43032"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/advisors/43032/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
                    }
                ]
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/advisors"
            }
        ]
    }

    export const mockGetAdvisorsFiltered: DataModels.GetAdvisorsResponse = {
        serviceAdvisors: [
            {
                id: 332708,
                name: "Albert Pico",
                memberId: 101336
            },
            {
                id: 959285,
                name: "Crystal Rentas",
                memberId: 127487

            },
            {
                id: 274509,
                name: "Jose Gomez",
                memberId: 43032
            }
        ]
    }

    // GetTransportationOptions
    export const mockGetTransportationOptionsRequest: DataModels.GetTransportationOptionsRequestData = {
        departmentId: TEST_DEPARTMENT,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_TRANSPORTATION_OPTIONS'
    }

    export const mockGetTransportationOptions: SchedulingServiceDataModels.GetTransportationOptionsResponse = {
        "options": [
            {
                "code": "waiter",
                "description": "Waiter",
                "enabled": true,
                "links": [
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/transportation-option",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/transportation-options/waiter"
                    }
                ]
            },
            {
                "code": "own-ride",
                "description": "Own ride",
                "enabled": true,
                "links": [
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/transportation-option",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/transportation-options/own-ride"
                    }
                ]
            },
            {
                "code": "need-rental",
                "description": "Rental car",
                "enabled": true,
                "links": [
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/transportation-option",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/transportation-options/need-rental"
                    }
                ]
            },
            {
                "code": "need-pickup",
                "description": "Pick up & Delivery",
                "enabled": true,
                "links": [
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/transportation-option",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/transportation-options/need-pickup"
                    }
                ]
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options"
            }
        ],
        "linkTemplates": [
            {
                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options?date=%7Byyyy-MM-dd%7D"
            }
        ]
    }

    export const mockGetTransportationOptionsFiltered: DataModels.GetTransportationOptionsResponse = {
        transportationOptions: [
            {
                code: "waiter",
                description: "Waiter"
            },
            {
                code: "own-ride",
                description: "Own ride"
            },
            {
                code: "need-rental",
                description: "Rental car"
            },
            {
                code: "need-pickup",
                description: "Pick up & Delivery"
            }
        ]
    }

    // GetDealerDepartmentTimeSegments
    export const mockGetDealerDepartmentTimeSegmentsRequest: DataModels.GetTimeSegmetsRequestData = {
        startdate: parseInt(TEST_START_DATE),
        enddate: parseInt(TEST_END_DATE),
        departmentId: TEST_DEPARTMENT,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_DEALER_DEPARTMENT_TIME_SEGMENTS'
    }

    // InvalidDataRequest
    export const mockGetDealerDepartmentTimeSegmentsRequestInvalidData: DataModels.GetTimeSegmetsRequestData = {
        //@ts-ignore
        startdate: "data is a string",
        //@ts-ignore
        enddate: TEST_END_DATE,
        departmentId: TEST_DEPARTMENT,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_DEALER_DEPARTMENT_TIME_SEGMENTS'
    }

    // TimestampData
    export const mockGetDealerDepartmentTimeSegmentsRequestTimestampData: DataModels.GetTimeSegmetsRequestData = {
        startdate: 1576886647000,
        enddate: 1576886647000,
        departmentId: TEST_DEPARTMENT,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_DEALER_DEPARTMENT_TIME_SEGMENTS'
    }


    export const mockGetDealerDepartmentTimeSegments: SchedulingServiceDataModels.GetDealerDepartmentTimeSegmentsResponse = {
        "segments": [
            {
                "time": "2020-11-25T07:30:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 0,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 2,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-26T07:45:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 3,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-27T08:00:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 3,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-25T08:15:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 3,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-25T08:30:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 0,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 2,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-25T08:45:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 3,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-25T09:00:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 0,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 2,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-25T09:15:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 3,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-25T09:30:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 3,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-25T09:45:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 3,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-25T10:00:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 3,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-25T10:15:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 3,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            },
            {
                "time": "2020-11-25T10:30:00.00-05:00",
                "endTime": "2020-11-25T17:00:00.00-05:00",
                "state": "opened",
                "slots": [
                    {
                        "name": "urn:dfx:service-advisor:101336",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:127487",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:service-advisor:43032",
                        "count": 1,
                        "links": []
                    },
                    {
                        "name": "urn:dfx:transportation-options:waiter",
                        "count": 997,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/waiter"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:own-ride",
                        "count": 1,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/own-ride"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-rental",
                        "count": 0,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-rental"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:transportation-options:need-pickup",
                        "count": 4,
                        "links": [
                            {
                                "rel": "http://api.dealer-fx.com/docs/rels/department-transportation-option",
                                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/transportation-options/need-pickup"
                            }
                        ]
                    },
                    {
                        "name": "urn:dfx:service-advisor",
                        "count": 3,
                        "links": []
                    }
                ],
                "available": true,
                "links": []
            }
        ],
        "links": [
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836"
            }
        ]
    }

    export const mockGetDealerDepartmentTimeSegmentsFiltered: DataModels.GetDealerDepartmentTimeSegmentsResponse = {
        "segments": [
            {
                "date": "2020-11-25",
                "slots": [
                    {
                        "time": "13:30",
                        "serviceAdvisors":
                            // "serviceAdvisors": {
                            // "slots": [
                            [
                                {
                                    "id": 101336
                                },
                                {
                                    "id": 43032
                                }
                            ]
                        ,
                        "transportationOptions":
                            // "slots": 
                            [
                                {
                                    "code": "waiter"
                                },
                                {
                                    "code": "own-ride"
                                }
                            ]
                    }
                    ,
                    {
                        "time": "14:15",
                        "serviceAdvisors": [
                            // "slots": [
                            {
                                "id": 101336
                            },
                            {
                                "id": 127487
                            },
                            {
                                "id": 43032
                            }
                        ]
                        ,
                        "transportationOptions": [
                            // "slots": [
                            {
                                "code": "waiter"
                            },
                            {
                                "code": "own-ride"
                            },
                            {
                                "code": "need-pickup"
                            }
                        ]
                    },
                    {
                        "time": "14:30",
                        "serviceAdvisors": [
                            // "slots": [
                            {
                                "id": 127487
                            },
                            {
                                "id": 43032
                            }
                        ]
                        ,
                        "transportationOptions": [
                            // "slots": [
                            {
                                "code": "waiter"
                            },
                            {
                                "code": "own-ride"
                            },
                            {
                                "code": "need-pickup"
                            }
                        ]
                    }
                    ,
                    {
                        "time": "14:45",
                        "serviceAdvisors": [
                            // "slots": [
                            {
                                "id": 101336
                            },
                            {
                                "id": 127487
                            },
                            {
                                "id": 43032
                            }
                        ],
                        "transportationOptions": [
                            // "slots": [
                            {
                                "code": "waiter"
                            },
                            {
                                "code": "own-ride"
                            },
                            {
                                "code": "need-pickup"
                            }
                        ]
                    }
                    ,
                    {
                        "time": "15:00",
                        "serviceAdvisors":
                            // "slots": [
                            [
                                {
                                    "id": 101336
                                },
                                {
                                    "id": 127487
                                }
                            ]
                        ,
                        "transportationOptions": [
                            // "slots": [
                            {
                                "code": "waiter"
                            },
                            {
                                "code": "own-ride"
                            },
                            {
                                "code": "need-pickup"
                            }
                        ]
                    }
                    ,
                    {
                        "time": "15:15",
                        "serviceAdvisors": [
                            // "slots": [
                            {
                                "id": 101336
                            },
                            {
                                "id": 127487
                            },
                            {
                                "id": 43032
                            }
                        ]
                        ,
                        "transportationOptions": [
                            // "slots": [
                            {
                                "code": "waiter"
                            },
                            {
                                "code": "own-ride"
                            },
                            {
                                "code": "need-pickup"
                            }
                        ]
                    }
                    ,
                    {
                        "time": "15:30",
                        "serviceAdvisors": [
                            // "slots": [
                            {
                                "id": 101336
                            },
                            {
                                "id": 127487
                            },
                            {
                                "id": 43032
                            }
                        ]
                        ,
                        "transportationOptions": [
                            // "slots": [
                            {
                                "code": "waiter"
                            },
                            {
                                "code": "own-ride"
                            },
                            {
                                "code": "need-pickup"
                            }
                        ]
                    }
                    ,
                    {
                        "time": "15:45",
                        "serviceAdvisors": [
                            // "slots": [
                            {
                                "id": 101336
                            },
                            {
                                "id": 127487
                            },
                            {
                                "id": 43032
                            }
                        ]
                        ,
                        "transportationOptions": [
                            // "slots": [
                            {
                                "code": "waiter"
                            },
                            {
                                "code": "own-ride"
                            },
                            {
                                "code": "need-pickup"
                            }
                        ]
                    }
                    ,
                    {
                        "time": "16:00",
                        "serviceAdvisors": [
                            // "slots": [
                            {
                                "id": 101336
                            },
                            {
                                "id": 127487
                            },
                            {
                                "id": 43032
                            }
                        ]
                        ,
                        "transportationOptions": [
                            // "slots": [
                            {
                                "code": "waiter"
                            },
                            {
                                "code": "own-ride"
                            },
                            {
                                "code": "need-pickup"
                            }
                        ]
                    }
                    ,
                    {
                        "time": "16:15",
                        "serviceAdvisors": [
                            // "slots": [
                            {
                                "id": 101336
                            },
                            {
                                "id": 127487
                            },
                            {
                                "id": 43032
                            }
                        ]
                        ,
                        "transportationOptions": [
                            // "slots": [
                            {
                                "code": "waiter"
                            },
                            {
                                "code": "own-ride"
                            },
                            {
                                "code": "need-pickup"
                            }
                        ]
                    }
                    ,
                    {
                        "time": "16:30",
                        "serviceAdvisors": [
                            // "slots": [
                            {
                                "id": 101336
                            },
                            {
                                "id": 127487
                            },
                            {
                                "id": 43032
                            }
                        ]
                        ,
                        "transportationOptions": [
                            // "slots": [
                            {
                                "code": "waiter"
                            },
                            {
                                "code": "own-ride"
                            },
                            {
                                "code": "need-pickup"
                            }
                        ]
                    }

                ]
            },
            {
                "date": "2020-11-26",
                "slots": [
                    {
                        "time": "13:45",
                        "serviceAdvisors": [ 
                                {
                                    "id": 101336
                                },
                                {
                                    "id": 127487
                                },
                                {
                                    "id": 43032
                                }
                            ]
                        ,
                        "transportationOptions": [ 
                            // "slots": [
                                {
                                    "code": "waiter"
                                },
                                {
                                    "code": "own-ride"
                                }
                            ]
                        }
                    
                ]
            },
            {
                "date": "2020-11-27",
                "slots": [
                    {
                        "time": "14:00",
                        "serviceAdvisors": [ 
                            // "slots": [
                                {
                                    "id": 101336
                                },
                                {
                                    "id": 127487
                                },
                                {
                                    "id": 43032
                                }
                            ]
                        ,
                        "transportationOptions": [ 
                            // "slots": [
                                {
                                    "code": "waiter"
                                },
                                {
                                    "code": "own-ride"
                                },
                                {
                                    "code": "need-pickup"
                                }
                            ]
                        }
                    
                ]
            }
        ]
    }


    // GetServiceAppointments
    export const mockGetServiceAppointmentsRequest: DataModels.GetAppointmentsRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_SERVICE_APPOINTMENTS'
    }

    export const mockGetServiceAppointments: SchedulingServiceDataModels.GetServiceAppointmentsResponse = {
        "appointments": [
            {
                "scheduledTime": "2020-11-20T15:15:00.00-05:00",
                "status": "booked",
                "serviceAdvisor": {
                    "name": "Albert Pico"
                },
                "departmentCode": "3QC",
                "transportationOption": {
                    "code": "waiter",
                    "description": "Waiter",
                    "enabled": true
                },
                "links": [
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/appointment",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-department",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836"
                    },
                    {
                        "rel": "http://api.dealer-fx.com/docs/rels/service-advisor",
                        "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/service-advisors/332708"
                    }
                ]
            }
        ],
        "links": [
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            }
        ]
    }

    export const mockGetServiceAppointmentsFiltered: DataModels.GetServiceAppointmentsResponse = {
        appointments: [
            {
                scheduledTime: "2020-11-20T15:15:00.00-05:00",
                status: "booked",
                appointmentId: "55292010",
                departmentId: "4836"
            }
        ]
    };

    // PostAppointment
    export const mockPostAppointmentRequest: DataModels.PostAppointmentRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        dealerToken: TEST_DEALER_TOKEN,
        departmentId: TEST_DEPARTMENT,
        body: {
            customer: {id : TEST_CUST_ID},
            customerConcernsInfo: "customerConcernsInfo",
            advisorId: 0,
            transportationOptionCode: "transportationOptionCode",
            scheduledTime: "scheduledTime",
            mileage: {
                value: 0,
                unitsKind: "unitsKind"
            },
            services: {
                drs: [
                    {
                        id: 0,
                        comment: "string"
                    }
                ],
                frs: [
                    {
                        id: 0,
                        comment: "string"
                    }
                ],
                repair: [
                    {
                        id: 0,
                        comment: "string"
                    }
                ]
            }
        },
        requestedService: 'POST_APPOINTMENT'
    }

    export const mockPostAppointment: SchedulingServiceDataModels.PostAppointmentResponse = {
        "customer": {
            "id": "urn:dfx:customer:103129767",
            "firstName": "TEST",
            "lastName": "FCA",
            "phone": "2484206482",
            "email": "testkh19@gmail.com",
            "phones": [
                {
                    "type": "default",
                    "number": "2484206482"
                },
                {
                    "type": "home",
                    "number": "2484206482"
                }
            ],
            "emails": [
                {
                    "type": "business",
                    "email": "testkh19@gmail.com"
                },
                {
                    "type": "personal",
                    "email": "testkh19@gmail.com"
                },
                {
                    "type": "default",
                    "email": "testkh19@gmail.com"
                }
            ]
        },
        "scheduledTime": "2020-11-20T15:15:00.00-05:00",
        "mileage": {
            "value": 150,
            "unitsKind": "unspecified"
        },
        "status": "missed",
        "customerConcernsInfo": "MY FIRST APP",
        "confirmationCode": "DFX-WX3L6",
        "advisor": {
            "id": 101336,
            "name": "Albert Pico",
            "photoUrl": "https://ommadmin1.dealer-fx.com/UserPictures/5151/5151_332708.jpg",
            "departmentId": 4836
        },
        "transportationOption": {
            "code": "waiter",
            "enabled": false,
            "links": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/transportation-option",
                    "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/transportation-options/waiter"
                }
            ]
        },
        "services": {
            "summary": {
                "taxes": 2.78,
                "taxesGt": 2.50,
                "total": 264.23,
                "totalLabourHours": 0.60
            },
            "drs": [
                {
                    "id": 2982763,
                    "name": "Service Contract Lube, Oil and Filter",
                    "opCode": "EXLOF",
                    "price": 29.0000,
                    "analyticsMsrp": 29.0000,
                    "laborHours": 0.0,
                    "selected": false,
                    "comment": "Service Contract Lube, Oil and Filter",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/2982763"
                        }
                    ]
                }
            ],
            "frs": [
                {
                    "id": 82893,
                    "name": "Replace engine oil and filter",
                    "opCode": "30",
                    "price": 69.9500,
                    "analyticsMsrp": 69.9500,
                    "laborHours": 0.0,
                    "selected": false,
                    "comment": "Replace engine oil and filter",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/82893"
                        }
                    ]
                }
            ],
            "repair": [
                {
                    "id": 70417486,
                    "name": "ABS Light Diagnosis",
                    "opCode": "05",
                    "price": 160.0000,
                    "analyticsMsrp": 160.0000,
                    "laborHours": 0.0,
                    "selected": false,
                    "comment": "ABS Light Diagnosis",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/70417486"
                        }
                    ]
                }
            ],
            "recalls": []
        },
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=opcode1%252copcode2&code=code"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-advisor-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/advisors"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-advisor",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/advisors/101336"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/advisors/101336/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=opcode1%252copcode2&code=code"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/repair-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/services/repairs"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/appointment-calendar+ics",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/appointments/55292010/calendar/855aa652af1c40ccb3df8e587fc9db83?extension=ics&culture=en-US"
            }
        ],
        "linkTemplates": [
            {
                "rel": "http://api.dealer-fx.com/docs/rels/required-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/services/frs/%7Bmileage%7Cmonths%7D/%7Bmileage.value%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/recommended-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/services/drs/%7Bmileage%7Cmonths%7D/%7Bmileage.value%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/advisors/101336/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            }
        ]
    }

    export const mockPostAppointmentFiltered: DataModels.PostAppointmentResponse = {
        status: "missed",
        confirmationCode: "DFX-WX3L6",
        appointmentId: "55292010"
    };

    // DeleteServiceAppointment
    export const mockDeleteServiceAppointmentRequest: DataModels.AppointmentRequestData = {
        appointmentId: TEST_APPOINTMENT_ID,
        departmentId: TEST_DEPARTMENT,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'DELETE_SERVICE_APPOINTMENT'
    }

    export const mockDeleteServiceAppointment: SchedulingServiceDataModels.DeleteServiceAppointmentResponse = {
        "customer": {
            "id": "urn:dfx:customer:103129767",
            "firstName": "TEST",
            "lastName": "FCA",
            "phone": "2484206482",
            "email": "testkh19@gmail.com",
            "phones": [
                {
                    "type": "default",
                    "number": "2484206482"
                },
                {
                    "type": "home",
                    "number": "2484206482"
                }
            ],
            "emails": [
                {
                    "type": "business",
                    "email": "testkh19@gmail.com"
                },
                {
                    "type": "personal",
                    "email": "testkh19@gmail.com"
                },
                {
                    "type": "default",
                    "email": "testkh19@gmail.com"
                }
            ]
        },
        "scheduledTime": "2020-11-20T15:15:00.00-05:00",
        "mileage": {
            "value": 150,
            "unitsKind": "unspecified"
        },
        "status": "missed",
        "customerConcernsInfo": "MY FIRST APP",
        "confirmationCode": "DFX-WX3L6",
        "advisor": {
            "id": 101336,
            "name": "Albert Pico",
            "photoUrl": "https://ommadmin1.dealer-fx.com/UserPictures/5151/5151_332708.jpg",
            "departmentId": 4836
        },
        "transportationOption": {
            "code": "waiter",
            "enabled": false,
            "links": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/transportation-option",
                    "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/transportation-options/waiter"
                }
            ]
        },
        "services": {
            "summary": {
                "taxes": 2.78,
                "taxesGt": 2.50,
                "total": 264.23,
                "totalLabourHours": 0.60
            },
            "drs": [
                {
                    "id": 2982763,
                    "name": "Service Contract Lube, Oil and Filter",
                    "opCode": "EXLOF",
                    "price": 29.0000,
                    "analyticsMsrp": 29.0000,
                    "laborHours": 0.0,
                    "selected": false,
                    "comment": "Service Contract Lube, Oil and Filter",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/2982763"
                        }
                    ]
                }
            ],
            "frs": [
                {
                    "id": 82893,
                    "name": "Replace engine oil and filter",
                    "opCode": "30",
                    "price": 69.9500,
                    "analyticsMsrp": 69.9500,
                    "laborHours": 0.0,
                    "selected": false,
                    "comment": "Replace engine oil and filter",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/82893"
                        }
                    ]
                }
            ],
            "repair": [
                {
                    "id": 70417486,
                    "name": "ABS Light Diagnosis",
                    "opCode": "05",
                    "price": 160.0000,
                    "analyticsMsrp": 160.0000,
                    "laborHours": 0.0,
                    "selected": false,
                    "comment": "ABS Light Diagnosis",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/70417486"
                        }
                    ]
                }
            ],
            "recalls": []
        },
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=opcode1%252copcode2&code=code"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-advisor-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/advisors"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-advisor",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/advisors/101336"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/advisors/101336/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=opcode1%252copcode2&code=code"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/repair-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/services/repairs"
            }
        ],
        "linkTemplates": [
            {
                "rel": "http://api.dealer-fx.com/docs/rels/required-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/services/frs/%7Bmileage%7Cmonths%7D/%7Bmileage.value%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/recommended-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/services/drs/%7Bmileage%7Cmonths%7D/%7Bmileage.value%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55292010/departments/4836/advisors/101336/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            }
        ]
    }

    export const mockDeleteServiceAppointmentFiltered: DataModels.DeleteServiceAppointmentResponse = {};

    // UpdateServiceAppointment
    export const mockUpdateServiceAppointmentRequest: DataModels.PutAppointmentRequestData = {
        vin: TEST_VIN,
        userid: TEST_USERID,
        dealerToken: TEST_DEALER_TOKEN,
        appointmentId: TEST_APPOINTMENT_ID,
        departmentId: TEST_DEPARTMENT,
        body: {
            customer: {id: TEST_CUST_ID},
            customerConcernsInfo: "customerConcernsInfo",
            advisorId: 0,
            transportationOptionCode: "transportationOptionCode",
            scheduledTime: "scheduledTime",
            mileage: {
                value: 0,
                unitsKind: "unitsKind"
            },
            services: {
                drs: [
                    {
                        id: 0,
                        comment: "string"
                    }
                ],
                frs: [
                    {
                        id: 0,
                        comment: "string"
                    }
                ],
                repair: [
                    {
                        id: 0,
                        comment: "string"
                    }
                ]
            }
        },
        requestedService: 'UPDATE_SERVICE_APPOINTMENT'
    }

    export const mockUpdateServiceAppointment: SchedulingServiceDataModels.UpdateServiceAppointmentResponse = {
        "customer": {
            "id": "urn:dfx:customer:103129767",
            "firstName": "TEST",
            "lastName": "FCA",
            "phone": "2484206482",
            "email": "testkh19@gmail.com",
            "phones": [
                {
                    "type": "default",
                    "number": "2484206482"
                },
                {
                    "type": "home",
                    "number": "2484206482"
                }
            ],
            "emails": [
                {
                    "type": "business",
                    "email": "testkh19@gmail.com"
                },
                {
                    "type": "personal",
                    "email": "testkh19@gmail.com"
                },
                {
                    "type": "default",
                    "email": "testkh19@gmail.com"
                }
            ]
        },
        "scheduledTime": "2020-11-20T15:15:00.00-05:00",
        "mileage": {
            "value": 150,
            "unitsKind": "unspecified"
        },
        "customerConcernsInfo": "MY FIRST APP",
        "confirmationCode": "DFX-WX5WN",
        "advisor": {
            "id": 101336,
            "name": "Albert Pico",
            "photoUrl": "https://ommadmin1.dealer-fx.com/UserPictures/5151/5151_332708.jpg",
            "departmentId": 4836
        },
        "transportationOption": {
            "code": "waiter",
            "enabled": false,
            "links": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/transportation-option",
                    "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/transportation-options/waiter"
                }
            ]
        },
        "services": {
            "summary": {
                "taxes": 2.78,
                "taxesGt": 2.50,
                "total": 264.23,
                "totalLabourHours": 0.60
            },
            "drs": [
                {
                    "id": 2982763,
                    "name": "Service Contract Lube, Oil and Filter",
                    "opCode": "EXLOF",
                    "price": 29.0000,
                    "analyticsMsrp": 29.0000,
                    "laborHours": 0.0,
                    "selected": false,
                    "comment": "Service Contract Lube, Oil and Filter",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/2982763"
                        }
                    ]
                }
            ],
            "frs": [
                {
                    "id": 82893,
                    "name": "Replace engine oil and filter",
                    "opCode": "30",
                    "price": 69.9500,
                    "analyticsMsrp": 69.9500,
                    "laborHours": 0.0,
                    "selected": false,
                    "comment": "Replace engine oil and filter",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/82893"
                        }
                    ]
                }
            ],
            "repair": [
                {
                    "id": 70417486,
                    "name": "ABS Light Diagnosis",
                    "opCode": "05",
                    "price": 160.0000,
                    "analyticsMsrp": 160.0000,
                    "laborHours": 0.0,
                    "selected": false,
                    "comment": "ABS Light Diagnosis",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/70417486"
                        }
                    ]
                }
            ],
            "recalls": []
        },
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/departments"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/departments/4836"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/departments/4836/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=opcode1%252copcode2&code=code"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-advisor-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/departments/4836/advisors"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-advisor",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/departments/4836/advisors/101336"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/departments/4836/advisors/101336/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=opcode1%252copcode2&code=code"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/repair-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/services/repairs"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/appointment-calendar+ics",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/appointments/55295015/calendar/cde6a44e76fd4b54a1154fb6bbc477c1?extension=ics&culture=en-US"
            }
        ],
        "linkTemplates": [
            {
                "rel": "http://api.dealer-fx.com/docs/rels/required-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/services/frs/%7Bmileage%7Cmonths%7D/%7Bmileage.value%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/recommended-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/services/drs/%7Bmileage%7Cmonths%7D/%7Bmileage.value%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/departments/4836/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55295015/departments/4836/advisors/101336/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            }
        ]
    }

    export const mockUpdateServiceAppointmentFiltered: DataModels.PutAppointmentRequestResponse = {
        confirmationCode: "DFX-WX5WN",
        appointmentId: "55295015"
    };

    // GetServiceAppointmentDetails
    export const mockGetServiceAppointmentDetailsRequest: DataModels.AppointmentRequestData = {
        appointmentId: TEST_APPOINTMENT_ID,
        departmentId: TEST_DEPARTMENT,
        dealerToken: TEST_DEALER_TOKEN,
        requestedService: 'GET_SERVICE_APPOINTMENT_DETAILS'
    }

    export const mockGetServiceAppointmentDetails: SchedulingServiceDataModels.GetServiceAppointmentDetailsResponse = {
        "customer": {
            "id": "urn:dfx:customer:103129767",
            "firstName": "TEST",
            "lastName": "FCA",
        },
        "scheduledTime": "2020-11-20T15:15:00.00-05:00",
        "mileage": {
            "value": 150,
            "unitsKind": "mileage"
        },
        "status": "missed",
        "customerConcernsInfo": "MY FIRST APP",
        "confirmationCode": "DFX-WX7HU",
        "advisor": {
            "id": 332708,
            "name": "Albert Pico",
            "photoUrl": "https://ommadmin1.dealer-fx.com/UserPictures/5151/5151_332708.jpg",
            "departmentId": 4836
        },
        "transportationOption": {
            "code": "waiter",
            "description": "Waiter",
            "links": [
                {
                    "rel": "http://api.dealer-fx.com/docs/rels/transportation-option",
                    "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/transportation-options/waiter"
                }
            ]
        },
        "services": {
            "summary": {
                "taxes": 20,
                "taxesGt": 0.10,
                "total": 30.20,
            },
            "drs": [
                {
                    "id": 2982763,
                    "name": "Service Contract Lube, Oil and Filter",
                    "price": 29.0000,
                    "selected": false,
                    "comment": "Service Contract Lube, Oil and Filter",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/2982763"
                        }
                    ]
                }
            ],
            "frs": [
                {
                    "id": 82893,
                    "name": "Replace engine oil and filter",
                    "price": 69.9500,
                    "selected": false,
                    "comment": "Replace engine oil and filter",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/82893"
                        }
                    ]
                }
            ],
            "repair": [
                {
                    "id": 70417486,
                    "name": "ABS Light Diagnosis",
                    "price": 160.0000,
                    "selected": false,
                    "comment": "ABS Light Diagnosis",
                    "links": [
                        {
                            "href": "https://scheduler.dealer-fx.com/catalog/maintenance-services/70417486"
                        }
                    ]
                }
            ],
            "recalls": []
        },
        "links": [
            {
                "rel": "self",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/departments"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/departments/4836"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/departments/4836/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-advisor-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/departments/4836/advisors"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-advisor",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/departments/4836/advisors/101336"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/departments/4836/advisors/101336/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/vehicle",
                "href": "https://scheduler.dealer-fx.com/catalog/vehicles/2C3CCAGG7LH2003XM"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/repair-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/services/repairs"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/appointment-calendar+ics",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/4836/appointments/55297074/calendar/64cc369fbe7040e595a28a54e75bd4b2?extension=ics&culture=en-US"
            }
        ],
        "linkTemplates": [
            {
                "rel": "http://api.dealer-fx.com/docs/rels/required-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/services/frs/%7Bmileage%7Cmonths%7D/%7Bmileage.value%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/recommended-service-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/services/drs/%7Bmileage%7Cmonths%7D/%7Bmileage.value%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/departments/4836/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            },
            {
                "rel": "http://api.dealer-fx.com/docs/rels/service-department-member-time-segment-collection",
                "href": "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/55297074/departments/4836/advisors/101336/time-segments?StartDate=%7Byyyy-MM-dd%7D&EndDate=%7Byyyy-MM-dd%7D&opcodes=%7Bopcodes%7D&code=%7Bcode%7D"
            }
        ]
    }

    export const mockGetServiceAppointmentDetailsFiltered: DataModels.GetServiceAppointmentDetailsResponse = {
        customer: {
            id: "urn:dfx:customer:103129767",
            firstName: "TEST",
            lastName: "FCA",
        },
        scheduledTime: "2020-11-20T15:15:00.00-05:00",
        mileage: {
            value: 150,
            unitsKind: "mileage"
        },
        status: "missed",
        customerConcernsInfo: "MY FIRST APP",
        advisor: {
            id: 332708,
            name: "Albert Pico",
            departmentId: 4836
        },
        transportationOption: {
            code: "waiter",
            description: "Waiter"
        },
        services: {
            summary: {
                taxes: 20.10,
                subTotal: 10.10,
                total: 30.20,

            },
            drs: [
                {
                    id: 2982763,
                    name: "Service Contract Lube, Oil and Filter",
                    price: 29.0000,
                    selected: false,
                    comment: "Service Contract Lube, Oil and Filter"
                }
            ],
            frs: [
                {
                    id: 82893,
                    name: "Replace engine oil and filter",
                    price: 69.9500,
                    selected: false,
                    comment: "Replace engine oil and filter"
                }
            ],
            repair: [
                {
                    id: 70417486,
                    name: "ABS Light Diagnosis",
                    price: 160.0000,
                    selected: false,
                    comment: "ABS Light Diagnosis"
                }
            ],
            "recalls": []
        }
    }


}