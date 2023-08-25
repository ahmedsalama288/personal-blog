const RawHtmlRenderer = ({ htmlContent }) => {
  const sanitizedHtml = htmlContent;

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default RawHtmlRenderer;
