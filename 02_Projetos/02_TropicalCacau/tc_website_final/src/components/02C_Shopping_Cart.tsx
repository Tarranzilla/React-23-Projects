import { motion as m } from "framer-motion";

export default function Shopping_Cart() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Shopping_Cart" key={"Shopping_Cart"}>
            <p>Shopping_Cart</p>
        </m.div>
    );
}
