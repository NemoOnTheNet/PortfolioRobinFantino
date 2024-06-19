import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <Link id="linkLogo" to={`/`}>
        <img
          id="logo"
          src="/assets/RobinFantinoLogo.png"
          alt="initial Robin Fantino"
        />
      </Link>

      <nav className="navBar">
        <Link className="navBarLink" to={`/`}>
          Accueil
        </Link>
        <Link className="navBarLink" to={`/curriculum`}>
          Curriculum Vitae
        </Link>
        <Link className="navBarLink" to={`/projet`}>
          Projet
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
