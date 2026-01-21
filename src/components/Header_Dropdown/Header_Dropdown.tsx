import { useState } from "react";
import "./Header_Dropdown.css";

type MenuItem = { 
    /// definimos cómo debe ser el item del menú, cada uno tiene una etiqueta y puede tener opcionalmente un submenú
    // Type es como una clase pero no se instancia ni tiene lógica, solo se usa para definir tipos de datos.
    label: string;
    submenu?: string[];
};

const menuItems: MenuItem[] = [ // se definen los objetos MenuItem que tiene el menú
    { label: "Niños y Adolescentes", submenu: ["Orientación Vocacional", "Reeducación de escritura", "Detección de riesgos"] },
    { label: "Jóvenes y Adultos", submenu: ["Orientación Vocacional", "Perfil Profesional", "Perfil Psicológico"] },
    { label: "Organizaciones", submenu: ["Test psicotécnico", "Saber más"] }
];

const Header_Dropdown = () => {
    const [open, setOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    return (
        <div className="dropdown"
        onMouseLeave={() => setOpen(false)}>
            <div className="dropdown-button" onMouseEnter={() => setOpen(!open)}>
                Servicios
            </div>

            {open && ( 
                <ul className="dropdown-menu">
                    {menuItems.map(item => ( 
                        <li
                            key={item.label}
                            className="dropdown-item"
                            onMouseEnter={() => setActiveSubmenu(item.label)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                        >
                            <span>
                                {item.label}
                                {item.submenu && " "}
                            </span>

                            {item.submenu && activeSubmenu === item.label && ( ///si el item tiene submenu y el submenu activo entonces se rederiza el submenu:
                                <ul className="submenu">
                                    {item.submenu.map(sub => (
                                        <li key={sub}>{sub}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Header_Dropdown;
