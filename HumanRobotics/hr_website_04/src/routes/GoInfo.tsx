import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Go from "../assets/images/Robios_GO_New.png";
import GoBg from "../assets/images/Robios_GO_New_Background.png";

export default function GoInfo() {
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
                    <img src={Go} className="Robot_Info_Main_Image"></img>
                    <img src={GoBg} className="Robot_Info_Background_Image"></img>
                </div>
            </div>

            <div className="Robot_Info_Specs_Container">
                <div className="Specs_Title_Container">
                    <h1 className="Route_Title Specs_Title">RobiOS GO</h1>
                    <h2 className="Specs_SubTitle">Especificações</h2>
                </div>

                <p className="Specs_Description">
                    Um robô social, com navegação autônoma, telepresença e interações personalizadas. Ideal para todos os segmentos que desejam
                    excelência e praticidade com atendimentos, ou buscam expor seus produtos de uma maneira completamente inovadora.
                </p>

                <ul className="Specs_List">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="M22.5 44V34q0-2.4-.8-3.95-.8-1.55-2.45-3.2l2.15-2.15q.65.55 1.375 1.5T24 27.95q.85-1.3 1.675-2.25.825-.95 1.575-1.6 2.9-2.35 4.175-5.675Q32.7 15.1 32.4 9.7l-4.5 4.5-2.1-2.1L33.9 4l8.1 8.1-2.1 2.1-4.5-4.5q.25 6.3-1.225 9.925Q32.7 23.25 29.25 26.4q-2.2 2-2.975 3.65Q25.5 31.7 25.5 34v10Zm-9.6-27.8q-.2-.9-.325-2.625T12.55 9.75L8.1 14.2 6 12.1 14.1 4l8.1 8.1-2.1 2.1-4.5-4.5q-.1 1.9-.05 3.325.05 1.425.25 2.475Zm4.2 8.55q-.85-.9-1.875-2.375T13.65 19.15l2.95-.75q.45 1.25 1.2 2.4t1.4 1.85Z" />
                        </svg>
                        Navegação Autônoma
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="M24 44q-4.15 0-7.8-1.575-3.65-1.575-6.35-4.275-2.7-2.7-4.275-6.35Q4 28.15 4 24t1.575-7.8Q7.15 12.55 9.85 9.85q2.7-2.7 6.35-4.275Q19.85 4 24 4t7.8 1.575q3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24t-1.575 7.8q-1.575 3.65-4.275 6.35-2.7 2.7-6.35 4.275Q28.15 44 24 44Zm0-3q3.15 0 5.925-1.025t5.025-2.925l-3.6-3.55q-1.55 1.15-3.4 1.825Q26.1 36 24 36q-5 0-8.5-3.5T12 24q0-5 3.5-8.5T24 12q5 0 8.5 3.5T36 24q0 2.1-.675 3.95t-1.825 3.4l3.55 3.55q1.85-2.25 2.9-5Q41 27.15 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.1 0-12.05 4.95Q7 16.9 7 24q0 7.1 4.95 12.05Q16.9 41 24 41Zm0-8q1.45 0 2.775-.425T29.2 31.35l-3.7-3.65q-.35.15-.725.225Q24.4 28 24 28q-1.65 0-2.825-1.175Q20 25.65 20 24q0-1.65 1.175-2.825Q22.35 20 24 20q1.65 0 2.825 1.175Q28 22.35 28 24q0 .4-.1.8t-.25.8l3.7 3.6q.8-1.1 1.225-2.425Q33 25.45 33 24q0-3.75-2.625-6.375T24 15q-3.75 0-6.375 2.625T15 24q0 3.75 2.625 6.375T24 33Z" />
                        </svg>
                        LIDAR
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="M24 42.55q-3.25 0-5.475-2.25-2.225-2.25-2.225-5.45 0-3.25 2.225-5.475Q20.75 27.15 24 27.15q3.25 0 5.475 2.225Q31.7 31.6 31.7 34.85q0 3.2-2.225 5.45T24 42.55Zm0-3.4q1.8 0 3.05-1.25 1.25-1.25 1.25-3.05 0-1.8-1.25-3.05-1.25-1.25-3.05-1.25-1.8 0-3.05 1.25-1.25 1.25-1.25 3.05 0 1.8 1.25 3.05 1.25 1.25 3.05 1.25ZM5.8 16.05 3.45 13.8Q7.5 9.9 12.7 7.75T24 5.6q6.1 0 11.3 2.15 5.2 2.15 9.25 6.05l-2.35 2.25q-3.65-3.45-8.225-5.325Q29.4 8.85 24 8.85q-5.4 0-9.975 1.9-4.575 1.9-8.225 5.3Zm28.9 7.65q-2.1-1.8-4.825-2.925Q27.15 19.65 24 19.65t-5.875 1.125Q15.4 21.9 13.3 23.7l-2.4-2.35q2.55-2.3 5.925-3.65T24 16.35q3.8 0 7.15 1.35 3.35 1.35 5.9 3.65ZM24 34.85Z" />
                        </svg>
                        Sensores Ultrassônicos
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="M24 35q3.6 0 6.225-2.6 2.625-2.6 2.625-6.2 0-3.65-2.625-6.275Q27.6 17.3 24 17.3q-3.65 0-6.25 2.625t-2.6 6.275q0 3.6 2.6 6.2T24 35Zm0-1.65-2.25-5.1-4.95-2.05 4.95-2.1L24 19l2.2 5.1 4.95 2.1-4.95 2.05ZM7.1 42.3q-1.35 0-2.375-1.025T3.7 38.9V13.45q0-1.35 1.025-2.375T7.1 10.05h7.2l3.75-4.5h11.9l3.75 4.5h7.2q1.35 0 2.375 1.025T44.3 13.45V38.9q0 1.35-1.025 2.375T40.9 42.3Z" />
                        </svg>
                        2 Câmeras 1080p Fisheye
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="M34.9 44.3H13.1q-1.4 0-2.4-1t-1-2.4V7.1q0-1.4 1-2.4t2.4-1h21.8q1.4 0 2.4 1t1 2.4v33.8q0 1.4-1 2.4t-2.4 1ZM24.05 17.9q1.6 0 2.7-1.1t1.1-2.7q0-1.6-1.1-2.7t-2.7-1.1q-1.6 0-2.7 1.1t-1.1 2.7q0 1.6 1.1 2.7t2.7 1.1ZM24 38.2q3.45 0 5.825-2.375T32.2 30q0-3.45-2.375-5.825T24 21.8q-3.45 0-5.825 2.375T15.8 30q0 3.45 2.375 5.825T24 38.2Zm0-3q-2.15 0-3.675-1.525T18.8 30q0-2.15 1.525-3.675T24 24.8q2.15 0 3.675 1.525T29.2 30q0 2.15-1.525 3.675T24 35.2Z" />
                        </svg>
                        Alto Falantes HiFi
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="M29.5 31.75h8.4v-8.4h-2.4v6h-6ZM10.1 20.5h2.45v-6h6v-2.4H10.1Zm6.25 21.8v-4.1H7.1q-1.35 0-2.375-1.025T3.7 34.75V9.1q0-1.4 1.025-2.4t2.375-1h33.8q1.4 0 2.4 1t1 2.4v25.65q0 1.4-1 2.425T40.9 38.2h-9.25v4.1Z" />
                        </svg>
                        Tela de 11 Polegadas
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

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                            <path d="M15.9 44.3q-.95 0-1.575-.625T13.7 42.1V9.9q0-.95.625-1.575T15.9 7.7h3.8v-4h8.6v4h3.8q.95 0 1.575.625T34.3 9.9v32.2q0 .95-.625 1.575T32.1 44.3Zm6.45-5.65 7.2-13.35H25.6V15.15L18.4 28.5h3.95Z" />
                        </svg>
                        Autonomia de 8 Horas
                    </li>
                </ul>
                <div className="Action_Container">
                    <a href="#">
                        <span className="material-icons">assistant</span>Agendar Avaliação
                    </a>
                    <a href="#">
                        <span className="material-icons">auto_mode</span>Alugar
                    </a>
                    <a href="#">
                        <span className="material-icons">shopping_cart</span>Comprar
                    </a>
                </div>
            </div>
        </m.div>
    );
}
