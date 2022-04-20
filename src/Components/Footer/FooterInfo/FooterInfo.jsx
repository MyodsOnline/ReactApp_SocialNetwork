import f from "./../Footer.module.css";
import { HeaderLogo } from "./../../Header/HeaderLogo";
import instagram from "./../../assets/img/instagram.png";
import telegram from "./../../assets/img/telegram.png";
import whatsapp from "./../../assets/img/whatsapp.png";

const FooterInfo = () => {
    return (
        <div className={f.footerInfo}>
            <div>
                <HeaderLogo />
                <nav className={f.social}>
                    <a href="/" className={f.socialLinks}><img src={instagram} alt="Instagram" /></a>
                    <a href="/" className={f.socialLinks}><img src={telegram} alt="Telegram" /></a>
                    <a href="/" className={f.socialLinks}><img src={whatsapp} alt="Whatsapp" /></a>
                </nav>
            </div>
            <div>
                <h5>Useful links</h5>
                <ul className={f.footerLinks}>
                    <li><a href="/" className={f.footerLink}>Signup</a></li>
                    <li><a href="/" className={f.footerLink}>login</a></li>
                    <li><a href="/" className={f.footerLink}>Language settings</a></li>
                    <li><a href="/" className={f.footerLink}>Explore</a></li>
                    <li><a href="/" className={f.footerLink}>Finder app</a></li>
                    <li><a href="/" className={f.footerLink}>Features</a></li>
                </ul>
            </div>
            <div>
                <h5>About</h5>
                <ul className={f.footerLinks}>
                    <li><a href="/" className={f.footerLink}>Help</a></li>
                    <li><a href="/" className={f.footerLink}>Terms</a></li>
                    <li><a href="/" className={f.footerLink}>Privacy Policy</a></li>
                    <li><a href="/" className={f.footerLink}>Contact us</a></li>
                    <li><a href="/" className={f.footerLink}>About us</a></li>
                </ul>
            </div>
            <div>
                <h5>Contacts</h5>
                <ul className={`${f.footerLinks} ${f.contacts}`}>
                    <li><i class=""></i>+7 (981) 120-0645</li>
                    <li><i class="icon ion-ios-email-outline"></i>diver.vlz@gmail.com</li>
                    <li><i class="icon ion-ios-location-outline"></i>Sankt-Petersburg, RU</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterInfo