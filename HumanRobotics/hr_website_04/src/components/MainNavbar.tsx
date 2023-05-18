import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";

// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./theme.js";

import Logo from "../assets/images/Logo_Branca_svg.svg";

function MainNavbar() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Main_Navbar">
                <NavLink to="/" className="LogoType_Container">
                    <img className="Logo" src={Logo}></img>
                    <h1 className="Logo_Text">Human Robotics</h1>
                </NavLink>
                <nav className="NavLinks_Container">
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
                    <NavLink to="/menu" className="NavLink Menu_Button">
                        <span className="material-icons NavLink_Icon Menu_Button_Icon">grid_view</span>
                        <div className="NavLink_Text Menu_Button_Text">MENU</div>
                        <span className="material-icons Menu_Button_Icon Menu_Button_Arrow">arrow_drop_down</span>
                    </NavLink>
                </nav>
            </m.div>
        </>
    );
}

export default MainNavbar;
