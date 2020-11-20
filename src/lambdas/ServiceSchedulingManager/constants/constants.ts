export const GET_TOKEN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/token$';
export const GET_DFX_VEHICLE_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduling\/dfxvehicle$';
export const GET_FACTORY_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduling\/factoryservices\/mileage\/\{mileage\}$';
export const GET_FACTORY_NO_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/factoryservices\/\{make\}\/\{year\}\/\{model\}\/\{transmission\}\/\{engine\}\/\{train\}\/mileage\/\{mileage\}$';
export const GET_DEALER_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduling\/dealerservices\/mileage\/\{mileage\}$';
export const GET_DEALER_NO_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/dealerservices\/\{make\}\/\{year\}\/\{model\}\/\{transmission\}\/\{engine\}\/\{train\}\/mileage\/\{mileage\}$';
export const GET_REPAIR_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduling\/repairservices\/mileage\/\{mileage\}$';
export const GET_REPAIR_NO_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/repairservices\/\{make\}\/\{year\}\/\{model\}\/\{transmission\}\/\{engine\}\/\{train\}\/mileage\/\{mileage\}$';
export const DFX_SEARCH_EMAIL_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/search$';
export const DFX_SEARCH_VIN_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduling\/search$';
export const GET_DEALER_DEPARTMENT_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/dealerdepartment$';
export const GET_APPOINTMENT_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/appointmentsummary$';
export const GET_ADVISORS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/department\/\{departmentId\}\/advisors$';
export const GET_TRANSPORTATION_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/department\/\{departmentId\}\/trasportationoption$';
export const GET_TIME_SEGMENTS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/department\/\{departmentId\}\/timesegments$';
export const POST_PUT_APPOINTMENT_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduling\/appointment$';
export const GET_APPOINTMENTS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/accounts\/\{userid\}\/vehicles\/\{vin\}\/digitalglovebox\/servicescheduling\/appointments$';
export const APPOINTMENT_DETAILS_API_PATH_REGEX = '^\/v[1-9][0-9]*\/digitalglovebox\/servicescheduling\/appointment\/\{appointmentId\}\/department\/\{departmentId\}$';

export const REL_CUSTOMER_ID = "http://api.dealer-fx.com/docs/rels/customer-vehicles";
export const HREF_CUSTOMER_ID = "https://scheduler.dealer-fx.com/catalog/customers/";
export const REL_VEHICLE_VIN = "http://api.dealer-fx.com/docs/rels/vehicle";
export const HREF_VEHICLE_VIN = "https://scheduler.dealer-fx.com/catalog/vehicles/";

export const REL_APPOINTMENT_ID = "http://api.dealer-fx.com/docs/rels/appointment";
export const HREF_APPOINTMENT_ID = "https://scheduler.dealer-fx.com/catalog/dealers/current/appointments/";
export const REL_DEPARTMENT_ID = "http://api.dealer-fx.com/docs/rels/service-department";
export const HREF_DEPARTMENT_ID = "https://scheduler.dealer-fx.com/catalog/dealers/current/departments/";
