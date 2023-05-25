import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    username: "Guest User",
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        setLogout: (state, action) => {
            state.username = "Guest User";
            state.token = null;
        },
    },
});

export const { setMode, setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
