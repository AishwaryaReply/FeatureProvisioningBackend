import { CommonServices } from "gcv-common-services";
import { GCVErrors } from "gcv-utils/lib/error/gcv-error";
import { RuleScheduler, RuleHandler } from ".";

export class RuleFactory {
    public static getRuleHandler(): RuleHandler {
        return new RuleHandler();
    }

    public static getRuleScheduler(): RuleScheduler {
        return new RuleScheduler();
    }

    public static getRuleDiscoveryService(): CommonServices.RuleDiscoveryService{
        return new CommonServices.RuleDiscoveryService();
    }

    public static getEnvironment() {
        const ENVIRONMENT = process.env.stage;
        if(!ENVIRONMENT){
            throw new GCVErrors.SystemException('Failed to get environment stage!');
        }
        return ENVIRONMENT;
    }
}