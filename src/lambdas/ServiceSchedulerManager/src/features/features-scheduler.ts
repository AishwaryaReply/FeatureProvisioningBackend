import { DataModels } from "../interfaces";

//import logger from "gcv-logger";
import { FeaturesFactory } from "./features-factory";


export class FeaturesScheduler {

    /**
     * this fn is used to get list of features
     * @param request input as DataModels.FeatureSearchListRequestData
     * @returns the response as DataModels.GetFeatureResponse
     */
    public async getListFeatures(request: DataModels.FeatureSearchListRequestData): Promise<DataModels.GetFeatureResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} getListFeatures |`;
        const environment = FeaturesFactory.getEnvironment();
        const mappedRequest = {
            cfeature: request.cfeature,
            featureDescription: request.featureDescription,
            cchannel: request.cchannel
        }

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.GetFeatureResponse = await FeaturesDao.selectFeaturesFromDB(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetFeatureResponse = {};

        let features: DataModels.FeatureWithChannels[] = [];
        if (response.features != undefined) {
            const dim: number = response.features.length;

            for (let i = 0; i < dim; i++) {
                const elem = response.features[i];
                const channels = elem.channels;
                for (let j = 0; j < channels.length; j++) {
                    if (elem.code && elem.description && channels[j].code && channels[j].description) {
                        const feature: DataModels.FeatureWithChannels = {
                            code: elem.code,
                            description: elem.description,
                            channels[j].code: channels[j].code,
                            channels[j].description: channels[j].description
                        }
                        features.push(feature);
                    }
                }
            }
            filteredResponse = {
                features: features
            }
        }
        return filteredResponse;
    }

    /**
     * this fn inserts the new feature into the database
     * @param request new feature configuration as DataModels.FeatureCreateData
     * @returns response of the database operation as DataModels.PostResponse
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
        const response: DataModels.PostResponse = await FeaturesDao.insertFeaturesToDB(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PostResponse = {};

        if (response.message) {
            filteredResponse = {
                message: response.message
            }
        }

        return filteredResponse;
    }

    /**
     * this fn updates the exisiting feature with new feature configuration
     * @param request input as DataModels.FeatureUpdateData
     * @returns response of database operation as DataModels.PatchResponse
     */
    public async updateFeature(request: DataModels.FeatureUpdateData): Promise<DataModels.PatchResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} updateFeature |`;
        const environment = FeaturesFactory.getEnvironment();
        const mappedRequest = {
            cfeature: request.cfeature,
            featureDescription: request.featureDescription,
            channels: request.channels
        }

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.PatchResponse = await FeaturesDao.updateFeatureToDatabase(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);
        let filteredResponse: DataModels.PatchResponse = {};

        if (response.message) {
            filteredResponse = {
                message: response.message
            }
        }

        return filteredResponse;

    }   

    /**
     * this fn deletes the feature from the database
     * @param request input as DataModels.FeatureDeleteData
     * @returns response of the database operation as DataModels.DeleteResponse
     */
    public async deleteFeature(request: DataModels.FeatureDeleteData): Promise<DataModels.DeleteResponse> {

        const logPrefix = `${LOG_PREFIX_CLASS} deleteFeature |`;
        const environment = FeaturesFactory.getEnvironment();
        const mappedRequest = {
            cfeature: request.cfeature,
            igroup: ""

        }

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.DeleteResponse = await FeaturesDao.deleteFeature(mappedRequest);
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
