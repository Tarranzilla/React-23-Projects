// Vanilla React Imports
import { useState } from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckoutHelp, toggleCart, addToCart, decrementCartItem, removeFromCart } from "../../context/main_context";

// Chocolate Type Import
import ChocolateType from "../../types/Chocolate";

export default function Cart_Item({ imgSrc, name, type, price, id }) {
    const dispatch = useDispatch();
    console.log("Cart_Item: ", id);

    const addToCartButton = (id, quantity) => {
        console.log("Adding to cart");
        dispatch(addToCart({ id, quantity }));
    };

    const decrementCartItemButton = (id) => {
        console.log("Decrementing cart item", id);
        dispatch(decrementCartItem({ id }));
    };

    const removeProductButton = (id) => {
        console.log("Removing product", id);
        dispatch(removeFromCart({ id: id }));
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
        <div className="Cart_Item">
            <div className="Cart_Item_Image_Container">
                <img className="Cart_Item_Image" src={imgSrc} alt="" />
            </div>
            <div className="Cart_Item_Info">
                <p className="Cart_Item_Name">{name}</p>
                <p className="Cart_Item_Type">{type}</p>
                <p className="Cart_Item_Price">R$ {price},00</p>
                <p className="Cart_Item_Quantity">Quantidade: {itemTotalQuantity}</p>

                <div className="Cart_Item_Buttons">
                    <button
                        className="Cart_Item_Button Remove"
                        onClick={() => {
                            removeProductButton(id);
                        }}
                    >
                        Remover
                    </button>
                    <button
                        className="Cart_Item_Rounded_Button Add"
                        onClick={() => {
                            decrementCartItemButton(id);
                        }}
                    >
                        -
                    </button>
                    <button
                        className="Cart_Item_Rounded_Button Add"
                        onClick={() => {
                            addToCartButton(id, 1);
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
