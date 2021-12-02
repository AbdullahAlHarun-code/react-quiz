import logo from "../assets/images/logo-bg.png";
import classNames from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classNames.nav}>
      <ul>
        <li>
          <a href="index.html" className={classNames.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
