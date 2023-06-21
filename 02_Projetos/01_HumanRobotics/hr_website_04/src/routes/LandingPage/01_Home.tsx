import { useState, useEffect, forwardRef } from "react";
import { motion as m, AnimatePresence, useInView } from "framer-motion";

import Carrossel_Experiencias from "../../components/Carrossel_Experiencias";
import Carrossel_Parceiros from "../../components/Carrossel_Parceiros";

const Home = forwardRef(function Home(props, ref: any) {
    const words = ["Interativo", "Humano", "Agora"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [finalWord, setFinalWord] = useState(words[currentIndex]);

    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [words.length]);

    useEffect(() => {
        setFinalWord(words[currentIndex]);
    }, [currentIndex, words]);

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="Route_Container Home_Route"
            id="LP_Section_01"
            key="LP_Section_01"
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
        >
            <Carrossel_Experiencias />
            <div className="Home_Title_Wrapper">
                <div className="Home_Title_Group">
                    <m.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        exit={{ opacity: 0 }}
                        className="Route_Title Home_Title"
                    >
                        O Futuro da Robótica é
                    </m.h1>

                    <AnimatePresence mode="wait">
                        <m.h1
                            key={finalWord}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="Home_Title_Changer"
                        >
                            {finalWord}
                        </m.h1>
                    </AnimatePresence>
                </div>
            </div>

            <Carrossel_Parceiros />
        </m.div>
    );
});

export default Home;
