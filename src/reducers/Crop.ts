import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Crop} from "../models/Crop.ts";

const initialState:Crop[]=[];

const CropSlice=createSlice({
    name: "crop",
    initialState,
    reducers:{
        addCrop:(state,action:PayloadAction<Crop>)=>{
            state.push(action.payload);
        },
        deleteCrop: (state, action) => {
            return state.filter(crop => crop.cropCode !== action.payload);
        },
        updateCrop: (state, action) => {
            const index = state.findIndex(crop => crop.cropCode === action.payload.cropCode);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
})

export const {addCrop,deleteCrop,updateCrop } = CropSlice.actions;
export default CropSlice.reducer