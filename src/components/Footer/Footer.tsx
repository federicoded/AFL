import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <img src="afl_logo_footer.png" alt="Logo de AFL Grafoanálisis" className="logo-footer" />

            <p className="footer-text">
                <span>© {new Date().getFullYear()} AFL Grafoanálisis.</span>
                <span className="separator">|</span>
                <span>This site was</span> <a href="https://github.com/federicoded" target="_blank">federicoded</a>
            </p>


        </footer>
    );
}

export default Footer;