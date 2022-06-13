import { DataModels } from "../interfaces";

//import logger from "gcv-logger";
import { FeaturesFactory } from "./features-factory";


export class FeaturesScheduler{
    public async getListFeatures(request: DataModels.FeatureSearchListRequestData): Promise<DataModels.GetFeatureResponse> {

       const logPrefix = `${LOG_PREFIX_CLASS} getListFeatures |`;
        const environment = FeaturesFactory.getEnvironment();
        const mappedRequest:  DataModels.FeatureWithChannels = {
            code: request.cfeature,
            description: request.featureDescription,
            channels: request.cchannel
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.GetFeatureResponse = {};
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetFeatureResponse = {};

        for( let i =0; i < response.features?.length; i++){
            if(response.features[i].code && response.features[i].description && response.features[i].channels[0].code && response.features[i].channels[0].description){
                filteredResponse.features[i].code : response.features[i].code,
                filteredResponse.features[i].description : response.features[i].description,
                filteredResponse.features[i].channels[0].code: response.features[0].channels[0].code,
                filteredResponse.features[i].channels[0].description : response.features[0].channels[0].description
            }
        }
        return response;
    }
    public async insertFeature(request: DataModels.FeatureCreateData): Promise<DataModels.PostResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} insertFeature |`;
        const environment = FeaturesFactory.getEnvironment();
        const mappedRequest: DataModels.FeatureWithChannels = {
            code: request.cfeature,
            description: request.featureDescription,
            channels: request.cchannel
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response : DataModels.PostResponse = await FeaturesDao.insertFeaturesToDB(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PostResponse = {};

        if(response.message){
            filteredResponse= {
                message: response.message
            }
        }



        return filteredResponse;
    }

    public async updateFeature(request: DataModels.UpdatedFeature): Promise<DataModels.PatchResponse>{

        const logPrefix = `${LOG_PREFIX_CLASS} updateFeature |`;
        const environment = FeaturesFactory.getEnvironment();
        logger.debug(logPrefix, `request: ${JSON.stringify(request)}`); 
        const response: DataModels.PatchResponse = await FeaturesDao.updateFeatureToDatabase(request);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);
        let filteredResponse: DataModels.PatchResponse = {};

        if(response.message){
            filteredResponse= {
                message: response.message
            }
        }

        return filteredResponse;

    }

    public async deleteFeature(code: string): Promise<DataModels.DeleteResponse>{

         const logPrefix = `${LOG_PREFIX_CLASS} updateFeature |`;
         const environment = FeaturesFactory.getEnvironment();
         const mappedRequest: DataModels.FeatureDeleteData = {
             cfeature: code,
             requestedService: "FEATURE_DELETE"
         }

         logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
         const response: DataModels.DeleteResponse = await FeaturesDao.deleteFeature(mappedRequest);
         logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);
         
         let filteredResponse: DataModels.DeleteResponse = {};

        if(response.message){
            filteredResponse= {
                message: response.message
            }
        }

        return filteredResponse;

    }




        









}
