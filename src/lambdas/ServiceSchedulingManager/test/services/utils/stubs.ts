export namespace Stubs {

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
    const TEST_END_DATE = "2020-12-21";
    const TEST_START_DATE = "2019-12-21";
    const TEST_POST_BODY = {
        departmentId: "string",
        customerId: "string",
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
        departmentId: "string",
        customerId: "string",
        customerConcernsInfo: "string",
        advisorId: 0,
        transportationOptionCode: "string",
        scheduledTime: "string",
        appointmentId: "string",
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
            resourcePath: '/v1/digitalglovebox/servicescheduling/search'
        }
    }

    export const GetTokenEvent = {
        headers: headers,
        queryString: {
            hintDealer: TEST_DEALER
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/token'
        }
    }

    export const DfxSearchByVinEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/search'
        }
    }

    export const GetVehicleEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/dfxvehicle'
        }
    }

    export const GetDealerServicesByVinEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID,
            mileage: TEST_MILEAGE
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/dealerservices/mileage/{mileage}'
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
            resourcePath: '/v1/digitalglovebox/servicescheduling/dealerservices/{make}/{year}/{model}/{transmission}/{engine}/{train}/mileage/{mileage}'
        }
    }

    export const GetFactoryServicesByVinEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID,
            mileage: TEST_MILEAGE
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/factoryservices/mileage/{mileage}'
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
            resourcePath: '/v1/digitalglovebox/servicescheduling/factoryservices/{make}/{year}/{model}/{transmission}/{engine}/{train}/mileage/{mileage}'
        }
    }

    export const GetRepairServicesByVinEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID,
            mileage: TEST_MILEAGE
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/repairservices/mileage/{mileage}'
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
            resourcePath: '/v1/digitalglovebox/servicescheduling/repairservices/{make}/{year}/{model}/{transmission}/{engine}/{train}/mileage/{mileage}'
        }
    }

    export const GetAppointemntSummaryEvent = {
        headers: headers,

        requestBody: {
            servicesList: SERVICE_LIST
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/appointmentsummary'
        }
    }

    export const GetAdvisorsEvent = {
        headers: headers,
        pathParams: {
            departmentId: TEST_DEPARTMENT
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/department/{departmentId}/advisors'
        }
    }

    export const GetTransmissionOptionsEvent = {
        headers: headers,
        pathParams: {
            departmentId: TEST_DEPARTMENT
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/department/{departmentId}/trasportationoption'
        }
    }

    export const GetTimeSegmentsEvent = {
        headers: headers,
        pathParams: {
            departmentId: TEST_DEPARTMENT
        },
        queryString: {
            startDate: TEST_START_DATE,
            endDate: TEST_END_DATE
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/department/{departmentId}/timesegments'
        }
    }

    export const GetServiceAppointmentsEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/appointments'
        }
    }

    export const PostAppointmentEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        requestBody: TEST_POST_BODY,
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/appointment',
            httpMethod: 'POST'
        }
    }

    export const PutAppointmentEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        requestBody: TEST_PUT_BODY,
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/appointment',
            httpMethod: 'PUT'
        }
    }

    export const WrongMethodAppointmentEvent = {
        headers: headers,
        pathParams: {
            vin: TEST_VIN,
            userid: TEST_USERID
        },
        requestBody: TEST_PUT_BODY,
        runTimeInfo: {
            resourcePath: '/v1/accounts/{userid}/vehicles/{vin}/digitalglovebox/servicescheduling/appointment',
            httpMethod: 'GET'
        }
    }

    export const GetDealerDepartmentEvent = {
        headers: headers,

        requestBody: {
            servicesList: SERVICE_LIST
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/dealerdepartment'
        }
    }

    export const DeleteAppointmentEvent = {
        headers: headers,
        pathParams: {
            appointmentId: TEST_APPOINTMENT_ID,
            departmentId: TEST_DEPARTMENT
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/appointment/{appointmentId}/department/{departmentId}',
            httpMethod: 'DELETE'
        }
    }

    export const GetAppointmentDetailsEvent = {
        headers: headers,
        pathParams: {
            appointmentId: TEST_APPOINTMENT_ID,
            departmentId: TEST_DEPARTMENT
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/appointment/{appointmentId}/department/{departmentId}',
            httpMethod: 'GET'
        }
    }

    export const WrongMethodAppointmentDetailsEvent = {
        headers: headers,
        pathParams: {
            appointmentId: TEST_APPOINTMENT_ID,
            departmentId: TEST_DEPARTMENT
        },
        runTimeInfo: {
            resourcePath: '/v1/digitalglovebox/servicescheduling/appointment/{appointmentId}/department/{departmentId}',
            httpMethod: 'POST'
        }
    }

    export const ResourcePathNotSupportedEvent = {
        headers: headers,
        pathParams: {
            appointmentId: TEST_APPOINTMENT_ID,
            departmentId: TEST_DEPARTMENT
        },
        runTimeInfo: {
            resourcePath: '/v1/not/supported/path'
        }
    }

}