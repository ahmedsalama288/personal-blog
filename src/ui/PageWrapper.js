const PageWrapper = ({ children }) => {
  return (
    <section
      className={`
          h-[calc(100vh-190px)]
          sm:h-[calc(100vh-162px)]
          flex flex-col
          mx-auto px-4 my-4  
          max-w-screen-xl sm:px-6 lg:w-10/12
        `}
    >
      {children}
    </section>
  );
};

export default PageWrapper;
