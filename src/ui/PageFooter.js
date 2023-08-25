import SocialBar from "@/components/Layout/Header/SocialBar";

const Pagefooter = () => {
  return (
    <footer
      className={`
          py-8 flex flex-col justify-between items-center gap-4
          mt-auto sm:flex-row
    `}
    >
      <div className=" text-[#ffffffb3]">2023 © Ahmed Salama</div>
      <SocialBar />
    </footer>
  );
};

export default Pagefooter;
