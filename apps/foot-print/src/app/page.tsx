'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

const HomePage = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    router.replace('/posts');
  }, [router]);

  return null;
};

export default HomePage;
