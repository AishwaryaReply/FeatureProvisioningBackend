import { DataModels } from "../interfaces";
import { FeatureSearchListRequestData } from "../interfaces/data-models";
//import logger from "gcv-logger";
import { FeaturesFactory } from "./features-factory";


export class FeaturesScheduler{
    public async getListFeatures(request: FeatureSearchListRequestData): Promise<DataModels.GetFeatureResponse> {

       // const logPrefix = `${LOG_PREFIX_CLASS} getListFeatures |`;
        const environment = FeaturesFactory.getEnvironment();
        const mappedRequest:  DataModels.FeatureWithChannels = {
            code: request.cfeature,
            description: request.featureDescription,
            channels: request.cchannel
        }
        //logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.GetFeatureResponse ={};


        return response;
    }
    public async insertFeature(request: DataModels.FeatureCreateData): Promise<DataModels.PostResponse> {
       // const logPrefix = `${LOG_PREFIX_CLASS} insertFeature |`;
        const environment = FeaturesFactory.getEnvironment();
        const mappedRequest: DataModels.FeatureWithChannels = {
            code: request.cfeature,
            description: request.featureDescription,
            channels: request.cchannel
        }
      //  logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response : DataModels.PostResponse = await FeaturesDao.insertFeaturesToDB(mappedRequest);
        //logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PostResponse = {};

        if(response.message){
            filteredResponse= {
                message: response.message
            }
        }



        return filteredResponse;
    }

    //public aysnc updateFeature(request: DataModels.UpdatedFeature): Promise<DataModels.
        









}
