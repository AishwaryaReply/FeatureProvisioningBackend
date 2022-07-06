import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon';

import { FeaturesFactory, FeaturesScheduler } from '../../src/features';
import { Stubs } from './utils/stubs';
import { DataModels } from '../../src/interfaces';

chai.use(chaiAsPromised)
const expect = chai.expect;

describe('FeatureSchedulerService', () => {
    //const testServiceSchedulerService = new ServiceScheduler();
    const testServiceFeatureScheduler = new FeaturesScheduler();

    describe('getListFeatures', () => {
        afterEach(sinon.restore);

        it('should return the expected response with uppercase, when the getListFeatures goes well', async () => {
            //sinon.stub(className,'methodName').resolves(Stubs.variableName)
            sinon.stub(FeaturesDao, 'selectFeaturesFromDB').resolves(Stubs.mockOutputGetListFeatures);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetFeatureResponse = Stubs.mockOutputGetListFeatures;
            const response = await testServiceFeatureScheduler.getListFeatures(Stubs.mockInputGetListFeatures);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with special character values, when the getListFeatures goes well', async () => {
            sinon.stub(FeaturesDao, 'selectFeaturesFromDB').resolves(Stubs.mockOutputGetListFeatures);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetFeatureResponse = Stubs.mockOutputGetListFeatures;
            const response = await testServiceFeatureScheduler.getListFeatures(Stubs.mockInputGetListFeaturesSpecialChar);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with numeric values, when the getListFeatures goes well', async () => {
            sinon.stub(FeaturesDao, 'selectFeaturesFromDB').resolves(Stubs.mockOutputGetListFeaturesLowercase);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetFeatureResponse = Stubs.mockOutputGetListFeaturesLowercase;
            const response = await testServiceFeatureScheduler.getListFeatures(Stubs.mockInputGetListFeaturesNumerics);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with numeric values, when the getListFeatures goes well', async () => {
            sinon.stub(FeaturesDao, 'selectFeaturesFromDB').resolves(Stubs.mockOutputGetListFeatures);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetFeatureResponse = Stubs.mockOutputGetListFeatures;
            const response = await testServiceFeatureScheduler.getListFeatures(Stubs.mockInputGetListFeaturesNumerics);
            expect(response).to.be.deep.equal(expected);
        })

    });

    describe('insertFeature', () => {
        afterEach(sinon.restore);

        it('should return the expected response with uppercase, when the insertFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'insertFeaturesToDB').resolves(Stubs.mockOutputInsertFeature);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeature;
            const response = await testServiceFeatureScheduler.insertFeature(Stubs.mockInputInsertFeature);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with numeric values first, when the insertFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'insertFeaturesToDB').resolves(Stubs.mockOutputInsertFeature);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeature;
            const response = await testServiceFeatureScheduler.insertFeature(Stubs.mockInputInsertFeatureNumericsFirst);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with numeric values last, when the insertFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'insertFeaturesToDB').resolves(Stubs.mockOutputInsertFeature);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeature;
            const response = await testServiceFeatureScheduler.insertFeature(Stubs.mockInputInsertFeatureNumericsLast);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with numeric values first, when the insertFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'insertFeaturesToDB').resolves(Stubs.mockOutputInsertFeatureUpdate);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeatureUpdate;
            const response = await testServiceFeatureScheduler.insertFeature(Stubs.mockInputInsertFeatureNumericsFirst);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected response with uppercase, when the insertFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'insertFeaturesToDB').resolves(Stubs.mockOutputInsertFeatureDelete);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeatureDelete;
            const response = await testServiceFeatureScheduler.insertFeature(Stubs.mockInputInsertFeature);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected response with special characters, when the insertFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'insertFeaturesToDB').resolves(Stubs.mockOutputInsertFeatureDelete);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');
    
            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeatureDelete;
            const response = await testServiceFeatureScheduler.insertFeature(Stubs.mockInputInsertFeatureSpecialChar);
            expect(response).to.not.equal(expected);
        })

    });

    describe('updateFeature', () => {

        it('should return the expected response with uppercase, when the updateFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'updateFeatureToDatabase').resolves(Stubs.mockOutputUpdateFeature);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateFeature;
            const response = await testServiceFeatureScheduler.updateFeature(Stubs.mockInputUpdateFeature);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with numeric and special character values, when the updateFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'updateFeatureToDatabase').resolves(Stubs.mockOutputUpdateFeature);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateFeature;
            const response = await testServiceFeatureScheduler.updateFeature(Stubs.mockInputUpdateFeatureSpecialCharNumerics);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with uppercase values, when the updateFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'updateFeatureToDatabase').resolves(Stubs.mockOutputUpdateFeatureDelete);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateFeatureDelete;
            const response = await testServiceFeatureScheduler.updateFeature(Stubs.mockInputUpdateFeature);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected response with numerical and special character values, when the updateFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'updateFeatureToDatabase').resolves(Stubs.mockOutputUpdateFeatureInserted);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateFeatureInserted;
            const response = await testServiceFeatureScheduler.updateFeature(Stubs.mockInputUpdateFeatureSpecialCharNumerics);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected response with lowercase values, when the updateFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'updateFeatureToDatabase').resolves(Stubs.mockOutputUpdateFeature);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateFeature;
            const response = await testServiceFeatureScheduler.updateFeature(Stubs.mockInputUpdateFeatureLowercase);
            expect(response).to.be.deep.equal(expected);
        })
    });


    describe('deleteFeature', () => {

        it('should return the expected response with uppercase values, when the deleteFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'deleteFeature').resolves(Stubs.mockOutputDeleteFeature);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteFeature;
            const response = await testServiceFeatureScheduler.deleteFeature(Stubs.mockInputDeleteFeature);
            expect(response).to.be.deep.equal(expected);
        })
        
        it('should return the expected response with numerics first, when the deleteFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'deleteFeature').resolves(Stubs.mockOutputDeleteFeature);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteFeature;
            const response = await testServiceFeatureScheduler.deleteFeature(Stubs.mockInputDeleteFeatureNumericsFirst);
            expect(response).to.be.deep.equal(expected);
        })
        
        it('should return the expected response with numerics last, when the deleteFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'deleteFeature').resolves(Stubs.mockOutputDeleteFeatureUpdated);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteFeatureUpdated;
            const response = await testServiceFeatureScheduler.deleteFeature(Stubs.mockInputDeleteFeatureNumericsLast);
            expect(response).to.not.equal(expected);
        })
        
        it('should return the expected response with special character values, when the deleteFeature goes well', async () => {
            sinon.stub(FeaturesDao, 'deleteFeature').resolves(Stubs.mockOutputDeleteFeatureInserted);
            sinon.stub(FeaturesFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteFeatureInserted;
            const response = await testServiceFeatureScheduler.deleteFeature(Stubs.mockInputDeleteFeatureSpecialChar);
            expect(response).to.not.equal(expected);
        })

    });



})