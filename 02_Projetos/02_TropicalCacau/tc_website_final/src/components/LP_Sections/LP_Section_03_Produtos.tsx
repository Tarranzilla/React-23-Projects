import { forwardRef, useState } from "react";

const LP_Section_03_Produtos = forwardRef(function LP_Section_03_Produtos(props, ref: any) {
    const [activeType, setActiveType] = useState(null);

    return (
        <div className="LP_Section LP_Section_03_Produtos" id="LP_Section_3" ref={ref} key={"LP_Section_3"}>
            <p>Produtos</p>
            <div className="Product_Types_Container">
                <div className="Product_Type">Clássicos</div>
                <div className="Product_Type">Especiais</div>
                <div className="Product_Type">Combincações</div>
                <div className="Product_Type">Assinatura</div>
            </div>
        </div>
    );
});

export default LP_Section_03_Produtos;
