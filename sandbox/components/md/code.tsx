import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from './vs';

export const code = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter
      // eslint-disable-next-line react/no-children-prop
      children={String(children).replace(/\n$/, '')}
      showLineNumbers
      style={vs}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
