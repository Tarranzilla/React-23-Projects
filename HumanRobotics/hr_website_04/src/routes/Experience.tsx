import { motion as m } from "framer-motion";

export default function Experience() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1>Experience</h1>
            </m.div>
        </>
    );
}
