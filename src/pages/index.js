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
        <meta name="title" content="Ahmed Salama" />
        <meta
          name="description"
          content="Welcome to my personal blog, where I share my opinions and knowledge with you. Explore insightful articles on a wide range of topics, from front-end development using HTML, CSS, and JavaScript to leveraging the power of React, Redux, React Router, and React Hooks. Join me in my journey of problem-solving using online resources and AI-driven solutions to ensure high-quality production. Stay updated on the latest trends and emerging technologies in the world of web development, as I'm committed to continuous learning and growth. Engage with 
          thought-provoking discussions and enrich your understanding of the 
          ever-evolving digital landscape. Let's embark on this knowledge-sharing 
          adventure together!"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://personal-blog-eight-ochre.vercel.app/"
        />
        <meta property="og:title" content="Ahmed Salama" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="blob:https://vercel.com/905e0fda-c23c-4c2a-8f75-69a86a7ece3c"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://personal-blog-eight-ochre.vercel.app/"
        />
        <meta property="twitter:title" content="Ahmed Salama" />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
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
