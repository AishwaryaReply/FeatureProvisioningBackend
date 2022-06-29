export class FeaturesHandler {
import logger from 'gcv-logger';
import { UtilityObjects, GCVErrors } from 'gcv-utils';
import { Utilities } from 'gcv-utilities';
import { DataModels } from '../interfaces';
import { Constants, FeatureSearchListSchema } from '../../constants';
import { ServiceRequestData, ServiceRequested, } from '../interfaces/data-models';

const LOG_PREFIX_CLASS = 'ServiceSchedulerHandler | ';

export class ServiceHandler {
    public getServiceParams(inputEvent: UtilityObjects.TransformedInputEvent): ServiceRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} getServiceParams |`;
        const requestedService: DataModels.ServiceRequested = this.getServiceRequested(inputEvent.runTimeInfo);
        logger.debug(logPrefix, 'requestedService:', requestedService);
        switch (requestedService) {
            case 'FEATURE_SEARCH_LIST':
                this.validateEvent(inputEvent, FeatureSearchListSchema);
                break;

            case 'FEATURE_CREATE':
                this.validateEvent(inputEvent, FeatureCreateSchema);
                break;

            case 'FEATURE_DELETE':
                this.validateEvent(inputEvent, FeatureDeleteSchema);
                break;
        }

        return this.prepareRequestData(inputEvent, requestedService);
    }

    private prepareRequestData(event: UtilityObjects.TransformedInputEvent, service: DataModels.ServiceRequested): DataModels.ServiceRequestData {
        switch (service) {
            case 'FEATURE_SEARCH_LIST':
                return this.prepareFeatureSearchList(event);  
            case 'FEATURE_CREATE':
                return this.prepareFeatureCreate(event);  
            case 'FEATURE_DELETE':
                return this.prepareFeatureDelete(event);           

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
        logger.debug(logPrefix, `code: ${event.queryString.code}, Description: ${event.queryString.description}, channel: ${event.queryString.channel}`);
        return {
            requestedService: 'FEATURE_CREATE',
            cfeature: event.queryString.code,
            featureDescription: event.queryString.description,
            cchannel: event.queryString.channel
        }

    }

    private prepareFeatureDelete(event: UtilityObjects.TransformedInputEvent): DataModels.FeatureDeleteData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareFeatureSearchList |`;
        logger.debug(logPrefix, `code: ${event.queryString.code}, Description: ${event.queryString.description}, channel: ${event.queryString.channel}`);
        return {
            requestedService: 'FEATURE_DELETE',
            // TO BE WORKED
            cfeature: event.queryString.code
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
            return 'FEATURE_DELETE';
        }
        else if (resourcePath.search(new RegExp(Constants.FEATURE_SEARCH_LIST_API_PATH_REGEX)) > -1) {
            switch (resourceMethod) {
                case 'GET':
                    return 'FEATURE_SEARCH_LIST';
                case 'POST':
                    return 'FEATURE_CREATE';
                // case 'DELETE':
                //     return 'DELETE_SERVICE_APPOINTMENT';
                // case 'PUT':
                //     return 'UPDATE_SERVICE_APPOINTMENT';
                default:
                    throw new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid');
            }
        }
        throw new GCVErrors.ServiceNotSupported(`service ${resourcePath} is not supported`);
    }
}
}