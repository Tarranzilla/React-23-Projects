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
import SearchTab from "./components/SearchTab.tsx";

function App() {
    const mode = useSelector((state: any) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    // const isAuth = Boolean(useSelector((state: any) => state.token));

    const searchIsOpen = useSelector((state: any) => state.searchIsOpen);

    return (
        <>
            <ScrollToHashElement />
            <ThemeProvider theme={theme}>
                <MainNavbar />
                <div className="StatusBar"></div>
                <div className="Content_Viewer">
                    <AnimatePresence>
                        {searchIsOpen ? <SearchTab key="searchTab" /> : null}
                        <div id="lgpd-cont" className="lgpd" key="lgpd-cont">
                            <p key="lgpd-cont-p1">Este site utiliza cookies para melhorar sua experiência de navegação.</p>
                            <p key="lgpd-cont-p2">
                                Ao continuar navegando, você concorda com a nossa
                                <a href="#" key="Priv_Anchor">
                                    Política de Privacidade
                                </a>
                                .
                            </p>
                            <button id="lgpd-but" className="button-lgpd" key="btnLgpd">
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
