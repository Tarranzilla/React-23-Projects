import { useState } from "react";
import { Outlet } from "react-router-dom";

import { motion as m, AnimatePresence } from "framer-motion";

import MainNavbar from "./components/MainNavbar";

function App() {
    return (
        <>
            <AnimatePresence mode="wait">
                <MainNavbar />
                <Outlet />
            </AnimatePresence>
        </>
    );
}

export default App;
