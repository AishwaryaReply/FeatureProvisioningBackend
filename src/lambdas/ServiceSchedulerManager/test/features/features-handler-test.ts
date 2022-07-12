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
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventGetFeature.runTimeInfo);
            expect(expected).to.be.eqls("FEATURE_SEARCH_LIST");
        })

        it('should give an error while calling FEATURE_SEARCH_LIST', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventGetInvalidPostFeature.runTimeInfo);
            expect(expected).to.not.eqls("FEATURE_SEARCH_LIST");
        })

        it('should give an error while calling FEATURE_CREATE', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventInvalidDeleteFeature.runTimeInfo);
            expect(expected).to.not.eqls("FEATURE_CREATE");
        })

        it('testing default section with invalidHttpMethod', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethod.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid'));
        })
    
        it('should give the correct output while calling FEATURE_CREATE', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventPostFeature.runTimeInfo);
            expect(expected).to.be.eqls("FEATURE_CREATE");
        })

        it('should give the correct output while calling FEATURE_UPDATE', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventPutFeature.runTimeInfo);
            expect(expected).to.be.eqls("FEATURE_UPDATE");
        })

        it('should give the correct output while calling FEATURE_DELETE by code', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventDeleteFeatureByCode.runTimeInfo);
            expect(expected).to.be.eqls("FEATURE_DELETE");
        })

        it('should give the correct output while calling FEATURE_DELETE by search', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventDeleteFeatureBySearch.runTimeInfo);
            expect(expected).to.be.eqls("FEATURE_DELETE");
        })

        it('testing invalid httpMethod and invalid resourcePath', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodResourcePath.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.ServiceNotSupported(`service ${stubsHandler.mockInputEventInvalidHTTPMethodResourcePath.runTimeInfo.resourcePath} is not supported`));
        })

        it('testing valid httpMethod and invalid resourcePath', () => {
            const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputEventInvalidResourcePath.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.ServiceNotSupported(`service ${stubsHandler.mockInputEventInvalidResourcePath.runTimeInfo.resourcePath} is not supported`));
        })



        //Testing each switch case in prepareRequestData
        it('should give the correct output while calling FEATURE_SEARCH_LIST', () => {
            //const expected= testedFeaturesHandler.getServiceRequested(stubsHandler.mockInputFeatureSearchList.runTimeInfo);
            const output= testedFeaturesHandler.getFeatureParams(stubsHandler.mockInputFeatureSearchList);
            expect(output).to.be.eqls(stubsHandler.mockOutputFeatureSearchList);
        })

        it('should give the correct output with special character values, while calling FEATURE_SEARCH_LIST', () => {
            const output= testedFeaturesHandler.getFeatureParams(stubsHandler.mockInputFeatureSearchList);
            expect(output).to.be.eqls(stubsHandler.mockOutputFeatureSearchListSpecialChar);
        })

        it('should give the correct output while calling FEATURE_CREATE', () => {
            const output= testedFeaturesHandler.getFeatureParams(stubsHandler.mockInputFeatureCreate);
            expect(output).to.be.eqls(stubsHandler.mockOutputFeatureCreate);
        })

        it('should give the correct output with special character values, while calling FEATURE_CREATE', () => {
            const output= testedFeaturesHandler.getFeatureParams(stubsHandler.mockInputFeatureCreate);
            expect(output).to.be.eqls(stubsHandler.mockOutputFeatureCreateSpecialChar);
        })

       /* FEATURE_UPDATE
        it('should give the correct output while calling FEATURE_UPDATE', () => {
            const output= testedFeaturesHandler.getFeatureParams(stubsHandler.mockInputFeatureUpdate);
            expect(output).to.be.eqls(stubsHandler.mockOutputFeatureUpdate);
        })

        it('should give the correct output with special character values, while calling FEATURE_UPDATE', () => {
            const output= testedFeaturesHandler.getFeatureParams(stubsHandler.mockInputFeatureUpdate);
            expect(output).to.be.eqls(stubsHandler.mockOutputFeatureUpdateSpecialChar);
        })
        */

    })  

})