import { motion as m } from "framer-motion";

import Avatar from "../assets/images/Robios_AVATAR_New.png";
import AvatarBg from "../assets/images/Robios_AVATAR_New_Background.png";
import Go from "../assets/images/Robios_GO_New.png";
import GoBg from "../assets/images/Robios_GO_New_Background.png";
import Inspector from "../assets/images/Robios_INSPECTOR_New.png";
import InspectorBg from "../assets/images/Robios_INSPECTOR_New_Background.png";
import Cargo from "../assets/images/Robios_CARGO_New.png";
import CargoBg from "../assets/images/Robios_CARGO_New_Background.png";

export default function Robots() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Route_Container">
                <div className="Robots_Container">
                    <a href="#avatar" className="Robot_Card" id="avatar">
                        <div className="Robot_Card_Title_Container">
                            <h3 className="Robot_Card_Title Robot_Card_SubTitle">RobiOS</h3>
                            <h2 className="Robot_Card_Title">AVATAR</h2>
                        </div>
                        <div className="Robot_Image_Container">
                            <img src={Avatar} className="Robot_Main_Image"></img>
                            <img src={AvatarBg} className="Robot_Background_Image"></img>
                        </div>
                    </a>

                    <a href="#go" className="Robot_Card" id="go">
                        <div className="Robot_Card_Title_Container">
                            <h3 className="Robot_Card_Title Robot_Card_SubTitle">RobiOS</h3>
                            <h2 className="Robot_Card_Title">GO</h2>
                        </div>

                        <div className="Robot_Image_Container">
                            <img src={Go} className="Robot_Main_Image"></img>
                            <img src={GoBg} className="Robot_Background_Image"></img>
                        </div>
                    </a>

                    <a href="#inspector" className="Robot_Card" id="inspector">
                        <div className="Robot_Card_Title_Container">
                            <h3 className="Robot_Card_Title Robot_Card_SubTitle">RobiOS</h3>
                            <h2 className="Robot_Card_Title">INSPECTOR</h2>
                        </div>

                        <div className="Robot_Image_Container">
                            <img src={Inspector} className="Robot_Main_Image"></img>
                            <img src={InspectorBg} className="Robot_Background_Image"></img>
                        </div>
                    </a>

                    <a href="#cargo" className="Robot_Card" id="cargo">
                        <div className="Robot_Card_Title_Container">
                            <h3 className="Robot_Card_Title Robot_Card_SubTitle">RobiOS</h3>
                            <h2 className="Robot_Card_Title">CARGO</h2>
                        </div>

                        <div className="Robot_Image_Container">
                            <img src={Cargo} className="Robot_Main_Image"></img>
                            <img src={CargoBg} className="Robot_Background_Image"></img>
                        </div>
                    </a>
                </div>
            </m.div>
        </>
    );
}
