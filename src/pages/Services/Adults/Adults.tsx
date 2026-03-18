import "../Service.css";
import "../../../components/Common_Section/Common_Section";
import Service from "../Services_components/Service";
import { useScrollToTag } from "../../../hooks/useScrollTo";

const Adults = () => {
    useScrollToTag();

    return (<>
        <div className="page service_page">
            <div className="service_introduction">
            </div>
            <div className="mini_divider"></div>
            <Service
                service_id="reeducacion_escritura"
                service_title="Reeducación de la escritura"
                bg_image="/services/lady_writing.png"
                slide_1_items={[
                    "Realización de informe grafopsicológico inicial",
                   /* "Identificación de trastornos de la escritura a partir de la detección de anomalías en los grafismos",*/
                    "Modificación del gesto gráfico mediante plan de actuación",
                    "Plan con ejercicios específicos personalizados",
                    "Reuniones de seguimiento, idividuales y con familiares directos",
                    "Encuentros presenciales"
                ]}
                cards_content={[
                    {
                        icon_link: "/services/meeting.svg",
                        title: "Reunión inicial",
                        items: [
                            "Primer encuentro con consultante y/o con familiares directos",
                            "Se dialogan inquietudes",
                            "Se define plan de acompañamiento",
                            "60 minutos de duración"
                        ]
                    },
                    {
                        icon_link: "/services/checklist.svg",
                        title: "Sesiones de seguimiento",
                        items: [
                            "Individuales y/o con familiares directos.",
                            "Toma de muestras grafológicas",
                            "Reuniones semanales de 45-60 minutos"
                        ]
                    },
                    {
                        icon_link: "/services/goal.svg",
                        title: "Rehabilitación de la escritura",
                        items: [
                            "El número de sesiones puede variar según el perfil del consultante",
                            "Encuentro final con familiares",
                            "Entrega de informe final con recomendaciones a futuro"
                        ]
                    },
                ]}
            />

            <div className="mini_divider"></div>
            <Service
                service_id="perfil_psicologico"
                service_title="Perfil psicológico"
                bg_image="/services/perfil_psico.png"
                slide_1_items={[
                    "Estudio de la personalidad a través del análisis de la escritura manuscrita",
                    "Análisis de grafismos (movimiento, espacio, forma)",
                    "Informes a partir de las 3 semanas",
                    "Orientado a personas de todas las edades",
                    "Presencial o virtual",
                ]}
                cards_content={[
                    {
                        icon_link: "/services/meeting.svg",
                        title: "Reunión inicial",
                        items: [
                            "Primer encuentro con familiares directos o profesionales interesados",
                            "Se dialogan inquietudes",
                            "Se establece plan inicial",
                            "Duración: 60 minutos"
                        ]
                    },
                    {
                        icon_link: "/services/checklist.svg",
                        title: "Reuniones con consultante",
                        items: [
                            "2 encuentros dedicados a la toma de muestras grafológicas",
                            "Análisis de los grafismos",
                            "Entre 4 y 6 encuentros, de acuerdo a los avances",

                        ]
                    },
                    {
                        icon_link: "/services/goal.svg",
                        title: "Reunión final",
                        items: [
                            "Encuentro final con familiares directos o profesionales",
                            "Entrega de informe escrito con perfil psicológico y características halladas en los grafismos.",
                        ]
                    },

                ]}
            />
            <div className="mini_divider"></div>
            <Service
                service_id="orientacion_vocacional"
                service_title="Orientación vocacional y profesional"
                bg_image="/services/prof_orientation.png"
                slide_1_items={[
                    "Entrevista y realización de tests",
                    "Identificación de aptitudes y actitudes que complementan las características psicológicas",
                    "Determinación de opciones de carreras o profesiones afines del perfil del consultante",
                    "Presencial o Virtual",
                ]}
                cards_content={[
                    {
                        icon_link: "/services/meeting.svg",
                        title: "Reunión inicial",
                        items: [
                            "Primer encuentro para dialogar necesidades",
                            "Se establece un plan de acompañamiento",
                            "Entre 45 y 60 minutos"
                        ]
                    },
                    {
                        icon_link: "/services/checklist.svg",
                        title: "Reuniones de acompañamiento",
                        items: [
                            "Proceso no lineal",
                            "Entrevistas y toma de muestras gráficas",
                            "Encuentros semanales de 1 hora",
                            "La cantidad de encuentros puede variar de acuerdo al consultante"
                        ]
                    },
                    {
                        icon_link: "/services/goal.svg",
                        title: "Encuentro final",
                        items: [
                            "Entrega de informe psicografológico con descripción del perfil psicológico del consultante y una propuesta estratégica de carreras o profesiones afines basadas en sus aptitudes.",
                        ]
                    },
                ]}
            />
            <div className="mini_divider"></div>
        </div>
    </>)
}

export default Adults;