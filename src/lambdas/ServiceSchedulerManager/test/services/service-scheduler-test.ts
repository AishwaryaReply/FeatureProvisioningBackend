// Test tools
import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon';

import { ServiceScheduler } from '../../src/services';
import { SchedulingConectorService, SchedulingServiceDataModels } from 'gcv-meld';
import { Stubs } from './utils/stubs';
import { DataModels } from '../../src/interfaces';

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

        it('should return the expected the expected empty response', async () => {            
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

        it('should return the expected the expected empty response', async () => {            
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

        it('should return the expected the expected empty response', async () => {            
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

        it('should return the expected the expected empty response', async () => {            
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

        it('should return the expected the expected empty response', async () => {            
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

        it('should return the expected the expected empty response', async () => {            
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

        it('should return the expected the expected empty response', async () => {            
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

        it('should return the expected the expected empty response', async () => {            
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

        it('should return the expected the expected empty response', async () => {            
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

        it('should return the expected the expected empty response', async () => {            
            const noGetRepairServicesWithoutVin:SchedulingServiceDataModels.GetRepairServicesResponse = { };

            sinon.stub(SchedulingConectorService, 'getRepairServicesWithoutVin').resolves(noGetRepairServicesWithoutVin);
            const response = await testServiceSchedulerService.getRepairServicesWithoutVin(Stubs.mockGetRepairServicesWithoutVinRequest);
            
            expect(response).to.be.deep.equal({});
        })       
    });

});