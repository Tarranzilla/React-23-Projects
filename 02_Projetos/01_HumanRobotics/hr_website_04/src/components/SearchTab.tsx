import { motion as m } from "framer-motion";

const SearchTab = function SearchTab() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="search-tab">
            <div className="SearchContainer">
                <input type="text" placeholder="Pesquisar" />
                <button type="button">
                    <span className="material-icons">search</span>
                </button>
            </div>
        </m.div>
    );
};

export default SearchTab;
