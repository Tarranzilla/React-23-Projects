import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";

import { useState } from "react";

export default function Menu() {
    const [prefOpen, setPrefOpen] = useState(false);
    const [lang] = useState("Português Brasileiro");
    const [theme] = useState("RobiOS Dark");
    const [cookiesSettings] = useState("Permitir Todos");

    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="menu">
                <div className="menu_container">
                    <ul>
                        <li>
                            <NavLink to="/login">
                                <span className="material-icons">login</span>
                                Login
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/blog">
                                <span className="material-icons">pages</span>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/duvidas">
                                <span className="material-icons">live_help</span>
                                Dúvidas
                            </NavLink>
                        </li>
                        <li>
                            <a
                                href="#menu-preferences"
                                onClick={() => {
                                    setPrefOpen(!prefOpen);
                                }}
                            >
                                <span className="material-icons">settings_suggest</span>
                                Preferências
                                <span className="material-icons">arrow_drop_down</span>
                            </a>

                            {prefOpen ? (
                                <div className="preferences_container">
                                    <ul>
                                        <li>
                                            <a href="#menu-preferences-language">
                                                <span className="material-icons">translate</span>
                                                Idioma
                                                <p className="lang_state">
                                                    <span className="material-icons menu_arrow">arrow_right_alt</span>
                                                    {lang}
                                                </p>
                                            </a>
                                            <a href="#menu-preferences-theme">
                                                <span className="material-icons">settings_brightness</span>
                                                Tema
                                                <p className="lang_state theme_state">
                                                    <span className="material-icons menu_arrow">arrow_right_alt</span>
                                                    {theme}
                                                </p>
                                            </a>
                                            <a href="#menu-preferences-cookies">
                                                <span className="material-icons">cookie</span>
                                                Cookies
                                                <p className="lang_state theme_cookies">
                                                    <span className="material-icons menu_arrow">arrow_right_alt</span>
                                                    {cookiesSettings}
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <></>
                            )}
                        </li>
                        <li>
                            <NavLink to="/studio">
                                <span className="material-icons">science</span>
                                RobiOSStudio
                            </NavLink>
                        </li>
                        <li>
                            <a href="https://pragmata.ninja" target="_blank" rel="noopener noreferrer">
                                <span className="material-icons">new_releases</span>
                                Pragmata
                            </a>
                        </li>
                    </ul>
                </div>
            </m.div>
        </>
    );
}
