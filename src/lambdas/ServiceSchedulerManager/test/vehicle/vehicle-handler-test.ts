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


        it('should give the correct output while calling RULE_SEARCH_LIST', () => {
            const expected= testedVehicleHandler.getServiceRequested(stubsHandler.mockInputEventGet.runTimeInfo);
            expect(expected).to.be.eqls("RULE_SEARCH_LIST");
        })

    })  

})
