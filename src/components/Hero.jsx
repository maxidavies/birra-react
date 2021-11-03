import { NavBar } from "./NavBar";
import styles from "./Hero.module.css";
import { SideBar } from "./SideBar";
import { useState } from "react";

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.hero}>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <div className={styles.content}>
        <div className={styles.heroItems}>
          <h1 className={styles.heroH1}>La mejor birra ever</h1>
          <p className={styles.heroP}>Fria como la palida</p>
          <button className={styles.heroButton}>Tomar</button>
        </div>
      </div>
    </div>
  );
}
