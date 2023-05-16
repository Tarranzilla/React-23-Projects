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
import RobiosStudio from "./routes/RobiosStudio.tsx";
import Blog from "./routes/Blog.tsx";
import FAQ from "./routes/FAQ.tsx";
import Robots from "./routes/Robots.tsx";
import Services from "./routes/Services.tsx";
import Experience from "./routes/Experience.tsx";
import Contact from "./routes/Contact.tsx";
import Menu from "./routes/Menu.tsx";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/robos",
                element: <Robots />,
            },
            {
                path: "/servicos",
                element: <Services />,
            },
            {
                path: "/experiencia",
                element: <Experience />,
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
                path: "/robos/:id",
                element: <Product />,
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
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RouterProvider router={router} />);
