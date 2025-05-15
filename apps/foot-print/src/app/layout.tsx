import '@/styles/globals.css';
import { cn } from '@common/ui/lib/utils';

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="size-full">
      <body className="flex size-full bg-gray-100 bg-[url('/assets/images/global-bg.webp')]">
        <aside className={cn('hidden', 'dt:flex dt:flex-1')}>
          {/** 좌측 사이드 임시 */}
        </aside>
        <main
          className={cn('hide-scrollbar size-full overflow-y-auto', 'dt:w-900')}
        >
          {children}
        </main>
        <aside className={cn('hidden', 'dt:flex dt:flex-1')}>
          {/** 우측 사이드 임시 */}
        </aside>
      </body>
    </html>
  );
}
