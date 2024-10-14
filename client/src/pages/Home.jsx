import Navbar from "../components/Navbar/Navbar";
import styles from "./styles/Home.module.css";
import AnimatedElement from "../components/utils/AnimatedElement";
function Home() {
  return (
    <main className={styles["home-page-wrapper"]} >
      <div className={styles["home-page-radial-gradient"]}></div>
<Navbar/>
<div className={styles["home-page"]}>
    <div className={styles["home-page-hero"]}>
        <div className={styles["hero-line-container"]} >
          <AnimatedElement as="h1" type="load" delay={0.1} className={styles["hero-line"]}>All from One Platform
          <br /><span style={{color:"rgba(81,61,235,1)"}}>Unlock the Power of Every AI Model</span></AnimatedElement>
        </div>
        <AnimatedElement as="p" type="load" delay={0.25} className={styles["hero-para"]} >Access ChatGPT, Claude, Perplexity, Stable Diffusion, text-to-video, music generation, voice conversion, PPT creation, health tracking, education, gaming, and content generation.</AnimatedElement>
    </div>
</div>
    </main>
  )
}

export default Home