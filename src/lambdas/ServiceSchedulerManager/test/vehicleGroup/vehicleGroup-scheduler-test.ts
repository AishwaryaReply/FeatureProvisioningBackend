import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon';

import { VehicleGroupFactory, VehicleGroupScheduler } from '../../src/vehicleGroup';
import { Stubs } from './utils/stubs';
import { DataModels } from '../../src/interfaces';

chai.use(chaiAsPromised)
const expect = chai.expect;

describe ('VehicleGroupSchedulerService', () => {
    const testServiceVehicleGroupScheduler= new VehicleGroupScheduler();

    describe('insertVehicleGroup',() => {
        afterEach(sinon.restore);

        it('should return the expected response with uppercase, when the insertVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'insertVehicleGroupToDB').resolves(Stubs.mockOutputInsertVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.insertVehicleGroup(Stubs.mockInputInsertVehicleGroup);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with special character values, when the insertVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'insertVehicleGroupToDB').resolves(Stubs.mockOutputInsertVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.insertVehicleGroup(Stubs.mockInputInsertVehicleGroupSpecialChar);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with special character values, when the insertVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'insertVehicleGroupToDB').resolves(Stubs.mockOutputInsertVehicleGroupDelete);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleGroupDelete;
            const response = await testServiceVehicleGroupScheduler.insertVehicleGroup(Stubs.mockInputInsertVehicleGroupSpecialChar);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected response with lowercase values, when the insertVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'insertVehicleGroupToDB').resolves(Stubs.mockOutputInsertVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.insertVehicleGroup(Stubs.mockInputInsertVehicleGroupLowercase);
            expect(response).to.be.deep.equal(expected);
        })
        
        it('should return the expected response with uppercase, when the insertVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'insertVehicleGroupToDB').resolves(Stubs.mockOutputInsertVehicleGroupUpdate);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleGroupUpdate;
            const response = await testServiceVehicleGroupScheduler.insertVehicleGroup(Stubs.mockInputInsertVehicleGroup);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected response with numeric values, when the insertVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'insertVehicleGroupToDB').resolves(Stubs.mockOutputInsertVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.insertVehicleGroup(Stubs.mockInputInsertVehicleGroupNumerics);
            expect(response).to.be.deep.equal(expected);
        })

    });

    describe('deleteFeatureVehicleGroup',() => {
        afterEach(sinon.restore);

        it('should return the expected response with uppercase and numeric values, when the deleteFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'deleteGroupFeatureToDatabase').resolves(Stubs.mockOutputDeleteFeatureVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteFeatureVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.deleteFeatureVehicleGroup(Stubs.mockInputDeleteFeatureVehicleGroup);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with numeric values, when the deleteFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'deleteGroupFeatureToDatabase').resolves(Stubs.mockOutputDeleteFeatureVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteFeatureVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.deleteFeatureVehicleGroup(Stubs.mockInputDeleteFeatureVehicleGroupNumerics);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with lowercase and numeric values, when the deleteFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'deleteGroupFeatureToDatabase').resolves(Stubs.mockOutputDeleteFeatureVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteFeatureVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.deleteFeatureVehicleGroup(Stubs.mockInputDeleteFeatureVehicleGroupLowercase);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with uppercase and numeric values, when the deleteFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'deleteGroupFeatureToDatabase').resolves(Stubs.mockOutputDeleteFeatureVehicleGroupInsert);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteFeatureVehicleGroupInsert;
            const response = await testServiceVehicleGroupScheduler.deleteFeatureVehicleGroup(Stubs.mockInputDeleteFeatureVehicleGroup);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected response with uppercase and numeric values, when the deleteFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'deleteGroupFeatureToDatabase').resolves(Stubs.mockOutputDeleteFeatureVehicleGroupUpdate);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteFeatureVehicleGroupUpdate;
            const response = await testServiceVehicleGroupScheduler.deleteFeatureVehicleGroup(Stubs.mockInputDeleteFeatureVehicleGroup);
            expect(response).to.not.equal(expected);
        })
    });

    describe('getVehicleGroup',() => {
        afterEach(sinon.restore);

        it('should return the expected response with uppercase values, when the getVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'selectVehicleGroupFromDB').resolves(Stubs.mockOutputGetVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetGroupsResponse = Stubs.mockOutputGetVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.getVehicleGroup(Stubs.mockInputGetVehicleGroup);
            expect(response).to.be.deep.equal(expected);
        })

        
        it('should return the expected response with special character values, when the getVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'selectVehicleGroupFromDB').resolves(Stubs.mockOutputGetVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetGroupsResponse = Stubs.mockOutputGetVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.getVehicleGroup(Stubs.mockInputGetVehicleGroupSpecialChar);
            expect(response).to.be.deep.equal(expected);
        })
   
        it('should return the expected response with lowercase values, when the getVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'selectVehicleGroupFromDB').resolves(Stubs.mockOutputGetVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetGroupsResponse = Stubs.mockOutputGetVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.getVehicleGroup(Stubs.mockInputGetVehicleGroupNullLowercase);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with uppercase values, when the getVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'selectVehicleGroupFromDB').resolves(Stubs.mockOutputGetVehicleGroupLowercase);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetGroupsResponse = Stubs.mockOutputGetVehicleGroupLowercase;
            const response = await testServiceVehicleGroupScheduler.getVehicleGroup(Stubs.mockInputGetVehicleGroup);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with numeric values, when the getVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'selectVehicleGroupFromDB').resolves(Stubs.mockOutputGetVehicleGroupLowercase);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetGroupsResponse = Stubs.mockOutputGetVehicleGroupLowercase;
            const response = await testServiceVehicleGroupScheduler.getVehicleGroup(Stubs.mockInputGetVehicleGroupNumerics);
            expect(response).to.be.deep.equal(expected);
        })
   
    });

    describe('InsertFeatureVehicleGroup',() => {
        afterEach(sinon.restore);

        it('should return the expected response with uppercase and numeric values, when the InsertFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureToDB').resolves(Stubs.mockOutputInsertFeatureVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeatureVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.insertFeatureVehicleGroup(Stubs.mockInputInsertFeatureVehicleGroup);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with lowercase and numeric values, when the InsertFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureToDB').resolves(Stubs.mockOutputInsertFeatureVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeatureVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.insertFeatureVehicleGroup(Stubs.mockInputInsertFeatureVehicleGroupLowercase);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with numeric values, when the InsertFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureToDB').resolves(Stubs.mockOutputInsertFeatureVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeatureVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.insertFeatureVehicleGroup(Stubs.mockInputInsertFeatureVehicleGroupNumerics);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with special character and numeric values, when the InsertFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureToDB').resolves(Stubs.mockOutputInsertFeatureVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeatureVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.insertFeatureVehicleGroup(Stubs.mockInputInsertFeatureVehicleGroupSpecialChar);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with uppercase and numeric values, when the InsertFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureToDB').resolves(Stubs.mockOutputInsertFeatureVehicleGroupDelete);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeatureVehicleGroupDelete;
            const response = await testServiceVehicleGroupScheduler.insertFeatureVehicleGroup(Stubs.mockInputInsertFeatureVehicleGroup);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected response with numeric values, when the InsertFeatureVehicleGroup goes well', async () => {
            sinon.stub(GroupFeatureDao, 'insertGroupFeatureToDB').resolves(Stubs.mockOutputInsertFeatureVehicleGroupUpdate);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertFeatureVehicleGroupUpdate;
            const response = await testServiceVehicleGroupScheduler.insertFeatureVehicleGroup(Stubs.mockInputInsertFeatureVehicleGroupNumerics);
            expect(response).to.not.equal(expected);
        })
    });

    describe('updateVehicleGroup',() => {
        afterEach(sinon.restore);

        it('should return the expected response with uppercase and numeric values, when the updateVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'updateVehicleGroupToDatabase').resolves(Stubs.mockOutputUpdateVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.updateVehicleGroup(Stubs.mockInputUpdateVehicleGroup);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with lowercase and numeric values, when the updateVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'updateVehicleGroupToDatabase').resolves(Stubs.mockOutputUpdateVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.updateVehicleGroup(Stubs.mockInputUpdateVehicleGroupLowercase);
            expect(response).to.be.deep.equal(expected);
        })
        
        it('should return the expected response with numeric values, when the updateVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'updateVehicleGroupToDatabase').resolves(Stubs.mockOutputUpdateVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.updateVehicleGroup(Stubs.mockInputUpdateVehicleGroupNumerics);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with special character values, when the updateVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'updateVehicleGroupToDatabase').resolves(Stubs.mockOutputUpdateVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.updateVehicleGroup(Stubs.mockInputUpdateVehicleGroupSpecialChar);
            expect(response).to.be.deep.equal(expected);
        })
        
        it('should return the expected response with uppercase and numeric values, when the updateVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'updateVehicleGroupToDatabase').resolves(Stubs.mockOutputUpdateVehicleGroupDelete);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateVehicleGroupDelete;
            const response = await testServiceVehicleGroupScheduler.updateVehicleGroup(Stubs.mockInputUpdateVehicleGroup);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected response with special character values, when the updateVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'updateVehicleGroupToDatabase').resolves(Stubs.mockOutputUpdateVehicleGroupInsert);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PatchResponse = Stubs.mockOutputUpdateVehicleGroupInsert;
            const response = await testServiceVehicleGroupScheduler.updateVehicleGroup(Stubs.mockInputUpdateVehicleGroupSpecialChar);
            expect(response).to.not.equal(expected);
        })

    });

    describe('deleteVehicleGroup',() => {
        afterEach(sinon.restore);

        it('should return the expected response with numeric values, when the deleteVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'deleteVehicleGroupFromDB').resolves(Stubs.mockOutputDeleteVehicleGroup);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteVehicleGroup;
            const response = await testServiceVehicleGroupScheduler.deleteVehicleGroup(Stubs.mockInputDeleteVehicleGroup);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected response with numeric values, when the deleteVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'deleteVehicleGroupFromDB').resolves(Stubs.mockOutputDeleteVehicleGroupInsert);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteVehicleGroupInsert;
            const response = await testServiceVehicleGroupScheduler.deleteVehicleGroup(Stubs.mockInputDeleteVehicleGroup);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected response with numeric values, when the deleteVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'deleteVehicleGroupFromDB').resolves(Stubs.mockOutputDeleteVehicleGroupUpdate);
            sinon.stub(VehicleGroupFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse = Stubs.mockOutputDeleteVehicleGroupUpdate;
            const response = await testServiceVehicleGroupScheduler.deleteVehicleGroup(Stubs.mockInputDeleteVehicleGroup);
            expect(response).to.not.equal(expected);
        })

    });

})