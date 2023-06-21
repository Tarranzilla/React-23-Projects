import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { motion as m } from "framer-motion";
/*

const MenuPrefAnimation = {
    hidden: {
        opacity: 0,
        width: 0,
        padding: 0,
    },

    visible: {
        opacity: 1,
        width: "100%",
        padding: "16px",
        transition: {
            duration: 0.5,
        },
    },
};

*/

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../context/main_context";
//import { dark } from "@mui/material/styles/createPalette";

export default function Menu() {
    const [prefOpen, setPrefOpen] = useState(false);
    const [lang] = useState("Português Brasileiro");
    const [theme] = useState("RobiOS Dark");
    const [cookiesSettings] = useState("Permitir Todos");

    //    const username = useSelector((state: any) => state.username);
    //    const mode = useSelector((state: any) => state.mode);
    const menuIsOpen = useSelector((state: any) => state.menuIsOpen);

    const dispatch = useDispatch();

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

    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="menu">
                <div className="menu_extra Desktop_Only">
                    <svg id="Svg0" className="Logo_Extra" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.15 126.3">
                        <g id="Layer_2-2">
                            <path
                                className="cls-1"
                                d="m104.74,24.6L66.49,2.52c-5.82-3.36-13-3.36-18.83,0L9.41,24.6C3.59,27.97,0,34.18,0,40.91v45.34c0,3.9,1.35,7.6,3.72,10.54,1.18,1.46,3.56.58,3.56-1.3.01-8.44.01-16.88-.01-25.32.02-2.81,2.32-4.98,4.7-6.09,3.45-1.71,7.8-.96,10.73,1.46,1.58,1.3,2.64,3.28,2.65,5.34.11,12.85.1,25.69.02,38.54,0,.72.38,1.39,1.01,1.76l2.29,1.32c1.33.77,3.01-.18,3.03-1.72.11-9.07-.05-18.13.04-27.2-.05-1.93.83-3.8,2.21-5.12,3.3-3.04,8.65-3.4,12.49-1.17,1.84,1.08,3.52,2.96,3.49,5.22-.02,13.61-.04,27.21-.05,40.82,0,.83.51,1.59,1.29,1.89,4.66,1.75,9.92,1.36,14.32-1.17l39.26-22.67c5.82-3.36,9.41-9.58,9.41-16.3v-44.17c0-6.72-3.59-12.94-9.41-16.3h0ZM24.85,54.2c-1.75,4.51-7.38,7.05-11.88,5.16-3.17-1.27-5.55-4.4-5.72-7.84-.33-4.16,2.87-8.13,6.88-9.04.8-.21,1.62-.3,2.44-.29,1.81.04,3.6.61,5.04,1.73,3.11,2.26,4.74,6.62,3.24,10.26h0Zm24.82,17.02c-.23.62-.94.85-1.54.8-5,0-10.01,0-15.01,0-.89.1-1.26-.97-1.29-1.69-.08-4.66,0-9.33-.03-14v-.02c-.05-1.01.74-1.88,1.75-1.97.45-.04.9-.06,1.35-.06.78,0,1.57.02,2.35,0,3.75.05,7.5-.03,11.25.02.91-.08,1.46.91,1.42,1.71.07,4.09-.05,8.18.03,12.26,0,.99.03,2-.27,2.95h0Z"
                            />
                        </g>
                    </svg>
                </div>
                <div className="menu_container">
                    <div className="Menu_Links_1">
                        <HashLink to="/inicio/#LP_Section_01" className="NavLink Mobile_Only" onClick={LinkHandler}>
                            <span className="material-icons NavLink_Icon">flag</span>
                            <div className="NavLink_Text Menu_Text">início</div>
                        </HashLink>
                        <div className="Menu_Links_1_Container">
                            <div className="LP_Links_Line"></div>
                            <div className="LP_Links_Container">
                                <HashLink to="/inicio/#LP_Section_02" className="NavLink" onClick={LinkHandler}>
                                    <span className="material-icons NavLink_Icon">smart_toy</span>
                                    <div className="NavLink_Text Menu_Text">robôs</div>
                                </HashLink>
                                <HashLink to="/inicio/#LP_Section_03" className="NavLink" onClick={LinkHandler}>
                                    <span className="material-icons NavLink_Icon">hub</span>
                                    <div className="NavLink_Text Menu_Text">soluções</div>
                                </HashLink>
                                <HashLink to="/inicio/#LP_Section_04" className="NavLink" onClick={LinkHandler}>
                                    <span className="material-icons NavLink_Icon">foundation</span>
                                    <div className="NavLink_Text Menu_Text">sobre</div>
                                </HashLink>
                                <HashLink to="/inicio/#LP_Section_05" className="NavLink" onClick={LinkHandler}>
                                    <span className="material-icons NavLink_Icon">campaign</span>
                                    <div className="NavLink_Text Menu_Text">contato</div>
                                </HashLink>
                                <HashLink to="/inicio/#LP_Section_06" className="NavLink" onClick={LinkHandler}>
                                    <span className="material-icons NavLink_Icon">live_help</span>
                                    <div className="NavLink_Text Menu_Text">Dúvidas</div>
                                </HashLink>
                            </div>
                        </div>
                    </div>

                    <div className="Menu_Links_2">
                        <NavLink to="/login" className="NavLink" onClick={LinkHandler}>
                            <span className="material-icons NavLink_Icon">login</span>
                            <div className="NavLink_Text Menu_Text">Login</div>
                        </NavLink>
                        <NavLink to="/blog" className="NavLink" onClick={LinkHandler}>
                            <span className="material-icons NavLink_Icon">pages</span>
                            <div className="NavLink_Text Menu_Text">Blog</div>
                        </NavLink>
                        <NavLink to="/studio" className="NavLink" onClick={LinkHandler}>
                            <span className="material-icons NavLink_Icon">science</span>
                            <div className="NavLink_Text Menu_Text">RobiOSStudio</div>
                        </NavLink>

                        <a href="https://pragmata.ninja" target="_blank" rel="noopener noreferrer" className="NavLink">
                            <span className="material-icons NavLink_Icon">new_releases</span>
                            <div className="NavLink_Text Menu_Text">Pragmata</div>
                        </a>
                        <a
                            href="#menu-preferences"
                            className="NavLink"
                            onClick={() => {
                                setPrefOpen(!prefOpen);
                            }}
                        >
                            <span className="material-icons NavLink_Icon">settings_suggest</span>
                            <div className="NavLink_Text Menu_Text">Preferências</div>
                            <span className="material-icons NavLink_Icon">arrow_drop_down</span>
                        </a>

                        {prefOpen ? (
                            <div className="preferences_container">
                                <a href="#menu-preferences-language" className="PrefLink">
                                    <span className="material-icons preferences_icon">translate</span>
                                    <div className="NavLink_Text Menu_Text preferences_text">Idioma</div>
                                    <p className="lang_state preferences_text">
                                        <span className="material-icons menu_arrow preferences_icon">arrow_right_alt</span>
                                        {lang}
                                    </p>
                                </a>
                                <a href="#menu-preferences-theme" className="PrefLink">
                                    <span className="material-icons preferences_icon">settings_brightness</span>
                                    <div className="NavLink_Text Menu_Text preferences_text">Tema</div>
                                    <p className="lang_state theme_state preferences_text">
                                        <span className="material-icons menu_arrow preferences_icon">arrow_right_alt</span>
                                        {theme}
                                    </p>
                                </a>
                                <a href="#menu-preferences-cookies" className="PrefLink">
                                    <span className="material-icons preferences_icon">cookie</span>
                                    <div className="NavLink_Text Menu_Text preferences_text">Cookies</div>
                                    <p className="lang_state theme_cookies preferences_text">
                                        <span className="material-icons menu_arrow preferences_icon">arrow_right_alt</span>
                                        {cookiesSettings}
                                    </p>
                                </a>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </m.div>
        </>
    );
}
