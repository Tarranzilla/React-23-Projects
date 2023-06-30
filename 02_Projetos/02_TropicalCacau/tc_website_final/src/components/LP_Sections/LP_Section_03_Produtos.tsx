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
            <div className="Type_Header">
                {activeType === 0 && <h3 className="Type_Viewer_Title">Nenhum Produto Selecionado</h3>}
                {activeType === 1 && <h3 className="Type_Viewer_Title">Clássicos</h3>}
                {activeType === 2 && <h3 className="Type_Viewer_Title">Especiais</h3>}
                {activeType === 3 && <h3 className="Type_Viewer_Title">Combinações</h3>}
                {activeType === 4 && <h3 className="Type_Viewer_Title">Assinaturas</h3>}
            </div>
            <div className="Type_Viewer">
                {activeType === 0 && (
                    <div className="Product_Container">
                        <h3 className="No_Product_Selected_Title">Nenhum Produto Selecionado</h3>
                    </div>
                )}
                {activeType === 1 && (
                    <div className="Product_Container">
                        <div className="Product_Card">
                            <div className="Product_Card_Header">
                                <h3 className="Card_Product_Name">Tropical 35%</h3>
                                <h3 className="Card_Product_Type">Barra de Chocolate</h3>
                            </div>
                            <div className="Product_Card_Body">
                                <p className="Card_Product_Description">Chocolate 33% Cacau com sabor inigualável!</p>
                            </div>
                            <div className="Product_Card_Footer">
                                <button className="Card_Product_Detail_Button">Detalhes</button>
                                <button className="Card_AddToCart_Button">
                                    <h3 className="Card_Product_Price">R$ 20,00</h3>Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                        <div className="Product_Card">
                            <div className="Product_Card_Header">
                                <h3 className="Card_Product_Name">Tropical 60%</h3>
                                <h3 className="Card_Product_Type">Barra de Chocolate</h3>
                            </div>
                            <div className="Product_Card_Body">
                                <p className="Card_Product_Description">Chocolate 60% Cacau com sabor inigualável!</p>
                            </div>
                            <div className="Product_Card_Footer">
                                <button className="Card_Product_Detail_Button">Detalhes</button>
                                <button className="Card_AddToCart_Button">
                                    <h3 className="Card_Product_Price">R$ 20,00</h3>Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                        <div className="Product_Card">
                            <div className="Product_Card_Header">
                                <h3 className="Card_Product_Name">Tropical 80%</h3>
                                <h3 className="Card_Product_Type">Barra de Chocolate</h3>
                            </div>
                            <div className="Product_Card_Body">
                                <p className="Card_Product_Description">Chocolate 80% Cacau com sabor inigualável!</p>
                            </div>
                            <div className="Product_Card_Footer">
                                <button className="Card_Product_Detail_Button">Detalhes</button>
                                <button className="Card_AddToCart_Button">
                                    <h3 className="Card_Product_Price">R$ 20,00</h3>Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {activeType === 2 && (
                    <div className="Product_Container">
                        <div className="Product_Card">
                            <div className="Product_Card_Header">
                                <h3 className="Card_Product_Name">Tropical Branco</h3>
                                <h3 className="Card_Product_Type">Barra de Chocolate</h3>
                            </div>
                            <div className="Product_Card_Body">
                                <p className="Card_Product_Description">Chocolate Branco 30% Cacau com Leite. Um sabor inigualável!</p>
                            </div>
                            <div className="Product_Card_Footer">
                                <button className="Card_Product_Detail_Button">Detalhes</button>
                                <button className="Card_AddToCart_Button">
                                    <h3 className="Card_Product_Price">R$ 20,00</h3>Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                        <div className="Product_Card">
                            <div className="Product_Card_Header">
                                <h3 className="Card_Product_Name">Tropical Frutas do Inverno</h3>
                                <h3 className="Card_Product_Type">Barra de Chocolate</h3>
                            </div>
                            <div className="Product_Card_Body">
                                <p className="Card_Product_Description">Chocolate 60% Cacau com Leite e Frutas. Um sabor inigualável!</p>
                            </div>
                            <div className="Product_Card_Footer">
                                <button className="Card_Product_Detail_Button">Detalhes</button>
                                <button className="Card_AddToCart_Button">
                                    <h3 className="Card_Product_Price">R$ 20,00</h3>Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                        <div className="Product_Card">
                            <div className="Product_Card_Header">
                                <h3 className="Card_Product_Name">Tropical Nozes</h3>
                                <h3 className="Card_Product_Type">Barra de Chocolate</h3>
                            </div>
                            <div className="Product_Card_Body">
                                <p className="Card_Product_Description">Chocolate Branco 60% Cacau com Leite e Nozes. Um sabor inigualável!</p>
                            </div>
                            <div className="Product_Card_Footer">
                                <button className="Card_Product_Detail_Button">Detalhes</button>
                                <button className="Card_AddToCart_Button">
                                    <h3 className="Card_Product_Price">R$ 20,00</h3>Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {activeType === 3 && (
                    <div className="Product_Container">
                        <div className="Product_Card">
                            <h3>Produto 5</h3>
                        </div>
                        <div className="Product_Card">
                            <h3>Produto 6</h3>
                        </div>
                    </div>
                )}

                {activeType === 4 && (
                    <div className="Product_Container">
                        <div className="Product_Card">
                            <h3>Produto 7</h3>
                        </div>
                    </div>
                )}
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
