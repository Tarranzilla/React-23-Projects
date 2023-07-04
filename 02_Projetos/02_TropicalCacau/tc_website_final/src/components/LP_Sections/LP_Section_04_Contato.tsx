import { forwardRef } from "react";

import backgroundImg from "../../assets/cacau_textures/dalle4.png";

const LP_Section_04_Contato = forwardRef(function LP_Section_04_Contato(props, ref: any) {
    return (
        <div className="LP_Section LP_Section_04_Contato" id="LP_Section_4" ref={ref} key={"LP_Section_4"}>
            <img src={backgroundImg} alt="background" className="Section_04_Background" />
            <h3 className="Chamada_Contato">
                Sinta-se a vontade para entrar em contato! Estamos de prontidão para responder suas dúvidas, atender pedidos e encomendar chocolates
                especiais e personalizados!
            </h3>
            <div className="Info_Contato">
                <div className="Info_Contato_Item">
                    <h3>Telefone:</h3>
                    <p>+55 (41) 999 999 999</p>
                </div>

                <div className="Info_Contato_Item">
                    <h3>Email:</h3> <p>contato@tropicalcacau.com.br</p>
                </div>

                <div className="Info_Contato_Item">
                    <h3>Escritório:</h3> <p>Curitiba, Paraná, Brasil.</p>
                </div>

                <div className="Info_Contato_Item">
                    <h3>Laboratório de Chocolates:</h3>
                    <p>Curitiba, Paraná, Brasil.</p>
                </div>
            </div>
            <div className="Acoes_Contato">
                <a className="Acao_Contato" href="mailto:recipient@example.com">
                    Enviar Email
                </a>
                <a className="Acao_Contato" href="https://api.whatsapp.com/send?phone=5541999977955&text=Ol%C3%A1" target="_blank">
                    Enviar uma mensagem por Whatsapp
                </a>
            </div>
        </div>
    );
});

export default LP_Section_04_Contato;
