import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-60px)] flex-col items-center justify-center px-16">
      <Image
        src="/assets/icons/footprint.svg"
        alt=""
        width={400}
        height={400}
        className="absolute translate-x-1/5 -translate-y-1/5 opacity-5 rotate-10"
        aria-hidden="true"
      />
      <h1 className="text-px-72 font-bold text-gray-300">404</h1>
      <h2 className="mt-8 text-px-24 font-semibold text-gray-800">
        페이지를 찾을 수 없습니다
      </h2>
      <p className="mt-12 text-center text-px-14 text-gray-500">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="mt-24 rounded-px-8 bg-gray-800 px-20 py-12 text-px-14 font-medium text-white transition-colors hover:bg-gray-700"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
