import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { VehicleHandler } from '../../src/vehicle';
import { stubsHandler  } from './utils/stubs-handler'
import { GCVErrors } from 'gcv-utils';

chai.use(chaiAsPromised)
const expect = chai.expect;

describe('VehicleHandler', () => {
    const testedVehicleHandler = new VehicleHandler();

    describe('getVehicleParams', () => {

        it('should give the correct output while calling VEHICLE_CREATE by id vin', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventPostVehicleByIDVin.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLE_CREATE");
        })

        it('should give the correct output while calling VEHICLE_DELETE by id vin', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventDeleteVehicleByIDVin.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLE_DELETE");
        })

        it('testing default section with invalid httpMethod', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodPutByIDVin.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid'));
        })

        it('should give the correct output while calling VEHICLE_SEARCH_LIST', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventGetVehicleByID.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLE_SEARCH_LIST");
        })

        it('should give the correct output while calling VEHICLE_CREATE by id', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventPostVehicleByID.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLE_CREATE");
        })

        it('should give the correct output while calling VEHICLE_DELETE by id', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventDeleteVehicleByID.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLE_DELETE");
        })

        it('testing default section with invalid httpMethod', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodPatchByID.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid'));
        })

        it('testing invalid httpMethod and invalid resourcePath', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodResourcePath.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.ServiceNotSupported(`service ${stubsHandler.mockInputEventInvalidHTTPMethodResourcePath.runTimeInfo.resourcePath} is not supported`));
        })

        it('testing invalid resourcePath', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidResourcePath.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.ServiceNotSupported(`service ${stubsHandler.mockInputEventInvalidResourcePath.runTimeInfo.resourcePath} is not supported`));
        })

        it('should give an error while calling VEHICLE_SEARCH_LIST', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidDeleteVehicleByID.runTimeInfo);
            expect(expected).to.not.eqls("VEHICLE_SEARCH_LIST");
        })

        it('should give an error while calling VEHICLE_CREATE', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidGetVehicleByID.runTimeInfo);
            expect(expected).to.not.eqls("VEHICLE_CREATE");
        })

    })  

})
