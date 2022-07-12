import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { VehicleGroupHandler } from '../../src/vehicleGroup';
import { stubsHandler  } from './utils/stubs-handler'
import { GCVErrors } from 'gcv-utils';

chai.use(chaiAsPromised)
const expect = chai.expect;

describe('VehicleGroupHandler', () => {
    const testedVehicleGroupHandler = new VehicleGroupHandler();

    describe('getVehicleGroupParams', () => {

        it('should give the correct output while calling VEHICLEGROUP_FEATURE_INSERT', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventPostVehicleGroupByCode.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLEGROUP_FEATURE_INSERT");
        })

        it('should give the correct output while calling VEHICLEGROUP_FEATURE_DELETE', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventDeleteVehicleGroupByCode.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLEGROUP_FEATURE_DELETE");
        })

        it('testing default section with invalid httpMethod', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodForCode.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid'));
        })

        it('should give the correct output while calling VEHICLEGROUP_SEARCH_LIST', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventGetVehicleGroupBySearch.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLEGROUP_SEARCH_LIST");
        })

        it('should give the correct output while calling VEHICLEGROUP_CREATE', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventPostVehicleGroupBySearch.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLEGROUP_CREATE");
        })

        it('testing default section with invalid httpMethod', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodForSearch.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid'));
        })

        it('should give the correct output while calling VEHICLEGROUP_DELETE', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventDeleteVehicleGroupByID.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLEGROUP_DELETE");
        })

        it('should give the correct output while calling VEHICLEGROUP_UPDATE', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventPutVehicleGroupByID.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLEGROUP_UPDATE");
        })

        it('testing default section with invalid httpMethod', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodForID.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid'));
        })

        it('testing invalid httpMethod and invalid resourcePath', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodResourcePath.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.ServiceNotSupported(`service ${stubsHandler.mockInputEventInvalidHTTPMethodResourcePath.runTimeInfo.resourcePath} is not supported`));
        })

        it('testing invalid resourcePath', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventInvalidResourcePath.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.ServiceNotSupported(`service ${stubsHandler.mockInputEventInvalidResourcePath.runTimeInfo.resourcePath} is not supported`));
        })

        it('should give an error while calling VEHICLEGROUP_SEARCH_LIST', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventInvalidPostVehicleGroupByCode.runTimeInfo);
            expect(expected).to.not.eqls("VEHICLEGROUP_SEARCH_LIST");
        })

        it('should give an error while calling VEHICLEGROUP_CREATE', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputInvalidEventDeleteVehicleGroupByCode.runTimeInfo);
            expect(expected).to.not.eqls("VEHICLEGROUP_CREATE");
        })

        //Testing each switch case in prepareRequestData
        it('should give the correct output while calling VEHICLEGROUP_SEARCH_LIST', () => {
            const output= testedVehicleGroupHandler.getVehicleGroupParams(stubsHandler.mockInputVGSearchList);
            expect(output).to.be.eqls(stubsHandler.mockOutputVGSearchList);
        })

        it('should give the correct output with special character values, while calling VEHICLEGROUP_SEARCH_LIST', () => {
            const output= testedVehicleGroupHandler.getVehicleGroupParams(stubsHandler.mockInputVGSearchList);
            expect(output).to.be.eqls(stubsHandler.mockOutputVGSearchListSpecialChar);
        })

        it('should give the correct output while calling VEHICLEGROUP_CREATE', () => {
            const output= testedVehicleGroupHandler.getVehicleGroupParams(stubsHandler.mockInputVGCreate);
            expect(output).to.be.eqls(stubsHandler.mockOutputVGCreate);
        })

        it('should give the correct output with special character values, while calling VEHICLEGROUP_CREATE', () => {
            const output= testedVehicleGroupHandler.getVehicleGroupParams(stubsHandler.mockInputVGCreate);
            expect(output).to.be.eqls(stubsHandler.mockOutputVGCreateSpecialChar);
        })

    })  

})
