import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const routes = [
    {
        path: "/",
        name: "Home",
        icon: "home",
    },
    {
        path: "/robos",
        name: "Robôs",
        icon: "android",
    },
    {
        path: "/servicos",
        name: "Serviços",
        icon: "hub",
    },
    {
        path: "/experiencia",
        name: "Experiência",
        icon: "psychology",
    },
    {
        path: "/sobre",
        name: "Sobre",
        icon: "foundation",
    },
    {
        path: "/contato",
        name: "Contato",
        icon: "campaign",
    },
    {
        path: "/menu",
        name: "Menu",
        icon: "menu",
        subRoutes: [
            {
                path: "/login",
                name: "Login",
                icon: "menu",
            },
            {
                path: "/blog",
                name: "Blog",
                icon: "menu",
            },
            {
                path: "/duvidas",
                name: "Dúvidas",
                icon: "menu",
            },
            {
                path: "/preferencias",
                name: "Dúvidas",
                icon: "menu",
            },
            {
                path: "/studio",
                name: "Robios Studio",
                icon: "menu",
            },
        ],
    },
];

export default function MenuExperiment() {
    const [prefOpen, setPrefOpen] = useState(false);

    const prefOpenHandler = () => {
        setPrefOpen(!prefOpen);
    };

    const MenuPrefAnimation = {
        hidden: {
            opacity: 0,
            width: 0,
            padding: 0,
        },

        visible: {
            opacity: 1,
            width: "100%",
            padding: "16px",
            transition: {
                when: "beforeChildren", // Animate children before parent, so it doesn't overlap. Could also be "afterChildren".
                type: "spring",
                duration: 0.5,
                damping: 11,
            },
        },
    };

    const SubItemAnimation = {
        hidden: (index: number) => ({
            x: "-100%",
            opacity: 0,
            padding: 0,
            transition: {
                duration: (index + 1) * 0.5,
            },
        }),

        visible: (index: number) => ({
            x: 0,
            opacity: 1,
            padding: "16px",
            transition: {
                type: "spring",
                duration: (index + 1) * 0.5,
                damping: 11,
            },
        }),
    };

    return (
        <div className="main_container">
            <button className="menu_button" onClick={prefOpenHandler}>
                <span className="material-icons">menu</span>
            </button>

            {routes.map((route, index) => {
                return (
                    <>
                        <NavLink to={route.path} key={index}>
                            <span className="material-icons">{route.icon}</span>
                            <span>{route.name}</span>
                        </NavLink>

                        {route.subRoutes && (
                            <AnimatePresence>
                                <div>
                                    {route.subRoutes.map((subRoute, index) => {
                                        return (
                                            <NavLink to={subRoute.path} key={index}>
                                                <m.div initial="hidden" animate="visible" exit="hidden" custom={index} variants={SubItemAnimation}>
                                                    <span className="material-icons">{subRoute.icon}</span>
                                                    <span>{subRoute.name}</span>
                                                </m.div>
                                            </NavLink>
                                        );
                                    })}
                                </div>
                            </AnimatePresence>
                        )}
                    </>
                );
            })}

            <AnimatePresence>
                {prefOpen && (
                    <m.div initial="hidden" animate="visible" exit="hidden" variants={MenuPrefAnimation} className="menu_preferences">
                        <h2>Preferências</h2>
                        <ul>
                            <li>
                                <span className="material-icons">language</span>
                                <span>Idioma: Português Brasileiro</span>
                            </li>
                            <li>
                                <span className="material-icons">palette</span>
                                <span>Tema: RobiOS Dark</span>
                            </li>
                            <li>
                                <span className="material-icons">settings</span>
                                <span>Configurações de Cookies: Permitir Todos</span>
                            </li>
                        </ul>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
}
