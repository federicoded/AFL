import "./Contact_me.css";
import { forwardRef } from "react";

const Contact_me = forwardRef<HTMLHeadingElement>((_, ref) => {

    type rectaglePosition = {
        x: string;
        y: string;
    }
    const rectangles_positions: rectaglePosition[] = [
        { x: "10%", y: "20%" },
        { x: "15%", y: "23%" },
        { x: "20%", y: "26%" },
        { x: "25%", y: "29%" },

        { x: "30%", y: "32%" },

        { x: "50%", y: "44%" },
        { x: "45%", y: "41%" },
        { x: "40%", y: "38%" },
        { x: "35%", y: "35%" },
    ];

    return (
        <div className="CM_container">
            <div className="cm_side">
                {
                    rectangles_positions.map((position, index) => (
                        <div
                            key={index}
                            className="photo_rectangle"
                            style={{
                                position: "absolute",
                                left: position.x,
                                top: position.y,
                                width: "40%",
                                height: "40%",
                            }}
                        ></div>
                    ))
                }
                <div className="cm_photo">
                    <img src="./afl_persona.png" alt="Alejandra Fripp Lozano - Foto"></img>
                </div>
            </div>
            <div className="cm_side texts">
                <h1 ref={ref}>Mi nombre es Alejandra,</h1>
                <h2>Soy Técnica Superior en Grafología y docente con más de 20 años de experiencia en educación con niños, adolescentes y adultos.</h2>
                <h2>Contactame por whatsapp o por email para conocer tu caso</h2>
                <ul className="cm_buttons_container">
                    <li>
                        <a className="cm_button wpp" href="https://wa.me/5493446404615" target="_blank" rel="noopener noreferrer">
                            <svg fill="#199d28" width="1.2rem" height="1.2rem" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
                            </svg>
                            Escribir por WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="mailto:alejandra@fripplozano.com.ar" className="cm_button" target="_blank" >
                            <svg fill="#000e88" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
                            </svg>
                            Enviar un Email
                        </a>
                    </li>
                </ul>
                <ul className="cm_buttons_container socials">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=61578053049473" target="_blank" rel="noopener noreferrer">
                            <svg width="2.5rem" height="2.5rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)" />
                                <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#18ACFE" />
                                        <stop offset="1" stop-color="#0163E0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>

                    </li>
                    <li>
                        <a href="https://www.instagram.com/afl_grafoanalista/" target="_blank" rel="noopener noreferrer">
                            <svg width="2.5rem" height="2.5rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)" />
                                <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)" />
                                <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)" />
                                <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white" />
                                <defs>
                                    <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
                                        <stop stop-color="#B13589" />
                                        <stop offset="0.79309" stop-color="#C62F94" />
                                        <stop offset="1" stop-color="#8A3AC8" />
                                    </radialGradient>
                                    <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
                                        <stop stop-color="#E0E8B7" />
                                        <stop offset="0.444662" stop-color="#FB8A2E" />
                                        <stop offset="0.71474" stop-color="#E2425C" />
                                        <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
                                    </radialGradient>
                                    <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
                                        <stop offset="0.156701" stop-color="#406ADC" />
                                        <stop offset="0.467799" stop-color="#6A45BE" />
                                        <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </a>

                    </li>

                </ul>
            </div>
        </div>
    )

});

export default Contact_me;
