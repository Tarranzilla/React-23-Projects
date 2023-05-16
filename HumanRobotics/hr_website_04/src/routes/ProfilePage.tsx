import { motion as m } from "framer-motion";

export default function ProfilePage() {
    return (
        <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Route_Container">
                <h1 className="Route_Title">Profile Page</h1>
            </m.div>
        </>
    );
}
