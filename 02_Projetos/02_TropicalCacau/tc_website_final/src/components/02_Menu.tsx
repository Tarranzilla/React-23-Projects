//Framer Motion Imports
import { motion as m } from "framer-motion";

// Redux Imports
import { useDispatch } from "react-redux";
import { toggleMenu } from "../context/main_context";

export default function Menu() {
    const dispatch = useDispatch();

    const toggleMenuButton = () => {
        dispatch(toggleMenu());
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Menu" key={"Menu"}>
            <div className="Menu_Header">
                <span className="material-icons">home</span>
                <p className="Menu_Title">Menu</p>
                <button className="Searchbar_Close_Btn" onClick={toggleMenuButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="Menu_List_Container">
                <div className="LP_Links_Container">
                    <div className="LP_Links_Header">
                        <a href="#LP_Section_1" className="Menu_Link" onClick={toggleMenuButton}>
                            <span className="material-icons LP_Links_Icon">flag_circle</span>
                            Início
                        </a>
                    </div>
                    <div className="LP_Links_Horizontal_Organizer">
                        <div className="LP_Links_Line_Container">
                            <div className="LP_Links_Line"></div>
                        </div>
                        <div className="LP_Links">
                            <a href="#LP_Section_2" className="Menu_Link" onClick={toggleMenuButton}>
                                Sobre
                            </a>
                            <div className="Product_Links_Container">
                                <div className="Product_Links_Header">
                                    <a href="#LP_Section_3" className="Menu_Link" onClick={toggleMenuButton}>
                                        Produtos
                                    </a>
                                </div>
                                <div className="LP_Links_Horizontal_Organizer">
                                    <div className="LP_Links_Line_Container">
                                        <div className="LP_Links_Line"></div>
                                    </div>
                                    <div className="Product_Links">
                                        <a href="#LP_Section_3_P1" className="Menu_Link" onClick={toggleMenuButton}>
                                            Produto 1
                                        </a>
                                        <a href="#LP_Section_3_P2" className="Menu_Link" onClick={toggleMenuButton}>
                                            Produto 2
                                        </a>
                                        <a href="#LP_Section_3_P3" className="Menu_Link" onClick={toggleMenuButton}>
                                            Produto 3
                                        </a>
                                        <a href="#LP_Section_3_P4" className="Menu_Link" onClick={toggleMenuButton}>
                                            Produto 4
                                        </a>
                                        <a href="#LP_Section_3_P5" className="Menu_Link" onClick={toggleMenuButton}>
                                            Produto 5
                                        </a>
                                        <a href="#LP_Section_3_P6" className="Menu_Link" onClick={toggleMenuButton}>
                                            Produto 6
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <a href="#LP_Section_4" className="Menu_Link" onClick={toggleMenuButton}>
                                Contato
                            </a>
                        </div>
                    </div>
                </div>

                <div className="Secondary_Links">
                    <a href="#Privacidade" className="Menu_Link_Secondary">
                        <span className="material-icons">privacy_tip</span>Privacidade
                    </a>
                    <a href="#Termos" className="Menu_Link_Secondary">
                        <span className="material-icons">assignment</span>
                        Termos
                    </a>
                    <a href="#Mapa do Site" className="Menu_Link_Secondary">
                        <span className="material-icons">map</span>Mapa do Site
                    </a>
                </div>

                <div className="Configurations">
                    <div className="Configurations_Header">
                        <span className="material-icons LP_Links_Icon">settings</span>
                        <p className="Menu_Link">Configurações</p>
                    </div>
                    <div className="LP_Links_Horizontal_Organizer Config_Organizer">
                        <div className="LP_Links_Line_Container">
                            <div className="LP_Links_Line"></div>
                        </div>
                        <div className="Configurations_Links">
                            <a href="#Idioma" className="Menu_Link Config_Link">
                                Idioma: <span className="Config_Option active">Português Brasileiro</span>
                                <span className="Config_Option">English</span>
                            </a>
                            <a href="#Moeda" className="Menu_Link Config_Link">
                                Moeda: <span className="Config_Option active">Real (R$)</span> <span className="Config_Option">Dollar (USD)</span>
                            </a>
                            <a href="#Cores" className="Menu_Link Config_Link">
                                Esquema de Cores: <span className="Config_Option active">Escuro</span>
                                <span className="Config_Option">Claro</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
    );
}
