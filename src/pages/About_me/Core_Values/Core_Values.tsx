import "./Core_Values.css"
import { useState } from "react";

type core_value = {
    name: string;
    description: string;
    icon: string;
}

const Core_values: core_value[] = [
    {
        name: "Cientificidad",
        description: "La Grafología es una ciencia humana, posee técnicas de observación e interpretación, permite el estudio de la personalidad del escribiente mediante el examen de la escritura.",
        icon: "value_cientificiadad"
    },
    {
        name: "Confidencialidad",
        description: "Los resultados de un grafoanálisis cuentan con el 100% de confidencialidad para el consultante y jamás se comunicarán o publicarán textos o informes sin la conformidad explícita del mismo.",
        icon: "value_confidencialidad"
    },
    {
        name: "Calidad de Servicio",
        description: "AFL Grafoanálisis estudia la personalidad del escribiente trabajando exclusivamente con documentos manuscritos originales y llevando a cabo una tarea de análisis y de síntesis para responder a una demanda de orden profesional o privada.",
        icon: "value_calidad"
    },
    {
        name: "Capacitación Continua",
        description: "AFL Grafoanálisis permanentemente se encuentra actualizando sus conocimientos para mejorar sus servicios.",
        icon: "value_capacitacion"
    },
    {
        name: "Seriedad y Responsabilidad",
        description: "Los profesionales que trabajamos apoyando la educación brindamos un servicio valioso para que las personas puedan ser más autónomas y libres.",
        icon: "value_seriedad"
    },
    {
        name: "Área de competencia",
        description: "AFL Grafoanálisis se compromete a emplear únicamente los métodos inherentes a su especialidad y a trabajar dentro de los límites de sus conocimientos y de la propia experiencia.",
        icon: "value_competencia"
    },

];

const Core_Values_Section = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <div className="core_values">
                <h1>Mis valores</h1>
                <ul>
                    {Core_values.map((value, index) => (
                        <>
                            <li>
                                <h3
                                    key={index}
                                    onClick={() => toggle(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    {value.name}
                                    <img src={"/about_me/" + value.icon + ".svg"} className="value_icon" />
                                </h3>
                                {openIndex === index && (
                                    <div className="value_description_container">
                                        <p>
                                            {value.description}
                                        </p>

                                    </div>
                                )}

                            </li>
                        </>
                    ))}


                </ul>
                <div className="mini_divider"></div>
            </div>
        </>
    )
}

export default Core_Values_Section;