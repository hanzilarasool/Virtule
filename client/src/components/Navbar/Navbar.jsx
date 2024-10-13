import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import AnimatedElement from "../utils/AnimatedElement";
function Navbar() {
  return (
    <main className={styles["navbar-wrapper"]}>
      <nav className={styles["navbar"]}>
        <div>
          {/* <AnimatedElement type="load" delay={0.15} as="h1">
            Logo
          </AnimatedElement> */}
          <figure className={styles["logo-figure"]} >
            <img src="./imgs/logo.svg" alt="logo" className={styles["logo-img"]} />
          </figure>
        </div>
        <ul className={styles["navbar-list"]}>
          <AnimatedElement
            as="li"
            type="load"
            delay={0.25}
            className={styles["navbar-list-item"]}
          >
            <NavLink to="#wait-list">WaitList</NavLink>{" "}
          </AnimatedElement>
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
