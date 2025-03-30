// import { projectsList } from "../../helpers/projectsList.js"
// import { useParams } from "react-router-dom";


// function Project() {

//    const { id } = useParams()

//    const project = projectsList[id]



//     return ( 
//         <>
//           <h1>Project</h1>
//           <p>{project.name}</p>
//         </>
//      );
// }

// export default Project;
import { projectsList } from "../../helpers/projectsList.js";
import { useParams } from "react-router-dom";
import "./Project.css";

function Project() {
  const { id } = useParams();
  const project = projectsList[id];

  // Дополнительные данные для проекта (можно вынести в projectsList.js)
  const projectDetails = {
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    features: [
      "Прогноз на 5 дней с почасовой детализацией",
      "Интерактивные графики температуры",
      "Геолокация для автоматического определения местоположения",
      "Уведомления о резких изменениях погоды"
    ],
    githubLink: "#",
    liveDemoLink: "#"
  };

  return (
    <div className="project-page">
      <div className="project-header">
        <h1 className="project-title">{project.name}</h1>
        <p className="project-subtitle">{project.description}</p>
      </div>
      
      <div className="project-content">
        <div className="project-image-wrapper">
          <img 
            src={project.img} 
            alt={project.name} 
            className="project-main-image"
          />
        </div>
        
        <div className="project-details">
          <section className="project-section">
            <h2 className="section-title">Описание проекта</h2>
            <p className="section-text">
              Это современное веб-приложение для просмотра прогноза погоды с интуитивно понятным интерфейсом. 
              Система использует данные из открытых метеорологических API и предоставляет пользователям 
              точную информацию в удобном формате.
            </p>
          </section>
          
          <section className="project-section">
            <h2 className="section-title">Основные возможности</h2>
            <ul className="features-list">
              {projectDetails.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
          
          <section className="project-section">
            <h2 className="section-title">Использованные технологии</h2>
            <div className="technologies">
              {projectDetails.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </section>
          
          <div className="project-links">
            <a href={projectDetails.githubLink} className="project-link github-link">
              Исходный код на GitHub
            </a>
            <a href={projectDetails.liveDemoLink} className="project-link demo-link">
              Посмотреть демо
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;