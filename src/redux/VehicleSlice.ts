import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VehicleModel } from "../models/VehicleModel";
import axios from "axios";

const initialState: VehicleModel[] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/vehicle'
});

// Save a new vehicle
export const saveVehicle = createAsyncThunk(
    "vehicle/saveVehicle",
    async (v: VehicleModel) => {
        try {
            const response = await api.post('/add', v);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Get all vehicles
export const getAllVehicles = createAsyncThunk(
    "vehicle/getAllVehicles",
    async () => {
        try {
            const response = await api.get('/get');
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Delete a vehicle by vehicleCode
export const deleteVehicle = createAsyncThunk(
    "vehicle/deleteVehicle",
    async (vehicleCode: string) => {
        try {
            const response = await api.delete(`/delete/${vehicleCode}`);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Update a vehicle by vehicleCode
export const updateVehicle = createAsyncThunk(
    "vehicle/updateVehicle",
    async (v: VehicleModel) => {
        try {
            const response = await api.put('/update', v);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

const VehicleSlice = createSlice({
    name: "vehicle",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save Vehicle
            .addCase(saveVehicle.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            // Get All Vehicles
            .addCase(getAllVehicles.fulfilled, (state, action) => {
                return action.payload;
            })
            // Delete Vehicle
            .addCase(deleteVehicle.fulfilled, (state, action) => {
                return state.filter(vehicle => vehicle.vehicleCode !== action.payload.vehicleCode);
            })
            // Update Vehicle
            .addCase(updateVehicle.fulfilled, (state, action) => {
                const index = state.findIndex(vehicle => vehicle.vehicleCode === action.payload.vehicleCode);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            });
    }
});

export default VehicleSlice.reducer;