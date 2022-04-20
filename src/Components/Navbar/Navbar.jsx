import "./Navbar.css";

const Navbar = () => {
    return (
      <nav>
        <ul className="navLinks">
          <li className="navLink"><a href="/profile">Profile</a></li>
          <li className="navLink"><a href="/posts">Posts</a></li>
          <li className="navLink"><a href="/dialogs">Dialogs</a></li>
          <li className="navLink"><a href="/">Item_i</a></li>
        </ul>
      </nav>
    );
  }

  export default Navbar