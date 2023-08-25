import BlogCategorieFilterItem from "./BlogCategorieFilterItem";

const BlogCategorieFilter = ({
  categories,
  onCategoryChange,
  selectedCategory,
}) => {

  // remove Uncategorized
  const modifidCategories = categories.filter(
    (categorie) => categorie !== "Uncategorized"
  );

  const categoriesButtons = modifidCategories.map((categorie) => (
    <BlogCategorieFilterItem
      key={categorie}
      categorie={categorie}
      onClick={onCategoryChange}
    />
  ));

  return (
    <div
      className={`
          flex flex-col justify-center
          items-center
          gap-3 mt-7 mb-9
          sm:flex-row
        `}
    >
      {!selectedCategory && <>{categoriesButtons}</>}

      {selectedCategory && (
        <>
          <BlogCategorieFilterItem
            categorie={selectedCategory}
            onClick={onCategoryChange}
          />

          <BlogCategorieFilterItem
            categorie={"Show all topics"}
            onClick={onCategoryChange}
          />
        </>
      )}
    </div>
  );
};

export default BlogCategorieFilter;
