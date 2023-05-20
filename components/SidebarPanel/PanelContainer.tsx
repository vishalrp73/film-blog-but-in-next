import type { FC, ReactNode } from 'react';
import * as styles from './PanelContainer.css';

const PanelContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.contentContainer}>{children}</div>;
};

export default PanelContainer;
