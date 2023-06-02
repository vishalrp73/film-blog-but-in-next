'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { Categories } from '@/lib/types';
import * as styles from './CategoryLink.css';

interface Props {
  route: Categories;
  content: string;
}

const CategoryLink: FC<Props> = ({ route, content }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Link
      href={`/${route}/${encodeURIComponent(content)}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.container}>
        {isHovered && '>>'}
        <p className={styles.content}>{content}</p>
      </div>
    </Link>
  );
};

export default CategoryLink;
