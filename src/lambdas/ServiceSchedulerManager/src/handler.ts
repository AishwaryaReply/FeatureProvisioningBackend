import { LambdaTracer } from 'gcv-lambda-tracer';
import logger from 'gcv-logger';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { Config, Common, UtilityObjects, Message, GCVErrors } from 'gcv-utils';
import { DataModels } from './interfaces';
import { ServiceFactory } from './services';
import { Constants } from '../constants';
import { FeaturesFactory } from './features';
import { RuleFactory } from './rule';
import { VehicleGroupFactory } from './vehicleGroup';

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
        let resourcePath: string = transformedEvent.runTimeInfo.resourcePath;
        if (resourcePath.search(new RegExp(Constants.FEATURE_CODE_DELETE_API_PATH_REGEX)) > -1 || 
            resourcePath.search(new RegExp(Constants.FEATURE_SEARCH_LIST_API_PATH_REGEX)) > -1){
                const featureHandler = FeaturesFactory.getFeaturesHandler();
                const requestData = featureHandler.getFeatureParams(transformedEvent);
        }
        else if(resourcePath.search(new RegExp(Constants.RULE_ID_DELETE_API_PATH_REGEX)) > -1 || resourcePath.search(new RegExp(Constants.RULE_SEARCH_LIST_API_PATH_REGEX))> -1) {
            const ruleHandler = RuleFactory.getRuleHandler();
            const requestData = ruleHandler.getRuleParams(transformedEvent);
        }
        else if(resourcePath.search(new RegExp(Constants.VEHICLEGROUP_FEATURE_CODE_ID_API_PATH_REGEX))> -1 || resourcePath.search(new RegExp(Constants.VEHICLEGROUP_SEARCH_LIST_API_PATH_REGEX))>-1 || resourcePath.search(new RegExp(Constants.VEHICLEGROUP_ID_API_PATH_REGEX))>-1){
            const vehicleGroupHandler = VehicleGroupFactory.getVehicleGroupHandler();
            const requestData = vehicleGroupHandler.getVehicleGroupParams(transformedEvent);   
        }
        else if(resourcePath.search(new RegExp))
    )

        
        const serviceHandler = ServiceFactory.getServiceHandler();
        const requestData = serviceHandler.getServiceParams(transformedEvent); // return request format
 
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
//CALL FROM THE GCV LIBRARY.METHOD
async function invokeService(requestData: DataModels.ServiceRequestData): Promise<any> {
    const service = ServiceFactory.getServiceScheduler();
    switch (requestData.requestedService) {
        case 'FEATURE_SEARCH_LIST': 
        //To BE CHANGED ACCORDING TO THE METHOD
            return await service.searchByVin(requestData as DataModels.DfxSearchVinRequestData);
        
        case 'FEATURE_CREATE': 
        //To BE CHANGED ACCORDING TO THE 
            return await service.searchByVin(requestData as DataModels.DfxSearchVinRequestData);
        
    }
}