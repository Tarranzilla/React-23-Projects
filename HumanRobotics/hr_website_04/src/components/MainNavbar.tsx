import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion as m, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./theme.js";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../context/main_context";
// import { dark } from "@mui/material/styles/createPalette";

// import { useTheme, useMediaQuery } from "@mui/material";

function MainNavbar() {
    const currentLocation = useLocation();
    const currentLocationParsed = currentLocation.pathname.replace(/[^a-zA-Z ]/g, "");
    console.log(currentLocationParsed);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    //    const username = useSelector((state: any) => state.username);
    //    const mode = useSelector((state: any) => state.mode);
    const menuIsOpen = useSelector((state: any) => state.menuIsOpen);

    //    const isDesktop = useMediaQuery("(min-width: 1240px)");
    //    const isMobile = useMediaQuery("(max-width: 1000px)");

    //    const theme = useTheme();

    //    const neutralLight = theme.palette.primary.light;
    //    const neutralDark = theme.palette.primary.dark;
    //    const lightBackground = theme.palette.background.default;
    //    const darkBackground = theme.palette.background.default;
    //    const primaryLight = theme.palette.primary.light;
    //    const primaryDark = theme.palette.primary.dark;

    const LinkHandler = () => {
        if (menuIsOpen) {
            dispatch(
                toggleMenu({
                    menuState: false,
                })
            );
            console.log("NavLink clicado, Menu fechado.");
        }
    };

    const menuOpenHandler = () => {
        if (menuIsOpen) {
            navigate(-1);
            console.log("Menu Fechado, retornando para página anterior.");
        }

        if (!menuIsOpen) {
            console.log("Menu Aberto");
        }
        dispatch(
            toggleMenu({
                menuState: !menuIsOpen,
            })
        );
    };

    return (
        <>
            <m.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Main_Navbar">
                <NavLink to="/inicio" className="LogoType_Container Nav_SideBlock Nav_Sideblock_1" onClick={LinkHandler}>
                    <svg id="Svg0" className="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.15 126.3">
                        <g id="Layer_2-2">
                            <path
                                className="cls-1"
                                d="m104.74,24.6L66.49,2.52c-5.82-3.36-13-3.36-18.83,0L9.41,24.6C3.59,27.97,0,34.18,0,40.91v45.34c0,3.9,1.35,7.6,3.72,10.54,1.18,1.46,3.56.58,3.56-1.3.01-8.44.01-16.88-.01-25.32.02-2.81,2.32-4.98,4.7-6.09,3.45-1.71,7.8-.96,10.73,1.46,1.58,1.3,2.64,3.28,2.65,5.34.11,12.85.1,25.69.02,38.54,0,.72.38,1.39,1.01,1.76l2.29,1.32c1.33.77,3.01-.18,3.03-1.72.11-9.07-.05-18.13.04-27.2-.05-1.93.83-3.8,2.21-5.12,3.3-3.04,8.65-3.4,12.49-1.17,1.84,1.08,3.52,2.96,3.49,5.22-.02,13.61-.04,27.21-.05,40.82,0,.83.51,1.59,1.29,1.89,4.66,1.75,9.92,1.36,14.32-1.17l39.26-22.67c5.82-3.36,9.41-9.58,9.41-16.3v-44.17c0-6.72-3.59-12.94-9.41-16.3h0ZM24.85,54.2c-1.75,4.51-7.38,7.05-11.88,5.16-3.17-1.27-5.55-4.4-5.72-7.84-.33-4.16,2.87-8.13,6.88-9.04.8-.21,1.62-.3,2.44-.29,1.81.04,3.6.61,5.04,1.73,3.11,2.26,4.74,6.62,3.24,10.26h0Zm24.82,17.02c-.23.62-.94.85-1.54.8-5,0-10.01,0-15.01,0-.89.1-1.26-.97-1.29-1.69-.08-4.66,0-9.33-.03-14v-.02c-.05-1.01.74-1.88,1.75-1.97.45-.04.9-.06,1.35-.06.78,0,1.57.02,2.35,0,3.75.05,7.5-.03,11.25.02.91-.08,1.46.91,1.42,1.71.07,4.09-.05,8.18.03,12.26,0,.99.03,2-.27,2.95h0Z"
                            />
                        </g>
                    </svg>
                    <div className="Logo_Text_Container Desktop_Only">
                        <svg id="Svg1" className="Logo_Text_Svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.11 12">
                            <g id="Layer_2-2">
                                <path
                                    className="cls-1"
                                    d="m45.56,11.88c-.25,0-.46-.07-.64-.22-.18-.14-.26-.33-.26-.55V3.3l-4.68,8.14c-.09.18-.24.31-.43.4-.19.09-.39.13-.61.13s-.42-.04-.61-.13-.33-.22-.43-.4l-4.68-8.14v7.82c0,.22-.09.41-.26.55-.18.15-.39.22-.64.22h-.55V.11s.78,0,.78,0c.33,0,.58.13.73.38l5.66,10.07L44.59.49c.16-.25.4-.38.73-.38h.8v11.78h-.57Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m76.37.11c-.21,0-.38.07-.53.22-.15.15-.22.33-.22.54v9.11L68.52.31c-.09-.13-.22-.2-.38-.2h-1.51v11.78h.75c.21,0,.38-.07.53-.22.15-.15.22-.33.22-.54V2.03l7.08,9.67c.09.13.22.2.37.2h1.53V.11h-.75,0Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m10.86.33c-.15-.15-.34-.22-.56-.22h-.79v4.43H1.5V.87c0-.21-.07-.39-.22-.54S.96.11.75.11h-.75v11.02c0,.21.07.39.22.54s.32.22.53.22h.75v-5.9h8.01v5.14c0,.21.08.39.23.54s.34.22.56.22h.79V.87c0-.21-.08-.39-.23-.54Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m26.19.11c-.12,0-.21.04-.28.12s-.11.17-.11.28v5.69c0,.84-.22,1.61-.65,2.31s-1.02,1.25-1.76,1.64l-.37.12c-1.04.25-2.13.26-3.18.03l-.09-.02c-.1-.04-.2-.07-.29-.1-.01,0-.02-.01-.03-.02-.74-.39-1.32-.93-1.76-1.64-.43-.71-.65-1.48-.65-2.31V.51c0-.11-.04-.2-.11-.28s-.16-.12-.26-.12h-1.06v6.08c0,.64.1,1.26.3,1.85.2.59.48,1.14.83,1.64.36.5.79.93,1.29,1.3s1.05.65,1.65.83l.28.08h.04c.9.14,1.82.15,2.73.02l.17-.02.26-.08c.61-.2,1.17-.48,1.68-.85.51-.37.94-.8,1.29-1.31.36-.5.63-1.05.83-1.65.19-.6.28-1.23.27-1.89V.11h-1.04,0Zm-6.34,10.18s.02,0,.03,0c0,0-.01,0-.03,0Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m51.6,11.89c.12,0,.21-.04.28-.12s.11-.17.11-.28v-5.69c0-.84.22-1.61.65-2.31s1.02-1.25,1.76-1.64l.37-.12c1.04-.25,2.13-.26,3.18-.03l.09.02c.1.04.2.07.29.1.01,0,.02.01.03.02.74.39,1.32.93,1.76,1.64.43.71.65,1.48.65,2.31v5.69c0,.11.04.2.11.28s.16.12.26.12h1.06v-6.08c0-.64-.1-1.26-.3-1.85s-.48-1.14-.83-1.64c-.36-.5-.79-.93-1.29-1.3s-1.05-.65-1.65-.83l-.28-.08h-.04c-.9-.14-1.82-.15-2.73-.02l-.17.02-.26.08c-.61.2-1.17.48-1.68.85-.51.37-.94.8-1.29,1.31-.36.5-.63,1.05-.83,1.65-.19.6-.28,1.23-.27,1.89v6h1.04Zm6.34-10.18s-.02,0-.03,0c0,0,.01,0,.03,0Z"
                                />
                            </g>
                        </svg>
                        <svg id="Svg2" className="Logo_Text_Svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.07 11.84">
                            <g id="Layer_2-2">
                                <path
                                    className="cls-1"
                                    d="m45.46,3.36c0,.31-.03.59-.1.83s-.15.47-.25.66c-.1.19-.2.35-.3.49s-.19.24-.26.33c.48.35.86.75,1.15,1.2.29.45.43.99.43,1.64,0,.43-.08.83-.23,1.21s-.37.72-.63,1.02-.58.54-.94.73c-.36.19-.75.3-1.16.35h-11.4v-.71c0-.21.07-.39.22-.54.15-.15.32-.22.53-.22h10.47c.23-.01.45-.07.65-.16s.39-.23.55-.41c.16-.17.28-.36.37-.58.09-.22.14-.44.14-.68s-.05-.49-.15-.71c-.1-.22-.23-.41-.39-.58-.16-.16-.35-.3-.58-.4-.22-.1-.46-.15-.71-.15h-.39c-.1,0-.28,0-.54,0s-.66,0-1.22,0h-8.21c-.21,0-.38-.07-.53-.22-.15-.15-.22-.33-.22-.54v-.71h10.44c.25,0,.49-.05.71-.15.22-.1.42-.23.58-.4.17-.16.3-.36.39-.58.09-.22.14-.46.14-.71s-.05-.49-.14-.72-.22-.42-.39-.59c-.17-.16-.36-.3-.58-.4-.22-.1-.46-.15-.71-.15h-9.69c-.21,0-.38-.07-.53-.22-.15-.15-.22-.33-.22-.54V.04h9.93c.2,0,.35,0,.45,0s.19,0,.27,0v.02c.43.03.82.14,1.19.32.37.18.69.42.97.72.28.3.49.64.65,1.03.16.39.24.81.24,1.25h0Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m77.31.76c0-.21-.07-.39-.21-.54s-.32-.22-.53-.22h-9.79v.71c0,.21.07.39.22.54s.32.22.53.22h3.77v9.55c0,.21.07.39.22.54s.32.22.53.22h.75V1.47h4.5v-.71h0Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m82.58,11.78c-.21,0-.39-.07-.53-.22-.15-.15-.22-.33-.22-.54V0h.75c.21,0,.39.07.53.22.15.15.22.33.22.54v11.02h-.75Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m9.96,10.39c-.15-.2-.31-.4-.47-.59-.16-.2-.35-.44-.58-.73s-.49-.63-.8-1.02c.4.51-.26-.34-1.17-1.45.47.01,1.72-.07,2.12-.25.41-.17.76-.41,1.05-.71s.53-.65.71-1.06c.18-.4.26-.83.26-1.28s-.09-.89-.26-1.29-.42-.75-.73-1.05-.66-.53-1.07-.7c-.41-.17-1.65-.24-2.12-.23H.95c-.06-.02-.12-.03-.19-.03H.01v.03h-.01v.43c0,.05,0,.1.01.15v10.42c0,.21.07.39.22.54s.32.22.53.22h.75V1.51h5.48c.25,0,1.3.04,1.52.13.22.09.42.22.58.38s.3.35.4.57c.1.22.15.46.15.71s-.05.49-.15.71-.23.41-.4.57-.36.29-.58.39c-.22.1-1.27.16-1.52.16h-3.13c.97,1.2,1.76,2.18,2.38,2.95s1.11,1.39,1.48,1.85.64.8.82,1.02.3.37.38.46c.07.09.12.14.14.16s.06.07.13.15l.03-.03c.15.08.31.12.5.12h1.39c-.25-.31-.46-.57-.64-.79-.18-.22-.34-.43-.49-.63h0Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m93.68,1.51c-.6,0-1.17.12-1.7.35-.53.23-1,.55-1.4.95-.4.4-.71.87-.94,1.4-.23.53-.34,1.11-.34,1.73s.12,1.18.34,1.71c.23.53.54,1,.94,1.4s.87.72,1.4.95,1.1.35,1.7.35h4.27c.21,0,.38.07.53.22.15.15.22.33.22.54v.71h-5.32c-.77-.04-1.49-.23-2.16-.55-.67-.32-1.26-.75-1.76-1.28-.5-.53-.89-1.14-1.18-1.83s-.43-1.43-.43-2.21.14-1.54.43-2.23.68-1.3,1.18-1.83,1.08-.96,1.76-1.28c.67-.32,1.39-.51,2.16-.55h5.32v.71c0,.21-.07.39-.22.54s-.32.22-.53.22h-4.27Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m113.8,7.2c-.17-.4-.41-.75-.7-1.04-.3-.3-.64-.53-1.04-.71s-3.08-.26-3.53-.26h-.25c-.05-.01-.1-.02-.16-.02-.25,0-2.13-.05-2.35-.14s-.42-.22-.58-.39-.29-.36-.39-.58-.15-.46-.15-.72.05-.49.15-.71c.1-.22.23-.41.39-.58s.35-.3.58-.39c.22-.1.46-.15.71-.15h6.36c.21,0,.38-.07.53-.22.15-.15.22-.33.22-.55V.05h-7c-.47-.02-.91.05-1.32.22-.41.17-.77.41-1.07.71-.3.3-.54.66-.72,1.06-.18.41-.26.84-.26,1.3s.09.89.26,1.29c.17.4.41.75.7,1.04.3.3.64.53,1.04.71s2.46.26,2.91.26h.26s.07.01.11.02c.3,0,2.83.06,3.07.16.23.11.43.25.58.43.16.17.28.37.36.58s.13.43.13.65c0,.24-.05.47-.14.69s-.22.41-.38.58c-.16.16-.34.3-.55.39s-.43.15-.67.16h-6.92c-.21,0-.38.07-.53.22-.15.15-.22.33-.22.54v.71h7.8c.44-.03.84-.14,1.21-.33.37-.19.69-.43.96-.73s.48-.64.64-1.02c.16-.38.23-.79.23-1.22,0-.46-.09-.89-.26-1.29h0Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m62.54,5.94c0,.81-.16,1.57-.49,2.29-.33.72-.77,1.34-1.32,1.88-.56.54-1.21.96-1.95,1.27s-1.54.46-2.39.46-1.65-.15-2.4-.46-1.41-.73-1.96-1.27c-.56-.54-1-1.16-1.32-1.88-.33-.72-.49-1.48-.49-2.29s.16-1.58.49-2.3c.33-.72.77-1.34,1.32-1.88s1.21-.96,1.96-1.27,1.55-.46,2.4-.46,1.65.16,2.39.46c.74.31,1.4.73,1.95,1.27.56.54,1,1.16,1.32,1.88.33.72.49,1.49.49,2.3h0Zm-6.16-4.44c-.64,0-1.24.12-1.81.35-.56.23-1.06.55-1.48.95s-.76.87-1,1.41c-.24.54-.36,1.11-.36,1.73s.12,1.18.36,1.71c.24.54.58,1,1,1.41s.92.72,1.48.95,1.16.35,1.81.35,1.24-.12,1.81-.35c.56-.23,1.05-.55,1.47-.95s.75-.87.99-1.41c.24-.54.36-1.11.36-1.71s-.12-1.19-.36-1.73c-.24-.54-.57-1-.99-1.41s-.91-.72-1.47-.95c-.56-.23-1.16-.35-1.81-.35Z"
                                />
                                <path
                                    className="cls-1"
                                    d="m27.59,5.94c0,.81-.16,1.57-.49,2.29s-.77,1.34-1.32,1.88c-.56.54-1.21.96-1.95,1.27s-1.54.46-2.39.46-1.65-.15-2.4-.46c-.75-.31-1.41-.73-1.96-1.27-.56-.54-1-1.16-1.32-1.88-.33-.72-.49-1.48-.49-2.29s.16-1.58.49-2.3c.33-.72.77-1.34,1.32-1.88s1.21-.96,1.96-1.27c.75-.31,1.55-.46,2.4-.46s1.65.16,2.39.46c.74.31,1.4.73,1.95,1.27.56.54,1,1.16,1.32,1.88.33.72.49,1.49.49,2.3h0Zm-6.16-4.44c-.64,0-1.24.12-1.81.35-.56.23-1.06.55-1.48.95-.42.4-.76.87-1,1.41-.24.54-.36,1.11-.36,1.73s.12,1.18.36,1.71c.24.54.58,1,1,1.41.42.4.92.72,1.48.95s1.16.35,1.81.35,1.24-.12,1.81-.35c.56-.23,1.05-.55,1.47-.95s.75-.87.99-1.41c.24-.54.36-1.11.36-1.71s-.12-1.19-.36-1.73c-.24-.54-.57-1-.99-1.41s-.91-.72-1.47-.95-1.16-.35-1.81-.35Z"
                                />
                            </g>
                        </svg>
                    </div>
                </NavLink>

                <div className="Nav_MainBlock">
                    <AnimatePresence>
                        <m.h1
                            className="Route_Title Mobile_Only Secondary_Page_Only"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {currentLocationParsed}
                        </m.h1>
                    </AnimatePresence>

                    <div className="NavLinks_Container">
                        <NavLink to="/robos" className="NavLink Desktop_Only" onClick={LinkHandler}>
                            <span className="material-icons NavLink_Icon Desktop_Only_Extended">smart_toy</span>
                            <div className="NavLink_Text">robôs</div>
                        </NavLink>
                        <NavLink to="/servicos" className="NavLink Desktop_Only" onClick={LinkHandler}>
                            <span className="material-icons NavLink_Icon Desktop_Only_Extended">hub</span>
                            <div className="NavLink_Text">soluções</div>
                        </NavLink>
                        <NavLink to="/sobre" className="NavLink Desktop_Only" onClick={LinkHandler}>
                            <span className="material-icons NavLink_Icon Desktop_Only_Extended">foundation</span>
                            <div className="NavLink_Text">sobre</div>
                        </NavLink>
                        <NavLink to="/contato" className="NavLink Desktop_Only" onClick={LinkHandler}>
                            <span className="material-icons NavLink_Icon Desktop_Only_Extended">campaign</span>
                            <div className="NavLink_Text">contato</div>
                        </NavLink>
                    </div>
                </div>

                <div className="Nav_SideBlock Nav_SideBlock_2">
                    <a href="#" className="Menu_Button_Container">
                        <span className="material-icons Menu_Button">search</span>
                    </a>
                    <a href="#" className="Menu_Button_Container Desktop_Only_Extended">
                        <span className="material-icons Menu_Button">brightness_4</span>
                    </a>
                    <a href="#" className="Menu_Button_Container Desktop_Only_Extended">
                        <span className="material-icons Menu_Button">language</span>
                    </a>
                    <NavLink to="/menu" className="NavLink Menu_Button" onClick={menuOpenHandler}>
                        <span className="material-icons NavLink_Icon Menu_Button_Icon Menu_Button_Action">grid_view</span>
                        <div className="NavLink_Text Menu_Button_Text Desktop_Only Desktop_Only_Extended">MENU</div>
                        <span className="material-icons Menu_Button_Icon Menu_Button_Arrow">arrow_drop_down</span>
                    </NavLink>
                </div>
            </m.nav>
        </>
    );
}

export default MainNavbar;
