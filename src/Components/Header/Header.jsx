import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contscts from "../../Pages/Contacts/Contacts";
import Home from "../../Pages/Home/Home";
import Project from "../../Pages/Project/Project";
import Projects from "../../Pages/Projects/Projects";
import logo from "../../IMG/images.png";
import "./Header.css";
import ButtonTheme from "../ButtonTheme/ButtonTheme";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-main">
            <img className="logo" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&auto=format" alt="Code Logo" />
            <ul>
              <li style={{ display: "inline", marginLeft: "10px" }}>
                <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'  } to={"/"}>
                  HOME
                </NavLink>
              </li>
              <li style={{ display: "inline", marginLeft: "10px" }}>
                <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'  } to={"/projects"}>
                  PROJECTS
                </NavLink>
              </li>
              <li style={{ display: "inline", marginLeft: "10px" }}>
                <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'  } to={"/contacts"}>
                  CONTACTS
                </NavLink>
              </li>
            </ul>
            <ButtonTheme/>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
