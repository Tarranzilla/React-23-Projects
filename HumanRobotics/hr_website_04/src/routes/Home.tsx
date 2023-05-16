import { motion as m } from "framer-motion";

export default function Home() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Route_Container">
                <div className="Home_Title_Group">
                    <m.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.1 }}
                        className="Route_Title Home_Title"
                    >
                        O futuro da robótica é <strong>Interativo</strong>
                    </m.h1>
                    <m.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.1 }}
                        className="Route_Title Home_Title"
                    >
                        O futuro da robótica é <strong>Humano</strong>
                    </m.h1>
                    <m.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.1 }}
                        className="Route_Title Home_Title"
                    >
                        O futuro da robótica é <strong>Agora</strong>
                    </m.h1>
                </div>
            </m.div>
        </>
    );
}
