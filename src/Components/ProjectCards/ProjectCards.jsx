import './ProjectCards.css'

function ProjectCards({ project }) {
  return (
    <div>
      <div>
        <h2>{project.name}</h2>
      </div>
      <div>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCards;
