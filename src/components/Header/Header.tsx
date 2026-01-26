import "./Header.css";
import Header_Dropdown from "../Header_Dropdown/Header_Dropdown";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<Link to="./">
				<img src="/afl_logo_header.png" alt="Logo" className="logo" />
			</Link>


			<nav className="nav">

				<ul className="menu">
					<li className="menu_item"><Header_Dropdown /></li>
					<Link to="./faq">
						<li className="menu_item">
							Preguntas frecuentes
						</li>
					</Link>
					<Link to="./about_me">
						<li className="menu_item">Sobre mí</li>
					</Link>

				</ul>

			</nav>
		</header>
	);
};

export default Header;