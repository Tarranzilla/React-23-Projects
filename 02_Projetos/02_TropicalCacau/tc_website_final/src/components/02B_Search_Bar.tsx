// Vanilla React Imports
import { useState } from "react";

// React Redux Imports
import { useSelector } from "react-redux";

//Framer Motion Imports
import { motion as m } from "framer-motion";

// Redux Imports
import { useDispatch } from "react-redux";
import { toggleSearch } from "../context/main_context";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const availableChocolates = useSelector((state: any) => state.availableChocolates);
    const [filteredChocolates, setFilteredChocolates] = useState([]); // Store filtered chocolates in local state

    const toggleSearchButton = () => {
        dispatch(toggleSearch());
    };

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const filtered = searchChocolates(query);
        setFilteredChocolates(filtered); // Update the filtered chocolates in local state
    };

    const searchChocolates = (query) => {
        const filtered = availableChocolates.filter((chocolate: any) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
        return filtered;
    };

    return (
        <m.div initial={{ x: -1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="SearchBar" key={"SearchBar"}>
            <div className="SearchBar_Header">
                <span className="material-icons">search</span>
                <p className="SearchBar_Title">Aba de Pesquisa</p>
                <button className="Searchbar_Close_Btn" onClick={toggleSearchButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="SearchBar_Input_Container">
                <input type="text" className="SearchBar_Input" placeholder="Pesquisar..." value={searchQuery} onChange={handleSearch} />
                <button className="SearchBar_Button">
                    <span className="material-icons">search</span>
                </button>
            </div>

            <div className="SearchBar_Result_Container">
                <p className="SearchBar_Result_Title">Resultados:</p>
                <div className="SearchBar_Result_List">
                    {searchQuery.length > 0 ? (
                        // Render the search results based on the filteredChocolates array
                        filteredChocolates.length > 0 ? (
                            filteredChocolates.map((chocolate: any) => <p key={chocolate.name}>{chocolate.name}</p>)
                        ) : (
                            <p>Nenhum resultado encontrado.</p>
                        )
                    ) : (
                        <p>Nenhuma pesquisa foi feita.</p>
                    )}
                </div>
            </div>
        </m.div>
    );
}
