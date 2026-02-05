import { cn } from '@common/ui/lib/utils';

const ListLayout = ({
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
      {children}
    </div>
  );
};

export default ListLayout;
