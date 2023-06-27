import { motion as m } from "framer-motion";

import Cart_Item from "./Shop/Cart_Item";

export default function Shopping_Cart() {
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
        </m.div>
    );
}
