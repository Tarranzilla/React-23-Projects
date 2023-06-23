import React from "react";
import { Link } from "react-router-dom";

const RobotCard = ({ title, subtitle, imageSrc, backgroundSrc, link }) => {
    return (
        <div className={`Robot_Card ${title === "AVATAR" ? "First_Robot_Card" : ""}`} id={title.toLowerCase()}>
            <div className="Robot_Card_Title_Container">
                <h3 className="Robot_Card_Title Robot_Card_SubTitle">RobiOS</h3>
                <h2 className="Robot_Card_Title">{title}</h2>
            </div>

            <Link to={link} className="Robot_Button">
                + Informações
            </Link>

            <div className="Robot_Image_Container">
                <img src={imageSrc} className="Robot_Main_Image" alt={title} />
                <img src={backgroundSrc} className="Robot_Background_Image" alt={title} />
            </div>
        </div>
    );
};

export default RobotCard;
