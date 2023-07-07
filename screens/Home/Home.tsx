'use client';
import { type FC } from 'react';
import { StaticImageData } from 'next/image';
import { SearchProvider } from '@/context/search';
import { Film } from '@/lib/types';
import { Header } from '@/components/Header';
import FilmGrid from '@/components/FilmGrid';

interface Props {
  bannerText: string;
  selectedBannerImage: StaticImageData;
  placeholderTitle: string;
  movies: Film[];
  topFive: Film[];
}

const HomePage: FC<Props> = ({
  bannerText,
  selectedBannerImage,
  placeholderTitle,
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
          placeholderTitle={placeholderTitle}
        />
        <FilmGrid films={movies} topFive={topFive} />
      </div>
    </SearchProvider>
  );
};

export default HomePage;
