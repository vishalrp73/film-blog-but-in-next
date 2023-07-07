import { type FC } from 'react';
import Image from 'next/image';
import PilatesIcon from '@/lib/img/pirate-icon.png';
import * as styles from './Pilates.css';

const Pilates: FC = () => {
  return (
    <div className={styles.pilates}>
      <Image src={PilatesIcon} alt="arrr" width={75} height={75} />
      arrrrr!
    </div>
  );
};

export default Pilates;
