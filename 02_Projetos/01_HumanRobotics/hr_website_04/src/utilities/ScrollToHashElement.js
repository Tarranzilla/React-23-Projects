import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
    let location = useLocation();

    let hashElement = useMemo(() => {
        let hash = location.hash;
        const removeHashCharacter = (str) => {
            const result = str.slice(1);
            console.log(result);
            return result;
        };

        if (hash) {
            let element = document.getElementById(removeHashCharacter(hash));
            return element;
        } else {
            return null;
        }
    }, [location]);

    useEffect(() => {
        if (hashElement) {
            console.log("scrolling to hash element");
            console.log(hashElement);

            hashElement.scrollIntoView({
                behavior: "smooth",
                // block: "end",
                inline: "nearest",
            });
        }
    }, [hashElement]);

    return null;
};

export default ScrollToHashElement;
