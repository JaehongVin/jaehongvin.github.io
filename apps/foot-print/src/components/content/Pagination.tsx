import { cn } from '@common/ui/lib/utils';
import Link from 'next/link';

interface PaginationProps {
  listPath: string;
  category: string | null;
  tag: string | null;
  currentPage: number;
  totalPages: number;
}

const buildPageHref = (
  listPath: string,
  category: string | null,
  tag: string | null,
  page: number,
) => {
  const params = new URLSearchParams();

  if (category) params.set('category', category);
  if (tag) params.set('tag', tag);
  if (page > 1) params.set('page', String(page));

  const query = params.toString();

  return `/${listPath}${query ? `?${query}` : ''}`;
};

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const Pagination = ({
  listPath,
  category,
  tag,
  currentPage,
  totalPages,
}: PaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav aria-label="페이지 네비게이션" className="mt-24 flex justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-px-4">
        <li>
          {isFirstPage ? (
            <span className="flex-center size-32 rounded-px-6 text-gray-400">
              <span className="sr-only">이전 페이지 없음</span>
              <ChevronLeftIcon />
            </span>
          ) : (
            <Link
              href={buildPageHref(listPath, category, tag, currentPage - 1)}
              className="flex-center size-32 rounded-px-6 text-gray-500 transition-colors hover:bg-gray-100/70 hover:text-gray-900"
            >
              <span className="sr-only">이전 페이지</span>
              <ChevronLeftIcon />
            </Link>
          )}
        </li>

        {pages.map((page) => {
          const isActive = page === currentPage;

          return (
            <li key={page}>
              <Link
                href={buildPageHref(listPath, category, tag, page)}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`${page}페이지`}
                className={cn(
                  'flex-center size-32 rounded-full text-px-13 transition-colors',
                  isActive
                    ? 'bg-gray-900 font-600 text-white'
                    : 'text-gray-500 hover:bg-gray-100/70 hover:text-gray-900',
                )}
              >
                {page}
              </Link>
            </li>
          );
        })}

        <li>
          {isLastPage ? (
            <span className="flex-center size-32 rounded-px-6 text-gray-400">
              <span className="sr-only">다음 페이지 없음</span>
              <ChevronRightIcon />
            </span>
          ) : (
            <Link
              href={buildPageHref(listPath, category, tag, currentPage + 1)}
              className="flex-center size-32 rounded-px-6 text-gray-500 transition-colors hover:bg-gray-100/70 hover:text-gray-900"
            >
              <span className="sr-only">다음 페이지</span>
              <ChevronRightIcon />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
