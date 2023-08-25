import Navbar from "./Navbar";
import LogoAndSocialBar from "./LogoAndSocialBar";

const Header = () => {
  return (
    <header
      className={`
        max-w-screen-xl mx-auto
        mt-6
        w-full flex flex-col gap-4 justify-center items-center
        sm:flex-row sm:items-start
        sm:my-8 sm:justify-between sm:px-6
        lg:w-10/12
      `}
    >
      <LogoAndSocialBar />

      <Navbar />
    </header>
  );
};

export default Header;
