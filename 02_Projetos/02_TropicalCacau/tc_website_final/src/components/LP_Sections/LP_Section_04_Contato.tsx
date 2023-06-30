import { forwardRef } from "react";

import backgroundImg from "../../assets/cacau_textures/dalle4.png";

const LP_Section_04_Contato = forwardRef(function LP_Section_04_Contato(props, ref: any) {
    return (
        <div className="LP_Section LP_Section_04_Contato" id="LP_Section_4" ref={ref} key={"LP_Section_4"}>
            <img src={backgroundImg} alt="background" className="Section_04_Background" />
        </div>
    );
});

export default LP_Section_04_Contato;
