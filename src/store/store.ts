import { configureStore } from "@reduxjs/toolkit";
import Crop from "../reducers/Crop";
import Equipment from "../reducers/Equipment";
import Field from "../reducers/Field";
import Log from "../reducers/Log";
import Employee from "../reducers/Employee";
import {Vehicle} from "../reducers/Vehicle.ts";

export const store = configureStore({
    reducer: {
        crop: Crop,
        equipment: Equipment,
        field: Field,
        log: Log,
        employee: Employee,
        vehicle: Vehicle,
    },
});

export type AppDispatch = typeof store.dispatch;
