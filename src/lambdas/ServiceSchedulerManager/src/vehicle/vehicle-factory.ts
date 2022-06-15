import { CommonServices } from "gcv-common-services";
import { GCVErrors } from "gcv-utils/lib/error/gcv-error";
import { VehicleScheduler, VehicleHandler } from ".";

export class VehicleFactory {
    public static getVehicleHandler(): VehicleHandler {
        return new VehicleHandler();
    }

    public static getVehcileScheduler(): VehicleScheduler {
        return new VehicleScheduler();
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