import { cn } from '@common/ui/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@common/ui/molecules/Card';

const TOC_LEVEL = {
  PARENT: 1,
  CHILD: 2,
} as const;

const TOC_ITEMS = [
  { id: 'introduction', title: '소개', level: TOC_LEVEL.PARENT },
  { id: 'getting-started', title: '시작하기', level: TOC_LEVEL.PARENT },
  { id: 'installation', title: '설치', level: TOC_LEVEL.CHILD },
  { id: 'configuration', title: '설정', level: TOC_LEVEL.CHILD },
  { id: 'usage', title: '사용법', level: TOC_LEVEL.PARENT },
  { id: 'conclusion', title: '마무리', level: TOC_LEVEL.PARENT },
] as const;

export function RightSidebar() {
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
            {TOC_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    'block text-px-12 font-500 text-gray-600 transition-colors hover:text-gray-900',
                    item.level === TOC_LEVEL.CHILD &&
                      'pl-10 text-px-11 font-400',
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
}
