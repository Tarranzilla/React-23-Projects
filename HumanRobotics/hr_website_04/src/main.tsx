import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import "./index.css";

import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Login from "./routes/Login.tsx";
import Register from "./routes/Register.tsx";
import ProfilePage from "./routes/ProfilePage.tsx";
import Product from "./routes/Product.tsx";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
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
                path: "/robos/:id",
                element: <Product />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
