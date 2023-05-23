import { NavLink } from "react-router-dom";
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

export default function Menu() {
    const [prefOpen, setPrefOpen] = useState(false);
    const [lang] = useState("Português Brasileiro");
    const [theme] = useState("RobiOS Dark");
    const [cookiesSettings] = useState("Permitir Todos");

    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="menu">
                <div className="menu_container">
                    <NavLink to="/robos" className="NavLink">
                        <span className="material-icons NavLink_Icon">smart_toy</span>
                        <div className="NavLink_Text">robôs</div>
                    </NavLink>
                    <NavLink to="/servicos" className="NavLink">
                        <span className="material-icons NavLink_Icon">hub</span>
                        <div className="NavLink_Text">serviços</div>
                    </NavLink>
                    <NavLink to="/sobre" className="NavLink">
                        <span className="material-icons NavLink_Icon">foundation</span>
                        <div className="NavLink_Text">sobre</div>
                    </NavLink>
                    <NavLink to="/contato" className="NavLink">
                        <span className="material-icons NavLink_Icon">campaign</span>
                        <div className="NavLink_Text">contato</div>
                    </NavLink>
                    <NavLink to="/login" className="NavLink">
                        <span className="material-icons">login</span>
                        Login
                    </NavLink>
                    <NavLink to="/blog" className="NavLink">
                        <span className="material-icons">pages</span>
                        Blog
                    </NavLink>
                    <NavLink to="/duvidas" className="NavLink">
                        <span className="material-icons">live_help</span>
                        Dúvidas
                    </NavLink>
                    <a
                        href="#menu-preferences"
                        className="NavLink"
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
                        </div>
                    ) : (
                        <></>
                    )}
                    <NavLink to="/studio" className="NavLink">
                        <span className="material-icons">science</span>
                        RobiOSStudio
                    </NavLink>

                    <a href="https://pragmata.ninja" target="_blank" rel="noopener noreferrer" className="NavLink">
                        <span className="material-icons">new_releases</span>
                        Pragmata
                    </a>
                </div>
            </m.div>
        </>
    );
}
