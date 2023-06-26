// Vanilla Imports
import { useEffect, useRef } from "react";

// React Redux Imports
import { useDispatch } from "react-redux";
import { setActiveSection } from "../context/main_context";

// LP = Landing Page
import LP_Section_01_Inicio from "./LP_Sections/LP_Section_01_Inicio";
import LP_Section_02_Sobre from "./LP_Sections/LP_Section_02_Sobre";
import LP_Section_03_Produtos from "./LP_Sections/LP_Section_03_Produtos";
import LP_Section_04_Contato from "./LP_Sections/LP_Section_04_Contato";
import Divider from "./06_Divider";

export default function LandingPage() {
    const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const dispatch = useDispatch();

    const callBackFunction = (entries: any) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.id.split("_").pop(), 10) - 1;
                dispatch(setActiveSection({ activeSection: index }));
                console.log(`Section ${index + 1} is active`);
            }
        });
    };

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options);

        sectionRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            sectionRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    return (
        <div className="Landing_Page" key={"Landing_Page"}>
            <Divider key="Divider_1" />
            <LP_Section_01_Inicio ref={sectionRefs[0]} key="Section_01" />
            <Divider key="Divider_2" />
            <LP_Section_02_Sobre ref={sectionRefs[1]} key={"Section_02"} />
            <Divider key="Divider_3" />
            <LP_Section_03_Produtos ref={sectionRefs[2]} key={"Section_03"} />
            <Divider key="Divider_4" />
            <LP_Section_04_Contato ref={sectionRefs[3]} key={"Section_04"} />
            <Divider key="Divider_5" />
        </div>
    );
}
