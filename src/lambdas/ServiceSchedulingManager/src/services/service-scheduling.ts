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
                        const str = response.customerPreviews[0].links[i].href;
                        customerId = str.substring(Constants.HREF_CUSTOMER_ID.length , str.length).replace("/vehicles", "");    
                }
                if(response.customerPreviews[0].links[i].rel && 
                    response.customerPreviews[0].links[i].rel == Constants.REL_VEHICLE_VIN){
                        const str = response.customerPreviews[0].links[i].href;
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
            const dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    const service:DataModels.Service = {
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
            const dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    const service:DataModels.Service = {
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
            const dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    const service:DataModels.Service = {
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
            const dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    const service:DataModels.Service = {
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
            const dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    const service:DataModels.Service = {
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
            const dim:number = response.services.length;
            for(let i = 0; i < dim; i++){
                const elem = response.services[i];
                if(elem.id &&  elem.name && elem.price){
                    const service:DataModels.Service = {
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
	
	
	
	public async getDealerDepartment(request: DataModels.GetDealerDepartmentRequestData): Promise<DataModels.GetDealerDepartmentResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getDealerDepartment |`;
        const mappedRequest: SchedulingServiceDataModels.GetDealerDepartmentRequestParams = {
            services: request.servicesList,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetDealerDepartmentResponse = await SchedulingConectorService.getDealerDepartment(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetDealerDepartmentResponse = {};

        if(response?.id){
            filteredResponse = {
                id: response.id
            }
        }        
        return filteredResponse;
    }
	
	
	
	public async getAppointmentSummary(request: DataModels.GetAppointmentSummaryRequestData): Promise<DataModels.GetAppointmentSummaryResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getAppointmentSummary |`;        
        const mappedRequest: SchedulingServiceDataModels.GetAppointmentSummaryRequestParams = {
            services: request.servicesList,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetAppointmentSummaryResponse = await SchedulingConectorService.getAppointmentSummary(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);
    
        let filteredResponse: DataModels.GetAppointmentSummaryResponse = {};
    
        if(response.taxes && 
            response.taxesGt && 
            response.total){                
                filteredResponse = response;
        }
        
        return filteredResponse;
    }



    public async getAdvisors(request: DataModels.GetAdvisorsRequestData): Promise<DataModels.GetAdvisorsResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getAdvisors |`;        
        const mappedRequest: SchedulingServiceDataModels.GetAdvisorsRequestParams = {
            departmentId: request.departmentId,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetAdvisorsResponse = await SchedulingConectorService.getAdvisors(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);
    
        let filteredResponse: DataModels.GetAdvisorsResponse = {};
    
        let serviceAdvisors: DataModels.serviceAdvisor[] = [];
    
        if(response.serviceAdvisors && response.serviceAdvisors.length != 0){    
            const dim:number = response.serviceAdvisors.length;
            for(let i = 0; i < dim; i++){
                const elem = response.serviceAdvisors[i];
                if(elem.id &&  elem.name && elem.memberId){
                    const service:DataModels.serviceAdvisor = {
                        id: elem.id, 
                        name: elem.name, 
                        memberId: elem.memberId
                    }
                    serviceAdvisors.push(service);
                }                
            }            
            filteredResponse = {
                serviceAdvisors: serviceAdvisors
            }
        }        
        return filteredResponse;
    }

    

    public async getTransportationOptions(request: DataModels.GetTransportationOptionsRequestData): Promise<DataModels.GetTransportationOptionsResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getTransportationOptions |`;        
        const mappedRequest: SchedulingServiceDataModels.GetTransportationOptionsParams = {
            departmentId: request.departmentId,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetTransportationOptionsResponse = await SchedulingConectorService.getTransportationOptions(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);
    
        let filteredResponse: DataModels.GetTransportationOptionsResponse = {};
    
        let transportationOptions: DataModels.transportationOption[] = [];
    
        if(response.options && response.options.length != 0){    
            const dim:number = response.options.length;
            for(let i = 0; i < dim; i++){
                const elem = response.options[i];
                if(elem.code &&  elem.description){
                    const service:DataModels.transportationOption = {
                        code: elem.code, 
                        description: elem.description
                    }
                    transportationOptions.push(service);
                }                
            }            
            filteredResponse = {
                transportationOptions: transportationOptions
            }
        }        
        return filteredResponse;
    }



    public async getDealerDepartmentTimeSegments(request: DataModels.GetTimeSegmetsRequestData): Promise<DataModels.GetDealerDepartmentTimeSegmentsResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getDealerDepartmentTimeSegments |`;        
        const mappedRequest: SchedulingServiceDataModels.GetDealerDepartmentTimeSegmentsParams = {
            departmentId: request.departmentId,
            StartDate: request.startDate,
            EndDate: request.endDate,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetDealerDepartmentTimeSegmentsResponse = await SchedulingConectorService.getDealerDepartmentTimeSegments(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);
    
        let filteredResponse: DataModels.GetDealerDepartmentTimeSegmentsResponse = {};
    
        let segments: DataModels.Segment[] = [];
    
        if(response.segments && response.segments.length != 0){    
            const dim:number = response.segments.length;
            for(let i = 0; i < dim; i++){
                const elem = response.segments[i];                
                let slots: DataModels.Slot[] = [];
                if(elem.time && 
                    elem.endTime && 
                    elem.state && 
                    elem.available && 
                    elem.slots && 
                    elem.slots.length != 0){
    
                    const dimSlots:number = elem.slots.length;
                    for(let i = 0; i < dimSlots; i++){
                        const slotElem = elem.slots[i];   
                        if(slotElem.name && slotElem.count){
                            const slot:DataModels.Slot = {
                                name: slotElem.name, 
                                count: slotElem.count
                            }
                            slots.push(slot);
                        }
                    }
                    const segment:DataModels.Segment = {
                        time: elem.time,
                        endTime: elem.endTime,
                        state: elem.time,
                        slots: slots,
                        available: elem.available
                    }
                    segments.push(segment);
                }                
            }            
            filteredResponse = {
                segments: segments
            }
        }        
        return filteredResponse;
    }



    public async getServiceAppointments(request: DataModels.GetAppointmentsRequestData): Promise<DataModels.GetServiceAppointmentsResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getServiceAppointments |`;        
        const mappedRequest: SchedulingServiceDataModels.GetServiceAppointmentsParams = {
            vin: request.vin,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetServiceAppointmentsResponse = await SchedulingConectorService.getServiceAppointments(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetServiceAppointmentsResponse = {};

        let appointments: DataModels.Appointment[] = [];

        if(response.appointments && response.appointments.length != 0){    
            const dim:number = response.appointments.length;
            for(let i = 0; i < dim; i++){
                const elem = response.appointments[i];   
                if(elem.scheduledTime && 
                    elem.status && 
                    elem.links && 
                    elem.links.length != 0){

                    let appointmentId:string = "";
                    let departmentId:string = "";

                    const dimLinks:number = elem.links.length;
                    for(let i = 0; i < dimLinks; i++){
                        const slotElem = elem.links[i];   
                        if(slotElem.rel && slotElem.href){
                            if(slotElem.rel == Constants.REL_APPOINTMENT_ID){
                                const str = slotElem.href;
                                appointmentId = str.substring(Constants.HREF_APPOINTMENT_ID.length , str.length); 
                            }else if(slotElem.rel == Constants.REL_DEPARTMENT_ID){
                                const str = slotElem.href;
                                departmentId = str.substring(Constants.HREF_DEPARTMENT_ID.length , str.length); 
                            }
                        }
                    }
                    const appointment:DataModels.Appointment = {
                        scheduledTime: elem.scheduledTime,
                        status: elem.status,
                        appointmentId: appointmentId,
                        departmentId: departmentId
                    }
                    appointments.push(appointment);
                }                
            }            
            filteredResponse = {
                appointments: appointments
            }
        }        
        return filteredResponse;
    }



    public async postAppointment(request: DataModels.PostAppointmentRequestData): Promise<DataModels.PostAppointmentResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} postAppointment |`;        
        const mappedRequest: SchedulingServiceDataModels.PostAppointmentParams = {
            departmentId: request.body.departmentId,
            services: request.body.services,
            customerId: request.body.customerId,
            customerConcernsInfo: request.body.customerConcernsInfo,
            advisorId: request.body.advisorId,
            transportationOptionCode: request.body.transportationOptionCode,
            scheduledTime: request.body.scheduledTime,
            mileage: request.body.mileage,
            dealerToken: request.dealerToken,
            vin: request.vin
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.PostAppointmentResponse = await SchedulingConectorService.postAppointment(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PostAppointmentResponse = {};

        if(response.status && response.confirmationCode){    
            filteredResponse = {
                status: response.status
            }
        }        
        return filteredResponse;
    }
}   