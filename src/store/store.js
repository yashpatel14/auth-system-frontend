import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../store/Slices/authSlice";


const store = configureStore({
    reducer: {
        auth:authSliceReducer
    },
});

export default store