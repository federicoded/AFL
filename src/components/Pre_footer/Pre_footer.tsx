import "./Pre_footer.css";

const Pre_footer = () => {
    return (

        <div className="pre-footer-container">
            <ul className="contact_info_container">
                <li>
                    <h2>
                        Teléfono
                    </h2>
                    <p>
                        <a href="https://wa.me/5493446404615" target="_blank" rel="noopener noreferrer">
                            +54 9 3446 40-4615
                        </a>
                    </p>
                </li>
                <li>
                    <h2>
                        Email
                    </h2>
                    <p className="mail">
                        <a href="mailto:afl_grafoanalista@gmail.com" target="_blank" rel="noopener noreferrer">
                            afl_grafoanalista@gmail.com
                        </a>
                    </p>
                </li>
                <li>
                    <h2>
                        Estoy en:
                    </h2>
                    <p>
                        <a href="https://www.google.com/maps/search/?api=1&query=Gualeguaychú" target="_blank" rel="noopener noreferrer">
                            Gualeguaychú, Entre Ríos
                        </a>
                    </p>
                </li>
            </ul>
        </div>

    )
}

export default Pre_footer;