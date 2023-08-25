import Image from "next/image";
import twitterIcon from "../../../../public/blogIcons/twitter-social.png";
import linkedinIcon from "../../../../public/blogIcons/linkedin-social.png";
import githubIcon from "../../../../public/blogIcons/github-social.png";

const SocialBar = () => {
  return (
    <div className={"flex justify-center gap-4 sm:justify-start pl-1"}>
      <a
        className={" opacity-50 hover:opacity-100 transition-opacity"}
        href="https://twitter.com/Ahmed_Salama288"
        target="blank"
      >
        <Image alt="image icon" src={twitterIcon} />
      </a>
      <a
        className={" opacity-50 hover:opacity-100 transition-opacity"}
        href="https://www.linkedin.com/in/ahmedsalama288/"
        target="blank"
      >
        <Image alt="image icon" src={linkedinIcon} />
      </a>
      <a
        className={" opacity-50 hover:opacity-100 transition-opacity"}
        href="https://github.com/ahmedsalama288"
        target="blank"
      >
        <Image alt="image icon" src={githubIcon} />
      </a>
    </div>
  );
};

export default SocialBar;
