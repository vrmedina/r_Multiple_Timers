import { useEffect } from 'react';

const interval =
  (delay = 0) =>
  (callback) =>
    useEffect(() => {
      const id = setInterval(callback, delay);

      return () => clearInterval(id);
    }, [callback]);

export const useSecondsInterval = interval(1000);
