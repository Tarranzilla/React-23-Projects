import { motion as m } from "framer-motion";

import Avatar from "../assets/images/RobiOS_AVATAR.png";
import Go from "../assets/images/RobiOS_GO.png";
import Inspector from "../assets/images/RobiOS_INSPECTOR.png";
import Cargo from "../assets/images/RobiOS_CARGO.png";

export default function Robots() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Route_Container">
                <div className="Robots_Container">
                    <div className="Robot_Card">
                        <h2>Avatar</h2>
                        <img src={Avatar} className="Robot_Main_Image"></img>
                    </div>

                    <div className="Robot_Card">
                        <h2>GO</h2>
                        <img src={Go} className="Robot_Main_Image"></img>
                    </div>

                    <div className="Robot_Card">
                        <h2>INSPECTOR</h2>
                        <img src={Inspector} className="Robot_Main_Image"></img>
                    </div>

                    <div className="Robot_Card">
                        <h2>CARGO</h2>
                        <img src={Cargo} className="Robot_Main_Image"></img>
                    </div>
                </div>
            </m.div>
        </>
    );
}
