import { FeaturesScheduler } from "./features-scheduler";
import { FeaturesHandler } from "./features-handler";


export class FeaturesFactory{

    public static getFeaturesHandler(): FeaturesHandler {
        return new FeaturesHandler();
    }

    public static getFeaturesScheduler(): FeaturesScheduler{
        return new FeaturesScheduler();
    }

    public static getEnvironment() {
        const ENVIRONMENT = process.env.stage;
        if(!ENVIRONMENT){
            throw new GCVErrors.SystemException('Failed to get environment stage!');
        }
        return ENVIRONMENT; //string
    }


}

export class FeaturesFactory{}