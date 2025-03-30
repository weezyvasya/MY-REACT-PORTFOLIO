import "./ButtonTheme.css";
import React from "react";
import { useLocalStorage } from "../../Utils/UseLocalStorage";
import { useEffect } from "react";


function ButtonTheme() {

const [theme, setTheme] = useLocalStorage('theme', 'light')  
// const ref = useRef(null)



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
      <input type="checkbox" id="theme-toggle" onClick={toggleTheme}/>
      <label className="toggle"></label>
     </div>
    </>
  );
}

export default ButtonTheme;
