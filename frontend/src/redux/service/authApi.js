import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Updated import path
import { configKeys } from "../../constants";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: configKeys.BASE_URL,
        mode: "cors"
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (body) => ({
                url: "/register",
                method: "POST",
                body,
            })
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body,
            })
        })
    })
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi; // Changed export name
