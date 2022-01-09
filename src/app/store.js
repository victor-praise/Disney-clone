import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";
import movieReducer from "../features/movie/movieSlice";

// curryGetDefaultMiddleware

export default configureStore({
    reducer:{
        user: userReducer,
        movie: movieReducer,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})