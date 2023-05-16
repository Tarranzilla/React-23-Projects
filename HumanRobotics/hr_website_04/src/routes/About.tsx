import { motion as m } from "framer-motion";

export default function About() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Route_Container">
                <h1 className="Route_Title">About</h1>
            </m.div>
        </>
    );
}
