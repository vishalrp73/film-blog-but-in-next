import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import * as styles from './BackingImage.css';

interface Props {
  image: string;
  children: ReactNode;
  className?: string;
}

const BackingImage: FC<Props> = ({ image, children, className }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={clsx(styles.container, className)}
    >
      {children}
    </div>
  );
};

export default BackingImage;
