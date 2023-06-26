import { motion as m } from "framer-motion";

export default function Menu() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Menu" key={"Menu"}>
            <p>Menu</p>
        </m.div>
    );
}
