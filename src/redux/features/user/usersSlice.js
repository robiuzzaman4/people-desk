import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsersData = createAsyncThunk('user/fetchUsersData', async () => {
    const response = await fetch('/users.json');
    const data = await response.json();
    return data;
});

const initialState = {
    data: [],
    loading: true,
    error: null,
}

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersData.pending, (state) => {
                state.data = [],
                    state.loading = true,
                    state.error = null
            })
            .addCase(fetchUsersData.fulfilled, (state, { payload }) => {
                state.data = payload,
                    state.loading = false,
                    state.error = null
            })
            .addCase(fetchUsersData.rejected, (state, action) => {
                state.data = [],
                    state.loading = false,
                    state.error = action.error.message
            })
    }
})

export default usersSlice.reducer;