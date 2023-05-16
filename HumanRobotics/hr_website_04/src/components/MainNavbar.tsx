import { useState } from "react";
import { NavLink } from "react-router-dom";

import { motion as m } from "framer-motion";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./theme.js";

import Logo from "../assets/images/Logo_Branca_svg.svg";

function MainNavbar() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Main_Navbar">
                <NavLink to="/" className="LogoType_Container">
                    <img className="Logo" src={Logo}></img>
                    <h1>Human Robotics</h1>
                </NavLink>
                <nav className="NavLinks_Container">
                    <ul className="NavLinks">
                        <li>
                            <NavLink to="/robos">
                                <span className="material-icons">smart_toy</span>
                                Robôs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicos">
                                <span className="material-icons">hub</span>
                                Serviços
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/experiencia">
                                <span className="material-icons">psychology</span>
                                Experiência
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre">
                                <span className="material-icons">foundation</span>Sobre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contato">
                                <span className="material-icons">campaign</span>Contato
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/menu">
                                <span className="material-icons">menu</span>
                                Menu
                                <span className="material-icons">arrow_drop_down</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </m.div>
        </>
    );
}

export default MainNavbar;
