import Navbar from "../components/Navbar/Navbar";
import styles from "./styles/Home.module.css";
import AnimatedElement from "../components/utils/AnimatedElement";
import { useTheme } from "../context/theme-context/ThemeContext";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteCarousal from "../components/utils/InfiniteCarousal";
import Footer from "../components/Footer/Footer";
import {toast} from "react-toastify"

// console.log(import.meta.env.VITE_BACKEND_URL,"is backend url");
const axiosInstance=axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
// console.log(axiosInstance)
function Home() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 600);
  const [email,setemail]=useState("");
  const [emailError, setemailError] = useState("");
  const[formSubmissionLoading,setformSubmissionLoading]=useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 600);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { theme ,isDark} = useTheme();



const handleSubmit = async (e) => {
  e.preventDefault();

if(!validateEmail(email)){
  setemailError("Enter a Valid Email.")
  return
}
  setformSubmissionLoading(true);
  try {
    await axiosInstance.post("/api/email", { email });
    // Show success message
    toast.success("User successfully added to the waiting list!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
  setformSubmissionLoading(false);
  } catch (error) {
    console.log(error)
    // Show error message
    toast.error("User already in the waiting list!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setformSubmissionLoading(false);
  }
};

const validateEmail=(email)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}
  return (
    <main className={styles["home-page-wrapper"]}>
      {/* <div className={styles["home-page-radial-gradient"]}></div> */}
      <Navbar />
      <div className={styles["home-page"]}>
        <div className={styles["home-page-hero"]} style={isDark? {backgroundColor:"rgba(45,45,45,1)"}:null}>
          <div className={styles["hero-line-container"]}>
            <AnimatedElement
              as="h1"
              type="load"
              delay={0.1}
              className={styles["hero-line"]}
            >
              All from One Platform
              <br />
              <span style={{ color: "rgba(81,61,235,1)" }}>
                Unlock the Power of Every AI Model
              </span>
            </AnimatedElement>
          </div>
          <AnimatedElement
            as="p"
            type="load"
            delay={0.25}
            className={styles["hero-para"]}
          >
            Access ChatGPT, Claude, Perplexity, Stable Diffusion, text-to-video,
            music generation, voice conversion, PPT creation, health tracking,
            education, gaming, and content generation.
          </AnimatedElement>
        </div>
        <div className={styles["home-page-video-container"]} style={{width:"90%"}}>
          {isMobileView ? (
            theme === "dark" ? (
              <video
                style={{ padding: "4.5px", borderRadius: "10px" }}
                src="./videos/hero-vid-mobile-view-dark.mp4" // Use different mobile video for dark theme
                width="100%"
                //height="280px" // Set height for consistency
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <video
                style={{ padding: "4.5px", borderRadius: "10px" }}
                src="./videos/hero-vid-mobile-view.mp4" // Use different mobile video for light theme
                width="100%"
                height="280px" // Set height for consistency
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            )
          ) : theme === "dark" ? (
            <video
              style={{  borderRadius: "10px" }}
              src="./videos/hero-vid-black.mp4"
              width="100%"
              height="280px"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <video
              style={{borderRadius: "10px" }}
              src="./videos/hero-vid.mp4"
              width="100%"
              height="280px"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* ---------wait list section ---------- */}
        <div className={styles["join-waitlist-container"]} id="wait-list" >
          <div className={styles["content"]}>
    {/*  */}
       <div className={styles["all-in-one-head-description-container"]} >
      <h6 className={styles["all-in-one-head-description-head"]} >AI tools you need, unified in one platform <br /> <span style={{color:"rgb(81, 61, 235)"}}>for one unbeatable price</span></h6>
       </div>
        <form className={styles["join-waitlist-input-form"]} onSubmit={handleSubmit} >
        {
          formSubmissionLoading?   <h1>Loading....</h1>:  <input type="text" className={styles["join-waitlist-input"]} onChange={(e)=>{ setemailError("");setemail(e.target.value)}}  value={email} placeholder="youremailhere@gmail.com" />
        }
          <button type="submit" className={styles["join-waitlist-btn"]} >Join Waitlist</button>
        </form>
        {
          emailError&& <p style={{color:"red "}}>{emailError}</p>
        }
          </div>
        </div>
        {/* whats-coming section */}
        <div className={styles["whats-coming-container"]} >
<div className={styles["whats-coming-content"]} >
<h6 className={styles["whats-coming-head"]} >Whats coming?</h6>
<p>
Expect integrations with OpenAI, Llama, Gemini, and more—bringing you advanced features like text-to-video, music generation, hvoice-to-voice conversion, AI-powered teaching, and more.
</p>
</div>
        </div>
        <InfiniteCarousal/>
        <Footer/>
      </div>
    
    </main>
  );
}

export default Home;




// <div className={styles["all-in-one-with-beautiful-interface"]}>
// <div className={styles["item"]}>
// <img src="./imgs/chatgpt-icon.svg" width="24px" alt="" />
// <h6>Open Ai</h6>
// </div>
// {/* item2 */}
// <div className={styles["item"]}>
// <img src="./imgs/google-gemini-icon.svg" width="24px" alt="" />
// <h6>Google Gemini</h6>
// </div>

// {/*  */}
// {/* item 3 */}

// <div className={styles["item"]}>
// <img src="./imgs/claude-ai-icon.svg" width="24px" alt="" />
// <h6>Claude ai</h6>
// </div>
// {/* item3 */}

// {/* item 4 */}
// <div className={styles["item"]}>
// <img src="./imgs/midjourney-blue-icon.svg" width="24px" alt="" />
// <h6>Midjourney</h6>
// </div>
// <br />

// {/* item 4 */}
//    </div>