import AnimateLink from "@/ui/AnimateLink";
import SocialBar from "./SocialBar";

const LogoAndSocialBar = () => {
  return (
    <div className={"flex flex-col gap-4"}>
      <AnimateLink href={"/"}>
        <h1 className={"text-[2rem] mx-auto font-[Lora,serif]"}>Ahmed Salama</h1>
      </AnimateLink>
      <SocialBar />
    </div>
  );
};

export default LogoAndSocialBar;
