import { configureStore } from "@reduxjs/toolkit";
import { chatsApi } from "../service/api"
import { authApi } from "../service/authApi";


const store = configureStore({
    reducer: {
        [chatsApi.reducerPath]: chatsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(chatsApi.middleware)
        .concat(authApi.middleware)
})


export default store