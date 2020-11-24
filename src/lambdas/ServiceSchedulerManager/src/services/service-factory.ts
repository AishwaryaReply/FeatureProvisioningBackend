import { CommonServices } from "gcv-common-services";
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
}