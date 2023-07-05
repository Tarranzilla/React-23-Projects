// Chocolate Type Import
import ChocolateType from "../../types/Chocolate";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, addToCart, toggleProductDetails, setActiveProduct } from "../../context/main_context";

export default function Product_Card({ product: { id, imgSrc, name, type, description, price, domId } }) {
    const dispatch = useDispatch();

    const openDetailsButton = (id) => {
        console.log("Opening details");
        dispatch(toggleProductDetails());
        dispatch(setActiveProduct({ id: id }));
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
    const itemId = id;
    const itemTotalQuantity = getItemTotalQuantity(cartItems, itemId);

    return (
        <div className="Product_Card" id={domId}>
            <img className="Card_Product_Image" src={imgSrc}></img>
            <div className="Product_Card_Header">
                <h3 className="Card_Product_Name">{name}</h3>
                <h3 className="Card_Product_Type">{type}</h3>
            </div>
            <div className="Product_Card_Body">
                <p className="Card_Product_Description">{description}</p>
            </div>
            <div className="Product_Card_Footer">
                <button
                    className="Card_Product_Detail_Button"
                    onClick={() => {
                        openDetailsButton(id);
                    }}
                >
                    Detalhes
                </button>
                <button
                    className="Card_AddToCart_Button"
                    onClick={() => {
                        addToCartButton(id, 1);
                    }}
                >
                    <h3 className="Card_Product_Price">R$ {price},00</h3>Adicionar ao Carrinho {itemTotalQuantity > 0 && `(${itemTotalQuantity})`}
                </button>
            </div>
        </div>
    );
}
