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

          //Testing each switch case in prepareRequestData
        it('should give the correct output while calling RULE_SEARCH_LIST', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleSearchList);
            expect(output).to.be.eqls(stubsHandler.mockOutputRuleSearchList);
        })

        it('should give the correct output with special character output values, while calling RULE_SEARCH_LIST', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleSearchList);
            expect(output).to.be.eqls(stubsHandler.mockOutputRuleSearchListSpecialChar);
        })

        it('should give an error while calling RULE_SEARCH_LIST', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleSearchList);
            expect(output).to.not.eqls(stubsHandler.mockOutputRuleSearchListInvalid);
        })

        it('should give an error while calling RULE_SEARCH_LIST', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleSearchListInvalidPath);
            expect(output).to.not.eqls(stubsHandler.mockOutputRuleSearchList);
        })

        it('should give the correct output while calling RULE_DELETE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleDeleteBySearch);
            expect(output).to.be.eqls(stubsHandler.mockOutputRuleDeleteBySearch);
        })

        it('should give the correct output with numeric output values, while calling RULE_DELETE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleDeleteBySearch);
            expect(output).to.be.eqls(stubsHandler.mockOutputRuleDeleteBySearchNumerics);
        })

        it('should give an error while calling RULE_DELETE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleDeleteBySearchInvalidPath);
            expect(output).to.not.eqls(stubsHandler.mockOutputRuleDeleteBySearch);
        })

        it('should give an error while calling RULE_DELETE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleDeleteBySearch);
            expect(output).to.not.eqls(stubsHandler.mockOutputRuleDeleteBySearchInvalid);
        })

        it('should give the correct output while calling RULE_DELETE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleDeleteById);
            expect(output).to.be.eqls(stubsHandler.mockOutputRuleDeleteById);
        })

        it('should give the correct output with numeric output values, while calling RULE_DELETE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleDeleteById);
            expect(output).to.be.eqls(stubsHandler.mockOutputRuleDeleteByIdNumerics);
        })

        it('should give an error while calling RULE_DELETE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleDeleteByIdInvalidPath);
            expect(output).to.not.eqls(stubsHandler.mockOutputRuleDeleteById);
        })

        it('should give an error while calling RULE_DELETE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleDeleteById);
            expect(output).to.not.eqls(stubsHandler.mockOutputRuleDeleteByIdInvalid);
        })

        it('should give the correct output while calling RULE_CREATE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleCreate);
            expect(output).to.be.eqls(stubsHandler.mockOutputRuleCreate);
        })

        it('should give the correct output with special character output values, while calling RULE_CREATE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleCreate);
            expect(output).to.be.eqls(stubsHandler.mockOutputRuleCreateSpecialChar);
        })

        it('should give an error while calling RULE_CREATE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleCreate);
            expect(output).to.not.eqls(stubsHandler.mockOutputRuleCreateInvalid);
        })

        it('should give an error while calling RULE_CREATE', () => {
            const output= testedRuleHandler.getRuleParams(stubsHandler.mockInputRuleCreateInvalidPath);
            expect(output).to.not.eqls(stubsHandler.mockOutputRuleCreate);
        })

    })  

})
