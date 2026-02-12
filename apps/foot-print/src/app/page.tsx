'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

const HomePage = () => {
  const router = useRouter();

  //* 포스팅 목록 페이지로 강제 이동
  useLayoutEffect(() => {
    router.replace('/posts');
  }, [router]);

  return null;
};

export default HomePage;
