import { motion as m } from "framer-motion";

export default function NotFound() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Route_Container">
                <h1 className="Route_Title">Erro 404</h1>
                <h1 className="Route_Title">Página não Encontrada</h1>
            </m.div>
        </>
    );
}
