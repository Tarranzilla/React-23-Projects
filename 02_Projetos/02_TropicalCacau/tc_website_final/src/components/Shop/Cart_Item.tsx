export default function Cart_Item() {
    return (
        <div className="Cart_Item">
            <div className="Cart_Item_Image"></div>
            <div className="Cart_Item_Info">
                <p className="Cart_Item_Name">Topical Intenso 70%</p>
                <p className="Cart_Item_Type">Barra de Chocolate 100g</p>
                <p className="Cart_Item_Price">R$ 50,00</p>
                <p className="Cart_Item_Quantity">Quantidade: 1</p>

                <div className="Cart_Item_Buttons">
                    <button className="Cart_Item_Button">Remover</button>
                    <button className="Cart_Item_Button">Editar</button>
                </div>
            </div>
        </div>
    );
}
