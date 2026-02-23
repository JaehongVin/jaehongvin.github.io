import { cn } from '@common/ui/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b border-gray-200/50 bg-white/40 backdrop-blur-px-12',
      )}
    >
      <div
        className={cn(
          'mx-auto flex h-48 items-center justify-between px-24 max-w-px-1000',
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-px-8 text-px-16 font-700 text-gray-900"
          aria-label="홈으로 이동"
        >
          <Image
            src="/assets/icons/logo.svg"
            alt="발자취 로고"
            width={16}
            height={16}
          />
          발자취
        </Link>

        <div className="flex items-center gap-px-4">
          <a
            href="https://github.com/JaehongVin"
            target="_blank"
            rel="noopener noreferrer external"
            className="flex-center size-32 rounded-px-6 text-gray-500 transition-colors hover:bg-gray-100/70 hover:text-gray-700"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <button
            type="button"
            className="flex-center size-32 rounded-px-6 text-gray-500 transition-colors hover:bg-gray-100/70 hover:text-gray-700 tb:hidden"
            aria-label="메뉴 열기"
          >
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
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
