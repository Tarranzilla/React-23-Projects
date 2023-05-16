import { motion as m } from "framer-motion";

export default function Services() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1>Services</h1>
            </m.div>
        </>
    );
}
