import AnimateLink from "@/ui/AnimateLink";

const Navbar = () => {
  return (
    <nav className={"sm:mt-1"}>
      <ul className={"flex gap-4 text-xl font-bold"}>
        <li>
          <AnimateLink className={"p-1 text-main-gray hover:text-white transition-colors"} href="/blog">
            Blog
          </AnimateLink>
        </li>
        <li>
          <AnimateLink className={"p-1 text-main-gray hover:text-white transition-colors"} href="about-us">
            About
          </AnimateLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
