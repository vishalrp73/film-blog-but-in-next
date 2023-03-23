import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import * as styles from './CollectionContainer.css';

interface Props {
  children: ReactNode;
  renderDiv: boolean;
  align?: 'start' | 'center';
  heading?: string;
}

export const CollectionContainer: FC<Props> = ({
  children,
  renderDiv,
  align,
  heading,
}) => {
  return (
    <div className={styles.container}>
      {renderDiv && (
        <>
          {heading && <h1 className={styles.heading}>{heading}</h1>}
          <div
            className={clsx(
              styles.gridContainer,
              clsx({
                [styles.alignStart]: align === 'start',
                [styles.alignCenter]: align === 'center',
              }),
            )}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};
