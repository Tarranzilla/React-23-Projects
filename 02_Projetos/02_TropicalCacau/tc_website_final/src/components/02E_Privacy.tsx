//Framer Motion Imports
import { motion as m } from "framer-motion";

// React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { togglePrivacyPolicy, toggleTerms, toggleSiteMap } from "../context/main_context";

export default function Privacy() {
    const dispatch = useDispatch();
    const termsIsOpen = useSelector((state: any) => state.termsIsOpen);
    const siteMapIsOpen = useSelector((state: any) => state.siteMapIsOpen);

    const togglePrivacyPolicyButton = () => {
        dispatch(togglePrivacyPolicy());

        if (termsIsOpen) {
            dispatch(toggleTerms());
        }
        if (siteMapIsOpen) {
            dispatch(toggleSiteMap());
        }
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Privacy_Container">
            <div className="Privacy_Header">
                <span className="material-icons Privacy_Icon">info</span>
                <h2 className="Privacy_Title">Política de Privacidade</h2>
                <button className="Privacy_Close_Btn">
                    <span className="material-icons" onClick={togglePrivacyPolicyButton}>
                        close
                    </span>
                </button>
            </div>
            <div className="Privacy_Body">
                <p>
                    Nossa Política de Privacidade explica quais dados pessoais coletamos, como usamos os dados pessoais, como os dados pessoais são
                    compartilhados e os direitos de privacidade.
                </p>

                <h3>1. DEFINIÇÕES</h3>
                <p>
                    Termos não definidos nesta Política de Privacidade têm a mesma definição que em nossos <a href="#Termos">Termos de Serviço</a>{" "}
                    (“Termos”).
                </p>
                <h3>2. DADOS PESSOAIS QUE COLETAMOS</h3>
                <h4>2.1 Informações necessárias para usar a Loja Tropical Cacau</h4>
                <p>
                    Nós coletamos dados pessoais sobre você quando você usa a Loja. Sem essas informações, poderemos não ser capazes de fornecer todos
                    os serviços que você solicitar. Essas informações incluem:
                </p>

                <p>
                    <strong>Informações de contato, da conta e do perfil.</strong>Como nome, sobrenome, número de telefone, endereço postal, endereço
                    de email, data de nascimento e foto de perfil, dos quais alguns dependerão dos recursos que você usa.
                </p>
                <p>
                    <strong>Verificação de identidade e informações de pagamento.</strong>Como imagens do seu documento de identificação oficial
                    (conforme permitido pelas leis aplicáveis), número do seu documento de identificação oficial ou outras informações de verificação,
                    uma selfie quando verificamos seu documento de identificação oficial, conta bancária ou informações de conta de pagamento. Se você
                    não for um usuário do Airbnb, poderemos receber informações de pagamento relacionadas a você, como quando um usuário do Airbnb
                    fornece seu cartão de pagamento para concluir uma reserva. Se nos for fornecida uma cópia do seu documento de identificação
                    oficial, poderemos digitalizar, utilizar e armazenar as informações contidas no seu documento de identificação oficial para
                    verificar a sua identidade e por razões de segurança.
                </p>
                <h4>2.2 Informações que você opta por nos fornecer</h4>
                <p>Você pode optar por nos fornecer dados pessoais adicionais. Essas informações podem incluir:</p>
                <p>
                    <strong>Informações de perfil adicionais.</strong>Como gênero, idiomas preferidos, cidade e descrição pessoal. Algumas dessas
                    informações, conforme indicado nas configurações da sua Conta, fazem parte da página do seu perfil público e serão publicamente
                    visíveis.
                </p>
                <p>
                    <strong>Outras informações.</strong>Por exemplo, quando você preenche um formulário, adiciona informações à sua conta, responde a
                    pesquisas, posta em fóruns da comunidade, participa de promoções, se comunica com o Atendimento ao Cliente Airbnb e com outros
                    Membros, importa ou insere manualmente contatos, fornece seu endereço e/ou localização geográfica ou compartilha sua experiência
                    conosco. Isso pode incluir informações de saúde se você optar por compartilhá-las conosco.
                </p>
                <h3>2.3 Informações coletadas automaticamente quando você usa a Loja Tropical Cacau e nossos Serviços de Pagamento.</h3>
                <p>
                    Quando você usa a Loja Tropical Cacau e os Serviços de Pagamento, coletamos automaticamente dados pessoais e outros tipos de
                    dados. Essas informações podem incluir:
                </p>
                <p>
                    <strong>Informações de geolocalização.</strong> Como a localização precisa ou aproximada determinada a partir do seu endereço de
                    IP, celular ou GPS de outro dispositivo, ou outras informações que você compartilha conosco, dependendo das configurações do seu
                    dispositivo. Também podemos coletar essas informações quando você não estiver usando o aplicativo se você habilitar isso por meio
                    de suas configurações ou permissões de dispositivo.
                </p>
                <p>
                    <strong>Informações de uso.</strong> Como páginas e conteúdo que você visualiza, buscas por Anúncios, reservas que você fez,
                    serviços extras que você adicionou e outras ações na Plataforma Airbnb.
                </p>
                <p>
                    <strong>Dados de log e informações do dispositivo.</strong> Como detalhes sobre como você usou a Plataforma Airbnb (incluindo se
                    você clicou em links para aplicativos de terceiros), endereço de IP, datas e horários de acesso, informações de hardware e
                    software, informações do dispositivo, informações de eventos do dispositivo, identificadores exclusivos, dados de falha e as
                    páginas que você visualizou ou interagiu antes e depois de usar a Plataforma Airbnb. Podemos coletar essas informações mesmo que
                    você não tenha criado ou acessado uma conta do Airbnb.
                </p>
                <p>
                    <strong>Cookies e tecnologias semelhantes</strong>, conforme descrito em nossa <a href="#Cookies">Política de cookies</a>.
                </p>
                <p>
                    <strong>Informações de transação de pagamento.</strong> Como instrumento de pagamento usado, data e hora, valor do pagamento, data
                    de vencimento do instrumento de pagamento e código postal de cobrança, endereço de email do PayPal, informações do IBAN, seu
                    endereço e outras informações relacionadas à transação.
                </p>
            </div>
        </m.div>
    );
}
