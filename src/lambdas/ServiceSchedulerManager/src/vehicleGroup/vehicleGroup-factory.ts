import { CommonServices } from "gcv-common-services";
import { GCVErrors } from "gcv-utils/lib/error/gcv-error";
import { VehicleGroupScheduler, VehicleGroupHandler } from ".";

export class VehicleGroupFactory {
    public static getVehicleGroupHandler(): VehicleGroupHandler {
        return new VehicleGroupHandler();
    }

    public static getVehcileGroupScheduler(): VehicleGroupScheduler {
        return new VehicleGroupScheduler();
    }

    public static getVehicleGroupDiscoveryService(): CommonServices.VehicleGroupDiscoveryService{
        return new CommonServices.VehicleGroupDiscoveryService();
    }

    public static getEnvironment() {
        const ENVIRONMENT = process.env.stage;
        if(!ENVIRONMENT){
            throw new GCVErrors.SystemException('Failed to get environment stage!');
        }
        return ENVIRONMENT;
    }
}