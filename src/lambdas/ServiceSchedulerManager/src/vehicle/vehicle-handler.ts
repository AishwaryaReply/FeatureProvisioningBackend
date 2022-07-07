import { DataModels } from '../interfaces';
import { UtilityObjects, GCVErrors } from 'gcv-utils';
import { Utilities } from 'gcv-utilities';
import { Constants, VehicleAddToVehicleGroup, VehicleDeleteFromVehicleGroup, VehicleGroupDeleteSchema, VehicleGroupInsertSchema, VehicleGroupSearchListSchema, VehicleGroupUpdateSchema, VehicleListFromVehicleGroup } from '../../constants'
import logger from 'gcv-logger';

const LOG_PREFIX_CLASS = 'VehicleHandler | ';

export class VehicleHandler {

    /**
     * this fn looks at event type and returns required data for the api method to be called
     * @param inputEvent UtilityObjects.TransformedInputEvent contains the input event data for the api, it is any object because it set to any in gcv-utils library
     * @returns data as ServiceRequestData
     */
    public getVehicleParams(inputEvent: UtilityObjects.TransformedInputEvent): DataModels.ServiceRequestData {

        const logPrefix = `${LOG_PREFIX_CLASS} getVehicleParams |`;
        const requestedService: DataModels.ServiceRequested = this.getServiceRequested(inputEvent.runTimeInfo);

        logger.debug(logPrefix, 'requestedService', requestedService);
        switch (requestedService) {
            case 'VEHICLE_SEARCH_LIST':
                this.validateEvent(inputEvent, VehicleListFromVehicleGroup)
                break;
            case 'VEHICLE_CREATE':
                this.validateEvent(inputEvent, VehicleAddToVehicleGroup)
                break;
            case 'VEHICLE_DELETE':
                this.validateEvent(inputEvent, VehicleDeleteFromVehicleGroup)
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
            case 'VEHICLE_SEARCH_LIST':
                return this.prepareVehicleSearchList(event);
            case 'VEHICLE_CREATE':
                return this.prepareVehicleCreate(event);
            case 'VEHICLE_DELETE':
                return this.prepareVehicleDelete(event);

        }
    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.VehicleSearchListData
     */
    private prepareVehicleSearchList(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleSearchListData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVehicleSearchList |`;
        logger.debug(logPrefix, `id: ${event.queryString.id}`);

        return {
            requestedService: 'VEHICLE_SEARCH_LIST',
            id: event.queryString.id
        }
    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.VehicleCreateDeleteData
     */
    private prepareVehicleCreate(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleCreateDeleteData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVehicleCreate |`;
        logger.debug(logPrefix, `id: ${event.queryString.id}, vin: ${event.queryString.vin}`);

        return {
            requestedService: 'VEHICLE_CREATE',
            id: event.queryString.id,
            vin: event.queryString.vin
        }

    }

    /**
     * this fn returns the event data as a DataModels interface needed for the api method
     * @param event UtilityObjects.TransformedInputEvent it is any object because it set to any in gcv-utils library
     * @returns Data as DataModels.VehicleCreateDeleteData
     */
    private prepareVehicleDelete(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleCreateDeleteData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVehicleDelete |`;
        logger.debug(logPrefix, `id: ${event.queryString.id}, vin: ${event.queryString.vin}`);

        return {
            requestedService: 'VEHICLE_DELETE',
            id: event.queryString.id,
            vin: event.queryString.vin
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
        if (resourcePath.search(new RegExp(Constants.VEHICLE_ID_VIN_API_PATH_REGEX)) > -1) { 
            switch (resourceMethod) {
                case 'POST':
                    return 'VEHICLE_CREATE';
                case 'DELETE':
                    return 'VEHICLE_DELETE';
                default:
                    throw new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid');
            }
        }
        else if (resourcePath.search(new RegExp(Constants.VEHICLE_ID_API_PATH_REGEX)) > -1) { 
            switch (resourceMethod) {
                case 'GET':
                    return 'VEHICLE_SEARCH_LIST';
                case 'POST':
                    return 'VEHICLE_CREATE';
                case 'DELETE':
                    return 'VEHICLE_DELETE';
                //case 'PUT':
                //     return '';
                default:
                    throw new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid');
            }
        }
        throw new GCVErrors.ServiceNotSupported(`service ${resourcePath} is not supported`);
    }

}