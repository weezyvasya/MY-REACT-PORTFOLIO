function ProjectCards({project}) {
    return ( 
        <>
          <div>
            <h2>{project.name}</h2>
          </div>
          <div>
            <p>{project.description}</p>
          </div>
        </>
     );
}

export default ProjectCards;