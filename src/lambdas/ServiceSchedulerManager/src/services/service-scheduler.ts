import { DataModels } from "../interfaces";
import { SchedulingServiceDataModels, SchedulingConectorService } from 'gcv-meld';
import logger from "gcv-logger";
import { Constants } from "../../constants";
import { GCVErrors } from "gcv-utils";

const LOG_PREFIX_CLASS = 'ServiceScheduler | ';

export class ServiceScheduler {
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

        if(response.customerPreviews.length != 0 && response.customerPreviews[0].email && response.customerPreviews[0].foundType){
            let customerId:string = "";
            
            let dim:number = response.customerPreviews[0].links.length;
            for(let i = 0; i < dim; i++){
                if(response.customerPreviews[0].links[i].rel && 
                    response.customerPreviews[0].links[i].rel == Constants.REL_CUSTOMER_ID){
                        const hrefArray = response.customerPreviews[0].links[i].href.split("/");
                        customerId = hrefArray[hrefArray.length - 2];       
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

        if(response.customerPreviews.length != 0 && response.customerPreviews[0].email && response.customerPreviews[0].foundType){
            let customerId:string = "";
            let vin:string = "";
            
            let dim:number = response.customerPreviews[0].links.length;
            for(let i = 0; i < dim; i++){                
                if(response.customerPreviews[0].links[i].rel && 
                    response.customerPreviews[0].links[i].rel == Constants.REL_CUSTOMER_ID){
                        const hrefArray = response.customerPreviews[0].links[i].href.split("/");
                        customerId = hrefArray[hrefArray.length - 2];    
                }
            }

            if(response.customerPreviews[0].vehicle){
                let dim:number = response.customerPreviews[0].vehicle.links.length;
                for(let i = 0; i < dim; i++){   
                    if(response.customerPreviews[0].vehicle.links[i].rel && 
                        response.customerPreviews[0].vehicle.links[i].rel == Constants.REL_VEHICLE_VIN){                        
                            const hrefArray = response.customerPreviews[0].vehicle.links[i].href.split("/");
                            vin = hrefArray[hrefArray.length - 1]; 
                    }
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
                vin: response.vin
            }
            const elems = ["make","year","model","transmission","engine","train"];
            this.copyName(response, elems, filteredResponse);
        }
        
        return filteredResponse;
    }

    private copyName(fromElem:any, elems:string[], toObj:any){
        elems.forEach(elem => {
            if(fromElem[elem] != undefined){
                toObj[elem] = fromElem[elem]["name"];
            }            
        });
    }


    public async getDfxToken(request: DataModels.GetTokenRequestData): Promise<DataModels.GetDfxTokenResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getDfxToken |`;
        const mappedRequest: SchedulingServiceDataModels.GetTokenRequestParams = {
            hint_dealer: request.hintdealer
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.TokenResponse = await SchedulingConectorService.getDfxToken(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.GetDfxTokenResponse = {};

        if(response.access_token){
            filteredResponse.accessToken = response.access_token;
            if(response.expires_in){
                filteredResponse.expiresIn = response.expires_in;
            }
            if(response.token_type){
                filteredResponse.tokenType = response.token_type;
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
                if(elem.id &&  elem.name && (elem.price != undefined)){
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
                if(elem.id &&  elem.name && (elem.price != undefined)){
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
                if(elem.id &&  elem.name && (elem.price != undefined)){
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
                if(elem.id &&  elem.name && (elem.price != undefined)){
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
                if(elem.id &&  elem.name && (elem.price != undefined)){
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
                if(elem.id &&  elem.name && (elem.price != undefined)){
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



    public async getDealerDepartmentTimeSegments(request: DataModels.GetTimeSegmetsRequestData): Promise<DataModels.GetDealerDepartmentTimeSegmentsResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} getDealerDepartmentTimeSegments |`;        
        const mappedRequest: SchedulingServiceDataModels.GetDealerDepartmentTimeSegmentsParams = {
            departmentId: request.departmentId,
            StartDate: request.startdate,
            EndDate: request.enddate,
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
                let serviceAdvisors: DataModels.SA = {
                    slots: [],
                    totalAvailable: 0
                };    
                let transportationOptions: DataModels.ST = {
                    slots: []
                };
                if(elem.time && 
                    elem.endTime &&
                    elem.available && 
                    elem.slots && 
                    elem.slots.length != 0){

                    const dimSlots:number = elem.slots.length;
                    for(let i = 0; i < dimSlots; i++){
                        const slotElem = elem.slots[i];   
                        if(slotElem.name && (slotElem.count != undefined)){
                            const slot = {
                                name: slotElem.name, 
                                count: slotElem.count
                            }
                            if(slot.name.includes("service-advisor")){  
                                const se = slot.name.split(":");
                                slot.name = se[se.length - 1];    
                                if(slot.name != "service-advisor"){                                      
                                    const SA:DataModels.SlotAdvisor = {
                                        id: slot.name, 
                                        count: slot.count
                                    }                               
                                    serviceAdvisors?.slots.push(SA);
                                }else{
                                    serviceAdvisors.totalAvailable = slot.count;
                                }
                            }else if(slot.name.includes("transportation-options")){
                                const se = slot.name.split(":");
                                slot.name = se[se.length - 1];     
                                if(slot.name != "transportation-options"){                                       
                                    const ST:DataModels.SlotTransportation = {
                                        code: slot.name, 
                                        count: slot.count
                                    }                                                                          
                                    transportationOptions.slots.push(ST);
                                }
                            }
                        }
                    }

                    const segment:DataModels.Segment = {
                        time: elem.time,
                        endTime: elem.endTime,
                        serviceAdvisors: serviceAdvisors,
                        transportationOptions: transportationOptions
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

                    let appointmentid:string = "";
                    let departmentid:string = "";

                    const dimLinks:number = elem.links.length;
                    for(let i = 0; i < dimLinks; i++){
                        const slotElem = elem.links[i];   
                        if(slotElem.rel && slotElem.href){
                            if(slotElem.rel == Constants.REL_APPOINTMENT_ID){
                                const hrefArray = slotElem.href.split("/");
                                appointmentid = hrefArray[hrefArray.length - 1]; 
                            }else if(slotElem.rel == Constants.REL_DEPARTMENT_ID){
                                const hrefArray = slotElem.href.split("/");
                                departmentid = hrefArray[hrefArray.length - 1]; 
                            }
                        }
                    }
                    const appointment:DataModels.Appointment = {
                        scheduledTime: elem.scheduledTime,
                        status: elem.status,
                        appointmentId: appointmentid,
                        departmentId: departmentid
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

        if(response.confirmationCode){    
            filteredResponse = {         
                confirmationCode: response.confirmationCode
            }
            this.copyElement(response, ["status"], filteredResponse);
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

        if(response?.confirmationCode){            
            this.copyElement(response, ["status", "scheduledTime", "customerConcernsInfo", "confirmationCode"], filteredResponse);

            if(response?.customer?.id){
                const elem:SchedulingServiceDataModels.Customer = response.customer;
                let cust:DataModels.Customer = {};
                cust.id = elem.id;
                this.copyElement(elem, ["firstName", "lastName", "phone", "email", "emails", "phones"], cust);
                filteredResponse.customer = cust;
            } 
            if(response?.mileage){
                const elem:SchedulingServiceDataModels.Mileage = response.mileage;
                let mil:DataModels.Mileage = {value: 0, unitsKind: ""};
                this.copyElement(elem, ["value", "unitsKind"], mil);
                filteredResponse.mileage = mil;
            }   
            if(response?.advisor?.id){
                const elem:SchedulingServiceDataModels.Advisor = response.advisor;
                let adv:DataModels.Advisor = {};
                adv.id = elem.id;
                this.copyElement(elem, ["name", "departmentId"], adv);
                filteredResponse.advisor = adv;
            }  
            if(response?.transportationOption?.code){
                const elem:SchedulingServiceDataModels.TransportationOptionPostAppointment = response.transportationOption;
                let tO:DataModels.TransportationOption = {};
                tO.code = elem.code;
                this.copyElement(elem, ["enabled", "description", "deliveryInfo"], tO);
                filteredResponse.transportationOption = tO;
            } 
            if(response?.services){
                const elem:SchedulingServiceDataModels.Services = response.services;
                let servs:DataModels.Services = {};
                if(elem.summary){
                    servs.summary = elem.summary;
                }
                if(elem.drs){
                    servs.drs = this.copyService(elem.drs);
                }
                if(elem.frs){
                    servs.frs = this.copyService(elem.frs);
                }
                if(elem.repair){
                    servs.repair = this.copyService(elem.repair);
                }
                if(elem.recalls){
                    servs.recalls = this.copyService(elem.recalls);
                }
                filteredResponse.services = servs;
            } 
        }
        
        return filteredResponse;
    }

    private copyService(elem:any) {
        let se:DataModels.ServiceAppointment[] = [];
        const dim: number = elem.length;
        for(let i = 0; i<dim; i++){
            if(elem[i].links){
                delete elem[i].links;
            }
            se.push(elem[i]);
        }
        return se;       
    }

    private copyElement(fromElem:any, keys:string[], toObj:any){
        keys.forEach(key => {
            if(fromElem[key] != undefined){
                toObj[key] = fromElem[key];
            }
        });
    }

}   


