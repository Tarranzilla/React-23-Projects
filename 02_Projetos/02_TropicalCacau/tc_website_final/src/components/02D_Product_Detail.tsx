// Chocolate Type Import
import ChocolateType from "../types/Chocolate";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleProductDetails, setActiveProduct } from "../context/main_context";

//Framer Motion Imports
import { motion as m } from "framer-motion";

export default function ProductDetail() {
    const dispatch = useDispatch();

    const closeDetailsButton = () => {
        console.log("Closing details");
        dispatch(toggleProductDetails());
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Product_Detail">
            <div className="Product_Detail_Header">
                <span className="material-icons">info</span>
                <h3>Tropical Cacau 35$</h3>
                <button className="Product_Detail_Close_Btn" onClick={closeDetailsButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="Product_Detail_Content">
                <div className="Product_Detail_Image_Container"></div>
                <div className="Product_Detail_Text_Container">
                    <p className="Product_Detail_Text">Lorem ipsu</p>
                </div>
            </div>
            <div className="Product_Detail_Footer">
                <button className="Product_Detail_Buy_Btn">
                    <span className="material-icons">shopping_cart</span>
                    <p>Comprar</p>
                </button>
            </div>
        </m.div>
    );
}
