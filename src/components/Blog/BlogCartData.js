import { formatDate } from "@/util/formatDate";

const BlogCartData = ({ title, categories, date }) => {
  const formatedDate = formatDate(date);

  return (
    <>
      <div className={"w-full absolute"}>
        <h2
          className={`
            p-4
            text-[1.375rem] font-[Lora,serif] font-bold
        `}
        >
          {title}
        </h2>
      </div>
      <div className={"w-full absolute p-4 bottom-0 text-sm "}>
        <div className={`flex justify-between`}>
          <span>{categories}</span>
          <span>{formatedDate}</span>
        </div>
      </div>
    </>
  );
};

export default BlogCartData;
