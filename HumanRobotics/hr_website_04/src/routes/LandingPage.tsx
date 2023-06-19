import Home from "./Home.tsx";
import Robots from "./Robots.tsx";
import Services from "./Services.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import FAQ from "./FAQ.tsx";
import Divider from "../components/Divider.tsx";

import { motion as m } from "framer-motion";

export default function LandingPage() {
    return (
        <>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="Route_Container_Landing_Page"
            >
                <Home />
                <Divider />
                <Robots />
                <Divider />
                <Services />
                <Divider />
                <About />
                <Divider />
                <Contact />
                <Divider />
                <FAQ />
                <Divider />
            </m.div>
        </>
    );
}
