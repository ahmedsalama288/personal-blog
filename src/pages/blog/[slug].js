import BlogPostDetails from "@/components/Blog/BlogPostDetails/BlogPostDetails";
import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";

const slug = ({ post }) => {
  return <BlogPostDetails post={post} />;
};

export default slug;

export const getStaticPaths = async () => {
  const GetAllSlugs = gql`
    query GetALLSlugs {
      posts {
        nodes {
          slug
        }
      }
    }
  `;

  const response = await client.query({
    query: GetAllSlugs,
  });

  const paths = response.data.posts.nodes.map((post) => `/blog/${post.slug}`);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const GetPostBySlug = gql`
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        id
        title
        date
        slug
        content
        categories {
          nodes {
            name
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GetPostBySlug,
    variables: {
      id: params.slug,
    },
  });

  const { id, title, date, slug, content, categories } = response.data.post;

  const post = {
    id,
    title,
    date,
    slug,
    content,
    categories: categories.nodes.map(({ name }) => name),
  };

  return {
    props: {
      post,
    },
  };
};
