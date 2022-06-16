import * as FeatureSearchListSchema from './schemas/list-feature-get-schema.json';
import * as FeatureInsertSchema from './schemas/feature-insert-schema.json';
import * as FeatureUpdateSchema from './schemas/feature-update-schema.json';
import * as FeatureDeleteSchema from './schemas/feature-delete-schema.json';
import * as RuleSearchListSchema from './schemas/feature-rules-list-schema.json';
import * as RuleInsertSchema from './schemas/rule-feature-add-schema.json';
import * as RuleDeleteSchema from './schemas/rule-feature-remove-schema.json';
import * as VehicleGroupInsertForFeatureSchema from './schemas/vehicleGroup-feature-insert-schema.json';
import * as VehicleGroupDeleteForFeatureSchema from './schemas/vehicleGroup-delete-schema.json';
import * as VehicleGroupInsertSchema from './schemas/vehicleGroup-insert-schema.json';
import * as VehicleGroupSearchListSchema from './schemas/vehicleGroup-list-get-schema.json';
import * as VehicleGroupUpdateSchema from './schemas/vehicleGroup-update-schema.json';
import * as VehicleGroupDeleteSchema from './schemas/vehicleGroup-delete-schema.json';
import * as VehicleListFromVehicleGroup from './schemas/vehicleGroup-vehicleList-get-schema.json';
import * as VehicleAddToVehicleGroup from './schemas/vehicleGroup-vehicle-add-schema.json';
import * as VehicleDeleteFromVehicleGroup from './schemas/vehicleGroup-vin-remove-schema.json';


export {    FeatureSearchListSchema, 
            FeatureInsertSchema, 
            FeatureUpdateSchema,
            FeatureDeleteSchema,
            RuleSearchListSchema,
            RuleInsertSchema,
            RuleDeleteSchema,
            VehicleGroupInsertForFeatureSchema,
            VehicleGroupDeleteForFeatureSchema,
            VehicleGroupInsertSchema,
            VehicleGroupSearchListSchema,
            VehicleGroupUpdateSchema,
            VehicleGroupDeleteSchema,
            VehicleListFromVehicleGroup,
            VehicleAddToVehicleGroup,
            VehicleDeleteFromVehicleGroup  
         };

export * as Constants from './constants';