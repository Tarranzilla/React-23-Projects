import { useState } from "react";
import { NavLink } from "react-router-dom";

function MainNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [prefOpen, setPrefOpen] = useState(false);
    const [lang, setLang] = useState("Português Brasileiro");
    const [theme, setTheme] = useState("RobiOS Dark");
    const [cookiesSettings, setCookiesSettings] = useState("Permitir Todos");

    return (
        <>
            <div className="Main_Navbar">
                <h1>Human Robotics</h1>
                <nav>
                    <ul className="NavLinks">
                        <li>
                            <a href="/robos">
                                <span className="material-icons">smart_toy</span>
                                Robôs
                            </a>
                        </li>
                        <li>
                            <a href="/servicos">
                                <span className="material-icons">hub</span>
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a href="/experiencia">
                                <span className="material-icons">psychology</span>
                                Experiência
                            </a>
                        </li>
                        <li>
                            <a href="/sobre">
                                <span className="material-icons">foundation</span>Sobre
                            </a>
                        </li>
                        <li>
                            <a href="/contato">
                                <span className="material-icons">campaign</span>Contato
                            </a>
                        </li>

                        <li>
                            <a
                                href="#menu"
                                onClick={() => {
                                    setMenuOpen(!menuOpen);
                                }}
                            >
                                <span className="material-icons">menu</span>
                                Menu
                                <span className="material-icons">arrow_drop_down</span>
                            </a>
                        </li>

                        {menuOpen ? (
                            <li>
                                <a className="menu" href="#menu">
                                    <div className="menu_container">
                                        <ul>
                                            <li>
                                                <a href="/login">
                                                    <span className="material-icons">login</span>
                                                    Login
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/blog">
                                                    <span className="material-icons">pages</span>
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/duvidas">
                                                    <span className="material-icons">live_help</span>
                                                    Dúvidas
                                                </a>
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
                                                <a href="/studio">
                                                    <span className="material-icons">science</span>
                                                    RobiOSStudio
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://pragmata.ninja" target="_blank" rel="noopener noreferrer">
                                                    <span className="material-icons">new_releases</span>
                                                    Pragmata
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                        ) : (
                            <></>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default MainNavbar;
