import hs from "./Header.module.css";
import logoImage from "../assets/img/logo.png";

export const HeaderLogo = () => {
    return (
        <div className={hs.headerLogo}>
          <img src={logoImage} alt="Logo" />
          <h1>Imported header</h1>
        </div>
    )
}