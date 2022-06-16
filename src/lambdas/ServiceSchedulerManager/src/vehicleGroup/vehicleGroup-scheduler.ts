import { ObjectFlags } from "typescript";
import { FeaturesScheduler } from "../features";
import { DataModels } from "../interfaces";
import { VehicleGroupFactory } from "./vehiclegroup-factory";

export class VehicleGroupScheduler{
    
    /**
     * @description this fn inserts vehicle group for a feature into the database
     * @param code string
     * @param id number
     * @returns Promise as PostResponse Interface
     */
     public async insertFeatureVehicleGroup(request: DataModels.VehicleGroupFeatureCreateData):Promise<DataModels.PostResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} insertFeatureVehicleGroup |`;
        const environment = VehicleGroupFactory.getEnvironment();
        const mappedRequest = {
            cfeature: request.codecode,
            igroup: request.id
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
    public async deleteFeatureVehicleGroup(request: DataModels.VehicleGroupFeatureDeleteData): Promise<DataModels.DeleteResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} deleteFeatureVehicleGroup |`;
        const environment = VehicleGroupFactory.getEnvironment();
        const mappedRequest = {
            cfeature: request.code,
            igroup: request.id
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

    /**
     * this fn is used to get list of vehicle groups
     * @param feature string of the feature
     * @returns list of vehicle groups
     */
    public async getVehicleGroup(request:DataModels.VehicleGroupSearchListData): Promise<DataModels.GetGroupsResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} | getVehicleGroup |`;
        const environment = VehicleGroupFactory.getEnvironment();
        const mappedRequest = {
            igroup: request.
        }

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.GetGroupsResponse = await VehicleGroupDao.selectVehicleGroupFromDB(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetGroupsResponse = {};

        let features: DataModels.VehicleGroup[] = [];
       if(response.features && response.features.length !=0){
           const dim: number = response.features.length;
           for(let i = 0; i < dim; i++) {
                const elem = response.features[i];
                if(elem.description && elem.id){
                    const vehicleGroup: DataModels.VehicleGroup ={
                        description: elem.description,
                        id: elem.id
                }   
                features.push(vehicleGroup);

                }
        
            }
            filteredResponse = {
                features: features
            }
        }   
        return filteredResponse;
    }


    /**
     * this fn inserts a new vehicle group to the database
     * @param request new vehicle group
     * @returns promise as post response
     */
    public async insertVehicleGroup(request: DataModels.VehicleGroupCreateData): Promise<DataModels.PostResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} | insertVehicleGroup |`;
        const environment = VehicleGroupFactory.getEnvironment();
        const mappedRequest = {
            vehicleGroupDescription: request.description
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);a
        const response:DataModels.PostResponse = await VehicleGroupDao.insertVehicleGroupToDB(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PostResponse = {};
        if(response.message){
            filteredResponse = {
                message: response.message
            }
        }
        return filteredResponse;
    }


    /**
     * this fn updates vehicle group from the database
     * @param id identifier of the vehicle group
     * @param request new values for vehicle group
     * @returns Promise as PatchResponse
     */
    public async updateVehicleGroup(request: DataModels.VehicleGroupUpdateData): Promise<DataModels.PatchResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} | updateVehicleGroup |`;
        const environment = VehicleGroupFactory.getEnvironment();
        const mappedRequest = {
            igroup: request.id,
            description: request.description
        }

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.PatchResponse = await VehicleGroupDao.updateVehicleGroupToDB(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PatchResponse = {};

        if(response.message){
            filteredResponse = {
                message: response.message
            }
        }

        return filteredResponse;
    }

    /**
     * this fn deletes the vehicle group from the database
     * @param id identifier of the vehicle
     * @returns Promise as DeleteResponse
     */
    public async deleteVehicleGroup(request: DataModels.VehicleGroupDeleteData): Promise<DataModels.DeleteResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} | deleteVehicleGroup |`;
        const environment = VehicleGroupFactory.getEnvironment();
        const mappedRequest = {
            igroup: request.id
        }

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.DeleteResponse = await VehicleGroupDao.deleteVehicleGroupFromDB(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.DeleteResponse = {};

        if(response.message){
            filteredResponse = {
                message: response.message
            }
        }

        return filteredResponse;
    }
    
    

 
}