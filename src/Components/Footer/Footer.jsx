import f from "./Footer.module.css";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
    return (
      <footer className={f.style_footer}>
        <FooterInfo />
        <div className={f.footerCopyright}>
          Imported footer 2022
        </div>
      </footer>
    );
}

export default Footer