import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {planets: [], timestates: []};

export const planetSlice = createSlice({
    name: "planet",
    initialState: {value: {planets: [], timestates: []}},
    reducers: {
        name: (state) => {
            state.value = "Earth";
        },
        time: (state) => {
            state.value = "10";
        },
    }
});

// export const {planet, timestate} = planetSlice.actions;

export default planetSlice.reducer;