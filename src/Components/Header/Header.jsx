import {useState} from "react";
import { menu } from "./menu";
import hs from "./Header.module.css";
import { HeaderLogo } from "./HeaderLogo";

const Header = () => {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <header className={hs.headerStyle}>
      <div className={hs.headerWrapper}>
        <HeaderLogo />
        <div className={hs.headerContent}>
          <input
            type="text"
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="What are u looking?">
          </input>
          <nav>
            {menu.map((item, idx) => (
              <a href={item.link} key={`menu item ${idx}`}>{item.title}</a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header