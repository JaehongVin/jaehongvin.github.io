import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@common/ui/molecules/Card';

type DetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug } = await params;

  return (
    <article>
      <Card>
        <CardHeader>
          <CardTitle className="text-px-20">게시글 상세 페이지</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-px-14 text-gray-600">
            슬러그:{' '}
            <code className="rounded bg-gray-100 px-4 py-2">{slug}</code>
          </p>
          <p className="mt-16 text-px-13 text-gray-500">
            이 페이지는 플레이스홀더입니다. 실제 MDX 콘텐츠가 여기에 렌더링될
            예정입니다.
          </p>
        </CardContent>
      </Card>
    </article>
  );
}
