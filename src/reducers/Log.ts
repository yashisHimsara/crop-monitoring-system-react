import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Log } from "../models/Log";

const initialState: Log[] = [];

const LogSlice = createSlice({
    name: "log",
    initialState,
    reducers: {
        addLog: (state, action: PayloadAction<Log>) => {
            state.push(action.payload);
        },
        deleteLog: (state, action: PayloadAction<string>) => {
            return state.filter(log => log.logCode !== action.payload);
        },
        updateLog: (state, action: PayloadAction<Log>) => {
            const index = state.findIndex(log => log.logCode === action.payload.logCode);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { addLog, deleteLog, updateLog } = LogSlice.actions;
export default LogSlice.reducer;
