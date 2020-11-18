import logger from 'gcv-logger';
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';
import { Config, Common, UtilityObjects, Message, GCVErrors } from 'gcv-utils';
import { DataModels } from './interfaces';
import { ServiceFactory } from './services';

const gcvCommonFunctions = new Common();
const gcvConfig = new Config();
const gcvMessage = new Message();
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

    let headers = {} as Map<string, string>;
    let response;

    try {
        // INIT
        const requestObj = await initializeFunction(event, context)
        headers = requestObj.headers;

        // CORE
        // filtering event for required parameters
        const serviceHandler = ServiceFactory.getServiceHandler();
        const requestData = serviceHandler.getServiceParams(requestObj); // return request format

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
        const serviceResponse = await invokeService(requestData);

        response = buildResponseWithCorsHeaders(200, serviceResponse, headers);
    } catch (error) {
        response = await manageError(error, headers)
    } finally {
        try {
            await gcvConfig.finalize();
        } catch (err) {
            response = buildResponseWithCorsHeaders(500, null, headers);
            logger.error(`${LOG_PREFIX} error: ${JSON.stringify(err.stack)}`);
        }
    }

    logger.info(`${LOG_PREFIX} #LAMBDA_END# | ${JSON.stringify(response)}`);
    return response;
}

/**
 *
 *
 * @param {number} statusCode
 * @param {*} responseBody
 * @param {Map<string, string>} headers
 * @returns {APIGatewayProxyResult}
 */
function buildResponseWithCorsHeaders(statusCode: number, responseBody: any, headers: Map<string, string>): APIGatewayProxyResult {
    const serviceResponse = gcvCommonFunctions.getLambdaProxyResponse(statusCode, responseBody);
    const corsHeaders = gcvCommonFunctions.getCORSHeaders(headers);
    const lambdaProxyResponse = gcvCommonFunctions.getLambdaProxyResponseWithHeaders(serviceResponse, corsHeaders);
    const lambdaProxyResponseWithBody: APIGatewayProxyResult = {
        statusCode: lambdaProxyResponse.statusCode,
        body: lambdaProxyResponse.body ?? '',
        headers: lambdaProxyResponse.headers
    }
    logger.info(LOG_PREFIX, `Lambda proxy response with headers: ${JSON.stringify(lambdaProxyResponse)}`);
    return lambdaProxyResponseWithBody;
}

/**
 *
 *
 * @param {Error} error
 * @param {Map<string, string>} headers
 * @returns {Promise<APIGatewayProxyResult>}
 */
async function manageError(error: Error, headers: Map<string, string>): Promise<APIGatewayProxyResult> {
    /**Call the module gcv-utils.Message to get the exact error
     * from cache / DB and display user channel  */
    let response;

    try {
        logger.error(`${LOG_PREFIX} catch|:${JSON.stringify(error) + error.stack}`);
        //getting error message in lambdaProxy format from database/cache
        //const errorMessage = await gcvMessage.getLambdaProxyErrorMessage(error);
        const errorMessage: UtilityObjects.ErrorMessage = await gcvMessage.getErrorMessage(error);

        response = buildResponseWithCorsHeaders(errorMessage.statusCode, errorMessage.body, headers);

    } catch (err) {
        logger.error(`${LOG_PREFIX}  getGCVMessage | response |:${JSON.stringify(err) + err.stack}`);
        //getting default message in case db error fetch fails
        response = buildResponseWithCorsHeaders(500, null, headers);

    }

    return response;
}

/**
 *
 *
 * @param {APIGatewayProxyEvent} event
 * @param {Context} context
 * @returns {Promise<UtilityObjects.TransformedEvent>}
 */
async function initializeFunction(event: APIGatewayProxyEvent, context: Context): Promise<UtilityObjects.TransformedEvent> {

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
    const service = ServiceFactory.getServiceScheduling();
    switch (requestData.requestedService) {
        case 'DFX_SEARCH_EMAIL': 
            return await service.searchByEmail(requestData as DataModels.DfxSearchEmailRequestData);
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
        // case 'GET_DEALER_DEPARTMENT': 
        //     return await service.getManual(requestData as DataModels.GetManualRequestData);
        // case 'GET_APPOINTMENT_SUMMARY': 
        //     return await service.getCoverages(requestData as DataModels.GetCoveragesRequestData);        
        // case 'GET_ADVISORS': 
        //     return await service.getManual(requestData as DataModels.GetManualRequestData);
        // case 'GET_TRANSPORTATION_OPTIONS': 
        //     return await service.getMileage(requestData as DataModels.GetMileageRequestData);
        // case 'GET_DEALER_DEPARTMENT_TIME_SEGMENTS': 
        //     return await service.getManual(requestData as DataModels.GetManualRequestData);
        // case 'GET_SERVICE_APPOINTMENTS': 
        //     return await service.getCoverages(requestData as DataModels.GetCoveragesRequestData);
        // case 'POST_APPOINTMENT': 
        //     return await service.getMileage(requestData as DataModels.GetMileageRequestData);
        // case 'DELETE_SERVICE_APPOINTMENT': 
        //     return await service.getManual(requestData as DataModels.GetManualRequestData);
        // case 'UPDATE_SERVICE_APPOINTMENT': 
        //     return await service.getManual(requestData as DataModels.GetManualRequestData);
        // case 'GET_SERVICE_APPOINTMENT_DETAILS':
        //     return await service.getCoverages(requestData as DataModels.GetCoveragesRequestData);
    }
}