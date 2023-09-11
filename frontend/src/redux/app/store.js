import { configureStore } from "@reduxjs/toolkit";
import { chatsApi } from "../service/api"
import { authApi } from "../service/authApi";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../service/auth/authSlice"

const store = configureStore({
    reducer: {
        [chatsApi.reducerPath]: chatsApi.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(chatsApi.middleware)
            .concat(authApi.middleware),
    devTools: true
})


export default store