import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon';

import { RuleFactory, RuleScheduler } from '../../src/rule';
import { Stubs } from './utils/stubs';
import { DataModels } from '../../src/interfaces';

chai.use(chaiAsPromised)
const expect = chai.expect;


describe('RuleSchedulerService', () => {
    const testServiceRuleScheduler = new RuleScheduler();

    describe('getRulesForFeature', () => {
        afterEach(sinon.restore);

        it('should return the expected response with uppercase, when the getRulesForFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'selectRulesForFeatureFromDB').resolves(Stubs.mockOutputGetRulesForFeature);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetFeaturesRulesResponse = Stubs.mockOutputGetRulesForFeature;
            const response = await testServiceRuleScheduler.getRulesForFeature(Stubs.mockInputGetRulesForFeature);
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response with lowercase values, when the getRulesForFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'selectRulesForFeatureFromDB').resolves(Stubs.mockOutputGetRulesForFeature);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetFeaturesRulesResponse = Stubs.mockOutputGetRulesForFeature;
            const response = await testServiceRuleScheduler.getRulesForFeature(Stubs.mockInputGetRulesForFeatureLowercase);
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response with special character values, when the getRulesForFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'selectRulesForFeatureFromDB').resolves(Stubs.mockOutputGetRulesForFeature);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetFeaturesRulesResponse = Stubs.mockOutputGetRulesForFeature;
            const response = await testServiceRuleScheduler.getRulesForFeature(Stubs.mockInputGetRulesForFeatureSpecialChar);
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response with numeric values, when the getRulesForFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'selectRulesForFeatureFromDB').resolves(Stubs.mockOutputGetRulesForFeature);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetFeaturesRulesResponse = Stubs.mockOutputGetRulesForFeature;
            const response = await testServiceRuleScheduler.getRulesForFeature(Stubs.mockInputGetRulesForFeatureNumerics);
            expect(response).to.be.deep.equal(expected);
        }) 

       

    });

    
    describe('insertRuleForFeature', () => {
        afterEach(sinon.restore);

        it('should return the expected response with uppercase, when the insertRuleForFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureRule').resolves(Stubs.mockOutputInsertRuleForFeature);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertRuleForFeature;
            const response = await testServiceRuleScheduler.insertRuleForFeature(Stubs.mockInputInsertRuleForFeature);
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response with special character values, when the insertRuleForFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureRule').resolves(Stubs.mockOutputInsertRuleForFeature);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertRuleForFeature;
            const response = await testServiceRuleScheduler.insertRuleForFeature(Stubs.mockInputInsertRuleForFeatureSpecialChar);
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response with lowercase values, when the insertRuleForFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureRule').resolves(Stubs.mockOutputInsertRuleForFeature);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertRuleForFeature;
            const response = await testServiceRuleScheduler.insertRuleForFeature(Stubs.mockInputInsertRuleForFeatureLowercase);
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response with uppercase, when the insertRuleForFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureRule').resolves(Stubs.mockOutputInsertRuleForFeatureUpdate);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertRuleForFeatureUpdate;
            const response = await testServiceRuleScheduler.insertRuleForFeature(Stubs.mockInputInsertRuleForFeature);
            expect(response).to.not.equal(expected);
        }) 

        it('should return the expected response with numeric values, when the insertRuleForFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureRule').resolves(Stubs.mockOutputInsertRuleForFeatureDelete);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertRuleForFeatureDelete;
            const response = await testServiceRuleScheduler.insertRuleForFeature(Stubs.mockInputInsertRuleForFeatureNumerics);
            expect(response).to.not.equal(expected);
        }) 

    });

    
    describe('deleteRuleFromFeature', () => {
        afterEach(sinon.restore);

        it('should return the expected response with uppercase and numeric values, when the deleteRuleFromFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'deleteGroupFeatureRule').resolves(Stubs.mockOutputDeleteRuleFromFeature);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteRuleFromFeature;
            const response = await testServiceRuleScheduler.deleteRuleFromFeature(Stubs.mockInputDeleteRuleFromFeature);
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response with numeric values, when the deleteRuleFromFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'deleteGroupFeatureRule').resolves(Stubs.mockOutputDeleteRuleFromFeature);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteRuleFromFeature;
            const response = await testServiceRuleScheduler.deleteRuleFromFeature(Stubs.mockInputDeleteRuleFromFeatureNumerics);
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response with numeric and lowercase values, when the deleteRuleFromFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'deleteGroupFeatureRule').resolves(Stubs.mockOutputDeleteRuleFromFeature);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteRuleFromFeature;
            const response = await testServiceRuleScheduler.deleteRuleFromFeature(Stubs.mockInputDeleteRuleFromFeatureLowercase);
            expect(response).to.be.deep.equal(expected);
        }) 

        it('should return the expected response with special character and numeric values, when the deleteRuleFromFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'deleteGroupFeatureRule').resolves(Stubs.mockOutputDeleteRuleFromFeatureUpdate);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteRuleFromFeatureUpdate;
            const response = await testServiceRuleScheduler.deleteRuleFromFeature(Stubs.mockInputDeleteRuleFromFeatureSpecialChar);
            expect(response).to.not.equal(expected);
        }) 

        it('should return the expected response with uppercase and numeric values, when the deleteRuleFromFeature goes well', async () => {
            sinon.stub(GroupFeatureDao, 'deleteGroupFeatureRule').resolves(Stubs.mockOutputDeleteRuleFromFeatureInsert);
            sinon.stub(RuleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteRuleFromFeatureInsert;
            const response = await testServiceRuleScheduler.deleteRuleFromFeature(Stubs.mockInputDeleteRuleFromFeature);
            expect(response).to.not.equal(expected);
        }) 

    });

})