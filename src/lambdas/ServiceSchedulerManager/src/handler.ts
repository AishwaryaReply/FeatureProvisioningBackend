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
import { VehicleFactory, VehicleHandler } from './vehicle';

const lambdaTracer  = new LambdaTracer();
const gcvCommonFunctions = new Common();
const gcvConfig = new Config();
const LOG_PREFIX = 'ServiceSchedulerHandler |';

/**
    * @description
    * this fn is entry point for the api method call from the frontend
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
        transformedEvent = await initializeFunction(event, context);
        let requestData: DataModels.ServiceRequestData = {
        }
        requestData.requestedService = 'FEATURE_SEARCH_LIST';
        // CORE
        // filtering event for required parameters
        let resourcePath: string = transformedEvent.runTimeInfo.resourcePath;
        if (resourcePath.search(new RegExp(Constants.FEATURE_CODE_DELETE_API_PATH_REGEX)) > -1 || 
            resourcePath.search(new RegExp(Constants.FEATURE_SEARCH_LIST_API_PATH_REGEX)) > -1){
                const featureHandler = FeaturesFactory.getFeaturesHandler();
                 requestData = featureHandler.getFeatureParams(transformedEvent);
        }
        else if(resourcePath.search(new RegExp(Constants.RULE_ID_DELETE_API_PATH_REGEX)) > -1 || resourcePath.search(new RegExp(Constants.RULE_SEARCH_LIST_API_PATH_REGEX))> -1) {
            const ruleHandler = RuleFactory.getRuleHandler();
             requestData = ruleHandler.getRuleParams(transformedEvent);
        }
        else if(resourcePath.search(new RegExp(Constants.VEHICLEGROUP_FEATURE_CODE_ID_API_PATH_REGEX))> -1 || resourcePath.search(new RegExp(Constants.VEHICLEGROUP_SEARCH_LIST_API_PATH_REGEX))>-1 || resourcePath.search(new RegExp(Constants.VEHICLEGROUP_ID_API_PATH_REGEX))>-1){
            const vehicleGroupHandler = VehicleGroupFactory.getVehicleGroupHandler();
             requestData = vehicleGroupHandler.getVehicleGroupParams(transformedEvent);   
        }
        else if(resourcePath.search(new RegExp(Constants.VEHICLE_ID_VIN_API_PATH_REGEX)) > -1 || resourcePath.search(new RegExp(Constants.VEHICLE_ID_API_PATH_REGEX)) > -1){
            const vehicleHandler = VehicleFactory.getVehicleHandler();
             requestData = vehicleHandler.getVehicleParams(transformedEvent);
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
 * this fn transforms the event into inputevent type of UtilityObjects.TransformedEvent
 * @param {APIGatewayProxyEvent} event
 * @param {Context} context
 * @returns {Promise<UtilityObjects.TransformedEvent>} any object because it is any in the gcv-utils library
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
 * this fn is called to initialize the api method based on the requestData.requestedService
 * @param {DataModels.ServiceRequestData} requestData
 * @returns {Promise<any>} because the response depends on the method being called
 */
//CALL FROM THE GCV LIBRARY.METHOD
async function invokeService(requestData: DataModels.ServiceRequestData): Promise<any> {
    
    switch (requestData.requestedService) {
        case 'FEATURE_SEARCH_LIST':
            return await FeaturesFactory.getFeaturesScheduler().getListFeatures(requestData as DataModels.FeatureSearchListRequestData);
        case 'FEATURE_CREATE': 
            return await FeaturesFactory.getFeaturesScheduler().insertFeature(requestData as DataModels.FeatureCreateData);
        case'FEATURE_DELETE' :
            return await FeaturesFactory.getFeaturesScheduler().deleteFeature(requestData as DataModels.FeatureDeleteData);
        case 'FEATURE_UPDATE' :
            return await FeaturesFactory.getFeaturesScheduler().updateFeature(requestData as DataModels.FeatureUpdateData);
        case  'RULE_SEARCH_LIST':
            return await RuleFactory.getRuleScheduler().getRulesForFeature(requestData as DataModels.RuleSearchListData);
        case 'RULE_CREATE' :
            return await RuleFactory.getRuleScheduler().insertRuleForFeature(requestData as DataModels.RuleCreateData);
        case 'RULE_DELETE' :
            return await RuleFactory.getRuleScheduler().deleteRuleFromFeature(requestData as DataModels.RuleDeleteData);
        case 'VEHICLEGROUP_FEATURE_INSERT':
            return await VehicleGroupFactory.getVehcileGroupScheduler().insertFeatureVehicleGroup(requestData as DataModels.VehicleGroupFeatureDeleteData);
        case 'VEHICLEGROUP_FEATURE_DELETE':
            return await VehicleGroupFactory.getVehcileGroupScheduler().deleteFeatureVehicleGroup(requestData as DataModels.VehicleGroupFeatureDeleteData);
        case 'VEHICLEGROUP_SEARCH_LIST':
            return await VehicleGroupFactory.getVehcileGroupScheduler().getVehicleGroup(requestData as DataModels.VehicleGroupSearchListData);
        case 'VEHICLEGROUP_CREATE':
            return await VehicleGroupFactory.getVehcileGroupScheduler().insertVehicleGroup(requestData as DataModels.VehicleGroupCreateData);
        case 'VEHICLEGROUP_UPDATE' :
            return await VehicleGroupFactory.getVehcileGroupScheduler().updateVehicleGroup(requestData as DataModels.VehicleGroupUpdateData);
        case 'VEHICLEGROUP_DELETE' :
            return await VehicleGroupFactory.getVehcileGroupScheduler().deleteVehicleGroup(requestData as DataModels.VehicleGroupDeleteData);
        case 'VEHICLE_SEARCH_LIST':
            return await VehicleFactory.getVehcileScheduler().getVehicleFromVehicleGroup(requestData as DataModels.VehicleSearchListData);
        case 'VEHICLE_CREATE':
            return await VehicleFactory.getVehcileScheduler().insertVehicleForVehicleGroup(requestData as DataModels.VehicleCreateDeleteData);
        case 'VEHICLE_DELETE':
            return await VehicleFactory.getVehcileScheduler().insertVehicleForVehicleGroup(requestData as DataModels.VehicleCreateDeleteData);
        
    }
}