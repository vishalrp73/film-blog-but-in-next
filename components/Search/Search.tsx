import { FC, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import Sort from '../Sort';

const Search: FC = () => {
  const [userInputText, setUserInputText] = useState<string>('');
  useSearch(userInputText);

  return (
    <>
      <input type="text" onChange={(e) => setUserInputText(e.target.value)} />
      <Sort type="year" />
      <Sort type="alpha" />
    </>
  );
};

export default Search;
