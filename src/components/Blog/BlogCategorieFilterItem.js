const BlogCategorieFilterItem = ({ categorie, onClick }) => {
  return (
    <button
      onClick={() => onClick(categorie)}
      className={`
        px-4 py-1
        flex w-56 max-w-full bg-[#555] hover:bg-[#444]
        font-normal text-lg
        rounded
        sm:w-fit
      `}
    >
      {categorie}
    </button>
  );
};

export default BlogCategorieFilterItem;
