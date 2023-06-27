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
            <p>Tropical Cacau 2023</p>
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
