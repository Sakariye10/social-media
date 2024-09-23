import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    data: {},
};

export const SignUps = createAsyncThunk("api/create/Signup", async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post('http://localhost:4000/api/register', data);
        console.log(res.data);
        return res.data;
    } catch (error) {
        if (error.isAxiosError) {
            return rejectWithValue(error.response?.data.message || "Server error");
        }
        return rejectWithValue("Server error");
    }
});

export const createSliceSignUp = createSlice({
    name: "Signup",
    initialState,
    reducers: {
        resetRegister: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(SignUps.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.errorMessage = "";
            })
            .addCase(SignUps.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
            })
            .addCase(SignUps.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
            });
    },
});

export const { resetRegister } = createSliceSignUp.actions;
export default createSliceSignUp.reducer;
