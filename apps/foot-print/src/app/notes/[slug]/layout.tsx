import { DetailLayout } from '@/components/content/DetailLayout';

const NoteDetailLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <DetailLayout>{children}</DetailLayout>;
};

export default NoteDetailLayout;
