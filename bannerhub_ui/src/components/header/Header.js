import Logo from "../../Assets/.BannerHub.svg"
import "./Header.css";
export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={Logo} alt="BannerHub"/>
        </header>
    );
}