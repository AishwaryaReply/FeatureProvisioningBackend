import 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon';

import { VehicleFactory, VehicleScheduler } from '../../src/vehicle';
import { Stubs } from './utils/stubs';
import { DataModels } from '../../src/interfaces';

chai.use(chaiAsPromised)
const expect = chai.expect;

describe('VehicleSchedulerService', () => {
    const testServiceVehicleScheduler = new VehicleScheduler();

    describe('getVehicleFromVehicleGroup', () => {
        afterEach(sinon.restore);

        it('should return the expected repsonse with uppercase, when the getVehicleFromVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'selectVehicleFromVehicleGroupFromDB').resolves(Stubs.mockOutputGetVehicleFromVehicleGroup);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetVehiclesResponse = Stubs.mockOutputGetVehicleFromVehicleGroup;
            const response = await testServiceVehicleScheduler.getVehicleFromVehicleGroup(Stubs.mockInputGetVehicleFromVehicleGroup);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected repsonse with special character values, when the getVehicleFromVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'selectVehicleFromVehicleGroupFromDB').resolves(Stubs.mockOutputGetVehicleFromVehicleGroup);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetVehiclesResponse = Stubs.mockOutputGetVehicleFromVehicleGroup;
            const response = await testServiceVehicleScheduler.getVehicleFromVehicleGroup(Stubs.mockInputGetVehicleFromVehicleGroupSpecialChar);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected repsonse with null values, when the getVehicleFromVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'selectVehicleFromVehicleGroupFromDB').resolves(Stubs.mockOutputGetVehicleFromVehicleGroup);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetVehiclesResponse = Stubs.mockOutputGetVehicleFromVehicleGroup;
            const response = await testServiceVehicleScheduler.getVehicleFromVehicleGroup(Stubs.mockInputGetVehicleFromVehicleGroupNull);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected repsonse with numeric values, when the getVehicleFromVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'selectVehicleFromVehicleGroupFromDB').resolves(Stubs.mockOutputGetVehicleFromVehicleGroupNull);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetVehiclesResponse = Stubs.mockOutputGetVehicleFromVehicleGroupNull;
            const response = await testServiceVehicleScheduler.getVehicleFromVehicleGroup(Stubs.mockInputGetVehicleFromVehicleGroupNumerics);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected repsonse with uppercase values, when the getVehicleFromVehicleGroup goes well', async () => {
            sinon.stub(VehicleGroupDao, 'selectVehicleFromVehicleGroupFromDB').resolves(Stubs.mockOutputGetVehicleFromVehicleGroupNull);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.GetVehiclesResponse = Stubs.mockOutputGetVehicleFromVehicleGroupNull;
            const response = await testServiceVehicleScheduler.getVehicleFromVehicleGroup(Stubs.mockInputGetVehicleFromVehicleGroup);
            expect(response).to.not.equal(expected);
        })

    });

    describe('insertVehicleForVehicleGroup', () => {
        afterEach(sinon.restore);

        it('should return the expected repsonse with uppercase, when the insertVehicleForVehicleGroup goes well', async () => {
            sinon.stub(GroupVinDao, 'insertGroupVinToDB').resolves(Stubs.mockOutputInsertVehicleForVehicleGroup);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleForVehicleGroup;
            const response = await testServiceVehicleScheduler.insertVehicleForVehicleGroup(Stubs.mockInputInsertVehicleForVehicleGroup);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected repsonse with special character values, when the insertVehicleForVehicleGroup goes well', async () => {
            sinon.stub(GroupVinDao, 'insertGroupVinToDB').resolves(Stubs.mockOutputInsertVehicleForVehicleGroup);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleForVehicleGroup;
            const response = await testServiceVehicleScheduler.insertVehicleForVehicleGroup(Stubs.mockInputInsertVehicleForVehicleGroupSpecialChar);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected repsonse with null values, when the insertVehicleForVehicleGroup goes well', async () => {
            sinon.stub(GroupVinDao, 'insertGroupVinToDB').resolves(Stubs.mockOutputInsertVehicleForVehicleGroup);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleForVehicleGroup;
            const response = await testServiceVehicleScheduler.insertVehicleForVehicleGroup(Stubs.mockInputInsertVehicleForVehicleGroupNull);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected repsonse with numeric values first, when the insertVehicleForVehicleGroup goes well', async () => {
            sinon.stub(GroupVinDao, 'insertGroupVinToDB').resolves(Stubs.mockOutputInsertVehicleForVehicleGroupUpdate);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleForVehicleGroupUpdate;
            const response = await testServiceVehicleScheduler.insertVehicleForVehicleGroup(Stubs.mockInputInsertVehicleForVehicleGroupNumericsFirst);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected repsonse with numeric values last, when the insertVehicleForVehicleGroup goes well', async () => {
            sinon.stub(GroupVinDao, 'insertGroupVinToDB').resolves(Stubs.mockOutputInsertVehicleForVehicleGroupDelete);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.PostResponse = Stubs.mockOutputInsertVehicleForVehicleGroupDelete;
            const response = await testServiceVehicleScheduler.insertVehicleForVehicleGroup(Stubs.mockInputInsertVehicleForVehicleGroupNumericsLast);
            expect(response).to.not.equal(expected);
        })

    });

    describe('deleteVehicleFromVehicleGroup', () => {
        afterEach(sinon.restore);

        it('should return the expected repsonse with uppercase, when the deleteVehicleFromVehicleGroup goes well', async () => {
            sinon.stub(GroupVinDao, 'deleteGroupVinToDatabase').resolves(Stubs.mockOutputDeleteVehicleFromVehicleGroup);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse= Stubs.mockOutputDeleteVehicleFromVehicleGroup;
            const response = await testServiceVehicleScheduler.deleteVehicleFromVehicleGroup(Stubs.mockInputDeleteVehicleFromVehicleGroup);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected repsonse with null values, when the deleteVehicleFromVehicleGroup goes well', async () => {
            sinon.stub(GroupVinDao, 'deleteGroupVinToDatabase').resolves(Stubs.mockOutputDeleteVehicleFromVehicleGroup);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse= Stubs.mockOutputDeleteVehicleFromVehicleGroup;
            const response = await testServiceVehicleScheduler.deleteVehicleFromVehicleGroup(Stubs.mockInputDeleteVehicleFromVehicleGroupNull);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected repsonse with special character values, when the deleteVehicleFromVehicleGroup goes well', async () => {
            sinon.stub(GroupVinDao, 'deleteGroupVinToDatabase').resolves(Stubs.mockOutputDeleteVehicleFromVehicleGroup);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse= Stubs.mockOutputDeleteVehicleFromVehicleGroup;
            const response = await testServiceVehicleScheduler.deleteVehicleFromVehicleGroup(Stubs.mockInputDeleteVehicleFromVehicleGroupSpecialChar);
            expect(response).to.be.deep.equal(expected);
        })

        it('should return the expected repsonse with uppercase, when the deleteVehicleFromVehicleGroup goes well', async () => {
            sinon.stub(GroupVinDao, 'deleteGroupVinToDatabase').resolves(Stubs.mockOutputDeleteVehicleFromVehicleGroupUpdate);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse= Stubs.mockOutputDeleteVehicleFromVehicleGroupUpdate;
            const response = await testServiceVehicleScheduler.deleteVehicleFromVehicleGroup(Stubs.mockInputDeleteVehicleFromVehicleGroup);
            expect(response).to.not.equal(expected);
        })

        it('should return the expected repsonse with numeric values, when the deleteVehicleFromVehicleGroup goes well', async () => {
            sinon.stub(GroupVinDao, 'deleteGroupVinToDatabase').resolves(Stubs.mockOutputDeleteVehicleFromVehicleGroupInsert);
            sinon.stub(VehicleFactory, 'getEnvironment').resolves('int');

            const expected: DataModels.DeleteResponse= Stubs.mockOutputDeleteVehicleFromVehicleGroupInsert;
            const response = await testServiceVehicleScheduler.deleteVehicleFromVehicleGroup(Stubs.mockInputDeleteVehicleFromVehicleGroupNumerics);
            expect(response).to.not.equal(expected);
        })

    });

})