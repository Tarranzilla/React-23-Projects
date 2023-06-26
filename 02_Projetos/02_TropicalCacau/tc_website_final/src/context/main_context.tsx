import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    username: "Guest User",
    menuIsOpen: false,
    searchIsOpen: false,
    token: null,
    lgpdConsent: false,
    activeSection: 1,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleSearch: (state) => {
            state.searchIsOpen = !state.searchIsOpen;
            console.log("Search is toggled :" + state.searchIsOpen ? "open" : "closed");
        },
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            console.log("Mode: " + state.mode);
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
        setLgpdConsent: (state, action) => {
            state.lgpdConsent = action.payload.lgpdConsent;
        },
        setActiveSection: (state, action) => {
            state.activeSection = action.payload.activeSection;
        },
    },
});

export const { toggleSearch, setMode, setLogin, setLogout, toggleMenu, setLgpdConsent, setActiveSection } = authSlice.actions;
export default authSlice.reducer;
