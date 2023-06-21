import { forwardRef } from "react";
import { motion as m, useInView } from "framer-motion";

const Contact = forwardRef(function Contact(props, ref: any) {
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="Route_Container Contato_Route"
                id="LP_Section_05"
                key="LP_Section_05"
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
            >
                <div className="Contato_Container_1 Form_Container Contato_Form_Container">
                    <div className="Contato_Title_Container">
                        <h1 className="Route_Title Contato_Title">Contato</h1>
                        <p className="Main_Text Contato_Text">
                            <strong>Sinta-se à vontade para nos contactar em qualquer um destes canais</strong> e caso queira saber mais sobre
                            Robótica e Inteligência Aritificial nos siga nas redes e assine a nossa newsletter!
                        </p>
                    </div>

                    <form
                        className="Form Form_Contato"
                        id="form_contato"
                        action="mailto:contato@humanrobotics.com"
                        method="post"
                        encType="text/plain"
                    >
                        <input type="text" placeholder="Nome" required className="first-input" />
                        <input type="email" placeholder="E-mail" required />
                        <input type="text" placeholder="Telefone" required />
                        <textarea name="message" id="message" rows={3} placeholder="Mensagem" required></textarea>
                        <button className="Form_Submit" type="submit">
                            Enviar Email{" "}
                            <span className="email_detail">
                                para <strong>contato@humanrobotics.com.br</strong>
                            </span>
                        </button>
                    </form>

                    <div className="Action_Buttons_Container">
                        <div className="Big_Buttons">
                            <a className="WhatsApp_Button" href="https://api.whatsapp.com/send?phone=5541992923596&text=Ol%C3%A1" target="_blank">
                                <svg className="Icone_Vetor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>

                                <p>
                                    Entre em Contato pelo WhatsApp{" "}
                                    <span>
                                        <strong> | +55 41 992 923 596</strong>
                                    </span>
                                </p>
                            </a>

                            <a href="https://mailchimp.com/pt-br/" target="_blank" rel="noopener" className="NewsLetter_Button">
                                <p>
                                    🤖 <strong>Assine a nossa Newsletter</strong>
                                </p>
                            </a>
                        </div>

                        <div className="Social_Media_Container">
                            <a href="https://www.linkedin.com/company/human-robotics/" target="_blank" rel="noopener" className="Social_Media_Icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/humanroboticsai" target="_blank" rel="noopener" className="Social_Media_Icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/humanrobotics.ai/" target="_blank" rel="noopener" className="Social_Media_Icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/home" target="_blank" rel="noopener" className="Social_Media_Icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204">
                                    <path d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="Contato_Container_1">
                    <div className="Contato_Mapa_Container">
                        <iframe
                            className="Contato_Mapa"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDyXfuRSunXyy-YO9HSag0AFrMJexBPcZA
                                &q=Human+Robotics,Curitiba+Brazil"
                        ></iframe>
                    </div>
                </div>
            </m.div>
        </>
    );
});

export default Contact;
