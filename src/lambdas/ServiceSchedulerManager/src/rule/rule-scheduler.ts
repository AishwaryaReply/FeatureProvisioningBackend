import { DataModels } from "../interfaces";
import { RuleFactory } from "./rule-factory";


export class RuleScheduler{

    /**
     * this fn is used to get rules for the specific feature
     * @param code string for code of the feature
     * @returns list of rules fro the specific feature
     */
    public async getRulesForFeature(code: string): Promise<DataModels.GetFeaturesRulesResponse> {
        
        const logPrefix = `${LOG_PREFIX_CLASS} | getRulesForFeature |`;
        const environment = RuleFactory.getEnvironment();
        
        logger.debug(logPrefix, `code: ${code}`);
        const response: DataModels.GetFeaturesRulesResponse = await GroupFeatureDao.selectRulesForFeatureFromDB(code);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetFeaturesRulesResponse = {};

        for(let rule:DataModels.Rule of response.rules){
            if(rule.brand && rule.id && rule.market && rule.model && rule.modelYear && rule.region && rule.service){
                filteredResponse.rules[] = rule;


            }
        }

        return filteredResponse;
    }


    /**
     * this fn inserts rule for the feature
     * @param code code of the feature
     * @param request values to be inserted
     * @returns Promise as PostResponse
     */
    public async insertRuleForFeature(code:string, request:DataModels.NewConfigurateRule): Promise<DataModels.PostResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} | insertRulesForFeature |`;
        const environment = RuleFactory.getEnvironment();
        const mappedRequest: DataModels.RulePost= {
            igroup: "",
            cfeature: code,
            cregion: request.region,
            cbrand: request.brand,
            cmarket: request.market,
            cmodel: request.model,
            cservice: request.service,
            imodelyear: request.modelYear            
        }

        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.PostResponse = await GroupFeatureDao.insertGroupFeatureRule(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PostResponse = {};

        if(response.message){
            filteredResponse ={
                message: response.message
            }
        }
    return filteredResponse;
    }

    /**
     * this fn deletes rule from the feature
     * @param code identifier of the features
     * @param id identifier of the rule 
     * @returns Promise as DeleteResponse
     */
    public async deleteRuleFromFeature(code: string, id: number): Promise<DataModels.DeleteResponse>{
        const logPrefix = `${LOG_PREFIX_CLASS} | deleteRulesForFeature |`;
        const environment = RuleFactory.getEnvironment();
        const mappedRequest = {
            igroup: id,
            cfeature: code
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: DataModels.DeleteResponse = await GroupFeatureDao.deleteGroupFeatureRule(mappedRequest);
        logger.debug(logPrefix, `response: ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.DeleteResponse = {}

        if(response.message){
            filteredResponse = {
                message: response.message
            }
        }

        return filteredResponse;
    }
}