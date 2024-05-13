/* eslint-disable react/prop-types */
import { ArrowTopRightIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const NavLink = ({
  href,
  icon: Icon,
  children,
  download = false,
  external = false,
  copyValue,
}) => {
  const [linkText, setLinkText] = useState(children);
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = (event) => {
    if (copyValue) {
      event.preventDefault();
      navigator.clipboard.writeText(copyValue).then(() => {
        setLinkText("Copied to clipboard");
        setIsCopied(true);
        setTimeout(() => {
          setLinkText(children);
          setIsCopied(false);
        }, 3000);
      });
    }
  };

  const baseStyles = "text-sm font-primary cursor-pointer flex items-center";
  const copiedStyles = isCopied
    ? "bg-black text-white"
    : "bg-black text-white hover:bg-white hover:text-black";
  const iconVisibility = "group-hover:visible invisible";
  const linkStyles = "flex-grow";

  const relProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  const downloadProps = download ? { download } : {};
  const linkProps = href ? { href } : {};

  return (
    <div className="flex items-center justify-between group">
      {" "}
      <a
        {...linkProps}
        className={`${baseStyles} ${copiedStyles} ${linkStyles}`}
        {...relProps}
        {...downloadProps}
        onClick={handleClick}
      >
        {linkText}
      </a>
      {Icon && <Icon className={`ml-2 ${iconVisibility}`} />}
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col items-end justify-start">
      <NavLink copyValue={"jgaliciamazariegos@outlook.es"} icon={CopyIcon}>
        Email
      </NavLink>
      <NavLink
        href="https://twitter.com/Tonelito_"
        icon={ArrowTopRightIcon}
        external
      >
        Twitter
      </NavLink>
      <NavLink copyValue={"tonelito"} icon={CopyIcon}>
        Discord
      </NavLink>
      <NavLink
        href="https://open.spotify.com/user/v5mt6rxl8b66jvkxob409i0hk"
        icon={ArrowTopRightIcon}
        external
      >
        Spotify
      </NavLink>
      <NavLink
        href="https://github.com/jgalicia2022203"
        icon={ArrowTopRightIcon}
        external
      >
        GitHub
      </NavLink>
      <NavLink href="/path-to-your-cv.pdf" icon={ArrowTopRightIcon} download>
        CV
      </NavLink>
    </div>
  );
};

export default Header;
