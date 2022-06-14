import { DataModels } from "../interfaces";
import { VehicleFactory } from "./vehicle-factory";

export class VehicleScheduler {


    /**
     * this fn inserts a vehicle into the vehicle group
     * @param id string
     * @param vin vin for the vehicle
     * @returns Promise of PostResponse
     */
    public async insertVehicleForVehicleGroup(id: string, vin: string): Promise<DataModels.PostResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} insertVehicleForVehicleGroup |`;
        const environment = VehicleFactory.getEnvironment();
        const mappedRequest = {
            igroup: id,
            ivin: vin
        }

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.PostResponse = await GroupVinDao.insertGroupVinToDB(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PostResponse = {};

        if (response.message) {
            filteredResponse = {
                message: response.message
            }
        }
        return filteredResponse;
    }

    /**
     * this fn is used to delete the vehicle from the vehicle group
     * @param id id of the vehicle
     * @param vin vin for the vehicle
     * @returns 
     */
    public async deleteVehicleFromVehicleGroup(id: string, vin: string): Promise<DataModels.DeleteResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} deleteVehicleForVehicleGroup|`;
        const environment = VehicleFactory.getEnvironment();
        const mappedRequest = {
            igroup: id,
            ivin: vin
        }

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.DeleteResponse = await GroupVinDao.deleteGroupVinToDatabase(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.DeleteResponse = {};

        if (response.message) {
            filteredResponse = {
                message: response.message
            }
        }
        return filteredResponse;
    }


}