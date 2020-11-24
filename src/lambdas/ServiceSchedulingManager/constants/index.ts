import * as DeleteAppointmentSchema from './schemas/delete-service-appointment-event-schema.json';
import * as SearchEmailSchema from './schemas/dfx-search-email-event-schema.json';
import * as SearchVinSchema from './schemas/dfx-search-vin-event-schema.json';
import * as GetTokenSchema from './schemas/dfx-token-event-schema.json';
import * as GetVehicleSchema from './schemas/dfx-vehicle-event-schema.json';
import * as GetAdvisorsSchema from './schemas/get-advisors-event-schema.json';
import * as GetDealerDepartmentSchema from './schemas/get-dealer-department-event-schema.json';
import * as GetDealerVinSchema from './schemas/get-dealer-services-vin-event-schema.json';
import * as GetDealerNoVinSchema from './schemas/get-dealer-services-without-vin-event-schema.json';
import * as GetFactoryVinSchema from './schemas/get-factory-services-vin-event-schema.json';
import * as GetFactoryNoVinSchema from './schemas/get-factory-services-without-vin-event-schema.json';
import * as GetRepairVinSchema from './schemas/get-repair-services-vin-event-schema.json';
import * as GetRepairNoVinSchema from './schemas/get-repair-services-without-vin-event-schema.json';
import * as GetAppointmentDetailsSchema from './schemas/get-service-appointment-details-event-schema.json';
import * as GetAppointmentSchema from './schemas/get-service-appointments-event-schema.json';
import * as GetTimeSegmentsSchema from './schemas/get-time-segments-event-schema.json';
import * as GetTransportationOptionSchema from './schemas/get-transportation-options-event-schema.json';
import * as GetSummaryAppointmentSchema from './schemas/post-appointment-summary-event-schema.json';
import * as PostAppointmentSchema from './schemas/post-appointments-event-schema.json';
import * as PutAppointmentSchema from './schemas/update-appointment-event-schema.json';

export {    DeleteAppointmentSchema,
            SearchEmailSchema,
            SearchVinSchema,
            GetTokenSchema,
            GetVehicleSchema,
            GetAdvisorsSchema,
            GetDealerDepartmentSchema,
            GetDealerVinSchema,
            GetDealerNoVinSchema,
            GetFactoryVinSchema,
            PutAppointmentSchema,
            PostAppointmentSchema,
            GetSummaryAppointmentSchema,
            GetTransportationOptionSchema,
            GetTimeSegmentsSchema,
            GetAppointmentSchema,
            GetAppointmentDetailsSchema,
            GetRepairNoVinSchema,
            GetRepairVinSchema,
            GetFactoryNoVinSchema
         };
export * as Constants from './constants';