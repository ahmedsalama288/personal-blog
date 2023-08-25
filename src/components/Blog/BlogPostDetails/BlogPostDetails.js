import Head from "next/head";
import RawHtmlRenderer from "@/ui/RawHtmlRenderer";
import { formatDate } from "@/util/formatDate";
import Link from "next/link";

const BlogPostDetails = ({ post }) => {
  const { id, title, date, slug, content, categories } = post;
  const formatedDate = formatDate(date);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <section>
        <div>
          <h2
            className={`
            font-[Lora,serif]
            font-medium
            text-3xl text-center my-8
            sm:text-5xl sm:text-left
            lg:text-7xl

          `}
          >
            {title}
          </h2>
          <div className={`flex items-center gap-6 w-full mb-10`}>
            <Link
              href={{
                pathname: "/blog",
                query: { search: categories[0] },
              }}
              
            >
              <span className={` text-lg font-normal`}>
                {categories.map((categorie) => `${categorie} `)}
              </span>
            </Link>
            <span className={"text-lg text-[#9b9eaf]"}>{formatedDate}</span>
          </div>
        </div>
        <section className={"blog-post-details"}>
          <RawHtmlRenderer htmlContent={content} />
        </section>
      </section>
    </>
  );
};

export default BlogPostDetails;
