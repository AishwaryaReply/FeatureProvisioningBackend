import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { FeaturesHandler } from '../../src/features';
import { stubsHandler  } from './utils/stubs-handler'
import { GCVErrors } from 'gcv-utils';

chai.use(chaiAsPromised)
const expect = chai.expect;

describe('FeaturesHandler', () => {
    const testedFeaturesHandler = new FeaturesHandler();

    describe('getFeatureParams', () => {


        it('should give the correct output while calling FEATURE_SEARCH_LIST', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventGet.runTimeInfo);
            expect(expected).to.be.eqls("FEATURE_SEARCH_LIST");
        })

        it('should give an error while calling FEATURE_SEARCH_LIST', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventGetInvalid.runTimeInfo);
            expect(expected).to.not.eqls("FEATURE_SEARCH_LIST");
        })

        it('testing default section with invalidHttpMethod', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethod.runTimeInfo);
            //expect(expected).to.not.eqls("FEATURE_SEARCH_LIST");
            expect(expected).to.throw(new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid'));
        })

        
        it('should give the correct output while calling FEATURE_CREATE', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventPost.runTimeInfo);
            expect(expected).to.be.eqls("FEATURE_CREATE");
        })
    })
})