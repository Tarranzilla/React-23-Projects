import { useState, useReducer, useMemo, useCallback, useEffect } from "react";

import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.tsx";

console.log(themeSettings("dark"));

import MainNavbar from "./components/MainNavbar";

function App() {
    const mode = useSelector((state: any) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state: any) => state.token));

    return (
        <>
            <ThemeProvider theme={theme}>
                <MainNavbar />
                <div className="StatusBar"></div>
                <div className="Content_Viewer">
                    <AnimatePresence mode="wait">
                        <Outlet />
                    </AnimatePresence>
                </div>
                <div className="Footer"></div>
            </ThemeProvider>
        </>
    );
}

export default App;
