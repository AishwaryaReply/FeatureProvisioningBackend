import { LambdaTracer } from 'gcv-lambda-tracer';
import logger from 'gcv-logger';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { Config, Common, UtilityObjects, Message, GCVErrors } from 'gcv-utils';
import { DataModels } from './interfaces';
import { ServiceFactory } from './services';

const lambdaTracer  = new LambdaTracer();
const gcvCommonFunctions = new Common();
const gcvConfig = new Config();
const LOG_PREFIX = 'ServiceSchedulerHandler |';

/**
    * @description
    * 
    * @param {APIGatewayProxyEvent} event: Request in JSON format received by Lambda.
    * @param {Context} context: AWS Lambda uses this parameter to provide details of your Lambda function's execution.
    * @param {*} callback: Used to explicitly return information back to the API gateway.
 */
module.exports.handler = async (event: APIGatewayProxyEvent, context: Context): Promise<any> => {
    logger.info(`${LOG_PREFIX} #LAMBDA_START#`);

    let transformedEvent: UtilityObjects.TransformedEvent = {} as UtilityObjects.TransformedEvent;
    let lambdaResp: UtilityObjects.LambdaResponse = {
        statusCode: 200
    };
    let lambdaProxyResp: UtilityObjects.LambdaProxyResponse;

    try {
        // INIT
        transformedEvent = await initializeFunction(event, context)

        // CORE
        // filtering event for required parameters
        const serviceHandler = ServiceFactory.getServiceHandler();
        const requestData = serviceHandler.getServiceParams(transformedEvent); // return request format

        // Validating the request for the specific service from the vin and userid
        const vds = ServiceFactory.getVehicleDiscoveryService();
        if (requestData.vin && requestData.userid) {
                const vehicleDiscovery = await vds.getVehicleDetails(requestData.userid, requestData.vin);
                // If vehicle details does not exists
                if (!vehicleDiscovery || !vehicleDiscovery.vehicles || !vehicleDiscovery.vehicles[0]) {
                    throw new GCVErrors.NotFound('Userid vin combination does not exist');
                }
                logger.info(LOG_PREFIX, 'Userid vin combination exists');
        }
        lambdaResp.body = await invokeService(requestData);
    } catch (error) {
        logger.error(`${LOG_PREFIX} Error: ${JSON.stringify(error)} stack ${error.stack}`);
        // Call the module gcv-utils.message to get the exact error from cache / db and display channel
        lambdaResp = await new Message().getErrorMessage(error);
    } finally {
        //Get lambda proxy response along with applicable headers
        lambdaProxyResp = await gcvCommonFunctions.getLambdaProxyFinalizedResponse(lambdaResp, transformedEvent.headers || event.headers);
        await gcvConfig.finalize();
    }

    logger.info(`${LOG_PREFIX} #LAMBDA_END#`)
    return lambdaProxyResp;
}

lambdaTracer.tracerFinalize(module);

/**
 *
 *
 * @param {APIGatewayProxyEvent} event
 * @param {Context} context
 * @returns {Promise<UtilityObjects.TransformedEvent>}
 */
async function initializeFunction(event: APIGatewayProxyEvent, context: Context): Promise<UtilityObjects.TransformedEvent> {

    lambdaTracer.tracerInitialize(event);
    // Call transform event received from API gateway lambda proxy into a generic format
    const requestObj: UtilityObjects.TransformedEvent = await gcvCommonFunctions.transformInputEvent(event, context);
    logger.debug(`${LOG_PREFIX} transformedRequestObj: ${JSON.stringify(requestObj)}`);

    // Initializing cache, logger and loading generic properties.
    await gcvConfig.initialize(requestObj);

    // Get headers from request
    return requestObj;
}

/**
 *
 *
 * @param {DataModels.ServiceRequestData} requestData
 * @returns {Promise<any>}
 */
async function invokeService(requestData: DataModels.ServiceRequestData): Promise<any> {
    const service = ServiceFactory.getServiceScheduler();
    switch (requestData.requestedService) {
        case 'DFX_SEARCH_VIN': 
            return await service.searchByVin(requestData as DataModels.DfxSearchVinRequestData);
        case 'GET_DFX_VEHICLE': 
            return await service.getDfxVehicle(requestData as DataModels.GetDfxVehicleRequestData);
        case 'GET_DFX_TOKEN': 
            return await service.getDfxToken(requestData as DataModels.GetTokenRequestData);
        case 'GET_DEALER_SERVICES_VIN': 
            return await service.getDealerServicesVin(requestData as DataModels.GetServicesVinRequestData);
        case 'GET_DEALER_SERVICES_WITHOUT_VIN': 
            return await service.getDealerServicesWithoutVin(requestData as DataModels.GetServicesNoVinRequestData);
        case 'GET_FACTORY_SERVICES_VIN': 
            return await service.getFactoryServicesVin(requestData as DataModels.GetServicesVinRequestData);
        case 'GET_FACTORY_SERVICES_WITHOUT_VIN': 
            return await service.getFactoryServicesWithoutVin(requestData as DataModels.GetServicesNoVinRequestData);
        case 'GET_REPAIR_SERVICES_VIN': 
            return await service.getRepairServicesVin(requestData as DataModels.GetServicesVinRequestData);
        case 'GET_REPAIR_SERVICES_WITHOUT_VIN': 
            return await service.getRepairServicesWithoutVin(requestData as DataModels.GetServicesNoVinRequestData);
        case 'GET_DEALER_DEPARTMENT': 
            return await service.getDealerDepartment(requestData as DataModels.GetDealerDepartmentRequestData);
        case 'GET_APPOINTMENT_SUMMARY': 
            return await service.getAppointmentSummary(requestData as DataModels.GetAppointmentSummaryRequestData);        
        case 'GET_ADVISORS': 
            return await service.getAdvisors(requestData as DataModels.GetAdvisorsRequestData);
        case 'GET_TRANSPORTATION_OPTIONS': 
            return await service.getTransportationOptions(requestData as DataModels.GetTransportationOptionsRequestData);
        case 'GET_DEALER_DEPARTMENT_TIME_SEGMENTS': 
            return await service.getDealerDepartmentTimeSegments(requestData as DataModels.GetTimeSegmetsRequestData);
        case 'GET_SERVICE_APPOINTMENTS': 
            return await service.getServiceAppointments(requestData as DataModels.GetAppointmentsRequestData);
        case 'POST_APPOINTMENT': 
            return await service.postAppointment(requestData as DataModels.PostAppointmentRequestData);
        case 'DELETE_SERVICE_APPOINTMENT': 
            return await service.deleteServiceAppointment(requestData as DataModels.AppointmentRequestData);
        case 'UPDATE_SERVICE_APPOINTMENT': 
            return await service.updateServiceAppointment(requestData as DataModels.PutAppointmentRequestData);
        case 'GET_SERVICE_APPOINTMENT_DETAILS':
            return await service.getServiceAppointmentDetails(requestData as DataModels.AppointmentRequestData);
    }
}