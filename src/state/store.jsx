import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../state/user";
import pauseReducer from "../state/pause";

export const store = configureStore({
    reducer: {
        user: userReducer,
        pause: pauseReducer,
    },
});

// export const RootState = ReturnType<typeof store.getState>;
// export const AppDispatch = typeof store.dispatch;
