import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { ContentLink } from '../ContentLink/ContentLink';
import { translucent } from '@/styles/translucent.css';
import { hideScrollbar } from '@/styles/scroll.css';
import * as styles from './Module.css';

interface ContentProps {
  contentArray: string[];
  heading: string;
}

const ContentMap: FC<ContentProps> = ({ contentArray, heading }) => {
  if (heading === 'genres') {
    return (
      <>
        {contentArray.map((content) => (
          <ContentLink key={content} route="genres" content={content} />
        ))}
      </>
    );
  }

  return (
    <>
      {contentArray.map((content) => (
        <ContentLink key={content} route="artists" content={content} />
      ))}
    </>
  );
};

interface Props {
  heading: string;
  content: string | string[];
}

const Module: FC<Props> = ({ heading, content }) => {
  return (
    <div className={clsx(styles.container, translucent, hideScrollbar)}>
      <h5 className={styles.heading}>{heading}</h5>
      <div className={styles.contentContainer}>
        {Array.isArray(content) ? (
          <ContentMap heading={heading} contentArray={content} />
        ) : (
          <p className={styles.contentText}>{content}</p>
        )}
      </div>
    </div>
  );
};

export const ChildrenModule: FC<{
  children: ReactNode;
  heading?: string;
  className?: string;
}> = ({ children, heading, className }) => {
  return (
    <div
      className={clsx(
        styles.container,
        styles.childrenContainer,
        translucent,
        hideScrollbar,
        className,
      )}
    >
      {heading && <h5 className={styles.heading}>{heading}</h5>}
      {children}
    </div>
  );
};

export default Module;
