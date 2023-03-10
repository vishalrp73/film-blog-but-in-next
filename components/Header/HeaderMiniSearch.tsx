import type { FC } from 'react';
import { useRouter } from 'next/router';
import useToggle from '../../lib/hooks/useToggle';
import { MiniSearch } from '../Search';
import { translucent } from '../../styles/translucent.css';
import clsx from 'clsx';
import * as styles from './HeaderMiniSearch.css';

interface Props {
  heading: string;
}

const HeaderMiniSearch: FC<Props> = ({ heading }) => {
  const router = useRouter();
  const [toggle, setToggle] = useToggle();
  return (
    <div className={clsx(styles.headerContainer, translucent)}>
      <button className={styles.backBtn} onClick={() => router.back()}>
        &#8592; back
      </button>
      <h1 className={styles.title}>{heading}</h1>
      <MiniSearch toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default HeaderMiniSearch;
