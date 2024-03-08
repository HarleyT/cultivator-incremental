import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../state/user";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// export const RootState = ReturnType<typeof store.getState>;
// export const AppDispatch = typeof store.dispatch;
