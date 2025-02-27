import {FieldModel} from "../models/FieldModel.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:FieldModel[]=[];
const FieldSlice=createSlice({
    name: "field",
    initialState,
    reducers:{
        addField:(state,action:PayloadAction<FieldModel>)=>{
            state.push(action.payload);
            },
        deleteField:(state,action:PayloadAction<string>)=>{
            return state.filter(field => field.fieldCode !== action.payload);
        },
        updateField:(state,action:PayloadAction<FieldModel>)=>{
            const index = state.findIndex(field => field.fieldCode === action.payload.fieldCode);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    },
})

export const {addField,deleteField,updateField}=FieldSlice.actions;
export default FieldSlice.reducer