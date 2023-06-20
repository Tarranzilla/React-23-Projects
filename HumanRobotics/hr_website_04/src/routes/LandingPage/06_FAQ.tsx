import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

export default function FAQ() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });
    return (
        <>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="Route_Container FAQ_Container"
                id="LP_Section_06"
                key="LP_Section_06"
                ref={sectionRef}
                style={{
                    transform: isInView ? "translateX(0)" : "translateX(-100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
            >
                <div className="FAQ_Title_Container">
                    <h1 className="Route_Title">FAQ</h1>
                    <h2 className="FAQ_SubTitle">Algumas informações relevantes sobre nossos Produtos, Serviços e Empresa.</h2>
                </div>

                <div className="faq-content">
                    <div className="accordion-wrapper">
                        <div className="container">
                            <div className="label">É possível fazer integração com outros softwares?</div>
                            <div className="content">
                                Sim! É possível integrar o software do Robios com qualquer outro software com abertura para integrações API.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">O RobiOS pode reconhecer pessoas?</div>
                            <div className="content">
                                O Robios identifica a presença e aproximação humana, podendo seguir ou abordar quem se aproxima, porém não consegue
                                ainda reconhecer diferentes pessoas.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">O RobiOS funciona por comando de voz ou touch screen?</div>
                            <div className="content">
                                É possível interagir com o Robios das duas formas, bastando apenas alterar a configuração. A interação por touch
                                screen é mais recomendada em locais com barulhos ou ruídos (como eventos), para não gerar confusão na identificação
                                das informações.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">Como o RobiOS consegue identificar os locais?</div>
                            <div className="content">
                                Em um primeiro momento, é feito o mapeamento do local com um joystick, e a definição de onde ficará a dock station do
                                Robios. Com isso, é gerado um mapa por onde o Robios poderá se locomover, e seu reconhecimento de localização é por
                                meio da sua movimentação a partir da dock station.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">O RobiOS desvia de obstáculos?</div>
                            <div className="content">
                                Sim! O Robios possui sensores que permitem que ele reconheça a presença de pessoas e obstáculos e desvie deles,
                                traçando novas rotas dentro do local para chegar ao destino, caso necessário.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">Posso levar o RobiOS a outros locais?</div>
                            <div className="content">
                                Você pode trocar o Robios de local, porém é necessário fazer o mapeamento a cada local novo. Não se preocupe, todos os
                                mapas ficam salvos, e ao retorná-lo a algum local já mapeado, basta selecionar o respectivo mapa em suas
                                configurações.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">O RobiOS pode passar em desníveis?</div>
                            <div className="content">
                                Não recomendamos locais com desníveis, como degraus e locais com buracos ou pisos com texturas, pois podem
                                desequilibrar o Robios e danificar o robô.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">É possível personalizar o corpo do RobiOS?</div>
                            <div className="content">
                                Conseguimos personalizar a plotagem do corpo com outras cores e logo, deixando com a carinha e identidade visual da
                                sua empresa!
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">Posso alterar o script após a primeira configuração?</div>
                            <div className="content">
                                Sim, você pode alterar o script a qualquer momento! Basta acessar uma plataforma intuitiva e fácil de usar para fazer
                                novas configurações, sem utilizar linguagem de programação!
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">O RobiOS depende de conexão com a Internet?</div>
                            <div className="content">
                                Para o Robios, apenas o mapeamento e a telepresença dependem da Internet, as demais interações funcionam de forma
                                offline. Para o Totem e o Avatar, a Internet é necessária para suas funções.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">Como funcionam as manutenções?</div>
                            <div className="content">
                                Caso seja necessária alguma manutenção no software, conseguimos fazer a manutenção de forma remota.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">Qual o sistema operacional do RobiOS?</div>
                            <div className="content">O RobiOS possui Android como sistema operacional.</div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">Tem garantia?</div>
                            <div className="content">O RobiOS tem 1 ano de garantia, que pode ser extendida no contrato.</div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">O contrato é por aluguel ou compra?</div>
                            <div className="content">Temos as 2 opções de contrato.</div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">Como funciona a telepresença?</div>
                            <div className="content">
                                É gerado um link por meio da nossa plataforma, que você pode enviar à pessoa que acessará o Robios. Por meio desse
                                link, o usuário pode movimentar o Robô, e conversar por videochamada com quem estiver próximo a ele.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">O Robios possui braços?</div>
                            <div className="content">
                                Não! É possível acoplar bandejas para que o Robios possa levar pequenos itens, como brindes e folders.
                            </div>
                        </div>

                        <hr></hr>

                        <div className="container">
                            <div className="label">Minha empresa recebe treinamento ao adquirir o Robios?</div>
                            <div className="content">
                                Sua empresa receberá um treinamento sobre a utilização do Robios e configurações iniciais. Porém temos disponível para
                                contratação treinamentos mais detalhados sobre configurações avançadas e integrações.
                            </div>
                        </div>
                    </div>
                </div>
            </m.div>
        </>
    );
}
