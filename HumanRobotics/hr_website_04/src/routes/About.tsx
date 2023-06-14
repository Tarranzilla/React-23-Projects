import { motion as m } from "framer-motion";

import FotoEquipe from "../assets/images/equipe/Equipe_Human_edit.png";

export default function About() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Route_Container Sobre_Route">
                <h1 className="Route_Title Sobre_Title">Sobre Nós</h1>
                <p className="Main_Text Sobre_Text">
                    A Human Robotics é uma empresa de robótica e automação , localizada na cidade de Curitiba. Somos a primeira startup brasileira a
                    criar um robô autônomo de atendimento e telepresença, pois acreditamos que é possível melhorar a vida das pessoas automatizando e
                    facilitando os trabalhos humanos!
                </p>
                <img className="Sobre_Foto" src={FotoEquipe} alt="Foto da Human Robotics, da esquerda para direita: ..., ..., Olivier Smadja, "></img>
            </m.div>
        </>
    );
}
