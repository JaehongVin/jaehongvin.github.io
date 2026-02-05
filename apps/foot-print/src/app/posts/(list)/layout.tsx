import { cn } from '@common/ui/lib/utils';
import { LeftSidebar } from './_components/LeftSidebar';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        'mx-auto flex w-full gap-px-24 px-16 py-24',
        'dt:max-w-px-1200',
      )}
    >
      <LeftSidebar />
      <main className={cn('min-w-0 flex-1', 'dt:max-w-px-900')}>
        {children}
      </main>
    </div>
  );
}
