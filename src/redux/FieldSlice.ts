import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FieldModel } from "../models/FieldModel";
import axios from "axios";

const initialState: FieldModel[] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/field'
});

// Save a new field
export const saveField = createAsyncThunk(
    "field/saveField",
    async (f: FieldModel) => {
        try {
            const response = await api.post('/add', f);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Get all fields
export const getAllFields = createAsyncThunk(
    "field/getAllFields",
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

// Delete a field by fieldCode
export const deleteField = createAsyncThunk(
    "field/deleteField",
    async (fieldCode: string) => {
        try {
            const response = await api.delete(`/delete/${fieldCode}`);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Update a field by fieldCode
export const updateField = createAsyncThunk(
    "field/updateField",
    async (f: FieldModel) => {
        try {
            const response = await api.put('/update', f);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

const FieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save Field
            .addCase(saveField.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            // Get All Fields
            .addCase(getAllFields.fulfilled, (state, action) => {
                return action.payload;
            })
            // Delete Field
            .addCase(deleteField.fulfilled, (state, action) => {
                return state.filter(field => field.fieldCode !== action.payload.fieldCode);
            })
            // Update Field
            .addCase(updateField.fulfilled, (state, action) => {
                const index = state.findIndex(field => field.fieldCode === action.payload.fieldCode);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            });
    }
});

export default FieldSlice.reducer;