import logger from 'gcv-logger';
import { DataModels } from '../interfaces';
import { Constants, FeatureSearchListSchema, FeatureUpdateSchema, FeatureInsertSchema, FeatureDeleteSchema } from '../../constants'
import { UtilityObjects, GCVErrors } from 'gcv-utils';
import { Utilities } from 'gcv-utilities';


export class FeaturesHandler {
<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
    /**
     * this fn looks at event type and returns required data for the api method to be called
     * @param inputEvent UtilityObjects.TransformedInputEvent contains the input event data for the api
     * @returns data as ServiceRequestData
     */
    public getFeatureParams(inputEvent: UtilityObjects.TransformedInputEvent): DataModels.ServiceRequestData {


        const logPrefix = `${LOG_PREFIX_CLASS} getFeatureParams |`;
        const requestedService: DataModels.ServiceRequested = this.getServiceRequested(inputEvent.runTimeInfo);

        logger.debug(logPrefix, 'requestedService', requestedService);
        switch (requestedService) {
            case 'FEATURE_SEARCH_LIST':
                this.validateEvent(inputEvent, FeatureSearchListSchema);
                break;
            case 'FEATURE_CREATE':
                this.validateEvent(inputEvent, FeatureInsertSchema);
                break;

            case 'FEATURE_DELETE':
                this.validateEvent(inputEvent, FeatureDeleteSchema);
                break;
<<<<<<< Updated upstream
        
            case 'FEATURE_UPDATE':
                this.validateEvent(inputEvent, FeatureUpdateSchema);
                break;
        }
=======
        }
            case 'FEATURE_UPDATE':
        this.validateEvent(inputEvent, FeatureUpdateSchema);
        break;

>>>>>>> Stashed changes
        return this.prepareRequestData(inputEvent, requestedService);

    }
    /**
     * this fn call method based on service request to get data in required format
     * @param event UtilityObjects.TransformedInputEvent
     * @param service DataModels.ServiceRequested
     * @returns 
     */
    private prepareRequestData(event: UtilityObjects.TransformedInputEvent, service: DataModels.ServiceRequested): DataModels.ServiceRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareRequestData |`;
        const temp: DataModels.ServiceRequestData = {requestedService: ""};
        logger.debug(logPrefix, 'Service', service);
        switch (service) {
            case 'FEATURE_SEARCH_LIST':
                return this.prepareFeatureSearchList(event);
            case 'FEATURE_CREATE':
                return this.prepareFeatureCreate(event);
            case 'FEATURE_DELETE':
                return this.prepareFeatureDelete(event);
            case 'FEATURE_UPDATE':
                return this.prepareFeatureUpdate(event);
            default:
                return temp ;
           
        }
    }


    private prepareFeatureSearchList(event: UtilityObjects.TransformedInputEvent): DataModels.FeatureSearchListRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareFeatureSearchList |`;
        logger.debug(logPrefix, `code: ${event.queryString.code}, Description: ${event.queryString.description}, channel: ${event.queryString.channel}`);
        return {
            requestedService: 'FEATURE_SEARCH_LIST',
            cfeature: event.queryString.code,
            featureDescription: event.queryString.description,
            cchannel: event.queryString.channel
        }

    }

    private prepareFeatureCreate(event: UtilityObjects.TransformedInputEvent): DataModels.FeatureCreateData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareFeatureSearchList |`;
        let body: DataModels.FeatureWithChannels = JSON.parse(event.body);
        logger.debug(logPrefix, `code: ${body.code}, Description: ${body.description}, channel: ${body.channels}`);


        return {
            requestedService: 'FEATURE_CREATE',
            cfeature: body.code != undefined ? body.code : "",
            featureDescription: body.description !== undefined ? body.description : "",
            cchannel: body.channels?.length != 0 && body.channels != undefined ? body.channels : []
        }

    }

    private prepareFeatureDelete(event: UtilityObjects.TransformedInputEvent): DataModels.FeatureDeleteData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareFeatureSearchList |`;
        logger.debug(logPrefix, `description: ${body.description}, channel: ${body.channels}`);
        return {
            requestedService: 'FEATURE_DELETE',
            cfeature: event.queryString.code
        }

    }

    private prepareFeatureUpdate(event: UtilityObjects.TransformedInputEvent): DataModels.FeatureUpdateData {

        const logPrefix = `${LOG_PREFIX_CLASS} prepareUpdateFeature |`;
        let body: DataModels.UpdatedFeature = JSON.parse(event.body);
        logger.debug(logPrefix, `code: ${event.queryString.code}, body: ${body}`);

        return {
            requestedService: 'FEATURE_UPDATE',
            cfeature: event.queryString.code,
            featureDescription: body.description != undefined ? body.description : "",
            channels: body.channels != undefined ? body.channels : []

        }


    }


    private validateEvent(event: UtilityObjects.TransformedInputEvent, eventSchema: any): void {
        const logPrefix = `${LOG_PREFIX_CLASS} validateEvent |`;
        const validator = new Utilities.JsonValidator();
        if (!validator.validateJson(event, eventSchema).valid) {
            throw new GCVErrors.InvalidRequestParameter('Input event is not valid');
        }
        logger.info(`${logPrefix} event is valid`);
    }

    public getServiceRequested(runTimeInfo: any): DataModels.ServiceRequested {
        const logPrefix = `${LOG_PREFIX_CLASS} getServiceRequested |`;
        const resourcePath: string = runTimeInfo.resourcePath;
        const resourceMethod: string = runTimeInfo.httpMethod;
        logger.debug(`${logPrefix} path: ${resourcePath}`);
        if (resourcePath.search(new RegExp(Constants.FEATURE_CODE_DELETE_API_PATH_REGEX)) > -1) {
            return 'FEATURE_DELETE;'
        }
        else if (resourcePath.search(new RegExp(Constants.FEATURE_SEARCH_LIST_API_PATH_REGEX)) > -1) {
            switch (resourceMethod) {
                case 'GET':
                    return 'FEATURE_SEARCH_LIST';
                case 'POST':
                    return 'FEATURE_CREATE';
                case 'DELETE':
                    return 'FEATURE_DELETE';
                case 'PUT':
                    return 'FEATURE_UPDATE';
                default:
                    throw new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid');
            }
        }
        throw new GCVErrors.ServiceNotSupported(`service ${resourcePath} is not supported`);
    }
}