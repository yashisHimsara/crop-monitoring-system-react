import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StaffModel } from "../models/StaffModel";
import axios from "axios";

const initialState: StaffModel[] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/staff'
});

// Save a new employee
export const saveEmployee = createAsyncThunk(
    "staff/saveEmployee",
    async (e: StaffModel) => {
        try {
            const response = await api.post('/add', e);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Get all employees
export const getAllEmployees = createAsyncThunk(
    "staff/getAllEmployees",
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

// Delete an employee by employeeId
export const deleteEmployee = createAsyncThunk(
    "staff/deleteEmployee",
    async (employeeId: string) => {
        try {
            const response = await api.delete(`/delete/${employeeId}`);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Update an employee by employeeId
export const updateEmployee = createAsyncThunk(
    "staff/updateEmployee",
    async (e: StaffModel) => {
        try {
            const response = await api.put('/update', e);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

const StaffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save Employee
            .addCase(saveEmployee.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            // Get All Employees
            .addCase(getAllEmployees.fulfilled, (state, action) => {
                return action.payload;
            })
            // Delete Employee
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                return state.filter(employee => employee.employeeId !== action.payload.employeeId);
            })
            // Update Employee
            .addCase(updateEmployee.fulfilled, (state, action) => {
                const index = state.findIndex(employee => employee.employeeId === action.payload.employeeId);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            });
    }
});

export default StaffSlice.reducer;