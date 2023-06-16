import { motion as m } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import videoAtendimento from "../assets/videos/Robios_Evento.mp4";
import videoPublicidade from "../assets/videos/02_Robios_Varejo_Desktop_QuickCuts_720p.mp4";
import videoInspecao from "../assets/videos/03_Robios_Saúde_Desktop_720p.mp4";
import videoTransporte from "../assets/videos/01_Robios_Eventos_Desktop_720p.mp4";

const baseSolutions = [
    {
        id: 1,
        title: "Atendimento",
        video: videoAtendimento,
        description:
            "A solução de atendimento da Robios é capaz de atender clientes em diversos segmentos, como: varejo, saúde, eventos, entre outros. Através de um robô com inteligência artificial, o cliente pode ser atendido de forma rápida e eficiente, sem a necessidade de um atendente humano.",
        features: [],
        solutionState: true,
    },
    {
        id: 2,
        title: "Publicidade",
        video: videoPublicidade,
        description:
            "A solução de publicidade da Robios é capaz de atender clientes em diversos segmentos, como: varejo, saúde, eventos, entre outros. Através de um robô com inteligência artificial, o cliente pode ser atendido de forma rápida e eficiente, sem a necessidade de um atendente humano.",
        features: [],
        solutionState: false,
    },
    {
        id: 3,
        title: "Inspeção",
        video: videoInspecao,
        description:
            "A solução de inspeção da Robios é capaz de atender clientes em diversos segmentos, como: varejo, saúde, eventos, entre outros. Através de um robô com inteligência artificial, o cliente pode ser atendido de forma rápida e eficiente, sem a necessidade de um atendente humano.",
        features: [],
        solutionState: false,
    },
    {
        id: 4,
        title: "Transporte",
        video: videoTransporte,
        description:
            "A solução de transporte da Robios é capaz de atender clientes em diversos segmentos, como: varejo, saúde, eventos, entre outros. Através de um robô com inteligência artificial, o cliente pode ser atendido de forma rápida e eficiente, sem a necessidade de um atendente humano.",
        features: [],
        solutionState: false,
    },
];

interface Solution {
    id: number;
    title: string;
    video: string;
    description: string;
    features: string[];
    solutionState: boolean;
}

