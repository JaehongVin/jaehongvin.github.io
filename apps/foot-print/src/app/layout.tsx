import '@/styles/globals.css';
import { cn } from '@common/ui/lib/utils';
import { Header } from './_components/Header';
import { LeftSidebar } from './_components/LeftSidebar';
import { RightSidebar } from './_components/RightSidebar';

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="size-full">
      <body
        className={cn(
          'min-h-full bg-gray-50',
          "bg-[url('/assets/images/global-bg.webp')] bg-fixed",
        )}
      >
        <Header />
        <div
          className={cn(
            'mx-auto flex w-full gap-px-24 px-16 py-24',
            'dt:max-w-px-1200',
          )}
        >
          <LeftSidebar />
          <main className={cn('min-w-0 flex-1', 'dt:max-w-px-600')}>
            {children}
          </main>
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
