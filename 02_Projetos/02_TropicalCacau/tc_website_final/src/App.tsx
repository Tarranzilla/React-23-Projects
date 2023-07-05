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
import Product_Detail from "./components/02D_Product_Detail";
import Checkout_Help from "./components/Shop/Checkout_Help";
import Privacy from "./components/02E_Privacy";
import Terms from "./components/02F_Terms";
import Loading from "./components/03_Loading";
import Footer from "./components/04_Footer";

function App() {
    const menuIsOpen = useSelector((state: any) => state.menuIsOpen);
    const cartIsOpen = useSelector((state: any) => state.cartIsOpen);
    const checkoutHelpIsOpen = useSelector((state: any) => state.checkoutHelpIsOpen);
    const searchIsOpen = useSelector((state: any) => state.searchIsOpen);
    const productDetailsIsOpen = useSelector((state: any) => state.productDetailsIsOpen);
    const privacyPolicyIsOpen = useSelector((state: any) => state.privacyPolicyIsOpen);
    const termsIsOpen = useSelector((state: any) => state.termsIsOpen);
    return (
        <>
            <AnimatePresence>
                <Navbar key="Navbar_key" />

                {termsIsOpen && <Terms key="Terms_Key" />}
                {privacyPolicyIsOpen && <Privacy key="Privacy_Key" />}
                {menuIsOpen && <Menu key="Menu_key" />}
                {searchIsOpen && <SearchBar key="Searchbar_key" />}
                {cartIsOpen && <Shopping_Cart key="Cart_key" />}
                {checkoutHelpIsOpen && <Checkout_Help key="Checkout_Help_key" />}
                {productDetailsIsOpen && <Product_Detail key="Product_Detail_key" />}
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
