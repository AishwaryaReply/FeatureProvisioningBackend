import { CommonServices } from "gcv-common-services";
import { ServiceScheduling, ServiceHandler } from ".";

export class ServiceFactory {
    public static getServiceHandler(): ServiceHandler {
        return new ServiceHandler();
    }

    public static getServiceScheduling(): ServiceScheduling {
        return new ServiceScheduling();
    }

    public static getVehicleDiscoveryService(): CommonServices.VehicleDiscoveryService{
        return new CommonServices.VehicleDiscoveryService();
    }
}