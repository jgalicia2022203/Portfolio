import { ArrowRightIcon } from "@radix-ui/react-icons";

const Bio = () => {
  return (
    <div className="text-white font-primary">
      <div className="pb-2.5">
        <div className="flex flex-row items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="8"
            viewBox="0 0 24 24"
            fill="#ffffff"
            className="icon icon-tabler icons-tabler-filled icon-tabler-circle"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
          </svg>
          <p>Juan Galicia</p>
        </div>
        <p className="text-sm">Developer and Student</p>
      </div>
      <div className="flex flex-col gap-2.5 items-start text-sm">
        <p>
          I’m a versatile, practical and reliable developer. Interested in
          building creative products and experiences.
        </p>
        <p>
          Something creative right here a phrase or something i don&apos;t have
          fucking idea.
        </p>
        <button className="flex flex-row items-center p-1.5 gap-1.5 text-xs bg-transparent border border-white hover:bg-white hover:text-black">
          <p>Learn more about me</p>
          <ArrowRightIcon />
        </button>{" "}
      </div>
    </div>
  );
};

export default Bio;
