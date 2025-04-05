import "./ButtonTheme.css";
import { useTheme } from "../ThemeContext/ThemeContext";
import { useEffect } from "react";
import { useLocalStorage } from "../../Utils/UseLocalStorage";



function ButtonTheme() {
  const [theme, setTheme] = useTheme() // [value, setValue]



  const toggleTheme = () => {
     setTheme((prev)=> prev === 'light' ? 'dark' : 'light')
  };

  useEffect(()=> {
    document.body.dataset.theme = theme
    // return () => {} // UnMount
  }, [theme]) // Mount / Update

  return (
    <>
     <div className="parent">
      <input type="checkbox" id="theme-toggle" onChange={toggleTheme}/>
      <label className="toggle"></label>
     </div>
    </>
  );
}

export default ButtonTheme;
