import Home from "./LandingPage/01_Home.tsx";
import Robots from "./LandingPage/02_Robots.tsx";
import Services from "./LandingPage/03_Services.tsx";
import About from "./LandingPage/04_About.tsx";
import Contact from "./LandingPage/05_Contact.tsx";
import FAQ from "./LandingPage/06_FAQ.tsx";
import Divider from "../components/Divider.tsx";

import { useDispatch, useSelector } from "react-redux";
import {
    setSection1Active,
    setSection2Active,
    setSection3Active,
    setSection4Active,
    setSection5Active,
    setSection6Active,
} from "../context/main_context";

import { motion as m } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
    const dispatch = useDispatch();

    const section_1_IsActive = useSelector((state: any) => state.setSection1Active);
    const section_2_IsActive = useSelector((state: any) => state.setSection2Active);
    const section_3_IsActive = useSelector((state: any) => state.setSection3Active);
    const section_4_IsActive = useSelector((state: any) => state.setSection4Active);
    const section_5_IsActive = useSelector((state: any) => state.setSection5Active);
    const section_6_IsActive = useSelector((state: any) => state.setSection6Active);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);

    const callBackFunction = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                switch (entry.target.id) {
                    case "LP_Section_01":
                        dispatch(
                            setSection1Active({
                                section1Active: true,
                            })
                        );
                        dispatch(
                            setSection2Active({
                                section2Active: false,
                            })
                        );
                        dispatch(
                            setSection3Active({
                                section3Active: false,
                            })
                        );
                        dispatch(
                            setSection4Active({
                                section4Active: false,
                            })
                        );
                        dispatch(
                            setSection5Active({
                                section5Active: false,
                            })
                        );
                        dispatch(
                            setSection6Active({
                                section6Active: false,
                            })
                        );

                        console.log("Section 1 is active");
                        break;
                    case "LP_Section_02":
                        dispatch(
                            setSection2Active({
                                section2Active: true,
                            })
                        );
                        console.log("Section 2 is active");
                        break;
                    case "LP_Section_03":
                        dispatch(
                            setSection3Active({
                                section3Active: true,
                            })
                        );

                        console.log("Section 3 is active");
                        break;
                    case "LP_Section_04":
                        dispatch(
                            setSection4Active({
                                section4Active: true,
                            })
                        );

                        console.log("Section 4 is active");
                        break;
                    case "LP_Section_05":
                        dispatch(
                            setSection5Active({
                                section5Active: true,
                            })
                        );

                        console.log("Section 5 is active");
                        break;
                    case "LP_Section_06":
                        dispatch(
                            setSection6Active({
                                section6Active: true,
                            })
                        );

                        console.log("Section 6 is active");
                        break;
                }
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

        if (section1Ref.current) {
            observer.observe(section1Ref.current);
        }
        if (section2Ref.current) {
            observer.observe(section2Ref.current);
        }
        if (section3Ref.current) {
            observer.observe(section3Ref.current);
        }
        if (section4Ref.current) {
            observer.observe(section4Ref.current);
        }
        if (section5Ref.current) {
            observer.observe(section5Ref.current);
        }
        if (section6Ref.current) {
            observer.observe(section6Ref.current);
        }

        return () => {
            if (section1Ref.current) {
                observer.unobserve(section1Ref.current);
            }
            if (section2Ref.current) {
                observer.unobserve(section2Ref.current);
            }
            if (section3Ref.current) {
                observer.unobserve(section3Ref.current);
            }
            if (section4Ref.current) {
                observer.unobserve(section4Ref.current);
            }
            if (section5Ref.current) {
                observer.unobserve(section5Ref.current);
            }
            if (section6Ref.current) {
                observer.unobserve(section6Ref.current);
            }
        };
    }, []);

    return (
        <>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="Route_Container_Landing_Page"
                id="Route_Container_Landing_Page"
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
