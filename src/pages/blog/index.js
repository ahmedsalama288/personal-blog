import { useRouter } from "next/router";
import Head from "next/head";
import BlogList from "@/components/Blog/BlogList";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

const Blogs = ({ posts, postsImageUrl, postsCategories }) => {
  const router = useRouter();
  const { search } = router.query || null;
  


  return (
    <>
      <Head>
        <title>Blog - Ahmed Salama</title>
      </Head>
      
      <BlogList
        posts={posts}
        postsImageUrl={postsImageUrl}
        postsCategories={postsCategories}
        search={search}
      />
    </>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          id
          title
          date
          slug
          categories {
            nodes {
              name
            }
          }
        }
      }

      mediaItems {
        nodes {
          sourceUrl
          parent {
            node {
              slug
            }
          }
        }
      }

      categories {
        nodes {
          name
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POSTS,
  });

  const postsData = response.data.posts.nodes;
  const postsImageUrl = response.data.mediaItems.nodes.map(
    ({ sourceUrl, parent }) => ({ url: sourceUrl, slug: parent.node.slug })
  );

  const postsCategories = response.data.categories.nodes.map(
    ({ name }) => name
  );

  const posts = postsData.map(({ id, title, date, slug, categories }) => ({
    id,
    title,
    date,
    slug,
    categories: categories.nodes.map(({ name }) => name),
  }));

  return {
    props: {
      posts,
      postsImageUrl,
      postsCategories,
    },
  };
};
