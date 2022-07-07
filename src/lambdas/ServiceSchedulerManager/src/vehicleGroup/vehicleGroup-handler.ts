import logger from 'gcv-logger';
import { DataModels } from '../interfaces';
import { UtilityObjects, GCVErrors } from 'gcv-utils';
import { Utilities } from 'gcv-utilities';
import { Constants, VehicleGroupDeleteForFeatureSchema, VehicleGroupDeleteSchema, VehicleGroupInsertForFeatureSchema, VehicleGroupInsertSchema, VehicleGroupSearchListSchema, VehicleGroupUpdateSchema } from '../../constants';

const LOG_PREFIX_CLASS = 'VehicleGroupHandler | ';

export class VehicleGroupHandler {

    /**
     * this fn looks at event type and returns required data for the api method to be called
     * @param inputEvent UtilityObjects.TransformedInputEvent contains the input event data for the api, it is any object because it set to any in gcv-utils library
     * @returns data as ServiceRequestData
     */
    public getVehicleGroupParams(inputEvent: UtilityObjects.TransformedInputEvent): DataModels.ServiceRequestData {

        const logPrefix = `${LOG_PREFIX_CLASS} getVehicleGroupParams |`;
        const requestedService: DataModels.ServiceRequested = this.getServiceRequested(inputEvent.runTimeInfo);

        logger.debug(logPrefix, 'requestedService', requestedService);
        switch (requestedService) {
            case 'VEHICLEGROUP_FEATURE_INSERT':
                this.validateEvent(inputEvent, VehicleGroupInsertForFeatureSchema);
                break;
            case 'VEHICLEGROUP_FEATURE_DELETE':
                this.validateEvent(inputEvent, VehicleGroupDeleteForFeatureSchema)
                break;
            case 'VEHICLEGROUP_SEARCH_LIST':
                this.validateEvent(inputEvent, VehicleGroupSearchListSchema);
                break;
            case 'VEHICLEGROUP_CREATE':
                this.validateEvent(inputEvent, VehicleGroupInsertSchema);
                break;
            case 'VEHICLEGROUP_DELETE':
                this.validateEvent(inputEvent, VehicleGroupDeleteSchema);
                break;
            case 'VEHICLEGROUP_UPDATE':
                this.validateEvent(inputEvent, VehicleGroupUpdateSchema);
                break;

        }
        return this.prepareRequestData(inputEvent, requestedService);
    }

    /**
     * this fn call method based on service request to get data in required format
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @param service DataModels.ServiceRequested
     * @returns data as ServicRequestData for one of the API event
     */
    private prepareRequestData(event: UtilityObjects.TransformedInputEvent, service: DataModels.ServiceRequested): DataModels.ServiceRequestData {

        const logPrefix = `${LOG_PREFIX_CLASS} prepareRequestData |`;

        logger.debug(logPrefix, 'Service', service);

        switch (service) {
            case 'VEHICLEGROUP_FEATURE_INSERT':
                return this.prepareVGFeatureCreate(event);
            case 'VEHICLEGROUP_FEATURE_DELETE':
                return this.prepareVGFeatureDelete(event);
            case 'VEHICLEGROUP_SEARCH_LIST':
                return this.prepareVGSearchList(event);
            case 'VEHICLEGROUP_CREATE':
                return this.prepareVGCreate(event);
            case 'VEHICLEGROUP_UPDATE':
                return this.prepareVGUpdate(event);
            case 'VEHICLEGROUP_DELETE':
                return this.prepareVGDelete(event);
        }
    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.VehicleGroupFeatureCreateData
     */
    private prepareVGFeatureCreate(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleGroupFeatureCreateData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVGFeatureCreate |`;
        logger.debug(logPrefix, `code: ${event.queryString.code}, id: ${event.queryString.id}`);

        return {
            requestedService: "VEHICLEGROUP_FEATURE_INSERT",
            code: event.queryString.code,
            id: event.queryString.id
        }
    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent  it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.VehicleGroupFeatureDeleteData
     */
    private prepareVGFeatureDelete(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleGroupFeatureDeleteData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVGFeatureDelete |`;
        logger.debug(logPrefix, `code: ${event.queryString.code}, id: ${event.queryString.id}`);

        return {
            requestedService: "VEHICLEGROUP_FEATURE_DELETE",
            code: event.queryString.code,
            id: event.queryString.id
        }
    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.VehicleGroupSearchListData
     */
    private prepareVGSearchList(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleGroupSearchListData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVGSearchList |`;
        logger.debug(logPrefix, `feature: ${event.queryString.feature}`);

        return {
            requestedService: "VEHICLEGROUP_SEARCH_LIST",
            feature: event.queryString.feature
        }
    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.VehicleGroupCreateData
     */
    private prepareVGCreate(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleGroupCreateData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVGCreate |`;
        let body: DataModels.NewVehicleGroup = JSON.parse(event.requestBody);
        logger.debug(logPrefix, `body: ${body}`);

        return {
            requestedService: "VEHICLEGROUP_CREATE",
            description: body.description != undefined ? body.description : ""
        }
    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.VehicleGroupUpdateData
     */
    private prepareVGUpdate(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleGroupUpdateData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVCUdpate |`;
        let body: DataModels.NewVehicleGroup = JSON.parse(event.requestBody);
        logger.debug(logPrefix, `body: ${body}`);

        return {
            requestedService: "VEHICLEGROUP_UPDATE",
            id: event.queryString.id,
            description: body.description != undefined ? body.description : ""
        }
    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.VehicleGroupDeleteData
     */
    private prepareVGDelete(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleGroupDeleteData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVGUdpate |`;
        logger.debug(logPrefix, `id: ${event.queryString.id}`);

        return {
            requestedService: "VEHICLEGROUP_DELETE",
            id: event.queryString.id
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
        if (resourcePath.search(new RegExp(Constants.VEHICLEGROUP_FEATURE_CODE_ID_API_PATH_REGEX)) > -1) {
            switch (resourceMethod) {
                case 'POST':
                    return 'VEHICLEGROUP_FEATURE_INSERT';
                case 'DELETE':
                    return 'VEHICLEGROUP_FEATURE_DELETE';
                default:
                    throw new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid');
            }
        }

        else if (resourcePath.search(new RegExp(Constants.VEHICLEGROUP_SEARCH_LIST_API_PATH_REGEX)) > -1) {
            switch (resourceMethod) {
                case 'GET':
                    return 'VEHICLEGROUP_SEARCH_LIST';
                case 'POST':
                    return 'VEHICLEGROUP_CREATE';
                default:
                    throw new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid');
            }
        }
        else if (resourcePath.search(new RegExp(Constants.VEHICLEGROUP_ID_API_PATH_REGEX)) > -1) {
            switch (resourceMethod) {
                case 'DELETE':
                    return 'VEHICLEGROUP_DELETE';
                case 'PUT':
                    return 'VEHICLEGROUP_UPDATE';
                default:
                    throw new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid');
            }
        }
        throw new GCVErrors.ServiceNotSupported(`service ${resourcePath} is not supported`);
    }
}