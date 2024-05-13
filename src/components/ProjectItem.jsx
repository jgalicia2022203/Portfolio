/* eslint-disable react/prop-types */
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const ProjectItem = ({ name, description, codeUrl }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-sm">
        {name} {description}
      </p>
      <div className="flex flex-row justify-start">
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-1 text-xs"
        >
          <p>View Code</p>
          <ArrowTopRightIcon className="text-black bg-white" />
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
