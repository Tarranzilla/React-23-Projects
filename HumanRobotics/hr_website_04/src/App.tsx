import { Outlet } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import MainNavbar from "./components/MainNavbar";

function App() {
    return (
        <>
            <MainNavbar />
            <div className="StatusBar"></div>
            <div className="Content_Viewer">
                <AnimatePresence mode="wait">
                    <Outlet />
                </AnimatePresence>
            </div>
            <div className="Footer"></div>
        </>
    );
}

export default App;
