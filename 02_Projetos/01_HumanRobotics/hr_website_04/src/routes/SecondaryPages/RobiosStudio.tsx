import { motion as m } from "framer-motion";

export default function RobiosStudio() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Route_Container">
                <h1 className="Route_Title">RobiOSStudio</h1>
            </m.div>
        </>
    );
}
