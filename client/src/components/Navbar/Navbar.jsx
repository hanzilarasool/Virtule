import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsLightbulb } from "react-icons/bs";
import { BsLightbulbFill } from "react-icons/bs";
import { useTheme } from "../../context/theme-context/ThemeContext";
function Navbar() {

  const {isDark,setDark,setLight}=useTheme();
  return (
    <main className={styles["navbar-wrapper"]}>
      <nav className={styles["navbar"]}>
        <div>
          {/* <AnimatedElement type="load" delay={0.15} as="h1">
            Logo
          </AnimatedElement> */}
          <figure className={styles["logo-figure"]} >
     
          
            {isDark ?  <img src="./imgs/logo.svg" alt="logo" className={styles["logo-img"]} />:  <img src="./imgs/logo-bg-black.svg" alt="logo" className={styles["logo-img"]} /> }
          </figure>
        </div>
        <ul className={styles["navbar-list"]}>
          <li className={styles["theme-toggle-btn-in-list"]}>
            {isDark? <BsLightbulb fill="white" onClick={()=>setLight()} />: <BsLightbulbFill fill="rgba(255, 230, 0, 1)" stroke="black"  onClick={()=>setDark()} />}
          </li>
          <li
   
            className={styles["navbar-list-item"]}
          >

            <NavLink to="#wait-list">Join the WaitList</NavLink>{" "}
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
