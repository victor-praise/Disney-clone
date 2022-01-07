import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../feautures/userSlice"



// curryGetDefaultMiddleware

export default configureStore({
    reducer:{
        user: userReducer
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})