import './ProjectCards.css'

function ProjectCards({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-container">
        <img 
          src={project.img} 
          alt={project.name} 
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <h2 className="project-title">{project.name}</h2>
        <p className="project-description">{project.description}</p>
        <button className="project-button">Подробнее</button>
      </div>
    </article>
  );
}

export default ProjectCards;