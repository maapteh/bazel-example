import React, { useEffect, useState } from 'react';
import { Page } from '@example/ui-page';
import { Spinner } from '@example/ui-spinner';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Page>{isLoading ? <Spinner /> : 'Welcome'}</Page>
    </>
  );
};
