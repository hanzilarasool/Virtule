import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/theme-context/ThemeContext";
import Switch from "../utils/Switch";

function Navbar() {
  const { isDark, setDark, setLight } = useTheme();

  const toggleTheme = () => {
    if (isDark) {
      setLight();  // Set to light theme
    } else {
      setDark();   // Set to dark theme
    }
  };

  return (
    <main className={styles["navbar-wrapper"]}>
      <nav className={styles["navbar"]}>
        <div>
          <figure className={styles["logo-figure"]}>
            {isDark ? (
              <img src="./imgs/logo.svg" alt="logo" className={styles["logo-img"]} />
            ) : (
              <img src="./imgs/logo-bg-black.svg" alt="logo" className={styles["logo-img"]} />
            )}
          </figure>
        </div>
        <ul className={styles["navbar-list"]}>
          <li className={styles["theme-toggle-btn-in-list"]}>
            <Switch isDark={isDark} toggleTheme={toggleTheme} />
          </li>
          <li className={styles["navbar-list-item"]}>
            <NavLink to="#wait-list">Join the WaitList</NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
