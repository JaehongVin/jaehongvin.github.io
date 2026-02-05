import { cn } from '@common/ui/lib/utils';
import { RightSidebar } from './_components/RightSidebar';

const DetailLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={cn(
        'mx-auto flex w-full gap-px-24 px-16 py-24',
        'dt:max-w-px-1200',
      )}
    >
      <main className={cn('min-w-0 flex-1', 'dt:max-w-px-900')}>
        {children}
      </main>
      <RightSidebar />
    </div>
  );
};

export default DetailLayout;
