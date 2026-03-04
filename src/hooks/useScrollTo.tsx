import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const useScrollToTag = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (location.hash == "rehabilitacion_escritura" || location.hash == "reeducacion_escritura") {
                window.scrollTo(0, 0);
            }else{
                setTimeout(() => {
                    element?.scrollIntoView({ behavior: "smooth" });
                }, 300);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

};
