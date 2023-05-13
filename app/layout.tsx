import * as styles from '../styles/global.css';
import clsx from 'clsx';

export const metadata = {
  title: "Vishal's Pretentious Film Blog",
  description: 'now in NextJS 13!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(styles.all, styles.htmlBody)}>
      <body className={styles.htmlBody}>{children}</body>
    </html>
  );
}
