//Framer Motion Imports
import { motion as m } from "framer-motion";

// Redux Imports
import { useDispatch } from "react-redux";
import { toggleSearch } from "../context/main_context";

export default function SearchBar() {
    const dispatch = useDispatch();

    const toggleSearchButton = () => {
        dispatch(toggleSearch());
    };

    return (
        <m.div initial={{ x: -400 }} animate={{ x: 0 }} exit={{ x: -600 }} className="SearchBar" key={"SearchBar"}>
            <div className="SearchBar_Header">
                <p className="SearchBar_Title">
                    <span className="material-icons">search</span>Aba de Pesquisa
                </p>
                <button className="Searchbar_Close_Btn" onClick={toggleSearchButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="SearchBar_Input_Container">
                <input type="text" className="SearchBar_Input" placeholder="Pesquisar..." />
                <button className="SearchBar_Button">
                    <span className="material-icons">search</span>
                </button>
            </div>

            <div className="SearchBar_Result_Container">
                <p className="SearchBar_Result_Title">Resultados:</p>
                <div className="SearchBar_Result_List">
                    <p>Nenhuma pesquisa foi feita.</p>
                </div>
            </div>
        </m.div>
    );
}
