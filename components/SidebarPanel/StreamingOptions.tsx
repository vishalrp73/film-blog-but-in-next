import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { getStreamingOptions } from '@/lib/justwatch';
import { locale } from '@/lib/justwatch/options';
import { Offer } from '@/lib/justwatch/types';
import { translucent } from '@/styles/translucent.css';
import Loading from '../Loading/Loading';
import Pilates from '../Pilates/Pilates';
import { Option, getOptions } from './StreamingOptionsMap';
import * as styles from './StreamingOptions.css';

const COUNTRY = locale === 'en_NZ' ? 'NZ' : 'FOREIGNER LAND';

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
        <h1>OH NO! THIS IS UNAVAILABLE TO STREAM IN {COUNTRY} 😡</h1>
        <Pilates />
      </Container>
    );
  }

  return (
    <Container>
      <h3 style={{ color: 'white' }}>Available in {COUNTRY} on ...</h3>
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
