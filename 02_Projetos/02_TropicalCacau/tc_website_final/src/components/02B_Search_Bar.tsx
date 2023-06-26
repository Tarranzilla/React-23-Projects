import { motion as m } from "framer-motion";

export default function SearchBar() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="SearchBar" key={"SearchBar"}>
            <p>SearchBar</p>
        </m.div>
    );
}
