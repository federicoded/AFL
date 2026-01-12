import "./Header.css";
import Header_Dropdown from "../Header_Dropdown/Header_Dropdown";

const Header = () => {
	return (
		<header className="header">
			<h1 className="logo">AFL Logo </h1>

			<nav className="nav">
				
				<ul className="menu">
					<li className="menu_item"><Header_Dropdown /></li>
					<li className="menu_item">Preguntas frecuentes</li>
					<li className="menu_item">Sobre mí</li>
				</ul>
				
			</nav>
		</header>
	);
};

export default Header;