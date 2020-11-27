// Test tools
import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon';

import { ServiceScheduler } from '../../src/services';
import { SchedulingConectorService, SchedulingServiceDataModels } from 'gcv-meld';
import { Stubs } from './utils/stubs';
import { DataModels } from '../../src/interfaces';
import { GCVErrors } from 'gcv-utils';

chai.use(chaiAsPromised)
const expect = chai.expect;

describe('ServiceSchedulerService', () => {
    const testServiceSchedulerService = new ServiceScheduler();

    describe('searchByEmail', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getDfxSearch').resolves(Stubs.mockSearchByEmail);
            
            const expected: DataModels.SearchEmailResponse = Stubs.mockSearchByEmailFiltered;
            const response = await testServiceSchedulerService.searchByEmail(Stubs.mockSearchByEmailRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {
            let resp:SchedulingServiceDataModels.GetSearchResponse = Stubs.mockSearchByEmail;
            delete resp.customerPreviews[0].foundType;
            sinon.stub(SchedulingConectorService, 'getDfxSearch').resolves(resp);
            
            const expected: DataModels.SearchEmailResponse = {};
            const response = await testServiceSchedulerService.searchByEmail(Stubs.mockSearchByEmailRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noSearchByEmailResponse = {
                customerPreviews: []
            };

            sinon.stub(SchedulingConectorService, 'getDfxSearch').resolves(noSearchByEmailResponse);
            const response = await testServiceSchedulerService.searchByEmail(Stubs.mockSearchByEmailRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('searchByVin', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getDfxSearch').resolves(Stubs.mockSearchByVin);
            
            const expected: DataModels.SearchVinResponse = Stubs.mockSearchByVinFiltered;
            const response = await testServiceSchedulerService.searchByVin(Stubs.mockSearchByVinRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {
            let resp:SchedulingServiceDataModels.GetSearchResponse = Stubs.mockSearchByVin;
            delete resp.customerPreviews[0].foundType;
            sinon.stub(SchedulingConectorService, 'getDfxSearch').resolves(resp);
            
            const expected: DataModels.SearchVinResponse = {};
            const response = await testServiceSchedulerService.searchByVin(Stubs.mockSearchByVinRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noSearchByVinResponse = {
                customerPreviews: []
            };

            sinon.stub(SchedulingConectorService, 'getDfxSearch').resolves(noSearchByVinResponse);
            const response = await testServiceSchedulerService.searchByVin(Stubs.mockSearchByVinRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getDfxVehicle', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getDfxVehicle').resolves(Stubs.mockGetDfxVehicle);
            
            const expected: DataModels.GetDfxVehicleResponse = Stubs.mockGetDfxVehicleFiltered;
            const response = await testServiceSchedulerService.getDfxVehicle(Stubs.mockGetDfxVehicleRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response', async () => {
            let resp:SchedulingServiceDataModels.GetVehicleResponse  = Stubs.mockGetDfxVehicle;
            delete resp.engine;
            sinon.stub(SchedulingConectorService, 'getDfxVehicle').resolves(resp);
            
            const expected: DataModels.GetDfxVehicleResponse = Stubs.mockGetDfxVehicleFiltered;
            delete expected.engine;
            const response = await testServiceSchedulerService.getDfxVehicle(Stubs.mockGetDfxVehicleRequest);
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetDfxVehicleResponse = {};

            sinon.stub(SchedulingConectorService, 'getDfxVehicle').resolves(noGetDfxVehicleResponse);
            const response = await testServiceSchedulerService.getDfxVehicle(Stubs.mockGetDfxVehicleRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getDfxToken', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getDfxToken').resolves(Stubs.mockGetDfxToken);
            
            const expected: DataModels.GetDfxTokenResponse = Stubs.mockGetDfxTokenFiltered;
            const response = await testServiceSchedulerService.getDfxToken(Stubs.mockGetDfxTokenRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response', async () => {
            let resp:SchedulingServiceDataModels.TokenResponse  = Stubs.mockGetDfxToken;
            delete resp.token_type;
            sinon.stub(SchedulingConectorService, 'getDfxToken').resolves(resp);
            
            const expected: DataModels.GetDfxTokenResponse = Stubs.mockGetDfxTokenFiltered;
            delete expected.tokenType;
            const response = await testServiceSchedulerService.getDfxToken(Stubs.mockGetDfxTokenRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetDfxToken:SchedulingServiceDataModels.TokenResponse = {
                access_token: "",
                token_type: "",
                expires_in: 0
            };

            sinon.stub(SchedulingConectorService, 'getDfxToken').resolves(noGetDfxToken);
            const response = await testServiceSchedulerService.getDfxToken(Stubs.mockGetDfxTokenRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getDealerServicesVin', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getDealerServicesVin').resolves(Stubs.mockGetDealerServicesVin);
            
            const expected: DataModels.GetServicesResponse = Stubs.mockGetDealerServicesVinFiltered;
            const response = await testServiceSchedulerService.getDealerServicesVin(Stubs.mockGetDealerServicesVinRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetDealerServicesVin:SchedulingServiceDataModels.GetDealerServicesResponse = { };

            sinon.stub(SchedulingConectorService, 'getDealerServicesVin').resolves(noGetDealerServicesVin);
            const response = await testServiceSchedulerService.getDealerServicesVin(Stubs.mockGetDealerServicesVinRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getDealerServicesWithoutVin', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getDealerServicesWithoutVin').resolves(Stubs.mockGetDealerServicesWithoutVin);
            
            const expected: DataModels.GetServicesResponse = Stubs.mockGetDealerServicesVinFiltered;
            const response = await testServiceSchedulerService.getDealerServicesWithoutVin(Stubs.mockGetDealerServicesWithoutVinRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetDealerServicesWithoutVin:SchedulingServiceDataModels.GetDealerServicesResponse = { };

            sinon.stub(SchedulingConectorService, 'getDealerServicesWithoutVin').resolves(noGetDealerServicesWithoutVin);
            const response = await testServiceSchedulerService.getDealerServicesWithoutVin(Stubs.mockGetDealerServicesWithoutVinRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getFactoryServicesVin', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getFactoryServicesVin').resolves(Stubs.mockGetFactoryServicesVin);
            
            const expected: DataModels.GetServicesResponse = Stubs.mockGetFactoryServicesVinFiltered;
            const response = await testServiceSchedulerService.getFactoryServicesVin(Stubs.mockGetFactoryServicesVinRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetFactoryServicesVin:SchedulingServiceDataModels.GetFactoryServicesResponse = { };

            sinon.stub(SchedulingConectorService, 'getFactoryServicesVin').resolves(noGetFactoryServicesVin);
            const response = await testServiceSchedulerService.getFactoryServicesVin(Stubs.mockGetFactoryServicesVinRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getFactoryServicesWithoutVin', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getFactoryServicesWithoutVin').resolves(Stubs.mockGetFactoryServicesWithoutVin);
            
            const expected: DataModels.GetServicesResponse = Stubs.mockGetFactoryServicesVinFiltered;
            const response = await testServiceSchedulerService.getFactoryServicesWithoutVin(Stubs.mockGetFactoryServicesWithoutVinRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetFactoryServicesWithoutVin:SchedulingServiceDataModels.GetFactoryServicesResponse = { };

            sinon.stub(SchedulingConectorService, 'getFactoryServicesWithoutVin').resolves(noGetFactoryServicesWithoutVin);
            const response = await testServiceSchedulerService.getFactoryServicesWithoutVin(Stubs.mockGetFactoryServicesWithoutVinRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getRepairServicesVin', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getRepairServicesVin').resolves(Stubs.mockGetRepairServicesVin);
            
            const expected: DataModels.GetServicesResponse = Stubs.mockGetRepairServicesVinFiltered;
            const response = await testServiceSchedulerService.getRepairServicesVin(Stubs.mockGetRepairServicesVinRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetRepairServicesVin:SchedulingServiceDataModels.GetRepairServicesResponse = { };

            sinon.stub(SchedulingConectorService, 'getRepairServicesVin').resolves(noGetRepairServicesVin);
            const response = await testServiceSchedulerService.getRepairServicesVin(Stubs.mockGetRepairServicesVinRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getRepairServicesWithoutVin', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getRepairServicesWithoutVin').resolves(Stubs.mockGetRepairServicesWithoutVin);
            
            const expected: DataModels.GetServicesResponse = Stubs.mockGetRepairServicesVinFiltered;
            const response = await testServiceSchedulerService.getRepairServicesWithoutVin(Stubs.mockGetRepairServicesWithoutVinRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetRepairServicesWithoutVin:SchedulingServiceDataModels.GetRepairServicesResponse = { };

            sinon.stub(SchedulingConectorService, 'getRepairServicesWithoutVin').resolves(noGetRepairServicesWithoutVin);
            const response = await testServiceSchedulerService.getRepairServicesWithoutVin(Stubs.mockGetRepairServicesWithoutVinRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getDealerDepartment', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getDealerDepartment').resolves(Stubs.mockGetDealerDepartment);
            
            const expected: DataModels.GetDealerDepartmentResponse = Stubs.mockGetDealerDepartmentFiltered;
            const response = await testServiceSchedulerService.getDealerDepartment(Stubs.mockGetDealerDepartmentRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetDealerDepartment:SchedulingServiceDataModels.GetDealerDepartmentResponse = { };

            sinon.stub(SchedulingConectorService, 'getDealerDepartment').resolves(noGetDealerDepartment);
            const response = await testServiceSchedulerService.getDealerDepartment(Stubs.mockGetDealerDepartmentRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getAppointmentSummary', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getAppointmentSummary').resolves(Stubs.mockGetAppointmentSummary);
            
            const expected: DataModels.GetAppointmentSummaryResponse = Stubs.mockGetAppointmentSummaryFiltered;
            const response = await testServiceSchedulerService.getAppointmentSummary(Stubs.mockGetAppointmentSummaryRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetAppointmentSummary:SchedulingServiceDataModels.GetAppointmentSummaryResponse = { };

            sinon.stub(SchedulingConectorService, 'getAppointmentSummary').resolves(noGetAppointmentSummary);
            const response = await testServiceSchedulerService.getAppointmentSummary(Stubs.mockGetAppointmentSummaryRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getAdvisors', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getAdvisors').resolves(Stubs.mockGetAdvisors);
            
            const expected: DataModels.GetAdvisorsResponse = Stubs.mockGetAdvisorsFiltered;
            const response = await testServiceSchedulerService.getAdvisors(Stubs.mockGetAdvisorsRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetAdvisors:SchedulingServiceDataModels.GetAdvisorsResponse = {
                serviceAdvisors: [],
                links:[]
            };

            sinon.stub(SchedulingConectorService, 'getAdvisors').resolves(noGetAdvisors);
            const response = await testServiceSchedulerService.getAdvisors(Stubs.mockGetAdvisorsRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getTransportationOptions', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getTransportationOptions').resolves(Stubs.mockGetTransportationOptions);
            
            const expected: DataModels.GetTransportationOptionsResponse = Stubs.mockGetTransportationOptionsFiltered;
            const response = await testServiceSchedulerService.getTransportationOptions(Stubs.mockGetTransportationOptionsRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetTransportationOptions:SchedulingServiceDataModels.GetTransportationOptionsResponse = {};

            sinon.stub(SchedulingConectorService, 'getTransportationOptions').resolves(noGetTransportationOptions);
            const response = await testServiceSchedulerService.getTransportationOptions(Stubs.mockGetTransportationOptionsRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getDealerDepartmentTimeSegments', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getDealerDepartmentTimeSegments').resolves(Stubs.mockGetDealerDepartmentTimeSegments);
            
            const expected: DataModels.GetDealerDepartmentTimeSegmentsResponse = Stubs.mockGetDealerDepartmentTimeSegmentsFiltered;
            const response = await testServiceSchedulerService.getDealerDepartmentTimeSegments(Stubs.mockGetDealerDepartmentTimeSegmentsRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetDealerDepartmentTimeSegments:SchedulingServiceDataModels.GetDealerDepartmentTimeSegmentsResponse = {};

            sinon.stub(SchedulingConectorService, 'getDealerDepartmentTimeSegments').resolves(noGetDealerDepartmentTimeSegments);
            const response = await testServiceSchedulerService.getDealerDepartmentTimeSegments(Stubs.mockGetDealerDepartmentTimeSegmentsRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getServiceAppointments', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getServiceAppointments').resolves(Stubs.mockGetServiceAppointments);
            
            const expected: DataModels.GetServiceAppointmentsResponse = Stubs.mockGetServiceAppointmentsFiltered;
            const response = await testServiceSchedulerService.getServiceAppointments(Stubs.mockGetServiceAppointmentsRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetServiceAppointments:SchedulingServiceDataModels.GetServiceAppointmentsResponse = {
                appointments: []
            };

            sinon.stub(SchedulingConectorService, 'getServiceAppointments').resolves(noGetServiceAppointments);
            const response = await testServiceSchedulerService.getServiceAppointments(Stubs.mockGetServiceAppointmentsRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('postAppointment', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'postAppointment').resolves(Stubs.mockPostAppointment);
            
            const expected: DataModels.PostAppointmentResponse = Stubs.mockPostAppointmentFiltered;
            const response = await testServiceSchedulerService.postAppointment(Stubs.mockPostAppointmentRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noPostAppointment:SchedulingServiceDataModels.PostAppointmentResponse = {
                status: "",
                confirmationCode: ""
            };

            sinon.stub(SchedulingConectorService, 'postAppointment').resolves(noPostAppointment);
            const response = await testServiceSchedulerService.postAppointment(Stubs.mockPostAppointmentRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('deleteServiceAppointment', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'deleteServiceAppointment').resolves(Stubs.mockDeleteServiceAppointment);
            
            const expected: DataModels.DeleteServiceAppointmentResponse = Stubs.mockDeleteServiceAppointmentFiltered;
            const response = await testServiceSchedulerService.deleteServiceAppointment(Stubs.mockDeleteServiceAppointmentRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected exception', async () => {            
            const noDeleteServiceAppointment:SchedulingServiceDataModels.DeleteServiceAppointmentResponse = {
                status: "",
                confirmationCode: ""
            };

            sinon.stub(SchedulingConectorService, 'deleteServiceAppointment').resolves(noDeleteServiceAppointment);
            const response = testServiceSchedulerService.deleteServiceAppointment(Stubs.mockDeleteServiceAppointmentRequest);
            
            expect(response).to.be.eventually.rejectedWith(GCVErrors.NotFound);
        })       
    });

    describe('postAppointment', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'postAppointment').resolves(Stubs.mockPostAppointment);
            
            const expected: DataModels.PostAppointmentResponse = Stubs.mockPostAppointmentFiltered;
            const response = await testServiceSchedulerService.postAppointment(Stubs.mockPostAppointmentRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noPostAppointment:SchedulingServiceDataModels.PostAppointmentResponse = {
                status: "",
                confirmationCode: ""
            };

            sinon.stub(SchedulingConectorService, 'postAppointment').resolves(noPostAppointment);
            const response = await testServiceSchedulerService.postAppointment(Stubs.mockPostAppointmentRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('updateServiceAppointment', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'updateServiceAppointment').resolves(Stubs.mockUpdateServiceAppointment);
            
            const expected: DataModels.PutAppointmentRequestResponse = Stubs.mockUpdateServiceAppointmentFiltered;
            const response = await testServiceSchedulerService.updateServiceAppointment(Stubs.mockUpdateServiceAppointmentRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response with status on', async () => {
            let resp:SchedulingServiceDataModels.UpdateServiceAppointmentResponse = Stubs.mockUpdateServiceAppointment;
            resp.status = "test";
            sinon.stub(SchedulingConectorService, 'updateServiceAppointment').resolves(resp);
            
            const expected: DataModels.PutAppointmentRequestResponse = Stubs.mockUpdateServiceAppointmentFiltered;
            const response = await testServiceSchedulerService.updateServiceAppointment(Stubs.mockUpdateServiceAppointmentRequest);           
            expected.status = "test";
           
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noUpdateServiceAppointment:SchedulingServiceDataModels.UpdateServiceAppointmentResponse = {
                status: "",
                confirmationCode: ""
            };

            sinon.stub(SchedulingConectorService, 'updateServiceAppointment').resolves(noUpdateServiceAppointment);
            const response = await testServiceSchedulerService.updateServiceAppointment(Stubs.mockUpdateServiceAppointmentRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

    describe('getServiceAppointmentDetails', () => {
        afterEach(sinon.restore);

        it('should return the expected response', async () => {
            sinon.stub(SchedulingConectorService, 'getServiceAppointmentDetails').resolves(Stubs.mockGetServiceAppointmentDetails);
            
            const expected: DataModels.GetServiceAppointmentDetailsResponse = Stubs.mockGetServiceAppointmentDetailsFiltered;
            const response = await testServiceSchedulerService.getServiceAppointmentDetails(Stubs.mockGetServiceAppointmentDetailsRequest);
            
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected empty response', async () => {            
            const noGetServiceAppointmentDetails:SchedulingServiceDataModels.GetServiceAppointmentDetailsResponse = {
                status: "",
                confirmationCode: ""
            };

            sinon.stub(SchedulingConectorService, 'getServiceAppointmentDetails').resolves(noGetServiceAppointmentDetails);
            const response = await testServiceSchedulerService.getServiceAppointmentDetails(Stubs.mockGetServiceAppointmentDetailsRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

});