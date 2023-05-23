import { NavLink, useLocation } from "react-router-dom";
import { motion as m, AnimatePresence } from "framer-motion";

// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./theme.js";

import Logo from "../assets/images/Logo_Branca_svg.svg";

function MainNavbar() {
    const currentLocation = useLocation();
    const currentLocationParsed = currentLocation.pathname.replace(/[^a-zA-Z ]/g, "");
    console.log(currentLocationParsed);

    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Main_Navbar">
                <NavLink to="/" className="LogoType_Container">
                    <img className="Logo" src={Logo}></img>
                    <h1 className="Logo_Text Desktop_Only">Human Robotics</h1>
                </NavLink>
                <AnimatePresence>
                    <m.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="Route_Title Mobile_Only"
                    >
                        {currentLocationParsed}
                    </m.h1>
                </AnimatePresence>

                <nav className="NavLinks_Container">
                    <NavLink to="/robos" className="NavLink Desktop_Only">
                        <span className="material-icons NavLink_Icon">smart_toy</span>
                        <div className="NavLink_Text">robôs</div>
                    </NavLink>
                    <NavLink to="/servicos" className="NavLink Desktop_Only">
                        <span className="material-icons NavLink_Icon">hub</span>
                        <div className="NavLink_Text">serviços</div>
                    </NavLink>
                    <NavLink to="/sobre" className="NavLink Desktop_Only">
                        <span className="material-icons NavLink_Icon">foundation</span>
                        <div className="NavLink_Text">sobre</div>
                    </NavLink>
                    <NavLink to="/contato" className="NavLink Desktop_Only">
                        <span className="material-icons NavLink_Icon">campaign</span>
                        <div className="NavLink_Text">contato</div>
                    </NavLink>
                    <NavLink to="/menu" className="NavLink Menu_Button">
                        <span className="material-icons NavLink_Icon Menu_Button_Icon Menu_Button_Action">grid_view</span>
                        <div className="NavLink_Text Menu_Button_Text Desktop_Only">MENU</div>
                        <span className="material-icons Menu_Button_Icon Menu_Button_Arrow">arrow_drop_down</span>
                    </NavLink>
                </nav>
            </m.div>
        </>
    );
}

export default MainNavbar;
