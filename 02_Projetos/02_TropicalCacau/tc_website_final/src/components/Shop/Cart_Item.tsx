import { useState } from "react";

export default function Cart_Item({ imgSrc, name, type, price, cartQuantity }) {
    const [quantity, setQuantity] = useState(cartQuantity);

    const addToQuantity = () => {
        setQuantity(quantity + 1);
    };

    const removeFromQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const removeProduct = () => {
        setQuantity(0);
    };

    return (
        <div className="Cart_Item">
            <div className="Cart_Item_Image_Container">
                <img className="Cart_Item_Image" src={imgSrc} alt="" />
            </div>
            <div className="Cart_Item_Info">
                <p className="Cart_Item_Name">{name}</p>
                <p className="Cart_Item_Type">{type}</p>
                <p className="Cart_Item_Price">R$ {price},00</p>
                <p className="Cart_Item_Quantity">Quantidade: {quantity}</p>

                <div className="Cart_Item_Buttons">
                    <button className="Cart_Item_Button Remove" onClick={removeProduct}>
                        Remover
                    </button>
                    <button className="Cart_Item_Rounded_Button Add" onClick={removeFromQuantity}>
                        -
                    </button>
                    <button className="Cart_Item_Rounded_Button Add" onClick={addToQuantity}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
