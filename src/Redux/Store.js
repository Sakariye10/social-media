import { configureStore } from "@reduxjs/toolkit"
import { createSliceSignUp } from "./saliceSignUp/SignUpSlice"
const store = configureStore({
    reducer:{
        createSliceSignUp: createSliceSignUp.reducer,
        

    }
})
export default store;