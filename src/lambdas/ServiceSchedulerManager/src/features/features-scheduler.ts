import { DataModels } from "../interfaces";

//import logger from "gcv-logger";
import { FeaturesFactory } from "./features-factory";


export class FeaturesScheduler{

    /**
     * this fn is used to get list of features
     * @param request 
     * @returns 
     */    
    public async getListFeatures(code: string, description: string, channel: string): Promise<DataModels.GetFeatureResponse> {

       const logPrefix = `${LOG_PREFIX_CLASS} getListFeatures |`;
        const environment = FeaturesFactory.getEnvironment();
        const mappedRequest:  DataModels.FeatureSearchListRequestData = {
            cfeature: code,
            featureDescription: description,
            cchannel: channel
        }

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.GetFeatureResponse = {};
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetFeatureResponse = {};

        let features: DataModels.FeatureWithChannels[] = [];
        if(response.features.length != 0){
            const dim: number = response.features.length;

            for( let i =0; i < dim; i++){
                const elem =  response.features[i];
                if(elem.code && elem.description && elem.channels[0].code && elem.channels[0].description){
                    const feature: DataModels.FeatureWithChannels = {
                        code: elem.code,
                        description: elem.description,
                        channels[0].code: elem.channels[0].code,
                        channels[0].description: elem.channels[0].description
                    }
                    features.push(feature);
                }

            }
            filteredResponse = {
                features: features
            }
        }
        return filteredResponse;
    }

    /**
     * 
     * @param request 
     * @returns 
     */
    public async insertFeature(request: DataModels.FeatureCreateData): Promise<DataModels.PostResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} insertFeature |`;
        const environment = FeaturesFactory.getEnvironment();
        const mappedRequest = {
            cfeature: request.cfeature,
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

    public async updateFeature(request: DataModels.FeatureUpdateData): Promise<DataModels.PatchResponse>{

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

    public async deleteFeature(request: DataModels.FeatureDeleteData): Promise<DataModels.DeleteResponse>{

         const logPrefix = `${LOG_PREFIX_CLASS} deleteFeature |`;
         const environment = FeaturesFactory.getEnvironment();
         const mappedRequest = {
             cfeature: request.cfeature,
             igroup:""

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
