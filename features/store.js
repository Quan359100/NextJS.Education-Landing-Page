import { configureStore } from "@reduxjs/toolkit"
import courseFilterSlice from "./courseFilterSlice"
import courseSlice from "./courseSlice"

export const store = configureStore({
    reducer: {
        course: courseSlice,
        courseFilter: courseFilterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
