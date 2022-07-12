import { DataModels } from '../interfaces';
import { Constants, RuleDeleteSchema, RuleInsertSchema, RuleSearchListSchema } from '../../constants';
import { UtilityObjects, GCVErrors } from 'gcv-utils';
import { Utilities } from 'gcv-utilities';
import logger from 'gcv-logger';


const LOG_PREFIX_CLASS = 'RuleHandler | ';

export class RuleHandler {

   /**
     * this fn looks at event type and returns required data for the api method to be called
     * @param inputEvent UtilityObjects.TransformedInputEvent contains the input event data for the api, it is any object because it set to any in gcv-utils library
     * @returns data as ServiceRequestData
     */
    public getRuleParams(inputEvent: UtilityObjects.TransformedInputEvent): DataModels.ServiceRequestData {

        const logPrefix = `${LOG_PREFIX_CLASS} getRuleParams |`;
        const requestedService: DataModels.ServiceRequested = this.getServiceRequested(inputEvent.runTimeInfo);

        logger.debug(logPrefix, 'requestedService', requestedService);
        switch (requestedService) {
            case 'RULE_SEARCH_LIST':
                this.validateEvent(inputEvent, RuleSearchListSchema)
                break;
            case 'RULE_CREATE':
                this.validateEvent(inputEvent, RuleInsertSchema)
                break;
            case 'RULE_DELETE':
                this.validateEvent(inputEvent, RuleDeleteSchema)
                break;

        }
        return this.prepareRequestData(inputEvent, requestedService);
    }
     /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @param service DataModels.ServiceRequested
     * @returns data as ServicRequestData for one of the API event
     */
    private prepareRequestData(event: UtilityObjects.TransformedInputEvent, service: DataModels.ServiceRequested): DataModels.ServiceRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareRequestData |`;

        logger.debug(logPrefix, 'Service', service);
        switch (service) {
            case 'RULE_SEARCH_LIST':
                return this.prepareRuleSearchList(event);
            case 'RULE_CREATE':
                return this.prepareRuleCreate(event);
            case 'RULE_DELETE':
                return this.prepareRuleDelete(event);

        }
    }
    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.RuleSearchListData
     */
    private prepareRuleSearchList(event: UtilityObjects.TransformedInputEvent): DataModels.RuleSearchListData {

        const logPrefix = `${LOG_PREFIX_CLASS} prepareRuleSearchList |`;
        logger.debug(logPrefix, `code: ${event.pathParams.code}`);

        return {
            requestedService: 'RULE_SEARCH_LIST',
            code: event.pathParams.code
        };
    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.RuleCreateData
     */
    private prepareRuleCreate(event: UtilityObjects.TransformedInputEvent): DataModels.RuleCreateData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareRuleCreate |`;
        let body: DataModels.NewConfigurateRule = JSON.parse(event.requestBody);
        logger.debug(logPrefix, `code: ${event.pathParams.code}, body: ${body}`);

        return {
            requestedService: 'RULE_CREATE',
            igroup: "",
            cfeature: event.pathParams.code,
            cregion: body.region != undefined ? body.region : "",
            cbrand: body.brand != undefined ? body.brand : "",
            cmarket: body.market != undefined ? body.market : "",
            cmodel: body.model != undefined ? body.model : "",
            cservice: body.service != undefined ? body.service : "",
            imodelyear: String(body.modelYear),
        }
    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.RuleDeleteData
     */
    private prepareRuleDelete(event: UtilityObjects.TransformedInputEvent): DataModels.RuleDeleteData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareRuleCreate |`;
        logger.debug(logPrefix, `code: ${event.pathParams.code}, id: ${event.pathParams.id}`);

        return {
            requestedService: "RULE_DELETE",
            cfeature: event.pathParams.code,
            irule: event.pathParams.id
        }
    }

    /**
     * this fn validate the event data with the event schema
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @param eventSchema any object takes in the schema of event
     * @returns Data as DataModels.FeatureSearchListRequestData
     */
    private validateEvent(event: UtilityObjects.TransformedInputEvent, eventSchema: any): void {
        const logPrefix = `${LOG_PREFIX_CLASS} validateEvent |`;
        const validator = new Utilities.JsonValidator();
        if (!validator.validateJson(event, eventSchema).valid) {
            throw new GCVErrors.InvalidRequestParameter('Input event is not valid');
        }
        logger.info(`${logPrefix} event is valid`);
    }

    /**
     * this fn returns the request type string based on the resourceMethod(http method)
     * @param runTimeInfo any object because it is assigned any in gcv-util library
     * @returns string as ServiceRequested
     */
    public getServiceRequested(runTimeInfo: any): DataModels.ServiceRequested {
        const logPrefix = `${LOG_PREFIX_CLASS} getServiceRequested |`;
        const resourcePath: string = runTimeInfo.resourcePath;
        const resourceMethod: string = runTimeInfo.httpMethod;
        logger.debug(`${logPrefix} path: ${resourcePath}`);
        if (resourcePath.search(new RegExp(Constants.RULE_ID_DELETE_API_PATH_REGEX)) > -1) {
            return 'RULE_DELETE';
        }
        else if (resourcePath.search(new RegExp(Constants.RULE_SEARCH_LIST_API_PATH_REGEX)) > -1) {
            switch (resourceMethod) {
                case 'GET':
                    return 'RULE_SEARCH_LIST';
                case 'POST':
                    return 'RULE_CREATE';
                case 'DELETE':
                    return 'RULE_DELETE';
                //case 'PUT':
                //     return 'FEATURE_UPDATE';
                default:
                    throw new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid');
            }
        }
        throw new GCVErrors.ServiceNotSupported(`service ${resourcePath} is not supported`);
    }
}