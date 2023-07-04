// Chocolate Type Import
import ChocolateType from "../types/Chocolate";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleProductDetails, setActiveProduct } from "../context/main_context";

//Framer Motion Imports
import { motion as m } from "framer-motion";

export default function ProductDetail() {
    const dispatch = useDispatch();

    const activeProduct = useSelector((state: any) => state.activeProduct);

    const closeDetailsButton = () => {
        console.log("Closing details");
        dispatch(toggleProductDetails());
    };

    const addToCartButton = (id, quantity) => {
        console.log("Adding to cart");
        dispatch(addToCart({ id, quantity }));
    };

    const getItemTotalQuantity = (cartItems: ChocolateType[], itemId: number): number => {
        let totalQuantity = 0;

        for (const item of cartItems) {
            if (item.id === itemId) {
                totalQuantity += item.cartQuantity;
            }
        }

        return totalQuantity;
    };

    const cartItems = useSelector((state: any) => state.cartItems);
    const itemId = activeProduct.id;
    const itemTotalQuantity = getItemTotalQuantity(cartItems, itemId);

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Product_Detail">
            <div className="Product_Detail_Header">
                <span className="material-icons">info</span>
                <h3>{activeProduct.name}</h3>
                <button className="Product_Detail_Close_Btn" onClick={closeDetailsButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="Product_Detail_Content">
                <div className="Product_Detail_Image_Container">
                    <img className="Product_Detail_Image" src={activeProduct.imgSrc}></img>
                </div>
                <div className="Product_Detail_Text_Container">
                    <p>Tipo do Produto: {activeProduct.type}</p>
                    <p className="Product_Detail_Text">Descrição: {activeProduct.description}</p>
                    <p>Coordenadas de Origem: {activeProduct.chocoOriginCoordinates}</p>
                    <p>Origem do Cacau: {activeProduct.chocoOriginName}</p>
                    <p>Produtor do Cacau: {activeProduct.chocoProducerName}</p>
                    <p>Ingredientes: {activeProduct.ingredients}</p>
                    <p className="Product_Detail_ChocoTags">
                        ChocoTags: <span className="ChocoTag">{activeProduct.chocoClass}</span>
                    </p>
                </div>
            </div>
            <div className="Product_Detail_Footer">
                <button
                    className="Card_AddToCart_Button"
                    onClick={() => {
                        addToCartButton(activeProduct.id, 1);
                    }}
                >
                    <h3 className="Card_Product_Price">R$ {activeProduct.price},00</h3>Adicionar ao Carrinho{" "}
                    {itemTotalQuantity > 0 && `(${itemTotalQuantity})`}
                </button>
            </div>
        </m.div>
    );
}
