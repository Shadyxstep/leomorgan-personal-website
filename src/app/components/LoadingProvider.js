"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from './Loading';

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log('LoadingProvider: Setting loading to true');
    setIsLoading(true);

    const timer = setTimeout(() => {
      console.log('LoadingProvider: Setting loading to false');
      setIsLoading(false);
    }, 10000); // Set back to 10 seconds for testing

    return () => {
      console.log('LoadingProvider: Cleaning up timer');
      clearTimeout(timer);
    };
  }, [pathname, searchParams]);

  console.log('LoadingProvider: Current loading state:', isLoading);

  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
} 