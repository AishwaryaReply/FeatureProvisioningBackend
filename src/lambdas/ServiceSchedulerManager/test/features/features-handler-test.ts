import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { FeaturesHandler } from '../../src/features';
import { Stubs } from './utils/stubs'
import { GCVErrors } from 'gcv-utils';

chai.use(chaiAsPromised)
const expect = chai.expect;

describe('FeatureHandlerService', () => {
    //const testServiceSchedulerService = new ServiceScheduler();
    const testServiceFeatureHandler = new FeaturesHandler();

    describe('getFeatureParams', () => {
        afterEach(sinon.restore);

        it('should return the expected repsonse with uppercase, when the getFeatureParams goes well', async () => {
            //sinon.stub(className,'methodName').resolves(Stubs.variableName)
            sinon.stub(FeaturesDao, 'selectFeaturesFromDB').resolves(Stubs.mockOutputGetListFeatures);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetFeatureResponse = Stubs.mockOutputGetListFeatures;
            const response = await testServiceFeatureScheduler.getListFeatures(Stubs.mockInputGetListFeatures);
            expect(response).to.be.deep.equal(expected);
        })
    });
})












describe('ServiceHandler', () => {
    const testedServiceHandler = new ServiceHandler();

    describe('SearchDFX', () => {


        it('should not throw any error calling get search by vin', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.DfxSearchByVinEvent);
            expect(devices.requestedService).to.be.eqls("DFX_SEARCH_VIN");
        })

        it('should throw an error validating an invalid get search request', () => {
            const invalidRequest = Stubs.clone(Stubs.DfxSearchByVinEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })

    });

    describe('getVehicle', () => {
        it('should not throw any error calling get vehicle by vin', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetVehicleEvent);
            expect(devices.requestedService).to.be.eqls("GET_DFX_VEHICLE");
        })

        it('should throw an error validating an invalid get vehicle request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetVehicleEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('getToken', () => {
        it('should not throw any error calling get a new token from dfx', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetTokenEvent);
            expect(devices.requestedService).to.be.eqls("GET_DFX_TOKEN");
        })

        it('should throw an error validating an invalid get search request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetTokenEvent);
            delete invalidRequest.queryString;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('getDealerServices', () => {
        it('should not throw any error calling get dealer service by vin', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetDealerServicesByVinEvent);
            expect(devices.requestedService).to.be.eqls("GET_DEALER_SERVICES_VIN");
        })

        it('should throw an error validating an invalid get search request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetDealerServicesByVinEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })

        it('should not throw any error calling get dealer service with no vin', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetDealerServicesNoVinEvent);
            expect(devices.requestedService).to.be.eqls("GET_DEALER_SERVICES_WITHOUT_VIN");
        })

        it('should throw an error validating an invalid get search request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetDealerServicesByVinEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('getFactoryServices', () => {
        it('should not throw any error calling get factory service by vin', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetFactoryServicesByVinEvent);
            expect(devices.requestedService).to.be.eqls("GET_FACTORY_SERVICES_VIN");
        })

        it('should throw an error validating an invalid get search request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetFactoryServicesByVinEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })

        it('should not throw any error calling get factory service with no vin', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetFactoryServicesNoVinEvent);
            expect(devices.requestedService).to.be.eqls("GET_FACTORY_SERVICES_WITHOUT_VIN");
        })

        it('should throw an error validating an invalid get search request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetFactoryServicesByVinEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('getRepairServices', () => {
        it('should not throw any error calling get repair service by vin', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetRepairServicesByVinEvent);
            expect(devices.requestedService).to.be.eqls("GET_REPAIR_SERVICES_VIN");
        })

        it('should throw an error validating an invalid get search request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetRepairServicesByVinEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })

        it('should not throw any error calling get repair service with no vin', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetRepairServicesNoVinEvent);
            expect(devices.requestedService).to.be.eqls("GET_REPAIR_SERVICES_WITHOUT_VIN");
        })

        it('should throw an error validating an invalid get search request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetRepairServicesByVinEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('getAppointmentSummary', () => {
        it('should not throw any error calling get appointment summary', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetAppointemntSummaryEvent);
            expect(devices.requestedService).to.be.eqls("GET_APPOINTMENT_SUMMARY");
        })

        it('should throw an error validating an invalid get appointment summary request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetAppointemntSummaryEvent);
            delete invalidRequest.requestBody;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('getAdvisors', () => {
        it('should not throw any error calling get advisors', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetAdvisorsEvent);
            expect(devices.requestedService).to.be.eqls("GET_ADVISORS");
        })

        it('should throw an error validating an invalid get advisors request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetAdvisorsEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('getTransportationOptions', () => {
        it('should not throw any error calling get transportation options', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetTransmissionOptionsEvent);
            expect(devices.requestedService).to.be.eqls("GET_TRANSPORTATION_OPTIONS");
        })

        it('should throw an error validating an invalid get transportation options request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetTransmissionOptionsEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('getDealerDepartmentTimeSegments', () => {
        it('should not throw any error calling get time segments', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetTimeSegmentsEvent);
            expect(devices.requestedService).to.be.eqls("GET_DEALER_DEPARTMENT_TIME_SEGMENTS");
        })

        it('should throw an error validating an invalid get time segments request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetTimeSegmentsEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('getServiceAppointments', () => {
        it('should not throw any error calling get service appointments', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetServiceAppointmentsEvent);
            expect(devices.requestedService).to.be.eqls("GET_SERVICE_APPOINTMENTS");
        })

        it('should throw an error validating an invalid get service appointments request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetServiceAppointmentsEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('postPutAppointment', () => {
        it('should not throw any error calling post appointment', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.PostAppointmentEvent);
            expect(devices.requestedService).to.be.eqls("POST_APPOINTMENT");
        })

        it('should throw an error validating an invalid post appointments request', () => {
            const invalidRequest = Stubs.clone(Stubs.PostAppointmentEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })

        it('should not throw any error calling the update appointment', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.PutAppointmentEvent);
            expect(devices.requestedService).to.be.eqls("UPDATE_SERVICE_APPOINTMENT");
        })

        it('should throw an error validating an invalid update appointments request', () => {
            const invalidRequest = Stubs.clone(Stubs.PutAppointmentEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })

        it('should throw an error validating an invalid method request', () => {
            const invalidRequest = Stubs.clone(Stubs.WrongMethodAppointmentEvent);
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.HttpMethodNotAllowed);
        })
    });

    describe('getDealerDepartment', () => {
        it('should not throw any error calling get dealer department', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetDealerDepartmentEvent);
            expect(devices.requestedService).to.be.eqls("GET_DEALER_DEPARTMENT");
        })

        it('should throw an error validating an invalid get dealer department request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetDealerDepartmentEvent);
            delete invalidRequest.requestBody;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
    });

    describe('deleteUpdateAppointment', () => {
        it('should not throw any error calling delete Appointment', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.DeleteAppointmentEvent);
            expect(devices.requestedService).to.be.eqls("DELETE_SERVICE_APPOINTMENT");
        })

        it('should throw an error validating an invalid delete appointment request', () => {
            const invalidRequest = Stubs.clone(Stubs.DeleteAppointmentEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })

        it('should not throw any error calling get Appointment details', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.GetAppointmentDetailsEvent);
            expect(devices.requestedService).to.be.eqls("GET_SERVICE_APPOINTMENT_DETAILS");
        })

        it('should throw an error validating an invalid delete appointment request', () => {
            const invalidRequest = Stubs.clone(Stubs.GetAppointmentDetailsEvent);
            delete invalidRequest.pathParams;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
        it('should throw an error validating an invalid method request', () => {
            const invalidRequest = Stubs.clone(Stubs.WrongMethodAppointmentDetailsEvent);
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.HttpMethodNotAllowed);
        })
    });

    describe('notSupportedPath', () => {
        it('should throw error when a path is not defined', () => {
            const invalidRequest = Stubs.clone(Stubs.ResourcePathNotSupportedEvent);
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.ServiceNotSupported);
        })
    });

});
