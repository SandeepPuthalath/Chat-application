import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { chatsApi } from "../service/api"


const store = configureStore({
    reducer: {
        [chatsApi.reducerPath]: chatsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(chatsApi.middleware)
})


export default store