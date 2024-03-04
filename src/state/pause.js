import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {name: ""};

export const pauseSlice = createSlice({
    name: "pause",
    initialState: {value: {name: ""}},
    reducers: {
        pause: (state, action) => {
            state.value = action.payload
        },
        play: (state) => {
            state.value = initialStateValue;
        },
    }
});

export const {pause, play} = pauseSlice.actions;

export default pauseSlice.reducer;