import "./ButtonTheme.css";
import { useTheme } from "../ThemeContext/ThemeContext";



function ButtonTheme() {
  const {toggleTheme} = useTheme

// const [theme, setTheme] = useLocalStorage('theme', 'light')  
// const ref = useRef(null)



  // const toggleTheme = () => {
  //    setTheme((prev)=> prev === 'light' ? 'dark' : 'light')
  // };

  // useEffect(()=> {
  //   document.body.dataset.theme = theme
  //   // return () => {} // UnMount
  // }, [theme]) // Mount / Update

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
