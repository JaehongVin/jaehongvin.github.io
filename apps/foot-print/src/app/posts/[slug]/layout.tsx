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
        'dt:max-w-px-1300',
      )}
    >
      <div className="hidden w-200 shrink-0 dt:block" aria-hidden="true" />
      <main className="min-w-0 flex-1">{children}</main>
      <RightSidebar />
    </div>
  );
};

export default DetailLayout;
