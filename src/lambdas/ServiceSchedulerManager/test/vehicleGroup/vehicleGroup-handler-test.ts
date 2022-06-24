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




        it('should give the correct output while calling VEHICLEGROUP_SEARCH_LIST', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventGetVehicleGroupBySearch.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLEGROUP_SEARCH_LIST");
        })

        it('should give the correct output while calling VEHICLEGROUP_CREATE', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventPostVehicleGroupBySearch.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLEGROUP_CREATE");
        })



        it('should give the correct output while calling VEHICLEGROUP_DELETE', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventDeleteVehicleGroupByID.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLEGROUP_DELETE");
        })

        it('should give the correct output while calling VEHICLEGROUP_UPDATE', () => {
            const expected= testedVehicleGroupHandler.getServiceRequested(stubsHandler.mockInputEventPutVehicleGroupByID.runTimeInfo);
            expect(expected).to.be.eqls("VEHICLEGROUP_UPDATE");
        })


    })  

})
