//Framer Motion Imports
import { motion as m } from "framer-motion";

// React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import {
    toggleSiteMap,
    toggleTerms,
    togglePrivacyPolicy,
    toggleMenu,
    setActiveChocoClass,
    setActiveProduct,
    toggleProductDetails,
} from "../context/main_context";

export default function SiteMap() {
    const dispatch = useDispatch();

    const productDetailsIsOpen = useSelector((state: any) => state.productDetailsIsOpen);

    const togglePrivacyButton = () => {
        dispatch(togglePrivacyPolicy());
    };

    const toggleTermsButton = () => {
        dispatch(toggleTerms());
    };

    const toggleSiteMapButton = () => {
        dispatch(toggleSiteMap());
    };

    const toggleProductDetailsButton = (chocoClass, productId) => {
        dispatch(toggleMenu());
        dispatch(setActiveChocoClass(chocoClass));
        dispatch(setActiveProduct({ id: productId }));
        if (!productDetailsIsOpen) {
            dispatch(toggleProductDetails());
        }
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="SiteMap_Container">
            <div className="SiteMap_Header">
                <span className="material-icons SiteMap_Icon">flag_circle</span>
                <h2 className="SiteMap_Title">Mapa do Site</h2>
                <button className="SiteMap_Close_Btn">
                    <span className="material-icons" onClick={toggleSiteMapButton}>
                        close
                    </span>
                </button>
            </div>
            <div className="SiteMap_Body">
                <div className="SiteMap_LP_Links_Container">
                    <div className="LP_Links_Header">
                        <a href="#LP_Section_1" className="Menu_Link" onClick={toggleSiteMapButton}>
                            <span className="material-icons LP_Links_Icon">flag_circle</span>
                            Início
                        </a>
                    </div>
                    <div className="LP_Links_Horizontal_Organizer">
                        <div className="LP_Links_Line_Container">
                            <div className="LP_Links_Line"></div>
                        </div>
                        <div className="LP_Links">
                            <a href="#LP_Section_2" className="Menu_Link" onClick={toggleSiteMapButton}>
                                Sobre
                            </a>
                            <div className="Product_Links_Container">
                                <div className="Product_Links_Header">
                                    <a href="#LP_Section_3" className="Menu_Link" onClick={toggleSiteMapButton}>
                                        Produtos
                                    </a>
                                </div>
                                <div className="LP_Links_Horizontal_Organizer">
                                    <div className="LP_Links_Line_Container">
                                        <div className="LP_Links_Line"></div>
                                    </div>
                                    <div className="Product_Links">
                                        <a
                                            href="#chocolate-00"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("classico", 0);
                                            }}
                                        >
                                            Produto 1
                                        </a>
                                        <a
                                            href="#chocolate-01"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("classico", 1);
                                            }}
                                        >
                                            Produto 2
                                        </a>
                                        <a
                                            href="#chocolate-02"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("classico", 2);
                                            }}
                                        >
                                            Produto 3
                                        </a>
                                        <a
                                            href="#chocolate-03"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("especial", 3);
                                            }}
                                        >
                                            Produto 4
                                        </a>
                                        <a
                                            href="#chocolate-04"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("especial", 4);
                                            }}
                                        >
                                            Produto 5
                                        </a>
                                        <a
                                            href="#chocolate-05"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("especial", 5);
                                            }}
                                        >
                                            Produto 6
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <a href="#LP_Section_4" className="Menu_Link" onClick={toggleSiteMapButton}>
                                Contato
                            </a>
                        </div>
                    </div>
                </div>

                <div className="SiteMap_Secondary_Links">
                    <a href="#Privacidade" className="Menu_Link_Secondary" onClick={togglePrivacyButton}>
                        <span className="material-icons">privacy_tip</span>Privacidade
                    </a>
                    <a href="#Termos" className="Menu_Link_Secondary" onClick={toggleTermsButton}>
                        <span className="material-icons">assignment</span>
                        Termos
                    </a>
                    <a href="#Mapa do Site" className="Menu_Link_Secondary" onClick={toggleSiteMapButton}>
                        <span className="material-icons">map</span>Mapa do Site
                    </a>
                </div>
            </div>
        </m.div>
    );
}
