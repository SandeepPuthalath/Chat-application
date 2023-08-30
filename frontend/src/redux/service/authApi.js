import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Updated import path

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/auth/",
        mode: "cors"
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (body) => ({
                url: "/register",
                method: "POST",
                body,
            })
        })
    })
});

export const { useRegisterUserMutation } = authApi; // Changed export name
