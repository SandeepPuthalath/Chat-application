import { CreateApi, createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { setCredentials, logOut } from "../../service/auth/authSlice";
import { configKeys } from "../../../constants";


const baseQuery = fetchBaseQuery({
    baseUrl: configKeys.BASE_URL,
    credentials: "include",
    prepareHeaders:(headers, {getState}) => {
        const token = getState().auth.token;
        if(token){
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    } 
})




const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    
    if(result?.originalStatus === 403){
        console.log("sending refresh token");
        //send refresh token to get new access token
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        console.log(refreshResult);
        if(refreshResult?.data){
            const user = api.getState().auth.user;
            // store the new token
            api.dispatch(setCredentials(...refreshResult, user));
            //retry the original query with new access token
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }

    return result;
}



export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})