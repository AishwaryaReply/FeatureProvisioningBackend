import { DataModels } from "../interfaces";
import { SchedulingServiceDataModels, SchedulingConectorService } from 'gcv-meld';
import logger from "gcv-logger";
import { Constants } from "../../constants";
import { GCVErrors } from "gcv-utils";
import { Slot, SlotAdvisor, SlotTransportation } from "../interfaces/data-models";

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

        if (response.customerPreviews.length != 0 && response.customerPreviews[0].email && response.customerPreviews[0].foundType) {
            const customerId = ServiceScheduler.extractCustomerId(response.customerPreviews);
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

        if (response.customerPreviews.length != 0 && response.customerPreviews[0].email && response.customerPreviews[0].foundType) {
            // extracting customerId from search by vin
            const customerId = ServiceScheduler.extractCustomerId(response.customerPreviews);

            let mappedVerifyRequest: SchedulingServiceDataModels.VerifyParams = {
                customerId: customerId,
                dealerToken: request.dealerToken,
                vin: request.vin,
                email: request.email
            }
            const verifyResponse: SchedulingServiceDataModels.VerifyResponse = await SchedulingConectorService.verify(mappedVerifyRequest);
            logger.debug(logPrefix, `verify response:  ${JSON.stringify(verifyResponse)}`);
            // if the customerId is valid return it
            if (verifyResponse.isValid) {
                return { customerId: customerId };
            }
        }
        // if the customer is not valid or there is no customerPreviews call the search by email
        logger.debug(logPrefix, `search by vin FAILED, proceed with the search by email:  ${JSON.stringify(response)}`);
        return await this.wrapSearchByEmail(logPrefix, request.dealerToken, request.email);
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

        if (response.vin) {
            filteredResponse = {
                vin: response.vin
            }
            const elems = ["make", "year", "model", "transmission", "engine", "train"];
            this.copyName(response, elems, filteredResponse);
        }

        return filteredResponse;
    }

    private copyName(fromElem: any, elems: string[], toObj: any) {
        elems.forEach(elem => {
            if (fromElem[elem] != undefined) {
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

        if (response.access_token) {
            filteredResponse.accessToken = response.access_token;
            if (response.expires_in) {
                filteredResponse.expiresIn = response.expires_in;
            }
            if (response.token_type) {
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

        if (response.services && response.services.length != 0) {
            const dim: number = response.services.length;
            for (let i = 0; i < dim; i++) {
                const elem = response.services[i];
                if (elem.id && elem.name && (elem.price != undefined)) {
                    const service: DataModels.Service = {
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

        if (response.services && response.services.length != 0) {
            const dim: number = response.services.length;
            for (let i = 0; i < dim; i++) {
                const elem = response.services[i];
                if (elem.id && elem.name && (elem.price != undefined)) {
                    const service: DataModels.Service = {
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

        if (response.services && response.services.length != 0) {
            const dim: number = response.services.length;
            for (let i = 0; i < dim; i++) {
                const elem = response.services[i];
                if (elem.id && elem.name && (elem.price != undefined)) {
                    const service: DataModels.Service = {
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

        if (response.services && response.services.length != 0) {
            const dim: number = response.services.length;
            for (let i = 0; i < dim; i++) {
                const elem = response.services[i];
                if (elem.id && elem.name && (elem.price != undefined)) {
                    const service: DataModels.Service = {
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

        if (response.services && response.services.length != 0) {
            const dim: number = response.services.length;
            for (let i = 0; i < dim; i++) {
                const elem = response.services[i];
                if (elem.id && elem.name && (elem.price != undefined)) {
                    const service: DataModels.Service = {
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

        if (response.services && response.services.length != 0) {
            const dim: number = response.services.length;
            for (let i = 0; i < dim; i++) {
                const elem = response.services[i];
                if (elem.id && elem.name && (elem.price != undefined)) {
                    const service: DataModels.Service = {
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

        if (response?.id) {
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

        if (response.taxes &&
            response.taxesGt &&
            response.total) {
            const localTaxes = response.taxes + response.taxesGt;
            filteredResponse = {
                taxes: Number.parseFloat(localTaxes.toFixed(2)),
                subTotal: Number.parseFloat((response.total - localTaxes).toFixed(2)),
                total: response.total
            }
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

        if (response.serviceAdvisors && response.serviceAdvisors.length != 0) {
            const dim: number = response.serviceAdvisors.length;
            for (let i = 0; i < dim; i++) {
                const elem = response.serviceAdvisors[i];
                if (elem.id && elem.memberId && elem.name) {
                    const service: DataModels.serviceAdvisor = {
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

        if (response.options && response.options.length != 0) {
            const dim: number = response.options.length;
            for (let i = 0; i < dim; i++) {
                const elem = response.options[i];
                if (elem.code && elem.description && elem.enabled) {
                    const service: DataModels.transportationOption = {
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
        ServiceScheduler.checkDate(request.startdate);
        ServiceScheduler.checkDate(request.enddate);

        const mappedRequest: SchedulingServiceDataModels.GetDealerDepartmentTimeSegmentsParams = {
            departmentId: request.departmentId,
            StartDate: ServiceScheduler.formatDate(request.startdate),
            EndDate: ServiceScheduler.formatDate(request.enddate),
            dealerToken: request.dealerToken
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.GetDealerDepartmentTimeSegmentsResponse = await SchedulingConectorService.getDealerDepartmentTimeSegments(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);
        let filteredResponse: DataModels.GetDealerDepartmentTimeSegmentsResponse = {};

        let segments: DataModels.Segment[] = [];

        if (response.segments && response.segments.length != 0) {
            const dim: number = response.segments.length;
            for (let i = 0; i < dim; i++) {
                const elem = response.segments[i];
                let serviceAdvisors: SlotAdvisor[] = [];
                let transportationOptions: SlotTransportation[] = [];

                if (elem.time &&
                    elem.endTime &&
                    elem.available &&
                    elem.slots &&
                    elem.slots.length != 0) {

                    const dimSlots: number = elem.slots.length;
                    for (let i = 0; i < dimSlots; i++) {

                        const slotElem = elem.slots[i];
                        if (slotElem.name && slotElem.count) {
                            let name = slotElem.name;
                            if (name.includes("service-advisor")) {
                                const se = name.split(":");
                                name = se[se.length - 1];
                                if (name != "service-advisor") {
                                    const SA: DataModels.SlotAdvisor = {
                                        id: parseInt(name)
                                    }
                                    serviceAdvisors?.push(SA);
                                }
                            } else if (name.includes("transportation-options")) {
                                const se = name.split(":");
                                name = se[se.length - 1];
                                if (name != "transportation-options") {
                                    const ST: DataModels.SlotTransportation = {
                                        code: name
                                    }
                                    transportationOptions.push(ST);
                                }
                            }
                        }
                    }
                    const tmpSlot: Slot = {
                        time: new Date(elem.time).getTime(),
                        serviceAdvisors: serviceAdvisors,
                        transportationOptions: transportationOptions
                    }

                    // check if a segment with the same "date" is already there 
                    let segmentFound = ServiceScheduler.getSegmentByDate(elem.time, segments);
                    if (segmentFound) {
                        segmentFound.slots?.push(tmpSlot);
                    } else {
                        segments.push({
                            date: ServiceScheduler.getDayTimestamp(new Date(elem.time).getTime()),
                            slots: [tmpSlot]
                        });
                    }
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

        if (response.appointments && response.appointments.length != 0) {
            const dim: number = response.appointments.length;
            for (let i = 0; i < dim; i++) {
                const elem = response.appointments[i];
                if (elem.scheduledTime &&
                    elem.status &&
                    elem.status == "booked" &&
                    elem.links &&
                    elem.links.length != 0) {

                    let appointmentid: string = "";
                    let departmentid: string = "";

                    const dimLinks: number = elem.links.length;
                    for (let i = 0; i < dimLinks; i++) {
                        const slotElem = elem.links[i];
                        if (slotElem.rel && slotElem.href) {
                            if (slotElem.rel == Constants.REL_APPOINTMENT_ID) {
                                const hrefArray = slotElem.href.split("/");
                                appointmentid = hrefArray[hrefArray.length - 1];
                            } else if (slotElem.rel == Constants.REL_DEPARTMENT_ID) {
                                const hrefArray = slotElem.href.split("/");
                                departmentid = hrefArray[hrefArray.length - 1];
                            }
                        }
                    }
                    const appointment: DataModels.Appointment = {
                        scheduledTime: new Date(elem.scheduledTime).getTime(),
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
        //TODO check consistency of customer (id , or other info)
        const mappedRequest: SchedulingServiceDataModels.PostAppointmentParams = {
            departmentId: request.departmentId,
            services: request.body.services,
            customer: request.body.customer,
            customerConcernsInfo: request.body.customerConcernsInfo,
            advisorId: request.body.advisorId,
            transportationOptionCode: request.body.transportationOptionCode,
            scheduledTime: new Date(request.body.scheduledTime).toISOString(),
            mileage: request.body.mileage,
            dealerToken: request.dealerToken,
            vin: request.vin
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.PostAppointmentResponse = await SchedulingConectorService.postAppointment(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PostAppointmentResponse = {};
        if (response.status && response.confirmationCode && response.links) {
            filteredResponse = {
                status: response.status,
                confirmationCode: response.confirmationCode,
                appointmentId: ServiceScheduler.getAppointmentId(response.links)
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

        if (!response?.status || !response?.confirmationCode) {
            throw new GCVErrors.NotFound("Appointment does not exist");
        }
        return filteredResponse;
    }

    public async updateServiceAppointment(request: DataModels.PutAppointmentRequestData): Promise<DataModels.PutAppointmentRequestResponse> {
        const logPrefix = `${LOG_PREFIX_CLASS} updateServiceAppointment |`;
        //TODO check only with customer id 
        const mappedRequest: SchedulingServiceDataModels.UpdateServiceAppointmentParams = {
            departmentId: request.departmentId,
            services: request.body.services,
            customer: request.body.customer,
            customerConcernsInfo: request.body.customerConcernsInfo,
            advisorId: request.body.advisorId,
            transportationOptionCode: request.body.transportationOptionCode,
            scheduledTime: new Date(request.body.scheduledTime).toISOString(),
            mileage: request.body.mileage,
            dealerToken: request.dealerToken,
            vin: request.vin,
            appointmentId: request.appointmentId
        }
        logger.debug(logPrefix, `request: ${JSON.stringify(mappedRequest)}`);
        const response: SchedulingServiceDataModels.UpdateServiceAppointmentResponse = await SchedulingConectorService.updateServiceAppointment(mappedRequest);
        logger.debug(logPrefix, `response:  ${JSON.stringify(response)}`);

        let filteredResponse: DataModels.PutAppointmentRequestResponse = {};

        if (response.confirmationCode && response.links) {
            filteredResponse = {
                confirmationCode: response.confirmationCode,
                appointmentId: ServiceScheduler.getAppointmentId(response.links)
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

        if (response?.confirmationCode) {
            this.copyElement(response, ["status", "customerConcernsInfo"], filteredResponse);

            if (response.scheduledTime) {
                filteredResponse.scheduledTime = new Date(response.scheduledTime).getTime();
            }
            if (response?.customer?.id) {
                const elem: SchedulingServiceDataModels.Customer = response.customer;
                let cust: DataModels.Customer = {};
                cust.id = elem.id;
                this.copyElement(elem, ["firstName", "lastName"], cust);
                filteredResponse.customer = cust;
            }
            if (response?.mileage) {
                const elem: SchedulingServiceDataModels.Mileage = response.mileage;
                let mil: DataModels.Mileage = { value: 0, unitsKind: "" };
                this.copyElement(elem, ["value", "unitsKind"], mil);
                filteredResponse.mileage = mil;
            }
            if (response?.advisor?.id) {
                const elem: SchedulingServiceDataModels.Advisor = response.advisor;
                let adv: DataModels.Advisor = {};
                adv.id = elem.id;
                this.copyElement(elem, ["name", "departmentId"], adv);
                filteredResponse.advisor = adv;
            }
            if (response?.transportationOption?.code) {
                const elem: SchedulingServiceDataModels.TransportationOptionPostAppointment = response.transportationOption;
                let tO: DataModels.TransportationOption = {};
                tO.code = elem.code;
                this.copyElement(elem, ["description"], tO);
                filteredResponse.transportationOption = tO;
            }
            if (response?.services) {
                const elem: SchedulingServiceDataModels.Services = response.services;
                let servs: DataModels.Services = {};

                if (elem.summary?.taxes &&
                    elem.summary?.taxesGt &&
                    elem.summary?.total) {
                    const localTaxes = elem.summary.taxes + elem.summary.taxesGt;
                    servs.summary = {
                        taxes: Number.parseFloat(localTaxes.toFixed(2)),
                        subTotal: Number.parseFloat((elem.summary.total - localTaxes).toFixed(2)),
                        total: elem.summary.total
                    }
                }
                if (elem.drs) {
                    servs.drs = this.copyService(elem.drs);
                }
                if (elem.frs) {
                    servs.frs = this.copyService(elem.frs);
                }
                if (elem.repair) {
                    servs.repair = this.copyService(elem.repair);
                }
                if (elem.recalls) {
                    servs.recalls = this.copyService(elem.recalls);
                }
                filteredResponse.services = servs;
            }
        }

        return filteredResponse;
    }

    private copyService(elem: any) {
        let se: DataModels.ServiceAppointment[] = [];
        const dim: number = elem.length;
        for (let i = 0; i < dim; i++) {
            if (elem[i].links) {
                delete elem[i].links;
            }
            let filteredElem: DataModels.ServiceAppointment = {};
            this.copyElement(elem[i], ['id', 'name', 'price', 'selected', 'comment'], filteredElem);
            se.push(filteredElem);
        }
        return se;
    }

    private copyElement(fromElem: any, keys: string[], toObj: any) {
        keys.forEach(key => {
            if (fromElem[key] != undefined) {
                toObj[key] = fromElem[key];
            }
        });
    }

    private static checkDate(date: number) {
        if (!new Date(date).getTime()) {
            throw new GCVErrors.BadRequest("Wrong date format");
        }
    }

    private static formatDate(date: number): string {
        var selectedDate = new Date(date);
        var dd = String(selectedDate.getDate()).padStart(2, '0');
        var mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
        var yyyy = selectedDate.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }

    private async wrapSearchByEmail(logPrefix: string, dealerToken: string, email: string): Promise<DataModels.SearchVinResponse> {
        const searchByEmailRequest: DataModels.DfxSearchEmailRequestData = {
            dealerToken: dealerToken,
            email: email
        }
        const searchByEmailResponse: DataModels.SearchEmailResponse = await this.searchByEmail(searchByEmailRequest);
        logger.debug(logPrefix, `search by email response:  ${JSON.stringify(searchByEmailResponse)}`);
        if (searchByEmailResponse.customerId) {
            return { customerId: searchByEmailResponse.customerId };
        }
        return {};
    }
    private static getDayTimestamp(date: number): number {
        let tmpDate = new Date(date);
        tmpDate.setUTCHours(0);
        tmpDate.setUTCMinutes(0);
        tmpDate.setUTCSeconds(0);
        tmpDate.setUTCMilliseconds(0);
        return tmpDate.getTime();
    }

    private static getSegmentByDate(date: string, segments: DataModels.Segment[]): DataModels.Segment | null {
        for (let segment of segments) {
            if (segment.date == ServiceScheduler.getDayTimestamp(new Date(date).getTime())) {
                return segment
            }
        }
        return null;
    }

    private static getAppointmentId(links: SchedulingServiceDataModels.Link[]): string {
        let appointemtnId = "";
        links.forEach(element => {
            if (element.rel == "self") {
                const data = element.href.split("/");
                appointemtnId = data[data.length - 1];
            }
        });
        return appointemtnId;
    }

    private static extractCustomerId(customerPreviews: SchedulingServiceDataModels.DfxSearchResponse[]) {
        let customerId: string = "";

        let dim: number = customerPreviews[0].links.length;
        for (let i = 0; i < dim; i++) {
            if (customerPreviews[0].links[i].rel &&
                customerPreviews[0].links[i].rel == Constants.REL_CUSTOMER_ID) {
                const hrefArray = customerPreviews[0].links[i].href.split("/");
                customerId = hrefArray[hrefArray.length - 2];
            }
        }
        return customerId;
    }
}


