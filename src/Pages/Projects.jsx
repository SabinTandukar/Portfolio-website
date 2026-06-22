import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>

      {projects.map((project) => (
        <ProjectCard key={projects.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
