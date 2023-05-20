import type { FC } from 'react';
import clsx from 'clsx';
import { ContentLink } from '../ContentLink/ContentLink';
import * as styles from './Module.css';
import { translucent } from '@/styles/translucent.css';

interface ContentProps {
  contentArray: string[];
  heading: string;
}

const ContentMap: FC<ContentProps> = ({ contentArray, heading }) => {
  if (heading === 'genres') {
    return (
      <>
        {contentArray.map((content) => (
          <ContentLink route="genres" content={content} />
        ))}
      </>
    );
  }

  return (
    <>
      {contentArray.map((content) => (
        <ContentLink route="artists" content={content} />
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
    <div className={clsx(styles.container, translucent)}>
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

export default Module;
