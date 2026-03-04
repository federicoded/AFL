import "./Pre_footer.css";

const Pre_footer = () => {
    return (

        <div className="pre_footer_container">
            <ul className="contact_info_container">
                <a href="https://wa.me/5493446404615" target="_blank" rel="noopener noreferrer">
                    <li>
                        <h3>
                            Teléfono
                        </h3>
                        <p>
                            +54 9 3446 40-4615
                        </p>
                    </li>
                </a>
                <a href="mailto:afl_grafoanalista@gmail.com" target="_blank" rel="noopener noreferrer">
                    <li>
                        <h3>
                            Email
                        </h3>
                        <p className="mail">
                            afl_grafoanalista@gmail.com
                        </p>
                    </li>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Gualeguaychú" target="_blank" rel="noopener noreferrer">
                    <li>
                        <h3>
                            Estoy en:
                        </h3>
                        <p>
                            Gualeguaychú, Entre Ríos
                        </p>
                    </li>
                </a>
            </ul>
        </div>

    )
}

export default Pre_footer;