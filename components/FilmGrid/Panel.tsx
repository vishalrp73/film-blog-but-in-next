import { FC } from 'react';
import Link from 'next/link';
import * as styles from './Panel.css';

interface PanelProps {
  id: number;
  title: string;
  thumbnail: string;
}

const Panel: FC<PanelProps> = ({ id, title, thumbnail }) => {
  return (
    <Link href={`/films/${id}`}>
      <a>
        <div
          style={{ background: thumbnail }}
          className={styles.panelContainer}
        >
          {title}
        </div>
      </a>
    </Link>
  );
};

export default Panel;
