import Link from 'next/link';
import * as styles from './page.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Header</h1>
      <h1>Search &amp; Sort Options</h1>
      <h1>Film Grid</h1>
      <Link href="/films">To films</Link>
      <Link href="/categories">To categories</Link>
      <Link href="/artists">To artist</Link>
      <Link href="/genres">To genres</Link>
    </main>
  );
}
