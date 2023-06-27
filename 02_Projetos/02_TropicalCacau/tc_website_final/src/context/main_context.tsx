import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    username: "Guest User",
    menuIsOpen: false,
    searchIsOpen: false,
    cartIsOpen: false,
    checkoutHelpIsOpen: false,
    token: null,
    lgpdConsent: false,
    activeSection: 1,
    isLoading: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.menuIsOpen = !state.menuIsOpen;
            console.log("Menu is toggled: " + (state.menuIsOpen ? "open" : "closed"));
        },
        toggleCart: (state) => {
            state.cartIsOpen = !state.cartIsOpen;
            console.log("Cart is toggled: " + (state.cartIsOpen ? "open" : "closed"));
        },
        toggleCheckoutHelp: (state) => {
            state.checkoutHelpIsOpen = !state.checkoutHelpIsOpen;
            console.log("Checkout Help is toggled: " + (state.checkoutHelpIsOpen ? "open" : "closed"));
        },
        toggleSearch: (state) => {
            state.searchIsOpen = !state.searchIsOpen;
            console.log("Search is toggled :" + (state.searchIsOpen ? "open" : "closed"));
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
        setLgpdConsent: (state, action) => {
            state.lgpdConsent = action.payload.lgpdConsent;
        },
        setActiveSection: (state, action) => {
            state.activeSection = action.payload.activeSection;
        },
        toggleLoading: (state) => {
            state.isLoading = !state.isLoading;
            console.log("Loading is toggled: " + (state.isLoading ? "on" : "off"));
        },
    },
});

export const {
    toggleMenu,
    toggleCart,
    toggleCheckoutHelp,
    toggleSearch,
    setMode,
    setLogin,
    setLogout,
    setLgpdConsent,
    setActiveSection,
    toggleLoading,
} = authSlice.actions;
export default authSlice.reducer;
