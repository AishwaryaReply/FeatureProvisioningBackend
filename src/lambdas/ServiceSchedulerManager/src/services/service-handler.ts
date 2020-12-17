import logger from 'gcv-logger';
import { UtilityObjects, GCVErrors } from 'gcv-utils';
import { Utilities } from 'gcv-utilities';
import { DataModels } from '../interfaces';
import { Constants, GetFactoryNoVinSchema, GetRepairNoVinSchema, GetAppointmentDetailsSchema, GetAppointmentSchema, GetTimeSegmentsSchema, GetTransportationOptionSchema, PostAppointmentSchema, PutAppointmentSchema, GetFactoryVinSchema, GetDealerNoVinSchema, GetDealerVinSchema, GetDealerDepartmentSchema, GetAdvisorsSchema, GetVehicleSchema, GetTokenSchema, SearchVinSchema, DeleteAppointmentSchema, GetRepairVinSchema, GetSummaryAppointmentSchema } from '../../constants';
import { ServiceRequestData, ServiceRequested, } from '../interfaces/data-models';

const LOG_PREFIX_CLASS = 'ServiceSchedulerHandler | ';

export class ServiceHandler {
    public getServiceParams(inputEvent: UtilityObjects.TransformedInputEvent): ServiceRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} getServiceParams |`;
        const requestedService: DataModels.ServiceRequested = this.getServiceRequested(inputEvent.runTimeInfo);
        logger.debug(logPrefix, 'requestedService:', requestedService);
        switch (requestedService) {
            case 'DFX_SEARCH_VIN':
                this.validateEvent(inputEvent, SearchVinSchema);
                break;
            case 'GET_DFX_VEHICLE':
                this.validateEvent(inputEvent, GetVehicleSchema);
                break;
            case 'GET_DFX_TOKEN':
                this.validateEvent(inputEvent, GetTokenSchema);
                break;
            case 'GET_DEALER_SERVICES_VIN':
                this.validateEvent(inputEvent, GetDealerVinSchema);
                break;
            case 'GET_FACTORY_SERVICES_WITHOUT_VIN':
                this.validateEvent(inputEvent, GetFactoryNoVinSchema);
                break;
            case 'GET_FACTORY_SERVICES_VIN':
                this.validateEvent(inputEvent, GetFactoryVinSchema);
                break;
            case 'GET_DEALER_SERVICES_WITHOUT_VIN':
                this.validateEvent(inputEvent, GetDealerNoVinSchema);
                break;
            case 'GET_DEALER_DEPARTMENT':
                this.validateEvent(inputEvent, GetDealerDepartmentSchema);
                break;
            case 'GET_APPOINTMENT_SUMMARY':
                this.validateEvent(inputEvent, GetSummaryAppointmentSchema);
                break;
            case 'GET_REPAIR_SERVICES_VIN':
                this.validateEvent(inputEvent, GetRepairVinSchema);
                break;
            case 'GET_REPAIR_SERVICES_WITHOUT_VIN':
                this.validateEvent(inputEvent, GetRepairNoVinSchema);
                break;
            case 'GET_ADVISORS':
                this.validateEvent(inputEvent, GetAdvisorsSchema);
                break;
            case 'GET_TRANSPORTATION_OPTIONS':
                this.validateEvent(inputEvent, GetTransportationOptionSchema);
                break;
            case 'GET_DEALER_DEPARTMENT_TIME_SEGMENTS':
                this.validateEvent(inputEvent, GetTimeSegmentsSchema);
                break;
            case 'GET_SERVICE_APPOINTMENTS':
                this.validateEvent(inputEvent, GetAppointmentSchema);
                break;
            case 'POST_APPOINTMENT':
                this.validateEvent(inputEvent, PostAppointmentSchema);
                break;
            case 'DELETE_SERVICE_APPOINTMENT':
                this.validateEvent(inputEvent, DeleteAppointmentSchema);
                break;
            case 'UPDATE_SERVICE_APPOINTMENT':
                this.validateEvent(inputEvent, PutAppointmentSchema);
                break;
            case 'GET_SERVICE_APPOINTMENT_DETAILS':
                this.validateEvent(inputEvent, GetAppointmentDetailsSchema);
                break;
        }

        return this.prepareRequestData(inputEvent, requestedService);
    }

    private prepareRequestData(event: UtilityObjects.TransformedInputEvent, service: DataModels.ServiceRequested): DataModels.ServiceRequestData {
        switch (service) {
            case 'DFX_SEARCH_VIN':
                return this.prepareDfxSearchVin(event);
            case 'GET_SERVICE_APPOINTMENTS':
            case 'GET_DFX_VEHICLE':
                return this.prepareVinRequest(event, service);
            case 'GET_DFX_TOKEN':
                return this.prepareGetDfxToken(event);
            case 'GET_DEALER_SERVICES_VIN':
            case 'GET_FACTORY_SERVICES_VIN':
            case 'GET_REPAIR_SERVICES_VIN':
                return this.prepareGetServicesVin(event, service);
            case 'GET_DEALER_SERVICES_WITHOUT_VIN':
            case 'GET_FACTORY_SERVICES_WITHOUT_VIN':
            case 'GET_REPAIR_SERVICES_WITHOUT_VIN':
                return this.prepareGetServicesNoVin(event, service);
            case 'GET_DEALER_DEPARTMENT':
            case 'GET_APPOINTMENT_SUMMARY':
                return this.prepareGetServicesData(event, service);
            case 'GET_ADVISORS':
            case 'GET_TRANSPORTATION_OPTIONS':
                return this.prepareGetDepartmentData(event, service);
            case 'GET_DEALER_DEPARTMENT_TIME_SEGMENTS':
                return this.prepareGetTimeSegments(event);
            case 'POST_APPOINTMENT':
                return this.preparePostAppointment(event);
            case 'UPDATE_SERVICE_APPOINTMENT':
                return this.preparePutAppointment(event);
            case 'DELETE_SERVICE_APPOINTMENT':
            case 'GET_SERVICE_APPOINTMENT_DETAILS':
                return this.prepareAppointmentOperation(event, service);

        }
    }

    private prepareGetDfxToken(event: UtilityObjects.TransformedInputEvent): DataModels.GetTokenRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareGetDfxToken |`;
        logger.debug(logPrefix, `dealer: ${event.queryString.hintdealer}`);
        return {
            requestedService: 'GET_DFX_TOKEN',
            hintdealer: event.queryString.hintdealer
        }
    }

    private prepareDfxSearchVin(event: UtilityObjects.TransformedInputEvent): DataModels.DfxSearchVinRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareDfxSearchVin |`;
        logger.debug(logPrefix, `email: ${event.queryString.email}, vin: ${event.pathParams.vin}, dealerToken: ${event.headers['dealer-authorization']}`);
        return {
            requestedService: 'DFX_SEARCH_VIN',
            email: event.queryString.email,
            vin: event.pathParams.vin,
            userid: event.pathParams.userid,
            dealerToken: event.headers['dealer-authorization']
        }
    }

    private prepareVinRequest(event: UtilityObjects.TransformedInputEvent, api: ServiceRequested): DataModels.VinRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareVinRequests |`;
        logger.debug(logPrefix, `api: ${api}, vin: ${event.pathParams.vin}, userId: ${event.pathParams.userid}, dealerToken: ${event.headers['dealer-authorization']}`);
        return {
            requestedService: api,
            vin: event.pathParams.vin,
            userid: event.pathParams.userid,
            dealerToken: event.headers['dealer-authorization']
        }
    }

    private prepareGetServicesVin(event: UtilityObjects.TransformedInputEvent, api: ServiceRequested): DataModels.GetServicesVinRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareGetServicesVin |`;
        logger.debug(logPrefix, `api: ${api}, vin: ${event.pathParams.vin}, userId: ${event.pathParams.userid}, dealerToken: ${event.headers['dealer-authorization']}, mileage ${event.queryString.mileage}`);
        return {
            requestedService: api,
            vin: event.pathParams.vin,
            userid: event.pathParams.userid,
            dealerToken: event.headers['dealer-authorization'],
            mileage: event.queryString.mileage
        }
    }

    private prepareGetServicesNoVin(event: UtilityObjects.TransformedInputEvent, api: ServiceRequested): DataModels.GetServicesNoVinRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareGetServicesNoVin |`;
        logger.debug(logPrefix, `api: ${api}, mileage: ${event.pathParams.mileage}, make: ${event.pathParams.make}, year: ${event.pathParams.year}, model: ${event.pathParams.model}, transmission: ${event.pathParams.transmission}, train: ${event.pathParams.train}, dealerToken: ${event.headers['dealer-authorization']},`);
        return {
            requestedService: api,
            dealerToken: event.headers['dealer-authorization'],
            mileage: event.pathParams.mileage,
            make: event.pathParams.make,
            model: event.pathParams.model,
            train: event.pathParams.train,
            transmission: event.pathParams.transmission,
            year: event.pathParams.year,
            engine: event.pathParams.engine
        }
    }

    private prepareGetServicesData(event: UtilityObjects.TransformedInputEvent, api: ServiceRequested): DataModels.ServicesListRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareGetServicesData |`;
        logger.debug(logPrefix, `api: ${api}, servicesList: ${event.requestBody.servicesList}, dealerToken: ${event.headers['dealer-authorization']}`);
        return {
            requestedService: api,
            servicesList: event.requestBody.servicesList,
            dealerToken: event.headers['dealer-authorization']
        }
    }

    private prepareGetDepartmentData(event: UtilityObjects.TransformedInputEvent, api: ServiceRequested): DataModels.DepartmentRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareGetDepartmentData |`;
        logger.debug(logPrefix, `api: ${api},departmentid: ${event.pathParams.departmentid}, dealerToken: ${event.headers['dealer-authorization']}`);
        return {
            requestedService: api,
            departmentId: event.pathParams.departmentid,
            dealerToken: event.headers['dealer-authorization']
        }
    }

    private prepareGetTimeSegments(event: UtilityObjects.TransformedInputEvent): DataModels.GetTimeSegmetsRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareGetTimeSegments |`;
        logger.debug(logPrefix, `departmentid: ${event.pathParams.departmentid}, startdate: ${event.queryString.startdate}, enddate: ${event.queryString.enddate}, dealerToken: ${event.headers['dealer-authorization']}`);
        return {
            requestedService: 'GET_DEALER_DEPARTMENT_TIME_SEGMENTS',
            departmentId: event.pathParams.departmentid,
            startdate: parseInt(event.queryString.startdate),
            enddate: parseInt(event.queryString.enddate),
            dealerToken: event.headers['dealer-authorization']
        }
    }

    private preparePostAppointment(event: UtilityObjects.TransformedInputEvent): DataModels.PostAppointmentRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} preparePostAppointment |`;
        logger.debug(logPrefix, `vin: ${event.pathParams.vin}, userId: ${event.pathParams.userid}, dealerToken: ${event.headers['dealer-authorization']}`);
        return {
            requestedService: 'POST_APPOINTMENT',
            vin: event.pathParams.vin,
            userid: event.pathParams.userid,
            departmentId: event.pathParams.departmentid,
            dealerToken: event.headers['dealer-authorization'],
            body: event.requestBody
        }
    }

    private preparePutAppointment(event: UtilityObjects.TransformedInputEvent): DataModels.PutAppointmentRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} preparePostAppointment |`;
        logger.debug(logPrefix, `vin: ${event.pathParams.vin}, userId: ${event.pathParams.userid}, dealerToken: ${event.headers['dealer-authorization']}`);
        return {
            requestedService: 'UPDATE_SERVICE_APPOINTMENT',
            vin: event.pathParams.vin,
            userid: event.pathParams.userid,
            departmentId: event.pathParams.departmentid,
            appointmentId: event.pathParams.appointmentid,
            dealerToken: event.headers['dealer-authorization'],
            body: event.requestBody
        }
    }

    private prepareAppointmentOperation(event: UtilityObjects.TransformedInputEvent, api: ServiceRequested): DataModels.AppointmentRequestData {
        const logPrefix = `${LOG_PREFIX_CLASS} prepareAppointmentOperation |`;
        
        logger.debug(logPrefix, `api: ${api}, appointmentid: ${event.pathParams.appointmentid}, departmentid: ${event.pathParams.departmentid}, dealerToken: ${event.headers['dealer-authorization']}`);
        return {
            requestedService: api,
            dealerToken: event.headers['dealer-authorization'],
            departmentId: event.pathParams.departmentid,
            appointmentId: event.pathParams.appointmentid,
            userid: event.pathParams.userid,
            vin: event.pathParams.vin
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
        if (resourcePath.search(new RegExp(Constants.DFX_SEARCH_VIN_API_PATH_REGEX)) > -1) {
            return 'DFX_SEARCH_VIN';
        }
        if (resourcePath.search(new RegExp(Constants.GET_DFX_VEHICLE_API_PATH_REGEX)) > -1) {
            return 'GET_DFX_VEHICLE';
        }
        if (resourcePath.search(new RegExp(Constants.GET_TOKEN_API_PATH_REGEX)) > -1) {
            return 'GET_DFX_TOKEN';
        }
        if (resourcePath.search(new RegExp(Constants.GET_DEALER_VIN_API_PATH_REGEX)) > -1) {
            return 'GET_DEALER_SERVICES_VIN';
        }
        if (resourcePath.search(new RegExp(Constants.GET_DEALER_NO_VIN_API_PATH_REGEX)) > -1) {
            return 'GET_DEALER_SERVICES_WITHOUT_VIN';
        }
        if (resourcePath.search(new RegExp(Constants.GET_FACTORY_VIN_API_PATH_REGEX)) > -1) {
            return 'GET_FACTORY_SERVICES_VIN';
        }
        if (resourcePath.search(new RegExp(Constants.GET_FACTORY_NO_VIN_API_PATH_REGEX)) > -1) {
            return 'GET_FACTORY_SERVICES_WITHOUT_VIN';
        }
        if (resourcePath.search(new RegExp(Constants.GET_REPAIR_VIN_API_PATH_REGEX)) > -1) {
            return 'GET_REPAIR_SERVICES_VIN';
        }
        if (resourcePath.search(new RegExp(Constants.GET_REPAIR_NO_VIN_API_PATH_REGEX)) > -1) {
            return 'GET_REPAIR_SERVICES_WITHOUT_VIN';
        }
        if (resourcePath.search(new RegExp(Constants.GET_DEALER_DEPARTMENT_API_PATH_REGEX)) > -1) {
            return 'GET_DEALER_DEPARTMENT';
        }
        if (resourcePath.search(new RegExp(Constants.GET_APPOINTMENT_API_PATH_REGEX)) > -1) {
            return 'GET_APPOINTMENT_SUMMARY';
        }
        if (resourcePath.search(new RegExp(Constants.GET_ADVISORS_API_PATH_REGEX)) > -1) {
            return 'GET_ADVISORS';
        }
        if (resourcePath.search(new RegExp(Constants.GET_TRANSPORTATION_API_PATH_REGEX)) > -1) {
            return 'GET_TRANSPORTATION_OPTIONS';
        }
        if (resourcePath.search(new RegExp(Constants.GET_TIME_SEGMENTS_API_PATH_REGEX)) > -1) {
            return 'GET_DEALER_DEPARTMENT_TIME_SEGMENTS';
        }
        if (resourcePath.search(new RegExp(Constants.GET_APPOINTMENTS_API_PATH_REGEX)) > -1) {
            return 'GET_SERVICE_APPOINTMENTS';
        }
        if (resourcePath.search(new RegExp(Constants.POST_APPOINTMENT_API_PATH_REGEX)) > -1) {
            return 'POST_APPOINTMENT';
        }
        if (resourcePath.search(new RegExp(Constants.APPOINTMENT_DETAILS_API_PATH_REGEX)) > -1) {
            switch (resourceMethod) {
                case 'GET':
                    return 'GET_SERVICE_APPOINTMENT_DETAILS';
                case 'DELETE':
                    return 'DELETE_SERVICE_APPOINTMENT';
                case 'PUT':
                    return 'UPDATE_SERVICE_APPOINTMENT';
                default:
                    throw new GCVErrors.HttpMethodNotAllowed('HttpMethod is not valid');
            }
        }
        throw new GCVErrors.ServiceNotSupported(`service ${resourcePath} is not supported`);
    }
}