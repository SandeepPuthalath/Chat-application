import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const chatsApi = createApi({
    reducerPath: "chatsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
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