import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Equipment} from "../models/Equipment.ts";

const initialState:Equipment[]=[];

const EquipmentSlice=createSlice({
    name: "equipment",
    initialState,
    reducers:{
        addEquipment:(state,action:PayloadAction<Equipment>)=>{
            state.push(action.payload);
        },
        deleteEquipment: (state, action) => {
            return state.filter(equipment => equipment.equipmentId !== action.payload);
        },
        updateEquipment: (state, action) => {
            const index = state.findIndex(equipment => equipment.equipmentId === action.payload.equipmentId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
})

export const {addEquipment,deleteEquipment,updateEquipment } = EquipmentSlice.actions;
export default EquipmentSlice.reducer