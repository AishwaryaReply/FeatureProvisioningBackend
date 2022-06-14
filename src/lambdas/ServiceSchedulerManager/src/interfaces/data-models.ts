
export type ServiceRequested =
'FEATURE_SEARCH_LIST' |
'FEATURE_CREATE' |
'FEATURE_DELETE';

export type ServiceRequestData = {
requestedService: ServiceRequested;

}

export interface GetTokenRequestData extends ServiceRequestData {
hintdealer: string;
}

export interface DfxSearchEmailRequestData{
email: string;
dealerToken: string;
}

export type SearchEmailResponse = {
customerId?: string,
email?: string,
foundType?: string
}

export interface VinRequestData extends ServiceRequestData {
userid: string;
vin: string;
dealerToken: string;
}

export type GetDfxVehicleRequestData = VinRequestData;
export type GetAppointmentsRequestData = VinRequestData;

export interface DfxSearchVinRequestData extends VinRequestData {
email: string
}


export interface FeatureSearchListRequestData extends ServiceRequestData {    
cfeature: string;
featureDescription: string;
cchannel: Channel[];
}

export interface FeatureCreateData extends ServiceRequestData {    
cfeature: string;
featureDescription: string;
cchannel: Channel[];
}

export interface FeatureDeleteData extends ServiceRequestData {    
cfeature: string;
}

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
startdate: number;
enddate: number;
dealerToken: string;
}

export interface PostAppointmentRequestData extends VinRequestData {
departmentId: string;
body: AppointmentBody;
}

export interface PutAppointmentRequestData extends VinRequestData {
departmentId: string,
appointmentId: string,
body: AppointmentBody;
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

export type AppointmentBody = {
customer: Customer;
customerConcernsInfo?: string;
advisorId?: number;
transportationOptionCode: string;
scheduledTime: number;
mileage: Mileage;
services: ServicesPostAppointment;
}

export type DeliveryInfo = {
pickupAddress: string,
deliveryAddress: string
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
customerId?: string
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
accessToken?: string,
tokenType?: string,
expiresIn?: number
}


export type Service = {    
id: number, 
name: string, 
price: number,
}
export type GetServicesResponse = {    
services?: Service[]
}

export type GetDealerDepartmentResponse = {    
id?: number
}

export type GetAppointmentSummaryResponse = {    
taxes?: number,
subTotal?: number,
total?: number
}

export type serviceAdvisor = {    
id: number,
name: string,
memberId: number
}
export type GetAdvisorsResponse = {    
serviceAdvisors?: serviceAdvisor[],
}

export type transportationOption = {    
code: string,
description: string
}
export type GetTransportationOptionsResponse = {    
transportationOptions?: transportationOption[],
}

export declare type SlotAdvisor = {
id: number;
};
export declare type SlotTransportation = {
code: string;
};
export declare type SA = {
slots: SlotAdvisor[]
}
export declare type ST = {
slots: SlotTransportation[]
}

export declare type Slot = {
time: number,
serviceAdvisors?: SlotAdvisor[],
transportationOptions: SlotTransportation[]
}

export declare type Segment = {
date: number,
slots: Slot[]
};
export declare type GetDealerDepartmentTimeSegmentsResponse = {
segments?: Segment[];
};

export declare type Appointment = {
appointmentId: string;
departmentId: string;
scheduledTime: number;
status: string;
};
export declare type GetServiceAppointmentsResponse = {
appointments?: Appointment[];
};

export type PostAppointmentResponse = {    
status?: string,   
confirmationCode?: string,
appointmentId?: string
}

export type DeleteServiceAppointmentResponse = {}

export type PutAppointmentRequestResponse = {    
status?: string,   
confirmationCode?: string,
appointmentId?: string
}

export declare type Phone = {
type?: string,
number?: string
};
export declare type Email = {
type?: string;
email?: string;
};
export declare type Customer = {
id?: string;
firstName?: string;
lastName?: string;
phone?: string;
email?: string;
phones?: Phone[];
emails?: Email[];
};
export declare type Advisor = {
id?: number;
name?: string;
departmentId?: number;
};
export declare type TransportationOption = {
code?: string;
description?: string;
};
export declare type Summary = {
taxes: number;
total: number;
subTotal: number;
};
export declare type ServiceAppointment = {
id?: number;
name?: string;
price?: number;
selected?: boolean;
benefitsDescription?: string;
benefitsImage?: string;
comment?: string;
};
export declare type Services = {
summary?: Summary;
drs?: ServiceAppointment[];
frs?: ServiceAppointment[];
repair?: ServiceAppointment[];
recalls?: ServiceAppointment[];
};
export type GetServiceAppointmentDetailsResponse = {    
customer?: Customer;
scheduledTime?: number;
mileage?: Mileage;
status?: string;
customerConcernsInfo?: string;
advisor?: Advisor;
transportationOption?: TransportationOption;
services?: Services;
};
export declare type Channel = {
code?: string;
description?: string;

}
export declare type FeatureWithChannels ={ 
code?: string;
description?: string;
channels?: Channel[];
}
export type GetFeatureResponse ={
features?: FeatureWithChannels[];
}

export type PostResponse = {
message?: string;
}

export type PatchResponse = {
message?: string;
}

export type DeleteResponse = {
message?: string;
}

export declare type Rule = {
id?: number;
region?: string;
market?: string;
brand?: string;
model?: string;
modelYear?: number;
service?: string;
}

export type GetFeaturesRulesResponse = {
rules?: Rule[];
}
export declare type VehicleGroup = {
id?: number;
description?: string;
}

export type  GetGroupsResponse = {
features?: VehicleGroup[];
}

export type GetVehiclesResponse = {
vehicles?: string[];
}
export type UpdatedFeature = {
description?: string;
channels?: Channel[];
}

export type NewConfigurateRule = {
region?: string;
market?: string;
brand?: string;
model?: string;
modelYear?: number;
service?: string;
}

export type NewVehicleGroup = {
description?: string;
}

export type Router400ErrorResponse = {
name?: string;
message?: string;

}
export type Router403ErrorResponse = {
name?: string;
message?: string;
}
export type Router500ErrorResponse = {
name?: string;
message?: string;
}
export type Router502ErrorResponse = {
name?: string;
message?: string;
}

export type RulePost = {
  igroup?: string;
  cfeature : string,
	cregion: string,
	cmarket: string,
	cbrand: string,
	cmodel: string,
	imodelyear: string,
	cservice: string
}


