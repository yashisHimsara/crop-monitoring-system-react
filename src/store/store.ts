import { configureStore } from "@reduxjs/toolkit";
import Crop from "../reducers/Crop";
import Equipment from "../reducers/Equipment";
import Field from "../reducers/Field";
import Log from "../reducers/Log";
import Staff from "../reducers/Staff.ts";
import Vehicle from "../reducers/Vehicle.ts";

export const store = configureStore({
    reducer: {
        crop: Crop,
        equipment: Equipment,
        field: Field,
        log: Log,
        employee: Staff(),
        vehicle: Vehicle,
    },
});

export type AppDispatch = typeof store.dispatch;
