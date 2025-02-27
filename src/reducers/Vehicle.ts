import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Vehicle} from "../models/Vehicle.ts";

const initialState:Vehicle[]=[];

const VehicleSlice=createSlice({
    name: "vehicle",
    initialState,
    reducers:{
        addVehicle:(state,action:PayloadAction<Vehicle>)=>{
            state.push(action.payload);
        },
        deleteVehicle: (state, action) => {
            return state.filter(vehicle => vehicle.vehicleCode !== action.payload);
        },
        updateVehicle: (state, action) => {
            const index = state.findIndex(vehicle => vehicle.vehicleCode === action.payload.vehicleId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
})

export const {addVehicle,deleteVehicle,updateVehicle } = VehicleSlice.actions;
export default VehicleSlice.reducer