export default function Services() {
    const [solutions, setSolutions] = useState<Solution[]>([]);
    const [activeSolution, setActiveSolution] = useState<Solution>(baseSolutions[0]);

    const titulo1ref = useRef<HTMLAnchorElement>(null);
    const titulo2ref = useRef<HTMLAnchorElement>(null);
    const titulo3ref = useRef<HTMLAnchorElement>(null);
    const titulo4ref = useRef<HTMLAnchorElement>(null);

    const video01ref = useRef<HTMLVideoElement>(null);
    const video02ref = useRef<HTMLVideoElement>(null);
    const video03ref = useRef<HTMLVideoElement>(null);
    const video04ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setSolutions(baseSolutions);
    }, []);

    console.log(solutions);
    console.log(activeSolution);

    function handleActiveTitle(id: number) {
        console.log("Handling Active Title Nº " + id + " ...");
        if (id === 1) {
            titulo1ref.current?.classList.add("solution-active");
            titulo2ref.current?.classList.remove("solution-active");
            titulo3ref.current?.classList.remove("solution-active");
            titulo4ref.current?.classList.remove("solution-active");

            video01ref.current?.play();
            video01ref.current?.classList.add("video-active");
            video02ref.current?.pause();
            video02ref.current?.classList.remove("video-active");
            video03ref.current?.pause();
            video03ref.current?.classList.remove("video-active");
            video04ref.current?.pause();
            video04ref.current?.classList.remove("video-active");
        } else if (id === 2) {
            titulo1ref.current?.classList.remove("solution-active");
            titulo2ref.current?.classList.add("solution-active");
            titulo3ref.current?.classList.remove("solution-active");
            titulo4ref.current?.classList.remove("solution-active");

            video01ref.current?.pause();
            video01ref.current?.classList.remove("video-active");
            video02ref.current?.play();
            video02ref.current?.classList.add("video-active");
            video03ref.current?.pause();
            video03ref.current?.classList.remove("video-active");
            video04ref.current?.pause();
            video04ref.current?.classList.remove("video-active");
        } else if (id === 3) {
            titulo1ref.current?.classList.remove("solution-active");
            titulo2ref.current?.classList.remove("solution-active");
            titulo3ref.current?.classList.add("solution-active");
            titulo4ref.current?.classList.remove("solution-active");

            video01ref.current?.pause();
            video01ref.current?.classList.remove("video-active");
            video02ref.current?.pause();
            video02ref.current?.classList.remove("video-active");
            video03ref.current?.play();
            video03ref.current?.classList.add("video-active");
            video04ref.current?.pause();
            video04ref.current?.classList.remove("video-active");
        } else if (id === 4) {
            titulo1ref.current?.classList.remove("solution-active");
            titulo2ref.current?.classList.remove("solution-active");
            titulo3ref.current?.classList.remove("solution-active");
            titulo4ref.current?.classList.add("solution-active");

            video01ref.current?.pause();
            video01ref.current?.classList.remove("video-active");
            video02ref.current?.pause();
            video02ref.current?.classList.remove("video-active");
            video03ref.current?.pause();
            video03ref.current?.classList.remove("video-active");
            video04ref.current?.play();
            video04ref.current?.classList.add("video-active");
        }
    }

    function changeActiveSolutionState(id: number) {
        const newSolutions = solutions.map((solution) => {
            if (solution.id === id) {
                solution.solutionState = true;
                console.log(solution.id);
                setActiveSolution(solution);
            } else {
                solution.solutionState = false;
            }

            return solution;
        });

        setSolutions(newSolutions);
    }

    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Route_Container">
                <div className="Main_Text Service_Text_Container">
                    <h1 className="Route_Title Solution_Title">Soluções</h1>

                    <div className="Solution_List">
                        <a
                            id="anchor-1"
                            className="Solution_Anchor solution-active"
                            href="#video-industria"
                            ref={titulo1ref}
                            onClick={() => {
                                changeActiveSolutionState(1);
                                handleActiveTitle(1);
                            }}
                        >
                            <svg className="Solution_Icon" width="123" height="124" viewBox="0 0 123 124" xmlns="http://www.w3.org/2000/svg">
                                <path d="M67.314 111.01V123.467C79.6252 122.233 90.834 117.3 99.899 109.838L91.2015 101.02C84.4027 106.323 76.2565 109.9 67.314 111.01Z" />
                                <path d="M12.25 62.1083C12.25 37.1333 30.8087 16.4133 54.8187 13.2067V0.75C24.01 4.01833 0 30.2883 0 62.1083C0 93.9283 24.01 120.198 54.8187 123.467V111.01C30.8087 107.803 12.25 87.0833 12.25 62.1083Z" />
                                <path d="M109.76 55.9417H122.132C120.907 43.5467 116.007 32.2617 108.596 23.135L99.8374 31.9533C105.105 38.7367 108.657 46.9383 109.76 55.9417Z" />
                                <path d="M99.899 14.3783C90.834 6.91667 79.564 1.98333 67.314 0.75V13.2067C76.2565 14.3167 84.4027 17.8933 91.2015 23.1967L99.899 14.3783Z" />
                                <path d="M99.8374 92.3249L108.596 101.082C116.007 91.9549 120.907 80.6699 122.132 68.2749H109.76C108.657 77.2782 105.105 85.4799 99.8374 92.3249Z" />
                                <path d="M85.5664 56.5582C85.5664 41.2032 73.9289 31.2749 61.0664 31.2749C48.2039 31.2749 36.5664 41.2032 36.5664 56.5582C36.5664 66.7949 44.7127 78.9432 61.0664 92.9416C77.4202 78.9432 85.5664 66.7949 85.5664 56.5582ZM61.0664 62.1082C57.4527 62.1082 54.5127 59.1482 54.5127 55.5099C54.5127 51.8716 57.4527 48.9116 61.0664 48.9116C64.6802 48.9116 67.6202 51.8716 67.6202 55.5099C67.6202 59.1482 64.6802 62.1082 61.0664 62.1082Z" />
                            </svg>

                            <h2>Atendimento</h2>
                        </a>

                        <a
                            id="anchor-2"
                            className="Solution_Anchor"
                            href="#video-varejo"
                            ref={titulo2ref}
                            onClick={() => {
                                changeActiveSolutionState(2);
                                handleActiveTitle(2);
                            }}
                        >
                            <svg className="Solution_Icon" width="138" height="130" viewBox="0 0 138 130" xmlns="http://www.w3.org/2000/svg">
                                <path d="M137.5 64.9392L122.25 47.68L124.375 24.8333L101.813 19.7425L90 0L68.75 9.06417L47.5 0L35.6875 19.7425L13.125 24.7713L15.25 47.6179L0 64.9392L15.25 82.1983L13.125 105.107L35.6875 110.198L47.5 129.94L68.75 120.814L90 129.878L101.813 110.136L124.375 105.045L122.25 82.1983L137.5 64.9392ZM75 95.9808H62.5V83.5642H75V95.9808ZM75 71.1475H62.5V33.8975H75V71.1475Z" />
                            </svg>

                            <h2>Publicidade</h2>
                        </a>

                        <a
                            id="anchor-3"
                            className="Solution_Anchor"
                            href="#video-saude"
                            ref={titulo3ref}
                            onClick={() => {
                                changeActiveSolutionState(3);
                                handleActiveTitle(3);
                            }}
                        >
                            <svg className="Solution_Icon" width="125" height="124" viewBox="0 0 125 124" xmlns="http://www.w3.org/2000/svg">
                                <path d="M110.875 100.702C119.688 90.0333 125 76.4667 125 61.6667C125 27.6267 97 0 62.5 0C28 0 0 27.6267 0 61.6667C0 95.7067 28 123.333 62.5 123.333C77.5 123.333 91.25 118.092 102.062 109.397C103.75 108.04 105.375 106.56 106.938 105.018C107.125 104.833 107.25 104.648 107.375 104.525C108.625 103.292 109.812 101.997 110.875 100.702ZM62.5 111C34.9375 111 12.5 88.8617 12.5 61.6667C12.5 34.4717 34.9375 12.3333 62.5 12.3333C90.0625 12.3333 112.5 34.4717 112.5 61.6667C112.5 73.075 108.562 83.4967 101.938 91.8833L93 83.065C97.3125 77.0217 99.875 69.6833 99.875 61.7283C99.875 41.3167 83.0625 24.7283 62.375 24.7283C41.6875 24.7283 24.875 41.3167 24.875 61.7283C24.875 82.14 41.6875 98.7283 62.375 98.7283C70.5 98.7283 78.0625 96.1383 84.1875 91.76L93.0625 100.517C84.625 107.115 74.0625 111 62.5 111ZM74.5 64.8117C75.5625 60.7417 74.625 56.3017 71.4375 53.095L71.3125 52.9717C66.5 48.2233 58.8125 48.1617 53.9375 52.725C53.875 52.7867 53.75 52.8483 53.625 52.9717C48.75 57.7817 48.75 65.6133 53.625 70.4233L53.75 70.5467C57 73.6917 61.5625 74.6783 65.6875 73.5683L75.125 82.88C71.375 85.1 67.0625 86.4567 62.375 86.4567C48.5625 86.4567 37.375 75.4183 37.375 61.79C37.375 48.1617 48.5625 37.1233 62.375 37.1233C76.1875 37.1233 87.375 48.1617 87.375 61.79C87.375 66.2917 86.0625 70.485 83.875 74.1233L74.5 64.8117Z" />
                            </svg>

                            <h2>Inspeção</h2>
                        </a>

                        <a
                            id="anchor-4"
                            className="Solution_Anchor"
                            href="#video-eventos"
                            ref={titulo4ref}
                            onClick={() => {
                                changeActiveSolutionState(4);
                                handleActiveTitle(4);
                            }}
                        >
                            <svg className="Solution_Icon" width="123" height="113" viewBox="0 0 123 113" xmlns="http://www.w3.org/2000/svg">
                                <path d="M104.125 75.5H18.375C8.2075 75.5 0 83.875 0 94.25C0 104.625 8.2075 113 18.375 113H104.125C114.293 113 122.5 104.625 122.5 94.25C122.5 83.875 114.293 75.5 104.125 75.5ZM104.125 100.5H18.375C15.0063 100.5 12.25 97.6875 12.25 94.25C12.25 90.8125 15.0063 88 18.375 88H104.125C107.494 88 110.25 90.8125 110.25 94.25C110.25 97.6875 107.494 100.5 104.125 100.5ZM42.875 6.75V56.75C42.875 60.1875 45.6312 63 49 63H98C101.369 63 104.125 60.1875 104.125 56.75V6.75C104.125 3.3125 101.369 0.5 98 0.5H49C45.6312 0.5 42.875 3.3125 42.875 6.75ZM85.75 31.75H61.25V19.375H85.75V31.75ZM0 38.125H30.2575V50.0625H0V38.125ZM12.3113 19.375H30.2575V31.625H12.3113V19.375Z" />
                            </svg>

                            <h2>Transporte</h2>
                        </a>
                    </div>
                </div>
                <div className="video-overlay"></div>
                <div id="video-container-01" className="Solution_Video-Container">
                    <div className="Solution_Container">
                        <video id="video-industria" autoPlay muted loop playsInline src={videoAtendimento} ref={video01ref}></video>
                        <div className="Solution_Info">
                            + Informações
                            <svg
                                className="Solution_Container_Icon"
                                width="112"
                                height="112"
                                viewBox="0 0 112 112"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_537_2454)">
                                    <path d="M55.9997 9.33334C30.2397 9.33334 9.33301 30.24 9.33301 56C9.33301 81.76 30.2397 102.667 55.9997 102.667C81.7597 102.667 102.666 81.76 102.666 56C102.666 30.24 81.7597 9.33334 55.9997 9.33334ZM60.6663 79.3334H51.333V51.3333H60.6663V79.3334ZM60.6663 42H51.333V32.6667H60.6663V42Z" />
                                </g>
                            </svg>
                        </div>
                        <div className="Solution_Description">
                            Os robôs podem interagir com os clientes, fornecendo informações sobre produtos e ajudando a localizar itens específicos
                            na loja. Ele pode até mesmo ajudar os clientes a fazer compras, oferecendo sugestões com base em suas preferências.
                        </div>
                    </div>

                    <div className="Solution_Container">
                        <video id="video-varejo" autoPlay muted loop playsInline src={videoPublicidade} ref={video02ref}></video>
                        <div className="Solution_Info">
                            + Informações
                            <svg
                                className="Solution_Container_Icon"
                                width="112"
                                height="112"
                                viewBox="0 0 112 112"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_537_2454)">
                                    <path d="M55.9997 9.33334C30.2397 9.33334 9.33301 30.24 9.33301 56C9.33301 81.76 30.2397 102.667 55.9997 102.667C81.7597 102.667 102.666 81.76 102.666 56C102.666 30.24 81.7597 9.33334 55.9997 9.33334ZM60.6663 79.3334H51.333V51.3333H60.6663V79.3334ZM60.6663 42H51.333V32.6667H60.6663V42Z" />
                                </g>
                            </svg>
                        </div>
                        <div className="Solution_Description">
                            Os robôs podem realizar atividades promocionais, como distribuir brindes e amostras de produtos, fornecer informações
                            sobre os produtos e serviços e até mesmo realizar vendas diretas.
                        </div>
                    </div>

                    <div className="Solution_Container">
                        <video id="video-saude" autoPlay muted loop playsInline src={videoInspecao} ref={video03ref}></video>
                        <div className="Solution_Info">
                            + Informações
                            <svg
                                className="Solution_Container_Icon"
                                width="112"
                                height="112"
                                viewBox="0 0 112 112"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_537_2454)">
                                    <path d="M55.9997 9.33334C30.2397 9.33334 9.33301 30.24 9.33301 56C9.33301 81.76 30.2397 102.667 55.9997 102.667C81.7597 102.667 102.666 81.76 102.666 56C102.666 30.24 81.7597 9.33334 55.9997 9.33334ZM60.6663 79.3334H51.333V51.3333H60.6663V79.3334ZM60.6663 42H51.333V32.6667H60.6663V42Z" />
                                </g>
                            </svg>
                        </div>
                        <div className="Solution_Description">
                            Os robôs podem ser programados para inspecionar produtos e materiais em busca de defeitos ou irregularidades, usando o
                            leitor de RFID e código de barras para identificar o produto e armazenar informações sobre a inspeção para análise
                            posterior.
                        </div>
                    </div>

                    <div className="Solution_Container">
                        <video id="video-eventos" autoPlay muted loop playsInline src={videoTransporte} ref={video04ref}></video>
                        <div className="Solution_Info">
                            + Informações{" "}
                            <svg
                                className="Solution_Container_Icon"
                                width="112"
                                height="112"
                                viewBox="0 0 112 112"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_537_2454)">
                                    <path d="M55.9997 9.33334C30.2397 9.33334 9.33301 30.24 9.33301 56C9.33301 81.76 30.2397 102.667 55.9997 102.667C81.7597 102.667 102.666 81.76 102.666 56C102.666 30.24 81.7597 9.33334 55.9997 9.33334ZM60.6663 79.3334H51.333V51.3333H60.6663V79.3334ZM60.6663 42H51.333V32.6667H60.6663V42Z" />
                                </g>
                            </svg>
                        </div>
                        <div className="Solution_Description">
                            Os robôs podem ser programados para entregar materiais e suprimentos em toda a fábrica, usando o leitor de RFID e código
                            de barras para identificar a localização e a quantidade dos materiais a serem entregues.
                        </div>
                    </div>
                </div>
            </m.div>
        </>
    );
}
