import "./About_me.css";
import "../../components/Common_Section/Common_Section";
import Common_Section from "../../components/Common_Section/Common_Section";
import Pre_footer from "../../components/Pre_footer/Pre_footer";

const About_me = () => {
    return (
        <main>
            <div className="About_me-page">
                <Common_Section
                    left={
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2783.376" height="1851.725" viewBox="0 0 736.435 489.936" className="Shape01">
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
                                <img src="./afl_persona2.png" alt="Alejandra Fripp Lozano - Foto" className="" />
                            </div>

                        </>
                    }
                    right={
                        <>
                            <h1>Mi nombre es <br></br><span className="afl_name">Alejandra Fripp Lozano</span></h1>
                            <h2>Soy técnica superior en grafología</h2>
                            <p>Lorem ipsum dolor sit amet. Est excepturi odio ut rerum quas in suscipit magnam? Et aliquam libero qui nihil totam qui omnis odio vel odio quia est itaque tenetur non earum culpa.</p>
                        </>
                    }
                    bigger_side="left"
                />
                <Common_Section
                    left={
                        <>
                            <h1>Más de 20 años de experiencia como docente de nivel medio y superior.</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                            </p>
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
                            <div className="afl_photo flower_photo">
                                <img src="./about_me/presentando_01.jpeg" alt="Alejandra Fripp Lozano - Foto" className="" />
                            </div>
                        </>


                    }
                    bigger_side="right"
                />
                <div className="c_section core_values">
                    <h1>Mis valores</h1>

                    <ul>
                        <li>
                            <h3>Excelencia</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f" className="value_icon">
                                <path d="M298-120v-60h152v-148q-54-11-96-46.5T296-463q-74-8-125-60t-51-125v-44q0-25 17.5-42.5T180-752h104v-88h392v88h104q25 0 42.5 17.5T840-692v44q0 73-51 125t-125 60q-16 53-58 88.5T510-328v148h152v60H298Zm-14-406v-166H180v44q0 45 29.5 78.5T284-526Zm196 141q57 0 96.5-40t39.5-97v-258H344v258q0 57 39.5 97t96.5 40Zm196-141q45-10 74.5-43.5T780-648v-44H676v166Zm-196-57Z" />
                            </svg>
                        </li>
                        <li>
                            <h3>Integridad y Ética</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f" className="value_icon">
                                <path d="M80-120v-60h370v-484q-26-9-46.5-29.5T374-740H215l125 302q-1 45-38.5 76.5T210-330q-54 0-91.5-31.5T80-438l125-302h-85v-60h254q12-35 41-57.5t65-22.5q36 0 65 22.5t41 57.5h254v60h-85l125 302q-1 45-38.5 76.5T750-330q-54 0-91.5-31.5T620-438l125-302H586q-9 26-29.5 46.5T510-664v484h370v60H80Zm595-320h150l-75-184-75 184Zm-540 0h150l-75-184-75 184Zm345-280q21 0 35.5-15t14.5-35q0-21-14.5-35.5T480-820q-20 0-35 14.5T430-770q0 20 15 35t35 15Z" />
                            </svg>
                        </li>
                        <li>
                            <h3>Profesionalismo</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f" className="value_icon">
                                <path d="m363-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM481-29 346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614L481-29Zm0-84 107.92-107H740v-151l109-109-109-109v-151H589L481-849 371-740H220v151L111-480l109 109v151h150l111 107Zm0-368Z" />
                            </svg>
                        </li>

                    </ul>
                    <ul>
                        <li>
                            <h3>Confidencialidad</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f" className="value_icon">
                                <path d="M298-120v-60h152v-148q-54-11-96-46.5T296-463q-74-8-125-60t-51-125v-44q0-25 17.5-42.5T180-752h104v-88h392v88h104q25 0 42.5 17.5T840-692v44q0 73-51 125t-125 60q-16 53-58 88.5T510-328v148h152v60H298Zm-14-406v-166H180v44q0 45 29.5 78.5T284-526Zm196 141q57 0 96.5-40t39.5-97v-258H344v258q0 57 39.5 97t96.5 40Zm196-141q45-10 74.5-43.5T780-648v-44H676v166Zm-196-57Z" />
                            </svg>
                        </li>
                        <li>
                            <h3>Transparencia</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f" className="value_icon">
                                <path d="M80-120v-60h370v-484q-26-9-46.5-29.5T374-740H215l125 302q-1 45-38.5 76.5T210-330q-54 0-91.5-31.5T80-438l125-302h-85v-60h254q12-35 41-57.5t65-22.5q36 0 65 22.5t41 57.5h254v60h-85l125 302q-1 45-38.5 76.5T750-330q-54 0-91.5-31.5T620-438l125-302H586q-9 26-29.5 46.5T510-664v484h370v60H80Zm595-320h150l-75-184-75 184Zm-540 0h150l-75-184-75 184Zm345-280q21 0 35.5-15t14.5-35q0-21-14.5-35.5T480-820q-20 0-35 14.5T430-770q0 20 15 35t35 15Z" />
                            </svg>
                        </li>
                        <li>
                            <h3>Rigor científico</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f" className="value_icon">
                                <path d="m363-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM481-29 346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614L481-29Zm0-84 107.92-107H740v-151l109-109-109-109v-151H589L481-849 371-740H220v151L111-480l109 109v151h150l111 107Zm0-368Z" />
                            </svg>
                        </li>

                    </ul>


                </div>
                <Common_Section
                    left ={
                        <>
                            <h2>Podes escucharme en Ahora Cero Radio FM</h2>
                            <img src="./about_me/ahora_cero_radio.png" className="ahora_cero_logo"></img>
                            <p>Hola</p>
                        </>
                    }
                    right ={
                        <>
                            <h1>foto radio</h1>
                            <p>Hola</p>
                        </>
                    }
                />
            </div>
            <Pre_footer />
        </main >
    );
};

export default About_me;