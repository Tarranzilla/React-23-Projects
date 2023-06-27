// © 2023 Tropical Cacau, Ltda. | Privacidade | Termos | Mapa do site

//Icon imports
import Icon_Whatsapp from "./Icons/Icon_Whatsapp";
import Icon_Instagram from "./Icons/Icon_Instagram";
import Icon_Facebook from "./Icons/Icon_Facebook";
import Icon_Twitter from "./Icons/Icon_Twitter";
import Icon_Linkedin from "./Icons/Icon_Linkedin";

export default function Footer() {
    return (
        <div className="Footer" key={"Footer"}>
            <div className="Footer_Info_Links Desktop_Only">
                <a href="#Privacidade" className="Footer_Info">
                    Privacidade
                </a>
                <a href="#Termos" className="Footer_Info Middle_Info">
                    Termos
                </a>
                <a href="#MapaSite" className="Footer_Info">
                    Mapa do site
                </a>
            </div>
            <p className="Footer_Copyright">© 2023 Tropical Cacau</p>
            <div className="Social_Media_Container">
                <Icon_Whatsapp />
                <Icon_Linkedin />
                <Icon_Facebook />
                <Icon_Instagram />
                <Icon_Twitter />
            </div>
        </div>
    );
}
