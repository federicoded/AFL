
import { useState } from "react";
import "./Header_Dropdown.css";
import { Link, useNavigate } from "react-router-dom";

type SubmenuOption = {
    title: string;
    link: string;
}

type MenuItem = {
    label: string;
    submenu: SubmenuOption[];
};



const menuItems: MenuItem[] = [ 
    {
        label: "Para Niños y Adolescentes",
        submenu: [
            {
                title: "Entrenamiento de la escritura",
                link: "/services/nya#rehabilitacion_escritura"
            },
            {
                title: "Orientación vocacional",
                link: "/services/nya#orientacion_vocacional"
            },
            {
                title: "Detección de neurodivergencias",
                link: "/services/nya#neurodivergencias"
            },
        ]
    },
    {
        label: "Para Jóvenes y Adultos",
        submenu: [
            {
                title: "Reeducación de la escritura",
                link: "/services/adlts#reeducacion_escritura"
            },
            {
                title: "Perfil Psicológico",
                link: "/services/adlts#perfil_psicologico"
            },
            {
                title: "Orientacion Vocacional y Profesional",
                link: "/services/adlts#orientacion_vocacional"
            },

        ]
    },
];

const Header_Dropdown = () => {

    const [open, setOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const navigate = useNavigate();

    const submenu_redirect = (location: string) => {
        setTimeout(() => {
            setOpen(!open);
            setActiveSubmenu(null);
            navigate(location);
        }, 100);
    }

    return (
        <div className="dropdown"
        >
            <div className="dropdown_button" onClick={() => setOpen(!open)}>
                Servicios
            </div>

            {open && (
                <ul className="dropdown_menu"

                >
                    {menuItems.map((item, index) => (
                        <>
                            <li
                                key={item.label}
                                className="dropdown_item"
                                onClick={() => { setActiveSubmenu(item.label); }}
                            /*onMouseLeave={() => setActiveSubmenu(null)}       -> hacer que solo se ejecute cuando es desktop*/
                            >
                                <span className="dropdown_item_label">
                                    {item.label}
                                </span>

                                {activeSubmenu === item.label && ( ///si el item tiene submenu y el submenu activo entonces se rederiza el submenu:
                                    <ul className="submenu" >
                                        {item.submenu.map((sub, i) => (
                                            <li key={sub.title} className="submenu_item" onClick={() => submenu_redirect(item.submenu[i].link)}>{"‣\u00A0 \u00A0" + sub.title}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            {index == menuItems.length - 1 ? null : <hr className="menu_divider"></hr>}
                        </>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Header_Dropdown;
