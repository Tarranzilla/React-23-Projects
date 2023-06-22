import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    username: "Guest User",
    menuIsOpen: false,
    token: null,
    lgpdConsent: false,
    section1Active: true,
    section2Active: false,
    section3Active: false,
    section4Active: false,
    section5Active: false,
    section6Active: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
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
        setSection1Active: (state, action) => {
            state.section1Active = action.payload.section1Active;
            console.log("Section 1 Active: " + state.section1Active);
        },
        setSection2Active: (state, action) => {
            state.section2Active = action.payload.section2Active;
            console.log("Section 2 Active: " + state.section2Active);
        },
        setSection3Active: (state, action) => {
            state.section3Active = action.payload.section3Active;
            console.log("Section 3 Active: " + state.section3Active);
        },
        setSection4Active: (state, action) => {
            state.section4Active = action.payload.section4Active;
            console.log("Section 4 Active: " + state.section4Active);
        },
        setSection5Active: (state, action) => {
            state.section5Active = action.payload.section5Active;
            console.log("Section 5 Active: " + state.section5Active);
        },
        setSection6Active: (state, action) => {
            state.section6Active = action.payload.section6Active;
            console.log("Section 6 Active: " + state.section6Active);
        },
    },
});

export const {
    setMode,
    setLogin,
    setLogout,
    toggleMenu,
    setLgpdConsent,
    setSection1Active,
    setSection2Active,
    setSection3Active,
    setSection4Active,
    setSection5Active,
    setSection6Active,
} = authSlice.actions;
export default authSlice.reducer;
