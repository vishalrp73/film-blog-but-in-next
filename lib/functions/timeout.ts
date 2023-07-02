import { Dispatch, SetStateAction } from 'react';

export const timeout = (
  setState: Dispatch<SetStateAction<any>>,
  ms: number,
) => {
  setTimeout(() => {
    setState(null);
  }, ms);
};
