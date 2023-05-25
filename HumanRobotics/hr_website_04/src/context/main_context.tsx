import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    username: "Guest User",
    menuIsOpen: false,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.username = "Guest User";
            state.token = null;
        },
        toggleMenu: (state, action) => {
            state.menuIsOpen = action.payload.menuState;
        },
    },
});

export const { setMode, setLogin, setLogout, toggleMenu } = authSlice.actions;
export default authSlice.reducer;
