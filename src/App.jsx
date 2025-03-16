import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import ScrollToTop from "./Utils/ScrollToTop";
import ButtonTheme from "./Components/ButtonTheme/ButtonTheme";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header/>
          <ScrollToTop/>
          <Main/>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

// 1)хэдр в отдельный компонент с навигацией внутри и лого, 2) также отдельный компонент футер 3) компонент проекта
// сделать активную ссылку, что бы мы видели на какой странице мы находимся, projectlist наполнить данными 
//Прочитать про хук useLocation
//посмотреть видео про outlet react-router + стили и реализовать на сайте переключение темы через дату атрибут в body и сделать запоминание localStorage. Кнопку с темой в отдельный компонет