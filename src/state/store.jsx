import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../state/user";
import planetReducer from "../state/planets";

export const store = configureStore({
    reducer: {
        user: userReducer,
        planet: planetReducer,
    },
});

// export const RootState = ReturnType<typeof store.getState>;
// export const AppDispatch = typeof store.dispatch;
