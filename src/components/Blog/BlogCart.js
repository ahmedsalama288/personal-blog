import BlogCartCoverImage from "./BlogCartCoverImage";
import BlogCartData from "./BlogCartData";

import Link from "next/link";

const BlogCart = ({ title, slug, date, categories, imgUrl }) => {

  return (
    <section
      className={`
      box-border
      h-fit max-h-screen 
      flex flex-col justify-center items-start gap-2
      bg-[#31393e] rounded-md
      transition-all ease-in-out
      border border-white border-solid
      hover:border-[3px] hover:bg-[#31393eb9]
      cursor-pointer
    `}
    >
      <Link
        href={`/blog/${slug}`}
        className={`
          group
          w-full flex flex-col
          relative 
      `}
      >
        <BlogCartCoverImage imgUrl={imgUrl} />
        <BlogCartData title={title} categories={categories} date={date} />
      </Link>
    </section>
  );
};

export default BlogCart;
