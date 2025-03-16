import { projectsList } from "../../helpers/projectsList.js"
import { useParams } from "react-router-dom";


function Project() {

   const { id } = useParams()

   const project = projectsList[id]



    return ( 
        <>
          <h1>Project</h1>
          <p>{project.name}</p>
        </>
     );
}

export default Project;