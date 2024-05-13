import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      name: "Tony's",
      description:
        "is a desktop app made for an event manager company with Java SE and MySQL.",
      codeUrl: "https://github.com/jgalicia2022203/TonysKinal2023.git",
    },
    {
      id: 2,
      name: "Sales API",
      description:
        "that records the online comercial operations for a company with NodeJS and MongoDB.",
      codeUrl: "https://github.com/jgalicia2022203/API_Sales_Record",
    },
  ];

  return (
    <div className="flex flex-col gap-2.5 font-primary">
      <p>Projects</p>
      <div className="flex flex-col gap-3.5">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            description={project.description}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
