import { motion as m } from "framer-motion";

export default function SearchBar() {
    return (
        <m.div initial={{ x: -400 }} animate={{ x: 0 }} exit={{ x: -600 }} className="SearchBar" key={"SearchBar"}>
            <p>SearchBar</p>
        </m.div>
    );
}
