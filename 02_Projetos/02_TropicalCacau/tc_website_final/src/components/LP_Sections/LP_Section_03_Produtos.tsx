// Vanilla React Imports
import { forwardRef, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

// Images Imports
import backgroundImg from "../../assets/cacau_textures/dalle5.png";
import ChocolateImg1 from "../../assets/chocolates/ChocolateClaro1.avif";
import ChocolateImg2 from "../../assets/chocolates/ChocolateCafé1.avif";
import ChocolateImg3 from "../../assets/chocolates/ChocolateEscuro1.avif";
import ChocolateImg4 from "../../assets/chocolates/ChocolateEscuro2.avif";
import ChocolateImg5 from "../../assets/chocolates/ChocolateBranco1.avif";
import ChocolateImg6 from "../../assets/chocolates/ChocolateComNozes.avif";

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
                        <h3 className="No_Product_Selected_Title">Nenhuma Categoria de Produto Selecionada</h3>
                    </div>
                )}
                {activeType === 1 && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Clássicos"}>
                        <div className="Product_Card">
                            <img className="Card_Product_Image" src={ChocolateImg1}></img>
                            <div className="Product_Card_Header">
                                <h3 className="Card_Product_Name">Tropical 35%</h3>
                                <h3 className="Card_Product_Type">Barra de Chocolate</h3>
                            </div>
                            <div className="Product_Card_Body">
                                <p className="Card_Product_Description">Chocolate 35% Cacau com sabor inigualável!</p>
                            </div>
                            <div className="Product_Card_Footer">
                                <button className="Card_Product_Detail_Button">Detalhes</button>
                                <button className="Card_AddToCart_Button">
                                    <h3 className="Card_Product_Price">R$ 20,00</h3>Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                        <div className="Product_Card">
                            <img className="Card_Product_Image" src={ChocolateImg2}></img>
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
                            <img className="Card_Product_Image" src={ChocolateImg3}></img>
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
                    </m.div>
                )}
                {activeType === 2 && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Especiais"}>
                        <div className="Product_Card">
                            <img className="Card_Product_Image" src={ChocolateImg4}></img>
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
                            <img className="Card_Product_Image" src={ChocolateImg5}></img>
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
                            <img className="Card_Product_Image" src={ChocolateImg6}></img>
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
                    </m.div>
                )}
                {activeType === 3 && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Kits"}>
                        <div className="Product_Card">
                            <h3>Kit de Todos os Chocolates</h3>
                        </div>
                        <div className="Product_Card">
                            <h3>Kit de Chocolates Experimentais</h3>
                        </div>
                    </m.div>
                )}
                {activeType === 4 && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Assinaturas"}>
                        <div className="Product_Card">
                            <h3>Assinaturas</h3>
                        </div>
                    </m.div>
                )}{" "}
            </div>
            <div className="Product_Type_Container">
                <button
                    className={activeType === 1 ? "Product_Type active" : "Product_Type"}
                    onClick={() => {
                        setActiveType(1);
                    }}
                >
                    <h3 className="Product_Type_Title">Clássicos</h3>
                </button>
                <button
                    className={activeType === 2 ? "Product_Type active" : "Product_Type"}
                    onClick={() => {
                        setActiveType(2);
                    }}
                >
                    <h3 className="Product_Type_Title">Especiais</h3>
                </button>
                <button
                    className={activeType === 3 ? "Product_Type active" : "Product_Type"}
                    onClick={() => {
                        setActiveType(3);
                    }}
                >
                    <h3 className="Product_Type_Title">Combinações</h3>
                </button>
                <button
                    className={activeType === 4 ? "Product_Type active" : "Product_Type"}
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
