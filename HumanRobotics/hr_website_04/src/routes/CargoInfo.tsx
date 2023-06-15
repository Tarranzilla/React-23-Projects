import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Cargo from "../assets/images/Robios_CARGO_New.png";
import CargoBg from "../assets/images/Robios_CARGO_New_Background.png";

export default function CargoInfo() {
    const navigate = useNavigate();

    function goBack() {
        navigate("/robos");
    }

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="Route_Container Robot_Info_Route_Container"
        >
            <button id="Robot_Info_Close_1" className="Robot_Info_Close" onClick={goBack}>
                <span className="material-icons">arrow_back</span>
                Retornar
            </button>

            <div className="Robot_Info_Media_Container">
                <div className="Robot_Info_Image_Container">
                    <img src={Cargo} className="Robot_Info_Main_Image"></img>
                    <img src={CargoBg} className="Robot_Info_Background_Image"></img>
                </div>
            </div>

            <div className="Robot_Info_Specs_Container">
                <div className="Specs_Title_Container">
                    <h1 className="Route_Title Specs_Title">RobiOS CARGO</h1>
                    <h2 className="Specs_SubTitle">Especificações</h2>
                </div>

                <p className="Specs_Description">
                    Um robô social, com navegação autônoma, telepresença e interações personalizadas. Ideal para todos os segmentos que desejam
                    excelência e praticidade com atendimentos, ou buscam expor seus produtos de uma maneira completamente inovadora.
                </p>

                <ul className="Specs_List">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="M1.7 36.2q.4-5.35 3.3-9.95T12.65 19l-3.8-6.55q-.15-.45-.025-.9t.525-.7q.5-.3 1-.125t.8.625l3.75 6.45q4.35-1.9 9.1-1.9t9.15 1.9l3.75-6.45q.3-.45.825-.625.525-.175.975.125.4.25.575.725.175.475-.075.875L35.35 19q4.75 2.65 7.65 7.25 2.9 4.6 3.3 9.95Zm12.15-5.55q1.05 0 1.8-.75t.75-1.8q0-1-.75-1.775-.75-.775-1.8-.775-1 0-1.75.775t-.75 1.775q0 1.05.75 1.8t1.75.75Zm20.3 0q1 0 1.75-.75t.75-1.8q0-1-.75-1.775-.75-.775-1.75-.775-1.05 0-1.8.775T31.6 28.1q0 1.05.75 1.8t1.8.75Z" />
                        </svg>
                        Disponível em todos os dispositivos Android
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="M24 22q-2.55 0-4.325-1.775Q17.9 18.45 17.9 15.9q0-2.55 1.775-4.325Q21.45 9.8 24 9.8q2.55 0 4.325 1.775Q30.1 13.35 30.1 15.9q0 2.55-1.775 4.325Q26.55 22 24 22Zm0-3.2q1.2 0 2.05-.85.85-.85.85-2.05 0-1.2-.85-2.05Q25.2 13 24 13q-1.2 0-2.05.85-.85.85-.85 2.05 0 1.2.85 2.05.85.85 2.05.85ZM11.9 34.1v-3.9q0-1.3.725-2.3.725-1 2.325-1.85 2.15-1.1 4.425-1.625Q21.65 23.9 24 23.9q2.4 0 4.65.525 2.25.525 4.4 1.625 1.65.9 2.35 1.85.7.95.7 2.3v3.9Zm12.1-7q-2.3 0-4.45.6-2.15.6-4.15 1.8v1.4h17.2v-1.4q-2-1.2-4.15-1.8-2.15-.6-4.45-.6Zm19.1-11.2q-1.65-3.75-4.5-6.625T32.05 4.85l1.3-3.15q4.35 1.8 7.7 5.15 3.35 3.35 5.2 7.75Zm-38.2.05L1.7 14.6q1.85-4.4 5.175-7.725Q10.2 3.55 14.6 1.7l1.3 3.2Q12 6.55 9.275 9.3 6.55 12.05 4.9 15.95Zm9.75 30.3q-4.35-1.8-7.725-5.125T1.75 33.35L4.9 32q1.65 3.9 4.4 6.675Q12.05 41.45 16 43.1Zm18.7.05-1.3-3.2q3.75-1.6 6.6-4.45 2.85-2.85 4.45-6.55l3.15 1.3q-1.8 4.35-5.125 7.7-3.325 3.35-7.775 5.2ZM24 15.9Zm0 15H32.6 15.4 24Z" />
                        </svg>
                        Sensor de Presença
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="M7 44.4q-1.4 0-2.4-1t-1-2.4V7q0-1.4 1-2.4t2.4-1h19.15L22.75 7H7v34h23.8v-6.5h3.4V41q0 1.4-1 2.4t-2.4 1Zm5-8.9v-3h14v3Zm0-6v-3h10v3Zm19.5 1-8.3-8.3h-7.15V12h7.15l8.3-8.3Zm3-4.95V8.25q2.85 1 4.5 3.675t1.65 5.225q0 2.5-1.8 5.05t-4.35 3.35Zm0 7.5v-3.5q3.55-1.25 6.35-4.55t2.8-7.85q0-4.6-2.75-7.875Q38.15 6 34.5 4.75V1.2q5.4 1.45 8.975 5.85 3.575 4.4 3.575 10.1 0 5.65-3.6 10.1-3.6 4.45-8.95 5.8Z" />
                        </svg>
                        Reconhecimento de Voz e Diálogo
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="m18.95 30.85 2.2-2.2L16.5 24l4.6-4.6-2.2-2.2-6.8 6.8Zm10.1 0L35.9 24l-6.85-6.85-2.2 2.2L31.5 24l-4.65 4.65ZM9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Z" />
                        </svg>
                        Plataforma Aberta e Programável
                    </li>
                </ul>
                <div className="Action_Container">
                    <a className="Robot_Info_Action" href="#">
                        <span className="material-icons">assistant</span>Agendar Avaliação
                    </a>
                    <a className="Robot_Info_Action" href="#">
                        <span className="material-icons">auto_mode</span>Alugar
                    </a>
                    <a className="Robot_Info_Action" href="#">
                        <span className="material-icons">shopping_cart</span>Comprar
                    </a>
                </div>
            </div>
        </m.div>
    );
}
