'use client';

import Image from 'next/image';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  return (
    <main className="relative flex min-h-[calc(100vh-60px)] flex-col items-center justify-center px-16">
      <Image
        src="/assets/icons/footprint.svg"
        alt=""
        width={240}
        height={240}
        className="absolute translate-x-1/5 -translate-y-1/3 opacity-5 rotate-10"
        aria-hidden="true"
      />
      <h1 className="text-px-48 font-bold text-gray-300">오류 발생</h1>
      <h2 className="mt-8 text-px-24 font-semibold text-gray-800">
        문제가 발생했습니다
      </h2>
      <p className="mt-12 text-center text-px-14 text-gray-500">
        {error.message || '예기치 않은 오류가 발생했습니다.'}
      </p>
      {error.digest && (
        <p className="mt-8 text-px-12 text-gray-400">
          오류 코드: {error.digest}
        </p>
      )}
      <button
        type="button"
        onClick={reset}
        className="mt-24 cursor-pointer rounded-px-8 bg-gray-800 px-20 py-12 text-px-14 font-medium text-white transition-colors hover:bg-gray-700"
      >
        다시 시도
      </button>
    </main>
  );
};

export default ErrorPage;
