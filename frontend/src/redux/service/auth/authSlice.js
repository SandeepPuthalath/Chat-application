import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers:{
        setCredentials: (state, action) =>{
            const {user, token} = action.payload;
            state.user = user
            state.token = token
        },
        logOut: (state, action) =>{
            state.user = null 
            state.authTokens = null
        }
    }
    
})



export const {setCredentials, logOut} = authSlice.actions

export default authSlice.reducer


export const selectCurrentUser = (state) => state.auth?.user
export const selectCurrentToken = (state) => state.auth?.token