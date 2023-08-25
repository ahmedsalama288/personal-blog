import Link from "next/link";

const AnimateLink = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`
        ${className || ""}
        block relative
        after:absolute
        after:w-full after:h-[2px] after:bg-white
        after:bottom-0 after:left-0
        after:origin-right hover:after:origin-left
        after:scale-x-0 hover:after:scale-x-100 
        after:transition after:duration-300
      `}
    >
      {children}
    </Link>
  );
};

export default AnimateLink;
