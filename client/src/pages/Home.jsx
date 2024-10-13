import Navbar from "../components/Navbar/Navbar";
import styles from "./styles/Home.module.css";
function Home() {
  return (
    <main className={styles["home-page-wrapper"]} >
<Navbar/>
<div className={styles["home-page"]}>
    <div className={styles["home-page-hero"]}>
        
    </div>
</div>
    </main>
  )
}

export default Home