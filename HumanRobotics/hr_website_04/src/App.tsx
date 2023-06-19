import { useMemo } from "react";

import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.tsx";

import ScrollToHashElement from "./utilities/ScrollToHashElement.js";

console.log(themeSettings("dark"));

import MainNavbar from "./components/MainNavbar";

function App() {
    const mode = useSelector((state: any) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    // const isAuth = Boolean(useSelector((state: any) => state.token));

    return (
        <>
            <ScrollToHashElement />
            <ThemeProvider theme={theme}>
                <MainNavbar />
                <div className="StatusBar"></div>
                <div className="Content_Viewer">
                    <AnimatePresence mode="wait">
                        <div id="lgpd-cont" className="lgpd">
                            <p>Este site utiliza cookies para melhorar sua experiência de navegação.</p>
                            <p>
                                Ao continuar navegando, você concorda com a nossa
                                <a href="#">Política de Privacidade</a>.
                            </p>
                            <button id="lgpd-but" className="button-lgpd">
                                OK
                            </button>
                        </div>
                        <Outlet />
                    </AnimatePresence>
                </div>
                <div className="Footer"></div>
            </ThemeProvider>
        </>
    );
}

export default App;
