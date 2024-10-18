
import styles from  "./Footer.module.css"
import { FaInstagram,FaFacebook,FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import {useTheme} from '../../context/theme-context/ThemeContext';


function Footer() {

  return (
    <div className={styles["footer-container-styles"]} >
<div className={styles["socials-and-logo"]}>
<div className={styles["socials"]} >
<Link target="_blank" to="http://instagram.com/hanzilarasool"><FaInstagram/></Link>
<Link target="_blank" to="http://facebook.com/muhammadhanzilarasool"><FaFacebook/></Link>
<Link target="_blank" to="http://linkedin.com/"><FaLinkedinIn/></Link>
</div>
<div className={styles["contact-via-email"]}>
{/* {isDark ?    <img src="./imgs/logo.svg"  alt="" />: <img src="./imgs/logo-bg-black.svg" />} */}
<a href="mailto:info@virtule.com">info@virtule.com</a>
</div>
</div>
{/* <div style={{width:"100%",color:"var(--white-color)",display:"flex",justifyContent:"center",marginTop:"1rem"}}>
    <p >Copyright claim &#169; All rights reserved Virtule 2024. </p>
</div> */}
    </div>
  )
}

export default Footer