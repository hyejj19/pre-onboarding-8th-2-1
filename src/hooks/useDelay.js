import { useEffect, useState } from 'react';

export const useDelay = () => {
  const [isLoading, setIsLoading] = useState(false);

  const setDelay = (func) => {
    setIsLoading(true);
    setTimeout(() => {
      func();
      setIsLoading(false);
    }, 500);
  };

  return { isLoading, setDelay };
};
