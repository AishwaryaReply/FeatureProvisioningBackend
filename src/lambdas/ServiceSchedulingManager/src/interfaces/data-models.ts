export type ServiceRequested =
    'DFX_SEARCH_VIN' |
    'DFX_SEARCH_EMAIL' |
    'GET_DFX_VEHICLE' |
    'GET_DFX_TOKEN' |
    'GET_DEALER_SERVICES_VIN' |
    'GET_FACTORY_SERVICES_WITHOUT_VIN' |
    'GET_FACTORY_SERVICES_VIN' |
    'GET_DEALER_SERVICES_WITHOUT_VIN' |
    'GET_DEALER_DEPARTMENT' |
    'GET_APPOINTMENT_SUMMARY' |
    'GET_REPAIR_SERVICES_VIN' |
    'GET_REPAIR_SERVICES_WITHOUT_VIN' |
    'GET_ADVISORS' |
    'GET_TRANSPORTATION_OPTIONS' |
    'GET_DEALER_DEPARTMENT_TIME_SEGMENTS' |
    'GET_SERVICE_APPOINTMENTS' |
    'POST_APPOINTMENT' |
    'DELETE_SERVICE_APPOINTMENT' |
    'UPDATE_SERVICE_APPOINTMENT' |
    'GET_SERVICE_APPOINTMENT_DETAILS';

export type ServiceRequestData = {
    requestedService: ServiceRequested;
    vin?: string;
    userid?: string;
}

export interface GetTokenRequestData extends ServiceRequestData {
    hintDealer: string;
}

export interface DfxSearchEmailRequestData extends ServiceRequestData {
    email: string;
    dealerToken: string;
}

export type SearchEmailResponse = {
    customerId: string,
    email: string,
    foundType: string
}

export interface VinRequestData extends ServiceRequestData {
    userid: string;
    vin: string;
    dealerToken: string;
}

export type GetDfxVehicleRequestData = VinRequestData;
export type DfxSearchVinRequestData = VinRequestData;
export type GetAppointmentsRequestData = VinRequestData;

export interface GetServicesNoVinRequestData extends ServiceRequestData {
    mileage: string;
    make: string;
    year: string;
    model: string;
    transmission: string;
    train: string;
    dealerToken: string;
    engine: string;
}

export interface GetServicesVinRequestData extends VinRequestData {
    mileage: string;
}

export interface ServiceId {
    id: number;
}

export interface ServicesListRequestData extends ServiceRequestData {
    servicesList: ServiceId[];
    dealerToken: string;
}

export type GetAppointmentSummaryRequestData = ServicesListRequestData; 
export type GetDealerDepartmentRequestData = ServicesListRequestData;

export interface DepartmentRequestData extends ServiceRequestData {
    departmentId: string;
    dealerToken: string;
}

export type GetTransportationOptionsRequestData = DepartmentRequestData;
export type GetAdvisorsRequestData = DepartmentRequestData;

export interface GetTimeSegmetsRequestData extends ServiceRequestData {
    departmentId: string;
    startDate: string;
    endDate: string;
    dealerToken: string;
}

export interface PostAppointmentRequestData extends VinRequestData {
    body: PostAppointmentBody;
}

export interface PutAppointmentRequestData extends VinRequestData {
    body: PutAppointmentBody;
}

export type Mileage = {
    value: number;
    unitsKind: string;
}

export type ServicePostAppointment = {
    id: number;
    comment: string;
}

export type ServicesPostAppointment = {
    drs: ServicePostAppointment[];
    frs: ServicePostAppointment[];
    repair: ServicePostAppointment[];
}

export type Link = {
    rel: string; 
    href: string;
}

export type Vehicle = {
      links: Link[];
}

export type PostAppointmentBody = {
    departmentId: string;
    customerId: string;
    customerConcernsInfo: string;
    advisorId: number;
    transportationOptionCode: string;
    scheduledTime: string;
    mileage: Mileage;
    services: ServicesPostAppointment;
    vehicle: Link[];
}

export interface PutAppointmentBody extends PostAppointmentBody {
    appointmentId: string;
}

export interface AppointmentRequestData extends ServiceRequestData {
    appointmentId: string;
    departmentId: string;
    dealerToken: string;
}

/* Responses */
export type Vin = {
    vin:string
}
export type SearchVinResponse = {
    customerId?: string,
    foundType?: string
    vehicles?: Vin[],
}

export type GetDfxVehicleResponse = {    
    vin?: string,
    make?: string,
    year?: string,
    model?: string,
    transmission?: string,
    engine?: string,
    train?: string
}

export type GetDfxTokenResponse = {    
    access_token?: string,
    token_type?: string,
    expires_in?: number
}

export type Service = {    
    id: number, 
    name: string, 
    price: number,
}
export type GetDealerServicesResponse = {    
    services?: Service[]
}