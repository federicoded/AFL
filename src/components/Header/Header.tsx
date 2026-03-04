import "./Header.css";
import Header_Dropdown from "../Header_Dropdown/Header_Dropdown";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<Link to="/" className="logo_container">
				<img src="/afl_logo_header.png" alt="Logo" className="logo" />
			</Link>


			<nav className="nav">
				<ul className="menu">
					<li className="menu_item menu_item_no_transition"><Header_Dropdown /></li>
					<Link to="/faq">
						<li className="menu_item">
							Preguntas frecuentes
						</li>
					</Link>
					<Link to="/about_me">
						<li className="menu_item">Sobre mí</li>
					</Link>
					<Link to="/#contact_me">
						<li className="menu_item">Contactame</li>
					</Link>

				</ul>

			</nav>
		</header>
	);
};

export default Header;