import Home from "./LandingPage/01_Home.tsx";
import Robots from "./LandingPage/02_Robots.tsx";
import Services from "./LandingPage/03_Services.tsx";
import About from "./LandingPage/04_About.tsx";
import Contact from "./LandingPage/05_Contact.tsx";
import FAQ from "./LandingPage/06_FAQ.tsx";
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
                <Divider />
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
