import React, { forwardRef } from "react";
import { motion as m, useInView } from "framer-motion";

import RobotCard from "../../components/RobotCard";

import Avatar from "../../assets/images/Robios_AVATAR_New.png";
import AvatarBg from "../../assets/images/Robios_AVATAR_New_Background.png";
import Go from "../../assets/images/Robios_GO_New.png";
import GoBg from "../../assets/images/Robios_GO_New_Background.png";
import Inspector from "../../assets/images/Robios_INSPECTOR_New.png";
import InspectorBg from "../../assets/images/Robios_INSPECTOR_New_Background.png";
import Cargo from "../../assets/images/Robios_CARGO_New.png";
import CargoBg from "../../assets/images/Robios_CARGO_New_Background.png";

const Robots = forwardRef(function Robots(props, ref: any) {
    const isInView = useInView(ref, { once: true });

    const robotData = [
        {
            id: "avatar",
            title: "AVATAR",
            subtitle: "RobiOS",
            imageSrc: Avatar,
            backgroundSrc: AvatarBg,
            link: "/avatar-info",
        },
        {
            id: "go",
            title: "GO",
            subtitle: "RobiOS",
            imageSrc: Go,
            backgroundSrc: GoBg,
            link: "/go-info",
        },
        {
            id: "inspector",
            title: "INSPECTOR",
            subtitle: "RobiOS",
            imageSrc: Inspector,
            backgroundSrc: InspectorBg,
            link: "/inspector-info",
        },
        {
            id: "cargo",
            title: "CARGO",
            subtitle: "RobiOS",
            imageSrc: Cargo,
            backgroundSrc: CargoBg,
            link: "/cargo-info",
        },
    ];

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="Route_Container"
            id="LP_Section_02"
            key="LP_Section_02"
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
        >
            <div className="Robots_Container">
                {robotData.map((robot) => (
                    <RobotCard
                        key={robot.id}
                        title={robot.title}
                        subtitle={robot.subtitle}
                        imageSrc={robot.imageSrc}
                        backgroundSrc={robot.backgroundSrc}
                        link={robot.link}
                    />
                ))}
            </div>
        </m.div>
    );
});

export default Robots;
