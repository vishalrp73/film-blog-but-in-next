import type { FC, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { getStreamingOptions } from '@/lib/justwatch';
import { locale } from '@/lib/justwatch/options';
import { Offer, ProviderShortNames } from '@/lib/justwatch/types';
import {
  AppleTVPlus,
  DisneyPlus,
  Mubi,
  Neon,
  Netflix,
  PrimeVideo,
  Shudder,
  TVNZ,
} from '@/lib/img/streaming-icons';
import Loading from '../Loading/Loading';
import { translucent } from '@/styles/translucent.css';
import * as styles from './StreamingOptions.css';

const country = locale === 'en_NZ' ? 'NZ' : 'FOREIGNER LAND';

type Option = { key: ProviderShortNames; name: string; image: StaticImageData };

const optionsMap: Option[] = [
  { key: 'nfx', name: 'Netflix', image: Netflix },
  { key: 'prv', name: 'Prime Video', image: PrimeVideo },
  { key: 'nev', name: 'Neon', image: Neon },
  { key: 'dnp', name: 'Disney+', image: DisneyPlus },
  { key: 'atp', name: 'Apple TV+', image: AppleTVPlus },
  { key: 'mbi', name: 'MUBI', image: Mubi },
  { key: 'tnz', name: 'TVNZ', image: TVNZ },
  { key: 'shd', name: 'Shudder', image: Shudder },
];

const getOptions = (responses: Offer[]) => {
  const short_names: ProviderShortNames[] = responses.map(
    ({ package_short_name }) => package_short_name,
  );
  const matches: Option[] = optionsMap.filter((option) =>
    short_names.includes(option.key),
  );
  return matches;
};

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={clsx(styles.container, translucent)}>{children}</div>;
};

const StreamingOptions: FC<{ id: number }> = ({ id }) => {
  const [options, setOptions] = useState<Option[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resButNoMatch, setResButNotMatch] = useState<boolean>(false);

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
          setResButNotMatch(true);
          return;
        }

        if (matches.length === 0) return;
        setOptions(matches);
      })
      .catch((err) => {
        console.error('suka', err);
        return null;
      });
  }, []);

  if (isLoading)
    return (
      <Container>
        <Loading />
      </Container>
    );

  if (resButNoMatch) {
    return (
      <Container>
        <h1>No worthy streaming services carry this film 😤</h1>
      </Container>
    );
  }

  if (options === null) {
    return (
      <Container>
        <h1>OH NO! THIS IS UNAVAILABLE TO STREAM IN {country} 😡</h1>
      </Container>
    );
  }

  return (
    <Container>
      <h3 style={{ color: 'white' }}>Available in {country} on ...</h3>
      <div className={styles.iconContainer}>
        {options.map((opt) => (
          <div key={opt.key} className={styles.optionContainer}>
            <Image
              className={styles.icon}
              key={opt.key}
              width={75}
              src={opt.image}
              alt={`${opt.name} icon`}
            />
            <p>{opt.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StreamingOptions;
