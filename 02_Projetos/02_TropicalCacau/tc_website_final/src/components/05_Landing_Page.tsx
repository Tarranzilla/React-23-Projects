// LP = Landing Page
import LP_Section_01_Inicio from "./LP_Sections/LP_Section_01_Inicio";
import LP_Section_02_Sobre from "./LP_Sections/LP_Section_02_Sobre";
import LP_Section_03_Produtos from "./LP_Sections/LP_Section_03_Produtos";
import LP_Section_04_Contato from "./LP_Sections/LP_Section_04_Contato";

import Divider from "./06_Divider";

export default function LandingPage() {
    return (
        <div className="Landing_Page">
            <Divider />
            <LP_Section_01_Inicio />
            <Divider />
            <LP_Section_02_Sobre />
            <Divider />
            <LP_Section_03_Produtos />
            <Divider />
            <LP_Section_04_Contato />
            <Divider />
        </div>
    );
}
