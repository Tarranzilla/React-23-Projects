// Vanilla Imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// React Router Imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Redux Imports
import authReducer from "./context/main_context.tsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Redux Persist Imports
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

// Components Imports
import LandingPage from "./components/05_Landing_Page.tsx";
import NotFound from "./components/09_Not_Found.tsx";

// CSS Imports
import "material-icons/iconfont/material-icons.css";
import "./index.css";

// Router Creation
const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

// Redux Persist Configuration
const persistConfig = {
    key: "root",
    storage,
    version: 1,
};

// Redux Persist Store Creation
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Render, Provider and PersistGate (?)
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistStore(store)}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
