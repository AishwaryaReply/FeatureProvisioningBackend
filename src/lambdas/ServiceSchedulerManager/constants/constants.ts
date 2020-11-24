export const GET_TOKEN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/token$';
export const GET_DFX_VEHICLE_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduler\/dfxvehicle$';
export const GET_FACTORY_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduler\/factoryservices\/mileage\/\{mileage\}$';
export const GET_FACTORY_NO_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/factoryservices\/\{make\}\/\{year\}\/\{model\}\/\{transmission\}\/\{engine\}\/\{train\}\/mileage\/\{mileage\}$';
export const GET_DEALER_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduler\/dealerservices\/mileage\/\{mileage\}$';
export const GET_DEALER_NO_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/dealerservices\/\{make\}\/\{year\}\/\{model\}\/\{transmission\}\/\{engine\}\/\{train\}\/mileage\/\{mileage\}$';
export const GET_REPAIR_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduler\/repairservices\/mileage\/\{mileage\}$';
export const GET_REPAIR_NO_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/repairservices\/\{make\}\/\{year\}\/\{model\}\/\{transmission\}\/\{engine\}\/\{train\}\/mileage\/\{mileage\}$';
export const DFX_SEARCH_EMAIL_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/search$';
export const DFX_SEARCH_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduler\/search$';
export const GET_DEALER_DEPARTMENT_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/dealerdepartment$';
export const GET_APPOINTMENT_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/appointmentsummary$';
export const GET_ADVISORS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/department\/\{departmentId\}\/advisors$';
export const GET_TRANSPORTATION_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/department\/\{departmentId\}\/trasportationoption$';
export const GET_TIME_SEGMENTS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/department\/\{departmentId\}\/timesegments$';
export const POST_PUT_APPOINTMENT_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduler\/appointment$';
export const GET_APPOINTMENTS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduler\/appointments$';
export const APPOINTMENT_DETAILS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduler\/appointment\/\{appointmentId\}\/department\/\{departmentId\}$';

export const REL_CUSTOMER_ID = "http://api.dealer-fx.com/docs/rels/customer-vehicles";
export const REL_VEHICLE_VIN = "http://api.dealer-fx.com/docs/rels/vehicle";

export const REL_APPOINTMENT_ID = "http://api.dealer-fx.com/docs/rels/appointment";
export const REL_DEPARTMENT_ID = "http://api.dealer-fx.com/docs/rels/service-department";
