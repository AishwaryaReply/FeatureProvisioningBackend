import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
// import { GCVErrors } from 'gcv-utils';
import { ServiceHandler } from '../../src/services';
import { Stubs } from './utils/stubs'
import { GCVErrors } from 'gcv-utils';

chai.use(chaiAsPromised)
const expect = chai.expect;

describe('ServiceHandler', () => {
    const testedServiceHandler = new ServiceHandler();

    describe('SearchDFX', () => {
        
        it('should not throw any error calling get search by email', () => {
            const devices = testedServiceHandler.getServiceParams(Stubs.DfxSearchByEmailEvent);
            expect(devices.requestedService).to.be.eqls("DFX_SEARCH_EMAIL");
        })
        
        it('should throw an error validating an invalid get search request', () => {
            const invalidRequest = Stubs.clone(Stubs.DfxSearchByEmailEvent);
            delete invalidRequest.queryString;
            expect(() => testedServiceHandler.getServiceParams(invalidRequest))
                .to.throw(GCVErrors.InvalidRequestParameter);
        })
        

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

    describe ('getVehicle', () => {
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

    describe ('getToken', () => {
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

});

