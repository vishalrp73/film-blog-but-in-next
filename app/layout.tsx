import * as styles from '../styles/global.css';

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
    <html lang="en" className={styles.all}>
      <body>{children}</body>
    </html>
  );
}
