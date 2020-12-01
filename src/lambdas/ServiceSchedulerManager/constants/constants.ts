export const GET_TOKEN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/servicescheduler\/token$';
export const GET_DFX_VEHICLE_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/servicescheduler\/ossvehicle$';
export const GET_FACTORY_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/servicescheduler\/factoryservices$';
export const GET_FACTORY_NO_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/servicescheduler\/factoryservices\/\{make\}\/\{year\}\/\{model\}\/\{transmission\}\/\{engine\}\/\{train\}\/mileage\/\{mileage\}$';
export const GET_DEALER_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/servicescheduler\/dealerservices$';
export const GET_DEALER_NO_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/servicescheduler\/dealerservices\/\{make\}\/\{year\}\/\{model\}\/\{transmission\}\/\{engine\}\/\{train\}\/mileage\/\{mileage\}$';
export const GET_REPAIR_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/servicescheduler\/repairservices$';
export const GET_REPAIR_NO_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/servicescheduler\/repairservices\/\{make\}\/\{year\}\/\{model\}\/\{transmission\}\/\{engine\}\/\{train\}\/mileage\/\{mileage\}$';
export const DFX_SEARCH_EMAIL_API_PATH_REGEX = '^\/v[1-9][0-9]*\/servicescheduler\/search$';
export const DFX_SEARCH_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/servicescheduler\/search$';
export const GET_DEALER_DEPARTMENT_API_PATH_REGEX = '^\/v[1-9][0-9]*\/servicescheduler\/dealerdepartment$';
export const GET_APPOINTMENT_API_PATH_REGEX = '^\/v[1-9][0-9]*\/servicescheduler\/appointmentsummary$';
export const GET_ADVISORS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/servicescheduler\/department\/\{departmentid\}\/advisors$';
export const GET_TRANSPORTATION_API_PATH_REGEX = '^\/v[1-9][0-9]*\/servicescheduler\/department\/\{departmentid\}\/trasportationoption$';
export const GET_TIME_SEGMENTS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/servicescheduler\/department\/\{departmentid\}\/timesegments$';
export const POST_APPOINTMENT_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/servicescheduler\/department\/\{departmentid\}\/appointment$';
export const GET_APPOINTMENTS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/servicescheduler\/appointments$';
export const APPOINTMENT_DETAILS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/servicescheduler\/department\/\{departmentid\}\/appointment\/\{appointmentid\}$';

export const REL_CUSTOMER_ID = "http://api.dealer-fx.com/docs/rels/customer-vehicles";
export const REL_VEHICLE_VIN = "http://api.dealer-fx.com/docs/rels/vehicle";

export const REL_APPOINTMENT_ID = "http://api.dealer-fx.com/docs/rels/appointment";
export const REL_DEPARTMENT_ID = "http://api.dealer-fx.com/docs/rels/service-department";
