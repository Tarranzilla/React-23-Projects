// Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// Data Imports
import ChocolateType from "../types/Chocolate"; // Import the Chocolate interface
import TodosOsChocolates from "../data/TodosOsChocolates";

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
    availableChocolates: TodosOsChocolates,
    cartItems: [] as ChocolateType[],
    cartTotal: 0,
    productDetailsIsOpen: false,
    chocoClasses: ["classico", "especial", "kit", "assinatura"],
    activeChocoClass: "classico",
    activeProduct: null as ChocolateType | null,
    privacyPolicyIsOpen: false,
    termsIsOpen: false,
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
            console.log("Active Section: " + state.activeSection);
        },
        toggleLoading: (state) => {
            state.isLoading = !state.isLoading;
            console.log("Loading is toggled: " + (state.isLoading ? "on" : "off"));
        },
        addToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.availableChocolates.find((item) => item.id === id);
            if (item && id !== undefined) {
                const inCartIndex = state.cartItems.findIndex((item) => item.id === id);

                if (inCartIndex !== -1) {
                    state.cartItems[inCartIndex].cartQuantity += quantity;
                } else {
                    state.cartItems.push({ ...item, cartQuantity: quantity, id });
                }
            }
        },
        decrementCartItem: (state, action) => {
            const { id } = action.payload;
            const item = state.cartItems.find((item) => item.id === id);

            if (item && item.cartQuantity > 1) {
                item.cartQuantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            console.log("Removing from cart");
            const { id } = action.payload;
            console.log("ID: " + id);
            const itemIndex = state.cartItems.findIndex((item) => item.id === id);

            if (itemIndex !== -1) {
                state.cartItems.splice(itemIndex, 1);
            }
        },
        getCartTotal: (state) => {
            state.cartTotal = state.cartItems.reduce((acc, item) => {
                return acc + item.price * item.cartQuantity;
            }, 0);
        },
        toggleProductDetails: (state) => {
            state.productDetailsIsOpen = !state.productDetailsIsOpen;
        },
        setActiveProduct: (state, action) => {
            const { id } = action.payload;
            const item = state.availableChocolates.find((item) => item.id === id);
            if (item && id !== undefined) {
                state.activeProduct = item;
            }
            console.log("Active Product: " + state.activeProduct?.name);
        },
        setActiveChocoClass: (state, action) => {
            state.activeChocoClass = action.payload;
            console.log("Active Choco Class: " + state.activeChocoClass);
        },
        togglePrivacyPolicy: (state) => {
            state.privacyPolicyIsOpen = !state.privacyPolicyIsOpen;
            console.log("Privacy Policy is toggled: " + (state.privacyPolicyIsOpen ? "open" : "closed"));
        },
        toggleTerms: (state) => {
            state.termsIsOpen = !state.termsIsOpen;
            console.log("Terms is toggled: " + (state.termsIsOpen ? "open" : "closed"));
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
    addToCart,
    decrementCartItem,
    removeFromCart,
    getCartTotal,
    toggleProductDetails,
    setActiveProduct,
    setActiveChocoClass,
    togglePrivacyPolicy,
    toggleTerms,
} = authSlice.actions;
export default authSlice.reducer;
