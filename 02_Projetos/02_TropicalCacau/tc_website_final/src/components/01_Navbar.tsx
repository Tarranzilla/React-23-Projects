// React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleCart, toggleSearch } from "../context/main_context";

//Framer Motion Imports
import { motion as m } from "framer-motion";

export default function Navbar() {
    const dispatch = useDispatch();
    const activeSection = useSelector((state: any) => state.activeSection);
    const menuIsOpen = useSelector((state: any) => state.menuIsOpen);

    const toggleColorMode = () => {
        const body = document.body;
        const toggleIcon = document.querySelector(".Navbar_Tools_ToggleMode");
        if (body) {
            body.classList.toggle("darkmode");
            toggleIcon?.classList.toggle("active");
        }
    };

    const toggleMenuButton = () => {
        const menuButton = document.querySelector(".Navbar_Menu_Button");
        if (menuButton) {
            menuButton.classList.toggle("active");
            dispatch(toggleMenu());
        }
    };

    const toggleCartButton = () => {
        const cartButton = document.querySelector(".Navbar_Tools_Cart");
        if (cartButton) {
            cartButton.classList.toggle("active");
            dispatch(toggleCart());
        }
    };

    const toggleSearchButton = () => {
        const searchButton = document.querySelector(".Navbar_Tools_Search");
        if (searchButton) {
            searchButton.classList.toggle("active");
            dispatch(toggleSearch());
        }
    };

    return (
        <div className="Navbar" key={"Navbar"}>
            <div className="Navbar_Logo_Container">
                <div className="Navbar_Logo" onClick={toggleColorMode}>
                    <span className="material-icons">sunny</span>
                </div>
                <a href="#" className="Navbar_LogoType_Container">
                    <h1 className="Navbar_LogoType">Tropical</h1>
                    <h1 className="Navbar_LogoType">Cacau</h1>
                </a>
            </div>

            <div className="Navbar_Main">
                <a href="#LP_Section_1" className={activeSection === 0 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}>
                    Início
                </a>
                <a href="#LP_Section_2" className={activeSection === 1 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}>
                    Sobre
                </a>
                <a href="#LP_Section_3" className={activeSection === 2 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}>
                    Produtos
                </a>
                <a href="#LP_Section_4" className={activeSection === 3 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}>
                    Contato
                </a>
            </div>

            <div className="Navbar_Mobile">
                {activeSection === 0 && !menuIsOpen && (
                    <m.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href="#LP_Section_1"
                        className={activeSection === 0 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                        key={"Navbar_Mobile_Links_1"}
                    >
                        Início
                    </m.a>
                )}
                {activeSection === 1 && !menuIsOpen && (
                    <m.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href="#LP_Section_2"
                        className={activeSection === 1 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                        key={"Navbar_Mobile_Links_2"}
                    >
                        Sobre
                    </m.a>
                )}

                {activeSection === 2 && !menuIsOpen && (
                    <m.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href="#LP_Section_3"
                        className={activeSection === 2 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                        key={"Navbar_Mobile_Links_3"}
                    >
                        Produtos
                    </m.a>
                )}

                {activeSection === 3 && !menuIsOpen && (
                    <m.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href="#LP_Section_4"
                        className={activeSection === 3 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                        key={"Navbar_Mobile_Links_4"}
                    >
                        Contato
                    </m.a>
                )}

                {menuIsOpen && (
                    <m.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} href="#Menu" className="Navbar_Main_Links active">
                        Menu
                    </m.a>
                )}
            </div>

            <div className="Navbar_Tools">
                <a href="#" className="Navbar_Tool Navbar_Tools_Search" onClick={toggleSearchButton}>
                    <span className="material-icons">search</span>
                </a>
                <a href="#" className="Navbar_Tool Navbar_Tools_Cart" onClick={toggleCartButton}>
                    <span className="material-icons">shopping_cart</span>
                </a>
                <a href="#" className="Navbar_Tool Navbar_Tools_ToggleMode" onClick={toggleColorMode}>
                    <span className="material-icons">brightness_4</span>
                </a>

                <a href="#" className="Navbar_Menu_Button" onClick={toggleMenuButton}>
                    <div className="Menu_Button_Line Line_1"></div>
                    <div className="Menu_Button_Line Line_2"></div>
                    <div className="Menu_Button_Line Line_3"></div>
                </a>
            </div>
        </div>
    );
}
