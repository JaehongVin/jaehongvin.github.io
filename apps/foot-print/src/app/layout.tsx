import { Header } from '@/components/Header';
import { DEFAULT_META_DATA } from '@/constants/seo';
import '@/styles/globals.css';
import { cn } from '@common/ui/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = DEFAULT_META_DATA;

const GlobalLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko" className="size-full">
      <body
        className={cn(
          'min-h-full bg-gray-50',
          "bg-[url('/assets/images/global-bg.webp')] bg-fixed",
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
};

export default GlobalLayout;
