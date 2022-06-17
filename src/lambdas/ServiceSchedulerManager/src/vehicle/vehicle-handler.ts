import { DataModels } from '../interfaces';
import { UtilityObjects, GCVErrors } from 'gcv-utils';
import { Utilities } from 'gcv-utilities';
import { Constants, VehicleAddToVehicleGroup, VehicleDeleteFromVehicleGroup, VehicleGroupDeleteSchema, VehicleGroupInsertSchema, VehicleGroupSearchListSchema, VehicleGroupUpdateSchema, VehicleListFromVehicleGroup } from '../../constants'


export class VehicleHandler {

    /**
    * this fn looks at event type and returns required data for the api method to be called
    * @param inputEvent UtilityObjects.TransformedInputEvent contains the input event data for the api
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
     * this fn call method based on service request to get data in required format
     * @param event UtilityObjects.TransformedInputEvent
     * @param service DataModels.ServiceRequested
     * @returns 
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

    private prepareVehicleSearchList(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleSearchListData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVehicleSearchList |`;
        logger.debug(logPrefix, `id: ${event.queryString.id}`);

        return {
            requestedService: 'VEHICLE_SEARCH_LIST',
            id: event.queryString.id
        }
    }

    private prepareVehicleCreate(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleCreateDeleteData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVehicleCreate |`;
        logger.debug(logPrefix, `id: ${event.queryString.id}, vin: ${event.queryString.vin}`);

        return {
            requestedService: 'VEHICLE_CREATE',
            id: event.queryString.id,
            vin: event.queryString.vin
        }

    }

    private prepareVehicleDelete(event: UtilityObjects.TransformedInputEvent): DataModels.VehicleCreateDeleteData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVehicleDelete |`;
        logger.debug(logPrefix, `id: ${event.queryString.id}, vin: ${event.queryString.vin}`);

        return {
            requestedService: 'VEHICLE_DELETE',
            id: event.queryString.id,
            vin: event.queryString.vin
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
        if (resourcePath.search(new RegExp(Constants.VEHICLE_ID_VIN_API_PATH_REGEX)) > -1) {
            switch (resourceMethod) {
                case 'POST':
                    return 'VEHICLE_CREATE';
                case 'DELETE':
                    return 'VEHICLE_DELETE';
            }
        }
        else if (resourcePath.search(new RegExp(Constants.VEHICLE_SEARCH_LIST_API_PATH_REGEX)) > -1) {
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