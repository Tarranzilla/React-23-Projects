import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import authReducer from "./context/main_context.tsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import "material-icons/iconfont/material-icons.css";
import "material-symbols";

import "./index.css";

import LandingPage from "./routes/LandingPage.tsx";

//import Home from "./routes/LandingPage/01_Home.tsx";
import Robots from "./routes/LandingPage/02_Robots.tsx";
import Services from "./routes/LandingPage/03_Services.tsx";
import About from "./routes/LandingPage/04_About.tsx";
import Contact from "./routes/LandingPage/05_Contact.tsx";
import FAQ from "./routes/LandingPage/06_FAQ.tsx";

import Login from "./routes/SecondaryPages/Login.tsx";
import Register from "./routes/SecondaryPages/Register.tsx";
import ProfilePage from "./routes/SecondaryPages/ProfilePage.tsx";
import RobiosStudio from "./routes/SecondaryPages/RobiosStudio.tsx";
import Blog from "./routes/SecondaryPages/Blog.tsx";

import AvatarInfo from "./routes/ProductInfos/01_AvatarInfo.tsx";
import GoInfo from "./routes/ProductInfos/02_GoInfo.tsx";
import InspectorInfo from "./routes/ProductInfos/03_InspectorInfo.tsx";
import CargoInfo from "./routes/ProductInfos/04_CargoInfo.tsx";

import Menu from "./routes/Menu.tsx";
import NotFound from "./routes/NotFound.tsx";

const persistConfig = {
    key: "root",
    storage,
    version: 1,
};

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

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/inicio",
                element: <LandingPage />,
            },
            {
                path: "/robos",
                element: <Robots />,
            },
            {
                path: "/avatar-info",
                element: <AvatarInfo />,
            },
            {
                path: "/go-info",
                element: <GoInfo />,
            },
            {
                path: "/inspector-info",
                element: <InspectorInfo />,
            },
            {
                path: "/cargo-info",
                element: <CargoInfo />,
            },
            {
                path: "/servicos",
                element: <Services />,
            },
            {
                path: "/contato",
                element: <Contact />,
            },
            {
                path: "/sobre",
                element: <About />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registro",
                element: <Register />,
            },
            {
                path: "/perfil",
                element: <ProfilePage />,
            },
            {
                path: "/studio",
                element: <RobiosStudio />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/duvidas",
                element: <FAQ />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </PersistGate>
    </Provider>
);
