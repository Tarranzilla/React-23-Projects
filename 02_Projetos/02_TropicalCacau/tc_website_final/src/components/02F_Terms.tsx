//Framer Motion Imports
import { motion as m } from "framer-motion";

// React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleTerms, togglePrivacyPolicy, toggleSiteMap } from "../context/main_context";

export default function Terms() {
    const dispatch = useDispatch();
    const privacyPolicyIsOpen = useSelector((state: any) => state.privacyPolicyIsOpen);
    const siteMapIsOpen = useSelector((state: any) => state.siteMapIsOpen);

    const toggleTermsButton = () => {
        dispatch(toggleTerms());

        if (privacyPolicyIsOpen) {
            dispatch(togglePrivacyPolicy());
        }

        if (siteMapIsOpen) {
            dispatch(toggleSiteMap());
        }
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Terms_Container">
            <div className="Terms_Header">
                <span className="material-icons Terms_Icon">info</span>
                <h2 className="Terms_Title">Termos de Serviço</h2>
                <button className="Terms_Close_Btn" onClick={toggleTermsButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="Terms_Body">
                <p>
                    Nossos Termos de Serviço explicam seus direitos legais e certas obrigações legais que você tem. Eles também explicam as regras que
                    se aplicam ao uso da Loja Tropical Cacau.
                </p>
            </div>
        </m.div>
    );
}
