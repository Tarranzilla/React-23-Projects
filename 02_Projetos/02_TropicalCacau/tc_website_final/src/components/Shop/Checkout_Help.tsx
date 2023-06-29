// Frame Motion Imports
import { motion as m } from "framer-motion";

// Redux Imports
import { useDispatch } from "react-redux";
import { toggleCheckoutHelp } from "../../context/main_context";

export default function Checkout_Help() {
    const dispatch = useDispatch();

    const toggleCheckoutHelpButton = () => {
        dispatch(toggleCheckoutHelp());
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Help_Container">
            <div className="Help_Header">
                <span className="material-icons">info</span>
                <h3 className="Help_Title">Como a compra é finalizada ?</h3>
                <button className="Help_Container_Close_Btn" onClick={toggleCheckoutHelpButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="Help_Text_Container">
                <p className="Checkout_Help_Text">Todas as compras são efetuadas através do serviço do Mercado Pago.</p>
                <p className="Checkout_Help_Text">
                    Lá você poderá preencher seus dados pessoais de compra e o endereço de entrega com segurança e praticidade, podendo acompanhar o
                    envio do produto em tempo real.
                </p>
                <p className="Checkout_Help_Text">Você pode conferir as políticas de segurança da empresa clicando no link abaixo:</p>
                <a
                    href="https://www.mercadopago.com.br/ajuda/dinheiro-seguranca-compras_328"
                    target="_blank"
                    rel="noopener"
                    className="MercadoPago_Link"
                >
                    <span className="material-icons">open_in_new</span>
                    <p>Como protegemos os compradores</p>
                </a>
            </div>
        </m.div>
    );
}
