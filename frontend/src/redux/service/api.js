import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { configKeys } from "../../constants"

export const chatsApi = createApi({
    reducerPath: "chatsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: configKeys.BASE_URL,
        mode:"cors",
    }),
    endpoints: (builder) => ({
        getChats: builder.query({
            query: () => ({
                url: '/chat',
                method: "GET",
            })
        }),
        getChat:builder.query({
            query:(id) =>({
                url:`/chat/${id}`,
                method:"GET"
            })
        })
    })
})



export const { useGetChatsQuery, useGetChatQuery } = chatsApi