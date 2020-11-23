import { DataModels } from "../interfaces";
import { SchedulingServiceDataModels, SchedulingConectorService } from 'gcv-meld';
import logger from "gcv-logger";
import { Constants } from "../../constants";
import { GCVErrors } from "gcv-utils";

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
                if(elem.id && elem.name){
                    const service:DataModels.serviceAdvisor = {
                        id: elem.id, 
                        name: elem.name
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
                if(elem.code &&  elem.description && elem.enabled){
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


    //TODO: To be modified
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
                let slots: DataModels.Slots = {};
                if(elem.time && 
                    elem.endTime &&
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
                            if(slot.name.includes("service-advisor")){    
                                const se = slot.name.split(":");
                                slot.name = se[se.length - 1];    
                                if(slot.name){                     
                                    slots.serviceAdvisors?.slots.push(slot);
                                }else{
                                    if(slots.serviceAdvisors) slots.serviceAdvisors.totalAvailable = slot.count;
                                }
                            }else if(slot.name.includes("transportation-options")){   
                                const se = slot.name.split(":");
                                slot.name = se[se.length - 1]; 
                                if(slot.name){                                                     
                                    slots.transportationOptions?.slots.push(slot);
                                }else{
                                    if(slots.transportationOptions) slots.transportationOptions.totalAvailable = slot.count;
                                }
                            }
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


    //TODO: Use split
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
                status: response.status,
                confirmationCode: response.confirmationCode
            }
        }        
        return filteredResponse;
    }

    

    public async deleteServiceAppointment(request: DataModels.AppointmentRequestData): Promise<DataModels.DeleteServiceAppointmentResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} deleteServiceAppointment |`;        
        const mappedRequest: SchedulingServiceDataModels.DeleteServiceAppointmentParams = {
            departmentId: request.departmentId,
            appointmentId: request.appointmentId,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.DeleteServiceAppointmentResponse = await SchedulingConectorService.deleteServiceAppointment(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.DeleteServiceAppointmentResponse = {};

        if(!response?.status || !response?.confirmationCode){    
            throw new GCVErrors.NotFound("Appointment does not exist");
        }        
        return filteredResponse;
    }

    public async updateServiceAppointment(request: DataModels.PutAppointmentRequestData): Promise<DataModels.PutAppointmentRequestResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} updateServiceAppointment |`;        
        const mappedRequest: SchedulingServiceDataModels.UpdateServiceAppointmentParams = {
            departmentId: request.body.departmentId,
            services: request.body.services,
            customerId: request.body.customerId,
            customerConcernsInfo: request.body.customerConcernsInfo,
            advisorId: request.body.advisorId,
            transportationOptionCode: request.body.transportationOptionCode,
            scheduledTime: request.body.scheduledTime,
            mileage: request.body.mileage,
            dealerToken: request.dealerToken,
            vin: request.vin,
            appointmentId: request.body.appointmentId
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.UpdateServiceAppointmentResponse = await SchedulingConectorService.updateServiceAppointment(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PutAppointmentRequestResponse = {};

        if(!response?.confirmationCode){    
            filteredResponse = {                
                status: response.status,
                confirmationCode: response.confirmationCode
            }
        }        
        return filteredResponse;
    }



    public async getServiceAppointmentDetails(request: DataModels.AppointmentRequestData): Promise<DataModels.GetServiceAppointmentDetailsResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getServiceAppointmentDetails |`;        
        const mappedRequest: SchedulingServiceDataModels.GetServiceAppointmentDetailsParams = {
            departmentId: request.departmentId,
            appointmentId: request.appointmentId,
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetServiceAppointmentDetailsResponse = await SchedulingConectorService.getServiceAppointmentDetails(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetServiceAppointmentDetailsResponse = {};

        if(response?.status){  
            filteredResponse.status = response.status;
        }
        if(response?.scheduledTime){
            filteredResponse.scheduledTime = response.scheduledTime;
        }  
        if(response?.customerConcernsInfo){
            filteredResponse.customerConcernsInfo = response.customerConcernsInfo;
        }  
        if(response?.confirmationCode){
            filteredResponse.confirmationCode = response.confirmationCode;
        }  
        if(response?.customer?.id){
            const elem:SchedulingServiceDataModels.Customer = response.customer;
            let cust:DataModels.Customer = {};
            cust.id = elem.id;
            if(elem.firstName){
                cust.firstName = elem.firstName;
            }
            if(elem.lastName){
                cust.lastName = elem.lastName;
            }
            if(elem.phone){
                cust.phone = elem.phone;
            }
            if(elem.email){
                cust.email = elem.email;
            }
            if(elem.phones && elem.phones.length != 0){
                cust.phones = elem.phones;
            }
            if(elem.emails && elem.emails.length != 0){
                cust.emails = elem.emails;
            }
            filteredResponse.customer = cust;
        } 
        if(response?.mileage){
            const elem:SchedulingServiceDataModels.Mileage = response.mileage;
            let mil:DataModels.Mileage = {value: 0, unitsKind: ""};
            if(elem.value){
                mil.value = elem.value;
            }
            if(elem.unitsKind){
                mil.unitsKind = elem.unitsKind;
            }
            filteredResponse.mileage = mil;
        }   
        if(response?.advisor?.id){
            const elem:SchedulingServiceDataModels.Advisor = response.advisor;
            let adv:DataModels.Advisor = {};
            adv.id = elem.id;
            if(elem.name){
                adv.name = elem.name;
            }
            if(elem.departmentId){
                adv.departmentId = elem.departmentId;
            }
            filteredResponse.advisor = adv;
        }  
        if(response?.transportationOption?.code){
            const elem:SchedulingServiceDataModels.TransportationOptionPostAppointment = response.transportationOption;
            let tO:DataModels.TransportationOption = {};
            tO.code = elem.code;
            if(elem.enabled){
                tO.enabled = elem.enabled;
            }
            if(elem.description){
                tO.description = elem.description;
            }
            if(elem.deliveryInfo){
                tO.deliveryInfo = elem.deliveryInfo;
            }
            filteredResponse.transportationOption = tO;
        } 
        if(response?.services){
            const elem:SchedulingServiceDataModels.Services = response.services;
            let servs:DataModels.Services = {};
            if(elem.summary){
                servs.summary = elem.summary;
            }
            if(elem.drs){
                const dim: number = elem.drs.length;
                for(let i = 0; i<dim; i++){
                    if(elem.drs[i].links){
                        delete elem.drs[i].links;
                        servs.drs?.push(elem.drs[i]);
                    }else{                        
                        servs.drs?.push(elem.drs[i]);
                    }
                }
            }
            if(elem.frs){
                const dim: number = elem.frs.length;
                for(let i = 0; i<dim; i++){
                    if(elem.frs[i].links){
                        delete elem.frs[i].links;
                        servs.frs?.push(elem.frs[i]);
                    }else{                        
                        servs.frs?.push(elem.frs[i]);
                    }
                }
            }
            if(elem.repair){
                const dim: number = elem.repair.length;
                for(let i = 0; i<dim; i++){
                    if(elem.repair[i].links){
                        delete elem.repair[i].links;
                        servs.repair?.push(elem.repair[i]);
                    }else{                        
                        servs.repair?.push(elem.repair[i]);
                    }
                }
            }
            if(elem.recalls){
                const dim: number = elem.recalls.length;
                for(let i = 0; i<dim; i++){
                    if(elem.recalls[i].links){
                        delete elem.recalls[i].links;
                        servs.recalls?.push(elem.recalls[i]);
                    }else{                        
                        servs.recalls?.push(elem.recalls[i]);
                    }
                }
            }
            filteredResponse.services = servs;
        } 
        return filteredResponse;
    }
}   