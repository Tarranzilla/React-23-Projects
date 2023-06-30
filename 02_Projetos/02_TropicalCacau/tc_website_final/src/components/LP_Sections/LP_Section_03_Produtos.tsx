import { forwardRef, useState } from "react";

import backgroundImg from "../../assets/cacau_textures/dalle5.png";

const LP_Section_03_Produtos = forwardRef(function LP_Section_03_Produtos(props, ref: any) {
    const [activeType, setActiveType] = useState(0);

    const handleActiveType = (type: number) => {
        setActiveType(type);
        if (type === 0) {
            console.log("Nenhum Selecionado");
        }
        if (type === 1) {
            console.log("Clássicos");
        }
        if (type === 2) {
            console.log("Especiais");
        }
        if (type === 3) {
            console.log("Combinações");
        }
        if (type === 4) {
            console.log("Assinaturas");
        }
    };

    return (
        <div className="LP_Section LP_Section_03_Produtos" id="LP_Section_3" ref={ref} key={"LP_Section_3"}>
            <img src={backgroundImg} alt="background" className="Section_03_Background" />
            <div className="Type_Viewer">
                {activeType === 0 && <h3 className="Type_Viewer_Title">Nada</h3>}
                {activeType === 1 && <h3 className="Type_Viewer_Title">Clássicos</h3>}
                {activeType === 2 && <h3 className="Type_Viewer_Title">Especiais</h3>}
                {activeType === 3 && <h3 className="Type_Viewer_Title">Combinações</h3>}
                {activeType === 4 && <h3 className="Type_Viewer_Title">Assinaturas</h3>}
            </div>
            <div className="Product_Type_Container">
                <button
                    className="Product_Type"
                    onClick={() => {
                        setActiveType(1);
                    }}
                >
                    <h3 className="Product_Type_Title">Clássicos</h3>
                </button>
                <button
                    className="Product_Type"
                    onClick={() => {
                        setActiveType(2);
                    }}
                >
                    <h3 className="Product_Type_Title">Especiais</h3>
                </button>
                <button
                    className="Product_Type"
                    onClick={() => {
                        setActiveType(3);
                    }}
                >
                    <h3 className="Product_Type_Title">Combinações</h3>
                </button>
                <button
                    className="Product_Type"
                    onClick={() => {
                        setActiveType(4);
                    }}
                >
                    <h3 className="Product_Type_Title">Assinaturas</h3>
                </button>
            </div>
        </div>
    );
});

export default LP_Section_03_Produtos;
