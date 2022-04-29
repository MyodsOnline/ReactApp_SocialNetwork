import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
        <ul className="navLinks">
          <li className="navLink"><NavLink to='/profile'>Profile</NavLink></li>
          <li className="navLink"><NavLink to='/posts'>Posts</NavLink></li>
          <li className="navLink"><NavLink to='/dialogs'>Dialogs</NavLink></li>
          <li className="navLink"><NavLink to='/fake'>Fake Page</NavLink></li>
        </ul>
      </nav>
    );
  }

  export default Navbar