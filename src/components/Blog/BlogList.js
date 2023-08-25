import { useState } from "react";
import BlogCart from "./BlogCart";
import BlogCategorieFilter from "./BlogCategorieFilter";

const BlogList = ({ posts, postsImageUrl, postsCategories = null, search }) => {
  const [selectedCategory, setSelectedCategory] = useState(search);

  const handleCategoryChange = (category) => {
    if (category !== "Show all topics"){
      setSelectedCategory(category);
    }else {
      setSelectedCategory(null)
    }
  };

  const filteredBlogPosts = selectedCategory
    ? posts.filter((post) => post.categories[0] === selectedCategory)
    : posts;

  const BlogsCart = filteredBlogPosts.map((post) => (
    <BlogCart
      key={post.id}
      title={post.title}
      slug={post.slug}
      date={post.date}
      categories={post.categories}
      imgUrl={postsImageUrl.find((image) => image.slug === post.slug)}
    />
  ));

  return (
    <>
      {postsCategories && (
        <BlogCategorieFilter
          categories={postsCategories}
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
        />
      )}

      <section
        className={`
        w-full
        grid gap-4
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        mt-4
      `}
      >
        {BlogsCart}
      </section>
    </>
  );
};

export default BlogList;
