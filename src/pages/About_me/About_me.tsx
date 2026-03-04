import "./About_me.css";
import Common_Section from "../../components/Common_Section/Common_Section";
import Mini_Section from "../../components/Mini_Section/Mini_Section";
import Pre_footer from "../../components/Pre_footer/Pre_footer";
import ReactPlayer from 'react-player';
import { useScrollToTag } from "../../hooks/useScrollTo";
import Core_Values_Section from "./Core_Values/Core_Values";



const About_me = () => {

    useScrollToTag()
    return (
        <main className="page">
            <div className="About_me_page">
                <Common_Section
                    id="first_element"
                    className="about_me_intro"
                    full_content={
                        <>
                            <div className="intro_text">
                                <h1>Mi nombre es <br></br><span className="afl_name">Alejandra Fripp Lozano</span></h1>
                                <h2>Soy Técnica Superior en Grafología</h2>
                                <p>
                                    Atiendo cada demanda con compromiso, seriedad y dedicación, lo que hace de esta práctica una experiencia sumamente gratificante.
                                </p>
                            </div>
                            <div className="afl_photo_container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 736.435 489.936" className="Shape01">
                                    <defs>
                                        <filter id="shape01_a" width="1.009" height="1.264" x="-.002" y="-.128">
                                            <feFlood flood-color="#000" flood-opacity=".498" result="flood" />
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="0.4 25.425" />
                                            <feOffset dx="2.5" dy="3.4" in="blur" result="offset" />
                                            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
                                            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
                                        </filter>
                                        <filter id="shape01_b" width="1.006" height="1.299" x="-.001" y="-.144">
                                            <feFlood flood-color="#1c1c1c" flood-opacity=".376" result="flood" />
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="0.4 17.068" />
                                            <feOffset dx="2.5" dy="3.4" in="blur" result="offset" />
                                            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
                                            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
                                        </filter>
                                        <filter id="shape01_c" width="1.174" height="1.27" x="-.083" y="-.128" >
                                            <feFlood flood-color="#1c1c1c" flood-opacity=".376" result="flood" />
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="9.623 12.853" />
                                            <feOffset dx="2.5" dy="3.4" in="blur" result="offset" />
                                            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
                                            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
                                        </filter>
                                        <filter id="shape01_d" width="1.12" height="1.19" x="-.05" y="-.09" className="filter">
                                            <feFlood flood-color="#000" flood-opacity=".5" result="flood" />
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="5.698 9.997" />
                                            <feOffset dx="2.5" dy="3.4" in="blur" result="offset" />
                                            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
                                            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
                                        </filter>
                                    </defs>
                                    <g transform="translate(-38.173 -44.951)">
                                        <path className="shape s1" d="M371.455 175.053c-17.438 61.501-3.786 146.531-59.164 178.464-53.8 31.022-118.051-24.896-177.799-41.837-61.5-17.437-146.53-3.786-178.463-59.164-31.022-53.799 24.896-118.05 41.836-177.798 17.437-61.5 3.786-146.531 59.164-178.463 53.8-31.022 118.051 24.896 177.799 41.836 61.5 17.437 146.53 3.786 178.463 59.164 31.022 53.8-24.896 118.051-41.836 177.798" transform="matrix(.80702 0 0 .74643 218.459 216.052)" filter="url(#shape01_a)" />
                                        <path className="shape s2" d="M712.085 185.22c29.296-7.11 75.29-1.96 79.242 35.223 13.944 79.768-20.638 167.257-87.318 213.615-31.317 18.964-67.608 2.008-100.72-1.595C414.559 398.858 608.15 594.253 84 315.022c-60.983-38.75-5.774-50.989 25.034-53.66 200.899-26.215 400.767-61.698 603.05-76.142" transform="matrix(.95942 -.08757 .0655 .80772 -24.417 89.841)" filter="url(#shape01_b)" />
                                        <ellipse className="shape s3" cx="266.85" cy="147.301" rx="139.829" ry="120.616" transform="matrix(.91873 0 0 .97212 47.14 51.653)" filter="url(#shape01_c)" />
                                        <path className="shape s4" d="M571.534 335.823c-8.808 21.66-63.436 56.297-86.616 53.225-37.32-4.946-117.795-53.575-140.906-83.294-14.353-18.458-17.036-83.086-2.786-101.624 22.944-29.848 105.295-75.227 142.587-80.382 23.163-3.201 80.473 26.79 89.403 48.4 14.377 34.793 12.5 128.8-1.682 163.675" transform="matrix(1.36524 0 0 1.20486 -118.219 -61.335)" filter="url(#shape01_d)" />
                                        <circle cx="134.726" cy="263.79" r="10.944" className="circulito" />
                                        <circle cx="455.486" cy="59.524" r="10.944" className="circulito" />
                                        <circle cx="557.822" cy="482.592" r="10.944" className="circulito" />
                                        <circle cx="249.478" cy="474.245" r="10.944" className="circulito" />
                                    </g>
                                </svg>

                                <div className="afl_photo">
                                    <img src="/afl_persona2.png" alt="Foto de Alejandra Fripp Lozano" className="" />
                                </div>

                            </div>
                            <p className="intro_context">
                                La grafología es una pasión que he desarrollado mediante diversas capacitaciones a lo largo de mi trayectoria docente y que actualmente ejerzo en un espacio específico, profundizando en el grafoanálisis dentro del maravilloso mundo de la escritura personal.
                            </p>
                        </>
                    }
                />

                <Mini_Section
                    className="quote_container"
                    content={
                        <>
                            <h3 className="quote">
                                "Escribir es un acto humano, al igual que la lectura. En los trazos de una persona se pueden analizar aspectos de su personalidad y así, brindar posibles abordajes para mejorar su calidad de vida."
                            </h3>
                            <p className="hidden_mobile">
                                Cuando llegó a mis manos mi primer material de Grafología Infanti en 2001, me sentí maravillada al saber que se pueden conocer aspectos de la personalidad de un niño a través del análisis de sus trazos, su evolución y cómo usa los colores.
                                A partir de ese momento comencé a formarme a través de capacitaciones, cursos y adquiriendo material de lectura para aprender de manera autodidacta hasta el año 2020, cuando se abrió la posibilidad de estudiar esta carrera formalmente.
                            </p>

                        </>
                    }
                />
                <div className="xp_container">
                    <Common_Section
                        className="xp"
                        left={
                            <>
                                <div className="xp_content">
                                    <h2 className="xp_title"><span className="year">25 años</span> de experiencia en docencia de nivel medio y superior.</h2>
                                    <p className="xp_text">
                                        Actualmente, me desempeño como docente de nivel secundario y superior en la localidad de Gualeguaychú, Entre Ríos.
                                    </p>
                                </div>
                            </>
                        }
                        right={
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 555.04 533.71" className="flower_shape">
                                    <defs>
                                        <filter id="flower_a" width="1.08" height="1.07" x="-.03" y="-.03" color-interpolation-filters="sRGB">
                                            <feFlood flood-color="#1c1c1c" flood-opacity=".38" result="flood" />
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3.5" />
                                            <feOffset dx="2.5" dy="2.5" in="blur" result="offset" />
                                            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
                                            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
                                        </filter>
                                        <filter id="flower_b" width="1.08" height="1.07" x="-.03" y="-.03" color-interpolation-filters="sRGB">
                                            <feFlood flood-color="#1c1c1c" flood-opacity=".38" result="flood" />
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3.5" />
                                            <feOffset dx="2.5" dy="2.5" in="blur" result="offset" />
                                            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
                                            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
                                        </filter>
                                        <filter id="flower_c" width="1.08" height="1.07" x="-.03" y="-.03" color-interpolation-filters="sRGB">
                                            <feFlood flood-color="#1c1c1c" flood-opacity=".38" result="flood" />
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3.5" />
                                            <feOffset dx="2.5" dy="2.5" in="blur" result="offset" />
                                            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
                                            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
                                        </filter>
                                        <filter id="flower_d" width="1.08" height="1.07" x="-.03" y="-.03" color-interpolation-filters="sRGB">
                                            <feFlood flood-color="#1c1c1c" flood-opacity=".38" result="flood" />
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3.5" />
                                            <feOffset dx="2.5" dy="2.5" in="blur" result="offset" />
                                            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
                                            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
                                        </filter>
                                        <filter id="flower_e" width="1.08" height="1.07" x="-.03" y="-.03" color-interpolation-filters="sRGB">
                                            <feFlood flood-color="#1c1c1c" flood-opacity=".38" result="flood" />
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3.5" />
                                            <feOffset dx="2.5" dy="2.5" in="blur" result="offset" />
                                            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
                                            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
                                        </filter>
                                        <filter id="flower_f" width="1.08" height="1.07" x="-.03" y="-.03" color-interpolation-filters="sRGB">
                                            <feFlood flood-color="#1c1c1c" flood-opacity=".38" result="flood" />
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3.5" />
                                            <feOffset dx="2.5" dy="2.5" in="blur" result="offset" />
                                            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
                                            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
                                        </filter>
                                    </defs>
                                    <g fill="#0047bf" fill-opacity=".51">
                                        <path d="M571.53 335.82c-8.8 21.66-63.43 56.3-86.61 53.23-37.32-4.95-117.8-53.58-140.9-83.3-14.36-18.45-17.04-83.08-2.8-101.62 22.95-29.85 105.3-75.23 142.6-80.38 23.16-3.2 80.47 26.79 89.4 48.4 14.37 34.8 12.5 128.8-1.69 163.67" filter="url(#flower_a)" transform="matrix(-.63 -.76 .77 -.43 388.71 623.46)" />
                                        <path d="M571.53 335.82c-8.8 21.66-63.43 56.3-86.61 53.23-37.32-4.95-117.8-53.58-140.9-83.3-14.36-18.45-17.04-83.08-2.8-101.62 22.95-29.85 105.3-75.23 142.6-80.38 23.16-3.2 80.47 26.79 89.4 48.4 14.37 34.8 12.5 128.8-1.69 163.67" filter="url(#flower_b)" transform="matrix(.13 -.73 1.04 .06 61.21 561.04)" />
                                        <path d="M571.53 335.82c-8.8 21.66-63.43 56.3-86.61 53.23-37.32-4.95-117.8-53.58-140.9-83.3-14.36-18.45-17.04-83.08-2.8-101.62 22.95-29.85 105.3-75.23 142.6-80.38 23.16-3.2 80.47 26.79 89.4 48.4 14.37 34.8 12.5 128.8-1.69 163.67" filter="url(#flower_c)" transform="matrix(.04 -1 .99 .27 108.6 749.85)" />
                                        <path d="M571.53 335.82c-8.8 21.66-63.43 56.3-86.61 53.23-37.32-4.95-117.8-53.58-140.9-83.3-14.36-18.45-17.04-83.08-2.8-101.62 22.95-29.85 105.3-75.23 142.6-80.38 23.16-3.2 80.47 26.79 89.4 48.4 14.37 34.8 12.5 128.8-1.69 163.67" filter="url(#flower_d)" transform="matrix(.6 -.29 .6 .78 -262.3 103.73)" />
                                        <path d="M571.53 335.82c-8.8 21.66-63.43 56.3-86.61 53.23-37.32-4.95-117.8-53.58-140.9-83.3-14.36-18.45-17.04-83.08-2.8-101.62 22.95-29.85 105.3-75.23 142.6-80.38 23.16-3.2 80.47 26.79 89.4 48.4 14.37 34.8 12.5 128.8-1.69 163.67" filter="url(#flower_e)" transform="matrix(-.96 .07 .16 -.7 558.86 433.1)" />
                                        <path d="M571.53 335.82c-8.8 21.66-63.43 56.3-86.61 53.23-37.32-4.95-117.8-53.58-140.9-83.3-14.36-18.45-17.04-83.08-2.8-101.62 22.95-29.85 105.3-75.23 142.6-80.38 23.16-3.2 80.47 26.79 89.4 48.4 14.37 34.8 12.5 128.8-1.69 163.67" filter="url(#flower_f)" transform="matrix(-.56 .83 -.75 -.37 669.57 65.76)" />
                                    </g>
                                </svg>
                                <div className="flower_photo">
                                    <img src="/about_me/presentando_01.jpg" alt="Alejandra Fripp Lozano - Foto" className="" />
                                </div>
                            </>


                        }
                        bigger_side="right"
                    />
                    <Common_Section
                        className="xp"
                        bigger_side="right"
                        left={
                            <>
                                <div className="afl_photo">
                                    <img src="/about_me/capacitando.jpeg" alt="Alejandra Fripp Lozano - Foto" className="" />
                                </div>
                            </>
                        }
                        right={
                            <>
                                <div className="xp_content">
                                    <h2 className="xp_title">Más de 8 años capacitando docentes.</h2>
                                    <p className="xp_text">
                                        Formo parte del equipo técnico de ESI (Educación Sexual Integral), Abordaje de situaciones complejas en el ámbito educativo y Prevención de Consumos Problemáticos en la Dirección Departamental de Escuelas de Gualeguaychú.

                                    </p>
                                </div>
                            </>
                        }
                    />
                    <Common_Section
                        className="xp"
                        bigger_side="right"
                        left={
                            <>
                                <div className="afl_photo">
                                    <img src="/about_me/sit_compleja.jpeg" alt="Alejandra Fripp Lozano - Foto" className="" />
                                </div>

                            </>
                        }
                        right={
                            <>
                                <div className="xp_content">
                                    <h2 className="xp_title">Más de 8 años abordando situaciones complejas en escuelas.</h2>
                                    <p className="xp_text">
                                        Soy parte del equipo técnico que acompaña y asesora a directivos y docentes, de instituciones educativas tanto públicas como privadas, en la gestión de situaciones complejas y de alta sensibilidad.
                                    </p>
                                    <p className="xp_text">
                                        Brindamos orientación en la aplicación de protocolos de actuación, contención emocional y abordajes con un enfoque humano y preventivo ante casos vinculados a violencia, vulneración de derechos, salud mental, consumos problemáticos y conflictos familiares.
                                    </p>
                                </div>

                            </>
                        }
                    />
                </div>
                <Mini_Section
                    className="quote_container"
                    content={
                        <>
                            <div>
                                <h3 className="quote">
                                    "Considero que la docencia y el grafoanálisis van muy de la mano [...] en la escuela aprendemos cómo situar el lápiz en el espacio de la hoja, las letras, damos nuestros primeros grafismos y comenzamos a socializar con otros por fuera de nuestra familia... "
                                </h3>
                                <p className="hidden_mobile quote_context">
                                    La escuela y el aula nos presentan la vida en sociedad y en ese contexto aprendemos a escribir. A lo largo de los años, escribimos más y más mientras nuestra personalidad se forja.
                                    Solo con la predisposición de trazar, una hoja y un lápiz, el grafoanálisis permite conocer el perfil psicológico del escribiente y así brindar más herramientas para mejorar su vida en diversos aspectos.
                                </p>
                            </div>

                        </>
                    }
                />

                <Core_Values_Section />
                <Common_Section
                    className="radio_section"
                    left={
                        <>
                            <div className="radio_text">

                                <a href="https://radiocerofm.com/" target="_blank" className="radiocero">
                                    <img src="/about_me/ahora_cero_radio.png" className="radio_logo expand_animation"></img>
                                </a>
                                <a href="https://radiocerofm.com/" target="_blank" className="digamostodo">
                                    <img src="/about_me/digamos_todo.jpg" className="radio_logo expand_animation"></img>
                                </a>

                                <h2 className="title">
                                    Te invito a escuchar mi columna en el programa de radio Digamos Todo.
                                </h2>
                                <p className="context">
                                    Aquí construimos un espacio para traer a la luz diversas problemáticas cotidianas relacionadas con la educación sexual integral de las personas.
                                </p>
                            </div>

                        </>
                    }
                    right={
                        <>
                            <ReactPlayer src='https://www.youtube.com/watch?v=dohC9zHRsiI&t=6s'
                                controls={false}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    aspectRatio: "16/9",

                                }}
                            />
                        </>
                    }
                />
                <div className="mini_divider"></div>
            </div>

            <Pre_footer />
        </main >
    );
};

export default About_me;