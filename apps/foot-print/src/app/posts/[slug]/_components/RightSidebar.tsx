'use client';

import { cn } from '@common/ui/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@common/ui/molecules/Card';
import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export const RightSidebar = () => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headings = document.querySelectorAll('article h2, article h3');
    const items: TocItem[] = [];

    headings.forEach((heading) => {
      const id = heading.id;
      const title = heading.textContent || '';
      const level = heading.tagName === 'H2' ? 2 : 3;

      if (id && title) {
        items.push({ id, title, level });
      }
    });

    setToc(items);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' },
    );

    const headings = document.querySelectorAll('article h2, article h3');
    for (const heading of headings) {
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, []);

  if (toc.length === 0) {
    return null;
  }

  return (
    <aside
      className={cn(
        'sticky top-64 hidden h-fit w-200 shrink-0 flex-col gap-12',
        'dt:flex',
      )}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-px-13">목차</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-10">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    'block text-px-12 font-500 text-gray-600 transition-colors hover:text-gray-900',
                    item.level === 3 && 'pl-10 text-px-11 font-400',
                    activeId === item.id && 'text-gray-900 font-600',
                  )}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
};
