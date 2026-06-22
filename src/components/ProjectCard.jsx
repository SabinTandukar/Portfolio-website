const ProjectCard = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      {project.tech.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
};

export default ProjectCard;
