import { motion as m } from "framer-motion";

import videoAtendimento from "../assets/videos/Robios_Evento.mp4";
import videoPublicidade from "../assets/videos/02_Robios_Varejo_Desktop_QuickCuts_720p.mp4";
import videoInspecao from "../assets/videos/03_Robios_Saúde_Desktop_720p.mp4";
import videoTransporte from "../assets/videos/01_Robios_Eventos_Desktop_720p.mp4";

export default function Services() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Route_Container">
                <div className="Main_Text Service_Text_Container">
                    <h1 className="Route_Title Solution_Title">Soluções</h1>

                    <div className="Solution_List">
                        <a id="anchor-1" className="solution-active" href="#video-industria">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                                <path d="M8.3 42v-4.7h6.35l-5.3-18.1q-1.6-.75-2.5-2.025-.9-1.275-.9-3.375 0-2.35 1.725-4.075T11.75 8q2.2 0 3.65 1.175 1.45 1.175 1.95 3.125h7.3V9.35q0-.6.45-1.05.45-.45 1.05-.45.55 0 .925.425t.375.975l3.75-3.6q.4-.4 1.025-.525Q32.85 5 33.5 5.3l7.9 3.8q.45.25.625.7.175.45-.075.95-.25.5-.725.6-.475.1-.925-.15l-7.75-3.75-4.9 4.95V15l4.9 5.15 7.75-3.8q.5-.25.95-.125.45.125.7.625.25.5.075 1t-.675.75l-7.65 3.6q-.7.35-1.35.325Q31.7 22.5 31.2 22l-3.75-3.6q0 .7-.375 1.05-.375.35-.925.35-.6 0-1.05-.45-.45-.45-.45-1.05v-3h-7.4q0 .6-.325 1.225-.325.625-.775 1.025L26.4 37.3h7.9V42Zm3.45-25.4q1.2 0 2-.8t.8-2q0-1.2-.8-2t-2-.8q-1.2 0-2 .8t-.8 2q0 1.2.8 2t2 .8Zm6.2 20.7h5.1L13.6 18.95q-.15.1-.5.2t-.55.15Zm5.1 0Z" />
                            </svg>
                            <h2>Atendimento</h2>
                        </a>

                        <a id="anchor-2" href="#video-varejo">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                                <path d="M13 16.5q-1.25 0-2.125-.875T10 13.5V7q0-1.25.875-2.125T13 4h22q1.25 0 2.125.875T38 7v6.5q0 1.25-.875 2.125T35 16.5Zm0-3h22V7H13v6.5ZM7 44q-1.25 0-2.125-.875T4 41v-3.5h40V41q0 1.25-.875 2.125T41 44Zm-3-8 7.25-16.2q.4-.8 1.125-1.3t1.575-.5h20.1q.85 0 1.575.5t1.125 1.3L44 36Zm13-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm6 8h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm6 8h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Z" />
                            </svg>
                            <h2>Publicidade</h2>
                        </a>

                        <a id="anchor-3" href="#video-saude">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                                <path d="M22 30h4v-5h5v-4h-5v-5h-4v5h-5v4h5Zm2 13.95q-7-1.75-11.5-8.125T8 21.85V9.95l16-6 16 6v11.9q0 7.6-4.5 13.975T24 43.95Zm0-3.1q5.75-1.9 9.375-7.175T37 21.85v-9.8l-13-4.9-13 4.9v9.8q0 6.55 3.625 11.825Q18.25 38.95 24 40.85ZM24 24Z" />
                            </svg>
                            <h2>Inspeção</h2>
                        </a>

                        <a id="anchor-4" href="#video-eventos">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                                <path d="M2 40v-8q0-1.45 1.025-2.475Q4.05 28.5 5.5 28.5h7.05q.85 0 1.625.425T15.5 30.1q1.45 2.1 3.7 3.25T24 34.5q2.55 0 4.8-1.15t3.75-3.25q.55-.75 1.3-1.175.75-.425 1.6-.425h7.05q1.45 0 2.475 1.025Q46 30.55 46 32v8H33v-5.95q-1.8 1.65-4.125 2.55-2.325.9-4.875.9t-4.85-.9q-2.3-.9-4.15-2.55V40Zm22-8.5q-1.75 0-3.375-.825T18 28.4q-.8-1.15-1.925-1.85-1.125-.7-2.425-.95 1.45-1.5 4.55-2.3 3.1-.8 5.8-.8 2.7 0 5.825.8t4.575 2.3q-1.3.25-2.425.95-1.125.7-1.925 1.85-1 1.45-2.625 2.275T24 31.5ZM8 25q-2.25 0-3.875-1.625T2.5 19.5q0-2.3 1.625-3.9T8 14q2.3 0 3.9 1.6t1.6 3.9q0 2.25-1.6 3.875T8 25Zm32 0q-2.25 0-3.875-1.625T34.5 19.5q0-2.3 1.625-3.9T40 14q2.3 0 3.9 1.6t1.6 3.9q0 2.25-1.6 3.875T40 25Zm-16-6q-2.25 0-3.875-1.625T18.5 13.5q0-2.3 1.625-3.9T24 8q2.3 0 3.9 1.6t1.6 3.9q0 2.25-1.6 3.875T24 19Z" />
                            </svg>
                            <h2>Transporte</h2>
                        </a>
                    </div>
                </div>
                <div className="video-overlay"></div>
                <div id="video-container-01" className="Solution_Video-Container">
                    <video id="video-industria" autoPlay muted loop playsInline src={videoAtendimento}></video>
                    <video id="video-varejo" autoPlay muted loop playsInline src={videoPublicidade}></video>
                    <video id="video-saude" autoPlay muted loop playsInline src={videoInspecao}></video>
                    <video id="video-eventos" autoPlay muted loop playsInline src={videoTransporte}></video>
                </div>
            </m.div>
        </>
    );
}
