import { getFilms } from '@/lib/fetch';
import { Film } from '@/lib/types';
import HomeComponent from '@/components/Home/Home';
import * as styles from './page.css';
import { randomiseFilms } from '@/lib/functions';
import { getHeaderContent } from '@/components/Header/getHeaderContent';

export default async function Home() {
  const data: Promise<Film[]> = getFilms();
  const films = await data;
  const randomisedFilms = randomiseFilms(films);
  const { selectedBannerImage, bannerText } = getHeaderContent();

  return (
    <main className={styles.main}>
      <HomeComponent
        bannerText={bannerText}
        selectedBannerImage={selectedBannerImage}
        movies={randomisedFilms ?? []}
      />
    </main>
  );
}
