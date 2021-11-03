import styles from "./NavBar.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

export function NavBar({ toggle }) {
  return (
    <Router>
      <nav className={styles.navBar}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.title}>Birra</h1>
        </Link>
        <div className={styles.icon} onClick={toggle}>
          <p className={styles.menuP}>Menú</p>
          <FaBeer className={styles.beer} />
        </div>
      </nav>
    </Router>
  );
}
