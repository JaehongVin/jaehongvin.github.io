import { cn } from '@common/ui/lib/utils';
import type { ComponentProps } from 'react';

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    .replace(/\s+/g, '-');

const H2 = ({ children, ...props }: ComponentProps<'h2'>) => {
  const id = typeof children === 'string' ? slugify(children) : undefined;

  return (
    <h2
      id={id}
      className="mt-40 mb-16 scroll-mt-80 text-px-22 font-700 text-gray-900 border-b border-gray-200 pb-8"
      {...props}
    >
      {children}
    </h2>
  );
};

const H3 = ({ children, ...props }: ComponentProps<'h3'>) => {
  const id = typeof children === 'string' ? slugify(children) : undefined;

  return (
    <h3
      id={id}
      className="mt-32 mb-12 scroll-mt-80 text-px-18 font-600 text-gray-800"
      {...props}
    >
      {children}
    </h3>
  );
};

const P = ({ children, ...props }: ComponentProps<'p'>) => (
  <p className="my-16 text-px-15 leading-px-26 text-gray-700" {...props}>
    {children}
  </p>
);

const A = ({ href, children, ...props }: ComponentProps<'a'>) => {
  const isExternal = href?.startsWith('http');

  return (
    <a
      href={href}
      className="text-gray-900 font-500 underline underline-offset-2 decoration-gray-300 hover:decoration-gray-500 transition-colors"
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
    </a>
  );
};

const Strong = ({ children, ...props }: ComponentProps<'strong'>) => (
  <strong className="font-600 text-gray-900" {...props}>
    {children}
  </strong>
);

const Ul = ({ children, ...props }: ComponentProps<'ul'>) => (
  <ul className="my-16 ml-20 flex flex-col gap-8" {...props}>
    {children}
  </ul>
);

const Ol = ({ children, ...props }: ComponentProps<'ol'>) => (
  <ol className="my-16 ml-20 flex flex-col gap-8 list-decimal" {...props}>
    {children}
  </ol>
);

const Li = ({ children, ...props }: ComponentProps<'li'>) => (
  <li
    className="text-px-15 leading-px-24 text-gray-700 pl-4 relative before:absolute before:left-[-16px] before:content-['•'] before:text-gray-400"
    {...props}
  >
    {children}
  </li>
);

const Blockquote = ({ children, ...props }: ComponentProps<'blockquote'>) => (
  <blockquote
    className="my-20 border-l-4 border-gray-300 bg-gray-50 py-12 px-20 text-px-14 text-gray-600 italic rounded-r-px-8"
    {...props}
  >
    {children}
  </blockquote>
);

const Code = ({ children, ...props }: ComponentProps<'code'>) => (
  <code
    className="rounded-px-4 bg-gray-100 px-6 py-2 text-px-13 font-500 text-gray-800"
    {...props}
  >
    {children}
  </code>
);

const Pre = ({ children, ...props }: ComponentProps<'pre'>) => (
  <pre
    className={cn(
      'my-20 overflow-x-auto rounded-px-8 bg-gray-900 p-16',
      'text-px-13 leading-px-22 text-gray-100',
      '[&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit',
    )}
    {...props}
  >
    {children}
  </pre>
);

const Hr = ({ ...props }: ComponentProps<'hr'>) => (
  <hr className="my-32 border-gray-200" {...props} />
);

export const mdxComponents = {
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  strong: Strong,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  hr: Hr,
};
