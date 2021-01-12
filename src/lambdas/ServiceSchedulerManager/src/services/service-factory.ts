import { CommonServices } from "gcv-common-services";
import { GCVErrors } from "gcv-utils/lib/error/gcv-error";
import { ServiceScheduler, ServiceHandler } from ".";

export class ServiceFactory {
    public static getServiceHandler(): ServiceHandler {
        return new ServiceHandler();
    }

    public static getServiceScheduler(): ServiceScheduler {
        return new ServiceScheduler();
    }

    public static getVehicleDiscoveryService(): CommonServices.VehicleDiscoveryService{
        return new CommonServices.VehicleDiscoveryService();
    }

    public static getEnvironment() {
        const ENVIRONMENT = process.env.stage;
        if(!ENVIRONMENT){
            throw new GCVErrors.SystemException('Failed to get environment stage!');
        }
        return ENVIRONMENT;
    }
}