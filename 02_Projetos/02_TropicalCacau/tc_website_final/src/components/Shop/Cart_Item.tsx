import { useState } from "react";

export default function Cart_Item() {
    const [quantity, setQuantity] = useState(1);

    const addToQuantity = () => {
        setQuantity(quantity + 1);
    };

    const removeFromQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="Cart_Item">
            <div className="Cart_Item_Image"></div>
            <div className="Cart_Item_Info">
                <p className="Cart_Item_Name">Tropical Intenso 70%</p>
                <p className="Cart_Item_Type">Barra de Chocolate 100g</p>
                <p className="Cart_Item_Price">R$ 50,00</p>
                <p className="Cart_Item_Quantity">Quantidade: {quantity}</p>

                <div className="Cart_Item_Buttons">
                    <button className="Cart_Item_Button Remove" onClick={removeFromQuantity}>
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
