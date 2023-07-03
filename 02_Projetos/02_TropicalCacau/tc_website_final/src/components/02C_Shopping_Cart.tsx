//Framer Motion Imports
import { motion as m } from "framer-motion";

// Components Imports
import Cart_Item from "./Shop/Cart_Item";

// Redux Imports
import { useDispatch } from "react-redux";
import { toggleCheckoutHelp, toggleCart } from "../context/main_context";

// Images Imports
import ChocolateImg1 from "../assets/chocolates/ChocolateClaro1.avif";
import ChocolateImg2 from "../assets/chocolates/ChocolateCafé1.avif";
import ChocolateImg3 from "../assets/chocolates/ChocolateEscuro1.avif";
import ChocolateImg4 from "../assets/chocolates/ChocolateEscuro2.avif";
import ChocolateImg5 from "../assets/chocolates/ChocolateBranco1.avif";
import ChocolateImg6 from "../assets/chocolates/ChocolateComNozes.avif";

export default function Shopping_Cart() {
    const dispatch = useDispatch();

    const toggleCheckoutHelpButton = () => {
        dispatch(toggleCheckoutHelp());
    };

    const toggleCartButton = () => {
        dispatch(toggleCart());
    };

    return (
        <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: 1000 }} className="Shopping_Cart" key={"Shopping_Cart"}>
            <div className="Shopping_Cart_Header">
                <button className="Shopping_Cart_Close_Btn" onClick={toggleCartButton}>
                    <span className="material-icons">close</span>
                </button>
                <p className="Shopping_Cart_Title">Carrinho de Pedidos</p>
                <span className="material-icons">shopping_cart</span>
            </div>

            <div className="Cart_List">
                <Cart_Item imgSrc={ChocolateImg1} />
                <Cart_Item imgSrc={ChocolateImg2} />
                <Cart_Item imgSrc={ChocolateImg3} />
                <Cart_Item imgSrc={ChocolateImg4} />
                <Cart_Item imgSrc={ChocolateImg5} />
                <Cart_Item imgSrc={ChocolateImg6} />
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
