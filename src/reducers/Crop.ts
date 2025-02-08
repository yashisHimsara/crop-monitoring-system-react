import { Crop } from "../models/Crop";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState: Crop[] = [];

const api = axios.create({
    baseURL: "http://localhost:3002",
});

export const saveCrop = createAsyncThunk(
    "crop/saveCrop",
    async (crop: Crop) => {
        try {
            const response = await api.post("/add", crop);
            return response.data;
        } catch (error) {
            return console.log("Error saving crop:", error);
        }
    }
);

export const deleteCrop = createAsyncThunk(
    "crop/deleteCrop",
    async (cropCode: string) => {
        try {
            await api.delete(`/delete/${cropCode}`);
            return cropCode;
        } catch (error) {
            return console.log("Error deleting crop:", error);
        }
    }
);

const cropSlice = createSlice({
    name: "crop",
    initialState,
    reducers: {
        addCrop(state, action: PayloadAction<Crop>) {
            state.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCrop.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveCrop.rejected, (state, action) => {
                console.error("Failed to save crop:", action.payload);
            })
            .addCase(saveCrop.pending, () => {
                console.log("Saving crop...");
            });

        builder
            .addCase(deleteCrop.pending, () => {
                console.log("Pending crop deletion...");
            })
            .addCase(deleteCrop.fulfilled, (state, action) => {
                console.log("Crop deletion fulfilled.");
                return state.filter((crop: Crop) => crop.cropCode !== action.payload);
            })
            .addCase(deleteCrop.rejected, () => {
                console.log("Error deleting crop.");
            });
    },
});

export const { addCrop } = cropSlice.actions;
export default cropSlice.reducer;
