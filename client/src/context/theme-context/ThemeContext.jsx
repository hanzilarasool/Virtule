import { useState,createContext, useContext,useEffect} from "react";
import PropTypes from "prop-types";
export const ThemeContext=createContext()

export const ThemeProvider=({children})=>{


const [theme,settheme]=useState(localStorage.getItem("theme") ||"light");
    const [isDark, setisDark] = useState(theme ==="dark");


    useEffect(() => {
        document.documentElement.setAttribute("theme-data", theme);
    }, [theme]);
const setLight=()=>{
    setisDark(false);
    settheme("white")
    localStorage.setItem("theme","light");
}
const setDark=()=>{
    setisDark(true);
    settheme("dark");
    localStorage.setItem("theme","dark")

}


    return <ThemeContext.Provider value={{isDark,setisDark,setDark,setLight,theme,settheme}}>
{children}
    </ThemeContext.Provider>

}
ThemeProvider.propTypes={
    children:PropTypes.node.isRequired
}

export const useTheme=()=>{return useContext(ThemeContext)};

