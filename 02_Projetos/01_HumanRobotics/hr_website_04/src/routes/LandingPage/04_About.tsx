import { useRef, forwardRef, ReactNode, ForwardedRef } from "react";
import { motion, useInView } from "framer-motion";
import FotoEquipe from "../../assets/images/equipe/Equipe_Human_edit.png";

interface AboutProps {
    children: ReactNode;
}

const About = forwardRef(function About(props: AboutProps, ref: any) {
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="Route_Container Sobre_Route"
            id="LP_Section_04"
            key="LP_Section_04"
            ref={ref}
        >
            <div className="About_Title_Container">
                <h1 className="Route_Title Sobre_Title">Sobre Nós</h1>
                <p className="Main_Text Sobre_Text">
                    Somos a primeira startup brasileira a criar um robô autônomo de atendimento e telepresença, pois acreditamos que é possível
                    melhorar a vida das pessoas automatizando e facilitando os trabalhos humanos!
                </p>
            </div>
            <img className="Sobre_Foto" src={FotoEquipe} alt="Foto da Human Robotics, da esquerda para direita: ..., ..., Olivier Smadja, "></img>
        </motion.div>
    );
});

export default About;
