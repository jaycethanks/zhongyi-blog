import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import remarkSlug from 'remark-slug';
import Image from 'next/image';

interface ArticleViewerType {
  isDark: boolean // 是否暗色主题
  contentStr: string // markdown 文本
}

// main();

// async function main() {
//   const file = await remark()
//     .use(remarkGfm)
//     .use(remarkToc)
//     .process('# Hi\n\n## Table of contents\n\n## Hello\n\n*Some* ~more~ _things_.');

//   //   console.error(String(file));
//   console.log('file', file);
// }

const ArticleViewer: React.FC<ArticleViewerType> = ({ isDark, contentStr }) => {
    const [styles, setStyles] = useState<any>([]);
const [style, setStyle] = useState({});
  // 这个插件的主题导入有bug, https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/509
  // import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';
  // 以下是一个异步导入的临时解决方案
  useEffect(() => {
    // 在 useEffect 中使用 await 关键字是不允许的，因为 useEffect 函数必须是一个同步函数。如果你想要在 useEffect 中使用异步代码，你可以将异步代码封装成一个函数，并在 useEffect 中调用这个函数。
    const fetchStyles = async () => {
      const [{ default: lightStyle }, { default: darkStyle }] = await Promise.all([
        import('react-syntax-highlighter/dist/esm/styles/prism/one-light'),
        import('react-syntax-highlighter/dist/esm/styles/prism/one-dark'),
      ]);
      setStyles([lightStyle, darkStyle]);
    };
    fetchStyles();
  }, []);
  return <>
            <ReactMarkdown
              className='markdown-body'
              children={contentStr || ''}
              remarkPlugins={[[remarkSlug], [remarkToc], [remarkGfm]]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match
                    ? (
                    <SyntaxHighlighter
                      {...props}
                      children={String(children).replace(/\n$/, '')}
                      style={style}
                      language={match[1]}
                      PreTag="div"
                    />
                      )
                    : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                      );
                },
                p({ node, className, children, ...props }) {
                  // const { node } = paragraph
                  if ((node.children[0] as any).tagName === 'img') {
                    const image = node.children[0] as any;
                    const metastring = image.properties.alt;
                    const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
                    const metaWidth = metastring.match(/{([^}]+)x/);
                    const metaHeight = metastring.match(/x([^}]+)}/);
                    const width = metaWidth ? metaWidth[1] : '768';
                    const height = metaHeight ? metaHeight[1] : '432';
                    const isPriority = metastring?.toLowerCase().match('{priority}');
                    const hasCaption = metastring?.toLowerCase().includes('{caption:');
                    const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

                    return (
                      <div className="postImgWrapper">
                        <Image
                          src={image.properties.src}
                          width={width}
                          height={height}
                          className="postImg"
                          alt={alt}
                          priority={isPriority}
                          loading="lazy"
                          placeholder='blur'
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
                        />
                          {hasCaption ? <div className="caption" aria-label={caption}>{caption}</div> : null}
                      </div>
                    );
                  }
                  return <p>{children}</p>;
                },

              }}
            />

    </>;
};

export default ArticleViewer;
