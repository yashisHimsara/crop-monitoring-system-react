import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LogModel } from "../models/LogModel";
import axios from "axios";

const initialState: LogModel[] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/log'
});

// Save a new log
export const saveLog = createAsyncThunk(
    "log/saveLog",
    async (log: LogModel) => {
        try {
            const response = await api.post('/add', log);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Get all logs
export const getAllLogs = createAsyncThunk(
    "log/getAllLogs",
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

// Delete a log by logCode
export const deleteLog = createAsyncThunk(
    "log/deleteLog",
    async (logCode: string) => {
        try {
            const response = await api.delete(`/delete/${logCode}`);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Update a log by logCode
export const updateLog = createAsyncThunk(
    "log/updateLog",
    async (log: LogModel) => {
        try {
            const response = await api.put('/update', log);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

const LogSlice = createSlice({
    name: "log",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save Log
            .addCase(saveLog.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            // Get All Logs
            .addCase(getAllLogs.fulfilled, (state, action) => {
                return action.payload;
            })
            // Delete Log
            .addCase(deleteLog.fulfilled, (state, action) => {
                return state.filter(log => log.logCode !== action.payload.logCode);
            })
            // Update Log
            .addCase(updateLog.fulfilled, (state, action) => {
                const index = state.findIndex(log => log.logCode === action.payload.logCode);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            });
    }
});

export default LogSlice.reducer;