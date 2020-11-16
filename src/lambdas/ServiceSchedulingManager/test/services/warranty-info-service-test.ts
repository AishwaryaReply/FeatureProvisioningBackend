import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon';
import { WarrantyInfoService } from '../../src/services';
import { DataModels } from '../../src/interfaces';
import { WarrantyInfoConnectorService } from 'gcv-meld';
import { Stubs } from './utils/stubs'

chai.use(chaiAsPromised)
const expect = chai.expect;

describe('WarrantyInfoService', () => {
    const testedWarrantyInfoService = new WarrantyInfoService();

    describe('getManual', () => {
        afterEach(sinon.restore);

        it('should get the pdf of a manual', async () => {
            sinon.stub(WarrantyInfoConnectorService, 'getPublication').resolves(Stubs.mockGetManualResponse);
            const expected: DataModels.GetManualResponseVM = {
                pdf: "https://msmownerassets.z13.web.core.windows.net/assets/publications/en-us/Jeep/2020/Renegade/P111286_20_BV_OM_EN_USC_t.pdf"
            };
            const response =  await testedWarrantyInfoService.getManual(Stubs.GetManualRequest);
            return expect(response).to.be.deep.equal(expected);

        }).timeout(30000);

        it('should return an empty response if the brand is wrong', async () => {
            const response =  await testedWarrantyInfoService.getManual(Stubs.GetManualNoBrandRequest);
            return expect(response).to.be.deep.equal({});

        }).timeout(30000);

        it('should return the expected empty response if no publication are available', async () => {
            let noManualResponse = {
                publications: []
            };

            sinon.stub(WarrantyInfoConnectorService, 'getPublication').resolves(noManualResponse);
            const response = await testedWarrantyInfoService.getManual(Stubs.GetManualRequest);
            
            expect(response).to.be.deep.equal({});
        })  

    });

    describe('getCoverages', () => {
        afterEach(sinon.restore);

        it('should get the coverages and filter the result correctly', async () => {
            sinon.stub(WarrantyInfoConnectorService, 'getCoverages').resolves(Stubs.mockGetCoveragesResponse);
            const response =  await testedWarrantyInfoService.getCoverages(Stubs.GetCoveragesRequest);
            return expect(response).to.be.deep.equal(Stubs.expectedMockGetCoverages);
        });

    });

    describe('getMileage', () => {
        afterEach(sinon.restore);

        it('should get the mileage correctly', async () => {
            sinon.stub(WarrantyInfoConnectorService, 'getMileage').resolves(Stubs.mockGetCoveragesMileage);

            const queryParams: DataModels.GetMileageRequestData = {
                vin: "19UUA564XXA005511",
                userid: "SXMUSEN_Jd1610162008155032I",
                requestedService: "GET_MILEAGE"
            };
            const response =  await testedWarrantyInfoService.getMileage(queryParams);
            return expect(response).to.be.deep.equal(Stubs.expectedMockGetMileage);

        }).timeout(30000);



    });
});
