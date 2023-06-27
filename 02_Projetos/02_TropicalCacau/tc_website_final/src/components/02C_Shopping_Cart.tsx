//Framer Motion Imports
import { motion as m } from "framer-motion";

// Components Imports
import Cart_Item from "./Shop/Cart_Item";

// Redux Imports
import { useDispatch } from "react-redux";
import { toggleCheckoutHelp } from "../context/main_context";

export default function Shopping_Cart() {
    const dispatch = useDispatch();

    const toggleCheckoutHelpButton = () => {
        dispatch(toggleCheckoutHelp());
    };

    return (
        <m.div initial={{ x: 600 }} animate={{ x: 0 }} exit={{ x: 600 }} className="Shopping_Cart" key={"Shopping_Cart"}>
            <p>Carrinho de Pedidos</p>
            <div className="Cart_List">
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
            </div>
            <div className="Checkout">
                <div className="Checkout_Main">
                    <div className="Cart_Total">
                        <p>Valor Total:</p>
                        <p>
                            <strong>R$ 0,00</strong>
                        </p>
                    </div>
                    <button className="Checkout_Button">Finalizar Compra</button>
                </div>

                <a href="#processo_de_compra" className="Checkout_Help" onClick={toggleCheckoutHelpButton}>
                    <span className="material-icons">info</span>Como a compra é finalizada ?
                </a>
            </div>
        </m.div>
    );
}
