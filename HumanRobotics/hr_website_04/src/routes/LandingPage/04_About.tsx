import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import FotoEquipe from "../../assets/images/equipe/Equipe_Human_edit.png";

export default function About() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });
    return (
        <>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="Route_Container Sobre_Route"
                id="LP_Section_04"
                key="LP_Section_04"
                ref={sectionRef}
                style={{
                    transform: isInView ? "none" : "translateX(-100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
            >
                <div className="About_Title_Container">
                    <h1 className="Route_Title Sobre_Title">Sobre Nós</h1>
                    <p className="Main_Text Sobre_Text">
                        Somos a primeira startup brasileira a criar um robô autônomo de atendimento e telepresença, pois acreditamos que é possível
                        melhorar a vida das pessoas automatizando e facilitando os trabalhos humanos!
                    </p>
                </div>
                <img className="Sobre_Foto" src={FotoEquipe} alt="Foto da Human Robotics, da esquerda para direita: ..., ..., Olivier Smadja, "></img>
            </m.div>
        </>
    );
}
