import Image from "next/image";

const BlogCartCoverImage = ({ imgUrl }) => {
  return (
    <div className={"w-full h-44 relative"}>
      <Image
        className={`
              rounded-md
              w-full max-w-full
              object-cover h-44
              opacity-80  group-hover:opacity-50 transition-opacity
            `}
        src={imgUrl.url}
        alt={"Blog Main Image"}
        width={10000}
        height={10000}
        priority={true}
      />
    </div>
  );
};

export default BlogCartCoverImage;
