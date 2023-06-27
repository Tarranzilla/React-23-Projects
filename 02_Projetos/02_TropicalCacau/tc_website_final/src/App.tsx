// React Router Imports
import { Outlet } from "react-router-dom";

//React Redux Imports
import { useSelector } from "react-redux";

// Framer Motion Imports
import { AnimatePresence } from "framer-motion";

// Components Imports
import Navbar from "./components/01_Navbar";

import Menu from "./components/02_Menu";
import SearchBar from "./components/02B_Search_Bar";
import Shopping_Cart from "./components/02C_Shopping_Cart";
import Checkout_Help from "./components/Shop/Checkout_Help";
import Loading from "./components/03_Loading";
import Footer from "./components/04_Footer";

function App() {
    const menuIsOpen = useSelector((state: any) => state.menuIsOpen);
    const cartIsOpen = useSelector((state: any) => state.cartIsOpen);
    const checkoutHelpIsOpen = useSelector((state: any) => state.checkoutHelpIsOpen);
    const searchIsOpen = useSelector((state: any) => state.searchIsOpen);
    return (
        <>
            <AnimatePresence>
                <Navbar key="Navbar_key" />
                {menuIsOpen && <Menu key="Menu_key" />}
                {searchIsOpen && <SearchBar key="Searchbar_key" />}
                {cartIsOpen && <Shopping_Cart key="Cart_key" />}
                {checkoutHelpIsOpen && <Checkout_Help key="Checkout_Help_key" />}
                <Loading key="Loading_Key" />
                <div className="Content_Viewer" key="CV_Key">
                    <Outlet />
                </div>
                <Footer key="Footer_Key" />
            </AnimatePresence>
        </>
    );
}

export default App;
