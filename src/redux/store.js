import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/user/usersSlice";

const store = configureStore({
    reducer: {
        usersSlice: usersSlice
    },
})

export default store;