import "../Service.css";
import "../../../components/Common_Section/Common_Section";
import Service from "../Services_components/Service";
import { useScrollToTag } from "../../../hooks/useScrollTo"

const Kids_and_teens = () => {

    useScrollToTag();
    return (
        <>
            <div className="page service_page">
                <div className="service_introduction">
                </div>
                <Service
                    service_id="rehabilitacion_escritura"
                    service_title="Entrenamiento de la escritura"
                    bg_image="/services/kid_writing.png"
                    slide_1_items={["Identificación de la disgrafía y otros trastornos de la escritura", 
                        "Modificación del gesto gráfico mediante plan de actuación", 
                        "Plan con ejercicios personalizados", 
                        "Instancias de seguimiento", 
                        "100% Presencial"]}
                    cards_content={[
                        {
                            icon_link: "/services/meeting.svg",
                            title: "Reunión inicial",
                            items: [
                                "Primer encuentro con familiares directos u otros referentes",
                                "Se dialoga necesidad",
                                "Se define plan de acompañamiento",
                                "Entre 45 y 60 minutos"
                            ]
                        },
                        {
                            icon_link: "/services/checklist.svg",
                            title: "Sesiones de seguimiento",
                            items: [
                                "Individuales y/o con referentes afectivos u otros profesionales.",
                                "Sesiones semanales entre 45 y 60 minutos",
                                "Toma de muestras grafológicas"
                            ]
                        },
                        {
                            icon_link: "/services/goal.svg",
                            title: "Rehabilitación de la escritura",
                            items: [
                                "El número de sesiones puede variar según el perfil del consultante",
                                "Encuentro final con familiares o referentes",
                                "Entrega de informe final con recomendaciones"
                            ]
                        },
                    ]}
                />
                <div className="mini_divider"></div>
                <Service
                    service_id="orientacion_vocacional"
                    service_title="Orientación vocacional para adolescentes"
                    bg_image="/services/orientacion.png"
                    slide_1_items={[
                        "Entrevista y realización de test",
                        "Detección de aptitudes y actitudes que complementan las características psicológicas.",
                        "Determinación de opciones de carreras afines del perfil psicológico",
                        "Presencial o Virtual",
                    ]}
                    cards_content={[
                        {
                            icon_link: "/services/meeting.svg",
                            title: "Reunión inicial",
                            items: [
                                "Primer encuentro con familiares directos o referentes",
                                "Se dialogan inquietudes",
                                "Se establece un plan de acompañamiento",
                                "Entre 45 y 60 minutos"
                            ]
                        },
                        {
                            icon_link: "/services/checklist.svg",
                            title: "Encuentros interactivos",
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
                                "Encuentro final con familiares directos o referentes",
                                "Entrega de informe con perfil psicológico y recomendaciones de carreras afines de dicho perfil.",
                            ]
                        },
                    ]}
                />
                <div className="mini_divider"></div>
                <Service
                    service_id="neurodivergencias"
                    service_title="Detección de neurodivergencias "
                    bg_image="/services/neurodivergencia.png"
                    slide_1_items={[
                        "Identificación de la disgrafía y otros trastornos de la escritura",
                        "Práctica del gesto gráfico mediante plan de actuación",
                        "Se entrega plan de práctica con ejercicios personalizados",
                        "Instancias de seguimiento idividuales y con familiares directos u otros referentes",
                        "100% Presencial"]}
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
                                "Encuentros semanales con el menor para la toma de muestras grafológicas",
                                "Análisis de anomalías en los grafismos",
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
            </div>
        </>
    )
}

export default Kids_and_teens