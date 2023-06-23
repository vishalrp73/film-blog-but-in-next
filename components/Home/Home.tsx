'use client';
import type { FC } from 'react';
import { SearchProvider } from '@/context/search';
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
  return (
    <SearchProvider>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header
          films={movies}
          bannerText={bannerText}
          selectedBannerImage={selectedBannerImage}
        />
        <FilmGrid films={movies} topFive={topFive} />
      </div>
    </SearchProvider>
  );
};

export default HomeComponent;
