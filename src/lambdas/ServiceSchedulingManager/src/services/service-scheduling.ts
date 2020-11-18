import { DataModels } from "../interfaces";
import { SchedulingServiceDataModels, SchedulingConectorService } from 'gcv-meld';
import logger from "gcv-logger";
import { Constants } from "../../constants";

const LOG_PREFIX_CLASS = 'ServiceScheduling | ';

export class ServiceScheduling {
    public async searchByEmail(request: DataModels.DfxSearchEmailRequestData): Promise<DataModels.SearchEmailResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} searchByEmail |`;
        const mappedRequest: SchedulingServiceDataModels.GetSearchRequestParams = {
            email: request.email,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetSearchResponse = await SchedulingConectorService.getDfxSearch(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.SearchEmailResponse = {};

        if(response.customerPreviews.length != 0){
            let customerId:string = "";
            
            let dim:number = response.customerPreviews[0].links.length;
            for(let i = 0; i < dim; i++){
                if(response.customerPreviews[0].links[i].rel && 
                    response.customerPreviews[0].links[i].rel == Constants.REL_CUSTOMER_ID){
                        let str = response.customerPreviews[0].links[i].href;
                        customerId = str.substring(Constants.HREF_CUSTOMER_ID.length , str.length).replace("/vehicles", "");    
                }
            }
            
            filteredResponse = {
                customerId: customerId,
                email: response.customerPreviews[0].email,
                foundType: response.customerPreviews[0].foundType
            }
        }
        return filteredResponse;
    }


    public async searchByVin(request: DataModels.DfxSearchVinRequestData): Promise<DataModels.SearchVinResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} searchByVin |`;
        const mappedRequest: SchedulingServiceDataModels.GetSearchRequestParams = {
            vin: request.vin,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetSearchResponse = await SchedulingConectorService.getDfxSearch(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.SearchVinResponse = {};

        if(response.customerPreviews.length != 0){
            let customerId:string = "";
            let vin:string = "";
            
            let dim:number = response.customerPreviews[0].links.length;
            for(let i = 0; i < dim; i++){                
                if(response.customerPreviews[0].links[i].rel && 
                    response.customerPreviews[0].links[i].rel == Constants.REL_CUSTOMER_ID){
                        let str = response.customerPreviews[0].links[i].href;
                        customerId = str.substring(Constants.HREF_CUSTOMER_ID.length , str.length).replace("/vehicles", "");    
                }
                if(response.customerPreviews[0].links[i].rel && 
                    response.customerPreviews[0].links[i].rel == Constants.REL_VEHICLE_VIN){
                        let str = response.customerPreviews[0].links[i].href;
                        vin = str.substring(Constants.HREF_VEHICLE_VIN.length , str.length);    
                }
            }
            
            filteredResponse = {
                customerId: customerId,
                foundType: response.customerPreviews[0].foundType,
                vehicles: [{"vin": vin}]
            }
        }
        return filteredResponse;
    }


    public async getDfxVehicle(request: DataModels.GetDfxVehicleRequestData): Promise<DataModels.GetDfxVehicleResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getDfxVehicle |`;
        const mappedRequest: SchedulingServiceDataModels.GetVehicleRequestParams = {
            vin: request.vin,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetVehicleResponse = await SchedulingConectorService.getDfxVehicle(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetDfxVehicleResponse = {};

        if(response.vin){
            filteredResponse = {
                vin: response.vin,
                make: response.make?.name,
                year: response.year?.name,
                model: response.model?.name,
                transmission: response.transmission?.name,
                engine: response.engine?.name,
                train: response.train?.name,
            }
        }
        
        return filteredResponse;
    }


    public async getDfxToken(request: DataModels.GetTokenRequestData): Promise<DataModels.GetDfxTokenResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getDfxToken |`;
        const mappedRequest: SchedulingServiceDataModels.GetTokenRequestParams = {
            hint_dealer: request.hintDealer
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.TokenResponse = await SchedulingConectorService.getDfxToken(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetDfxTokenResponse = {};

        if(response.access_token){
            filteredResponse = {
                access_token: response.access_token,
                token_type: response.token_type,
                expires_in: response.expires_in
            }
        }
        
        return filteredResponse;
    }


    public async getDealerServicesVin(request: DataModels.GetServicesVinRequestData): Promise<DataModels.GetServicesResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getDealerServicesVin |`;
        const mappedRequest: SchedulingServiceDataModels.GetDealerServicesRequestParamsVin = {
            vin: request.vin,
            mileage: request.mileage,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetDealerServicesResponse = await SchedulingConectorService.getDealerServicesVin(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetServicesResponse = {};

        let services: DataModels.Service[] = [];

        if(response.services && response.services.length != 0){
            let dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    let service:DataModels.Service = {
                        id: elem.id, 
                        name: elem.name, 
                        price: elem.price
                    }
                    services.push(service);
                }
                
            }

            filteredResponse = {
                services: services
            }
        }
        
        return filteredResponse;
    }

    public async getDealerServicesWithoutVin(request: DataModels.GetServicesNoVinRequestData): Promise<DataModels.GetServicesResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getDealerServicesWithoutVin |`;
        const mappedRequest: SchedulingServiceDataModels.GetDealerServicesRequestParamsWithoutVin = {
            mileage: request.mileage,
            make: request.make,
            year: request.year,
            model: request.model,
            transmission: request.transmission,
            train: request.train,
            engine: request.engine,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetDealerServicesResponse = await SchedulingConectorService.getDealerServicesWithoutVin(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetServicesResponse = {};

        let services: DataModels.Service[] = [];

        if(response.services && response.services.length != 0){
            let dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    let service:DataModels.Service = {
                        id: elem.id, 
                        name: elem.name, 
                        price: elem.price
                    }
                    services.push(service);
                }
                
            }

            filteredResponse = {
                services: services
            }
        }
        
        return filteredResponse;
    }
	
	public async getFactoryServicesVin(request: DataModels.GetServicesVinRequestData): Promise<DataModels.GetServicesResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getFactoryServicesVin |`;
        const mappedRequest: SchedulingServiceDataModels.GetDealerServicesRequestParamsVin = {
            vin: request.vin,
            mileage: request.mileage,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetFactoryServicesResponse = await SchedulingConectorService.getFactoryServicesVin(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetServicesResponse = {};

        let services: DataModels.Service[] = [];

        if(response.services && response.services.length != 0){
            let dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    let service:DataModels.Service = {
                        id: elem.id, 
                        name: elem.name, 
                        price: elem.price
                    }
                    services.push(service);
                }
                
            }

            filteredResponse = {
                services: services
            }
        }
        
        return filteredResponse;
    }
	
	
	
	public async getFactoryServicesWithoutVin(request: DataModels.GetServicesNoVinRequestData): Promise<DataModels.GetServicesResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getFactoryServicesWithoutVin |`;
        const mappedRequest: SchedulingServiceDataModels.GetDealerServicesRequestParamsWithoutVin = {
            mileage: request.mileage,
            make: request.make,
            year: request.year,
            model: request.model,
            transmission: request.transmission,
            train: request.train,
            engine: request.engine,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetFactoryServicesResponse = await SchedulingConectorService.getFactoryServicesWithoutVin(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetServicesResponse = {};

        let services: DataModels.Service[] = [];

        if(response.services && response.services.length != 0){
            let dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    let service:DataModels.Service = {
                        id: elem.id, 
                        name: elem.name, 
                        price: elem.price
                    }
                    services.push(service);
                }
                
            }

            filteredResponse = {
                services: services
            }
        }
        
        return filteredResponse;
    }
	
	public async getRepairServicesVin(request: DataModels.GetServicesVinRequestData): Promise<DataModels.GetServicesResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getRepairServicesVin |`;
        const mappedRequest: SchedulingServiceDataModels.GetDealerServicesRequestParamsVin = {
            vin: request.vin,
            mileage: request.mileage,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetRepairServicesResponse = await SchedulingConectorService.getRepairServicesVin(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetServicesResponse = {};

        let services: DataModels.Service[] = [];

        if(response.services && response.services.length != 0){
            let dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    let service:DataModels.Service = {
                        id: elem.id, 
                        name: elem.name, 
                        price: elem.price
                    }
                    services.push(service);
                }
                
            }

            filteredResponse = {
                services: services
            }
        }
        
        return filteredResponse;
    }
	
	
	
	public async getRepairServicesWithoutVin(request: DataModels.GetServicesNoVinRequestData): Promise<DataModels.GetServicesResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getRepairServicesWithoutVin |`;
        const mappedRequest: SchedulingServiceDataModels.GetDealerServicesRequestParamsWithoutVin = {
            mileage: request.mileage,
            make: request.make,
            year: request.year,
            model: request.model,
            transmission: request.transmission,
            train: request.train,
            engine: request.engine,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetRepairServicesResponse = await SchedulingConectorService.getRepairServicesWithoutVin(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetServicesResponse = {};

        let services: DataModels.Service[] = [];

        if(response.services && response.services.length != 0){
            let dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    let service:DataModels.Service = {
                        id: elem.id, 
                        name: elem.name, 
                        price: elem.price
                    }
                    services.push(service);
                }
                
            }

            filteredResponse = {
                services: services
            }
        }
        
        return filteredResponse;
    }
}   