import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contscts from "../../Pages/Contacts/Contacts";
import Home from "../../Pages/Home/Home";
import Project from "../../Pages/Project/Project";
import Projects from "../../Pages/Projects/Projects";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contscts />} />
      <Route path="/project/:id" element={<Project />} />
    </Routes>
  );
}

export default Content;
