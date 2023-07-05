// Vanilla React Imports
import { forwardRef, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveChocoClass } from "../../context/main_context";

// Product Card Import
import Product_Card from "../../components/Shop/Product_Card";

// Images Imports
import backgroundImg from "../../assets/cacau_textures/dalle5.png";
import ChocolateImg1 from "../../assets/chocolates/ChocolateClaro1.avif";
import ChocolateImg2 from "../../assets/chocolates/ChocolateCafé1.avif";
import ChocolateImg3 from "../../assets/chocolates/ChocolateEscuro1.avif";
import ChocolateImg4 from "../../assets/chocolates/ChocolateEscuro2.avif";
import ChocolateImg5 from "../../assets/chocolates/ChocolateBranco1.avif";
import ChocolateImg6 from "../../assets/chocolates/ChocolateComNozes.avif";

const LP_Section_03_Produtos = forwardRef(function LP_Section_03_Produtos(props, ref: any) {
    const dispatch = useDispatch();
    const activeChocoClass = useSelector((state: any) => state.activeChocoClass);

    const handleSetActiveChocoClass = (activeChocoClass) => {
        dispatch(setActiveChocoClass(activeChocoClass));
    };

    const availableProducts = useSelector((state: any) => state.availableChocolates);

    return (
        <div className="LP_Section LP_Section_03_Produtos" id="LP_Section_3" ref={ref} key={"LP_Section_3"}>
            <img src={backgroundImg} alt="background" className="Section_03_Background" />
            <div className="Type_Header">
                {activeChocoClass === null && <h3 className="Type_Viewer_Title">Nenhum Produto Selecionado</h3>}
                {activeChocoClass === "classico" && <h3 className="Type_Viewer_Title">Clássicos</h3>}
                {activeChocoClass === "especial" && <h3 className="Type_Viewer_Title">Especiais</h3>}
                {activeChocoClass === "kit" && <h3 className="Type_Viewer_Title">Combinações</h3>}
                {activeChocoClass === "assinatura" && <h3 className="Type_Viewer_Title">Assinaturas</h3>}
            </div>
            <div className="Type_Viewer">
                {activeChocoClass === 0 && (
                    <div className="Product_Container">
                        <h3 className="No_Product_Selected_Title">Nenhuma Categoria de Produto Selecionada</h3>
                    </div>
                )}
                {activeChocoClass === "classico" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Clássicos"}>
                        {availableProducts.map((product: any) => {
                            if (product.chocoClass === "classico") {
                                return <Product_Card product={product} key={product.id} />;
                            }
                        })}
                    </m.div>
                )}
                {activeChocoClass === "especial" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Especiais"}>
                        {availableProducts.map((product: any) => {
                            if (product.chocoClass === "especial") {
                                return <Product_Card product={product} key={product.id} />;
                            }
                        })}
                    </m.div>
                )}
                {activeChocoClass === "kit" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Kits"}>
                        <div className="Product_Card">
                            <h3>Kit de Todos os Chocolates</h3>
                        </div>
                        <div className="Product_Card">
                            <h3>Kit de Chocolates Experimentais</h3>
                        </div>
                    </m.div>
                )}
                {activeChocoClass === "assinatura" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Assinaturas"}>
                        <div className="Product_Card">
                            <h3>Assinaturas</h3>
                        </div>
                    </m.div>
                )}{" "}
            </div>
            <div className="Product_Type_Container">
                <button
                    key="ChocoClass_1"
                    className={activeChocoClass === "classico" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveChocoClass("classico")}
                >
                    <h3 className="Product_Type_Title">Clássicos</h3>
                </button>
                <button
                    key="ChocoClass_2"
                    className={activeChocoClass === "especial" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveChocoClass("especial")}
                >
                    <h3 className="Product_Type_Title">Especiais</h3>
                </button>
                <button
                    key="ChocoClass_3"
                    className={activeChocoClass === "kit" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveChocoClass("kit")}
                >
                    <h3 className="Product_Type_Title">Combinações</h3>
                </button>
                <button
                    key="ChocoClass_4"
                    className={activeChocoClass === "assinatura" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveChocoClass("assinatura")}
                >
                    <h3 className="Product_Type_Title">Assinaturas</h3>
                </button>
            </div>
        </div>
    );
});

export default LP_Section_03_Produtos;
