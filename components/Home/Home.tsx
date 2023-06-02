'use client';
import type { FC } from 'react';
import { SearchProvider } from '@/context/search';
import { useFilms } from '@/lib/hooks/useFilms';
import { Film } from '@/lib/types';
import Header from '../Header/Header';
import FilmGrid from '../FilmGrid/FilmGrid';
import { StaticImageData } from 'next/image';

interface Props {
  bannerText: string;
  selectedBannerImage: StaticImageData;
  movies: Film[];
  topFive: Film[];
}

const HomeComponent: FC<Props> = ({
  bannerText,
  selectedBannerImage,
  movies,
  topFive,
}) => {
  const { films } = useFilms(movies);
  return (
    <SearchProvider>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header
          films={films ?? []}
          bannerText={bannerText}
          selectedBannerImage={selectedBannerImage}
        />
        <FilmGrid films={films ?? []} topFive={topFive} />
      </div>
    </SearchProvider>
  );
};

export default HomeComponent;
