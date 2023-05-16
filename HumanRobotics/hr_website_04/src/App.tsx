import { Outlet } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

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
