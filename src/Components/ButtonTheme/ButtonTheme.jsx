import "./ButtonTheme.css";
import React from "react";
import { useLocalStorage } from "../../Utils/UseLocalStorage";
import { useEffect } from "react";


function ButtonTheme() {

const [theme, setTheme] = useLocalStorage('theme', 'light')  

  const toggleTheme = () => {
     setTheme((prev)=> prev === 'light' ? 'dark' : 'light')
  };

  useEffect(()=> {
    document.body.dataset.theme = theme
  }, [theme])



  
  return (
    <>
     <div  className="parent">
      <input type="checkbox" id="theme-toggle" onClick={toggleTheme}/>
      <label className="toggle"></label>
     </div>
    </>
  );
}

export default ButtonTheme;
