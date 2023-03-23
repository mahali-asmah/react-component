import DOMPurify from "isomorphic-dompurify";

export type ProseComponentProps = {
  content: string;
};

// determines how short the content is based on the number of words
//const SHORT_CONTENT = 1000;

export function ProseComponent({ content }: ProseComponentProps) {
  const __html = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html }} />;
}
