import BlogList from "@/components/Blog/BlogList";
import { getStaticProps as getBlogStaticProps } from "@/pages/blog/index";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts, postsImageUrl }) {
  return (
    <>
      <Head>
        <title>Ahmed Salama</title>
      </Head>
      <section className={`flex flex-col w-full items-center justify-between`}>
        <BlogList posts={posts} postsImageUrl={postsImageUrl} />
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  return getBlogStaticProps();
};
