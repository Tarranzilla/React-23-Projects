import { useState } from "react";
import { nanoid } from "nanoid";

import tresM from "../assets/images/parceiros/3M.webp";
import ambev from "../assets/images/parceiros/ambev.webp";
import brmalls from "../assets/images/parceiros/brmalls.webp";
import cajuru from "../assets/images/parceiros/cajuru_2.png";
import ebanx from "../assets/images/parceiros/ebanx.webp";
import finep from "../assets/images/parceiros/finep.webp";
import nivea from "../assets/images/parceiros/nivea.png";
import ntu from "../assets/images/parceiros/ntu.webp";
import sao_cristovao from "../assets/images/parceiros/sao_cristovao.webp";
import sebrae from "../assets/images/parceiros/sebrae.webp";
import tercadaterra from "../assets/images/parceiros/tercadaterra.webp";
import unimed from "../assets/images/parceiros/unimed.webp";

const baseParceiros = [
    { id: nanoid(), text: "3M", description: "Campanha de Marketing", image: tresM },
    { id: nanoid(), text: "Ambev", description: "Campanha de Marketing", image: ambev },
    { id: nanoid(), text: "BRMalls", description: "Campanha de Marketing", image: brmalls },
    { id: nanoid(), text: "Cajuru", description: "Campanha de Marketing", image: cajuru },
    { id: nanoid(), text: "Ebanx", description: "Campanha de Marketing", image: ebanx },
    { id: nanoid(), text: "Finep", description: "Campanha de Marketing", image: finep },
    { id: nanoid(), text: "Nivea", description: "Campanha de Marketing", image: nivea },
    { id: nanoid(), text: "NTU", description: "Campanha de Marketing", image: ntu },
    { id: nanoid(), text: "São Cristovão", description: "Campanha de Marketing", image: sao_cristovao },
    { id: nanoid(), text: "Sebrae", description: "Campanha de Marketing", image: sebrae },
    { id: nanoid(), text: "TercadaTerra", description: "Campanha de Marketing", image: tercadaterra },
    { id: nanoid(), text: "Unimed", description: "Campanha de Marketing", image: unimed },
];

const CardContainer_Parceiros = () => {
    const [cards] = useState(baseParceiros);

    return (
        <div className="card-container">
            <div className="card-container-track track-parceiros">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <div className="card-content">
                            <p>{card.text}</p>
                            <p>{card.description}</p>
                        </div>
                        <img src={card.image} alt={card.text} />
                    </div>
                ))}
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <div className="card-content">
                            <p>{card.text}</p>
                            <p>{card.description}</p>
                        </div>
                        <img src={card.image} alt={card.text} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardContainer_Parceiros;
