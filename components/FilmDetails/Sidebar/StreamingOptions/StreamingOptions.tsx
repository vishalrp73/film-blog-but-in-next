import { type FC, ReactNode } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { locale } from '@/lib/justwatch';
import { useStreamingOptions } from './useStreamingOptions';
import { Loading, Pilates } from '@/components/Icons';
import { translucent } from '@/styles/translucent.css';
import * as styles from './StreamingOptions.css';

const COUNTRY = locale === 'en_NZ' ? 'NZ' : 'FOREIGNER LAND';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={clsx(styles.container, translucent)}>{children}</div>;
};

interface Props {
  id: number;
}

const StreamingOptions: FC<Props> = ({ id }) => {
  const { options, isLoading, noMatch } = useStreamingOptions(id);

  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  if (noMatch) {
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
