import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { RuleHandler } from '../../src/rule';
import { stubsHandler  } from './utils/stubs-handler'
import { GCVErrors } from 'gcv-utils';

chai.use(chaiAsPromised)
const expect = chai.expect;

describe('RuleHandler', () => {
    const testedRuleHandler = new RuleHandler();

    describe('getRuleParams', () => {


        it('should give the correct output while calling RULE_SEARCH_LIST', () => {
            const expected= testedRuleHandler.getServiceRequested(stubsHandler.mockInputEventGetRule.runTimeInfo);
            expect(expected).to.be.eqls("RULE_SEARCH_LIST");
        })

        it('should give the correct output while calling RULE_CREATE', () => {
            const expected= testedRuleHandler.getServiceRequested(stubsHandler.mockInputEventPostRule.runTimeInfo);
            expect(expected).to.be.eqls("RULE_CREATE");
        })

        it('should give the correct output while calling RULE_DELETE by id', () => {
            const expected= testedRuleHandler.getServiceRequested(stubsHandler.mockInputEventDeleteRuleByID.runTimeInfo);
            expect(expected).to.be.eqls("RULE_DELETE");
        })

        it('should give the correct output while calling RULE_DELETE by search', () => {
            const expected= testedRuleHandler.getServiceRequested(stubsHandler.mockInputEventDeleteRuleBySearch.runTimeInfo);
            expect(expected).to.be.eqls("RULE_DELETE");
        })

        it('testing default section with invalidHttpMethod', () => {
            const expected= testedRuleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodPutRule.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid'));
        })

        it('should give an error while calling RULE_SEARCH_LIST', () => {
            const expected= testedRuleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidPostRule.runTimeInfo);
            expect(expected).to.not.eqls("RULE_SEARCH_LIST");
        })

        it('should give an error while calling RULE_CREATE', () => {
            const expected= testedRuleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidGetRule.runTimeInfo);
            expect(expected).to.not.eqls("RULE_CREATE");
        })

        it('testing default section with invalidHttpMethod', () => {
            const expected= testedRuleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodPatchRule.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid'));
        })

        it('testing invalid httpMethod and invalid resourcePath', () => {
            const expected= testedRuleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidHTTPMethodResourcePath.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.ServiceNotSupported(`service ${stubsHandler.mockInputEventInvalidHTTPMethodResourcePath.runTimeInfo.resourcePath} is not supported`));
        })

        it('testing invalid resourcePath', () => {
            const expected= testedRuleHandler.getServiceRequested(stubsHandler.mockInputEventInvalidResourcePath.runTimeInfo);
            expect(expected).to.throw(new GCVErrors.ServiceNotSupported(`service ${stubsHandler.mockInputEventInvalidResourcePath.runTimeInfo.resourcePath} is not supported`));
        })
    })  

})
