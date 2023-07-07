import { useState, useEffect } from 'react';
import { getStreamingOptions, Offer } from '@/lib/justwatch';
import { Option, getOptions } from './streamingOptionsMap';

export const useStreamingOptions = (id: number) => {
  const [options, setOptions] = useState<Option[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [noMatch, setNoMatch] = useState<boolean>(false);

  useEffect(() => {
    getStreamingOptions(id)
      .then((res: Offer[] | undefined) => {
        if (res === undefined || res.length === 0) {
          setOptions(null);
          setIsLoading(false);
          return;
        }

        const matches = getOptions(res);
        setIsLoading(false);

        if (matches.length === 0 && res.length > 0) {
          setNoMatch(true);
          return;
        }

        if (matches.length === 0) return;

        setOptions(matches);
      })
      .catch((err) => console.error('suka', err));
  }, []);

  return {
    options,
    isLoading,
    noMatch,
  };
};
