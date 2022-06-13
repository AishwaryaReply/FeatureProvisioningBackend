import { DataModels } from "../interfaces";
import { VehicleFactory } from "./vehicle-factory";

export class VehicleScheduler{


    /**
     * @description this fn inserts vehicle group for a feature into the database
     * @param code string
     * @param id number
     * @returns Promise as PostResponse Interface
     */
    public async insertFeatureVehicleGroup(code: string, id: number):Promise<DataModels.PostResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} insertFeatureVehicleGroup |`;
        const environment = VehicleFactory.getEnvironment();
        const mappedRequest = {
            cfeature: code,
            igroup: id
        };

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.PostResponse = await GroupFeatureDao.insertGroupFeatureToDB(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);
        
        let filteredResponse: DataModels.PostResponse ={};

        if(response.message){
            filteredResponse = {
                message: response.message
            }
        }

        return filteredResponse;
    }
    /**
     * @description this function deletes a vehicle group from the feature database
     * @param code string
     * @param id number
     * @returns Promise as DeleteResponse Interface
     */
    public async deleteFeatureVehicleGroup(code: string, id: number): Promise<DataModels.DeleteResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} deleteFeatureVehicleGroup |`;
        const environment = VehicleFactory.getEnvironment();
        const mappedRequest = {
            cfeature: code,
            igroup: id
        };

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.PostResponse = await GroupFeatureDao.deleteGroupFeatureToDatabase(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);
        
        let filteredResponse: DataModels.DeleteResponse ={};

        if(response.message){
            filteredResponse = {
                message: response.message
            }
        }

        return filteredResponse;
    }
    

}