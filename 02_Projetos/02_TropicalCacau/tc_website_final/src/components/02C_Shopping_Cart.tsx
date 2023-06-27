import { motion as m } from "framer-motion";

export default function Shopping_Cart() {
    return (
        <m.div initial={{ x: 600 }} animate={{ x: 0 }} exit={{ x: 600 }} className="Shopping_Cart" key={"Shopping_Cart"}>
            <p>Shopping_Cart</p>
        </m.div>
    );
}
