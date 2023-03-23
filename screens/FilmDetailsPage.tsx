import type { FC } from 'react';
import { Film } from '../lib/types';
import HeaderMiniSearch from '../components/Header/HeaderMiniSearch';
import VerticalSwipe from '../components/FilmDetails/VerticalSwipe';
import PreviewView from '../components/FilmDetails/PreviewView';
import FilmDive from '../components/FilmDetails/FilmDive';
import BackingImage from '../components/BackingImage/BackingImage';
import { getRandomNumber } from '../handlers/sort';
import * as styles from '../components/FilmDetails/FilmDetails.css';

interface FilmProps {
  film: Film;
}

const FilmDetailsPage: FC<FilmProps> = ({ film }) => {
  const previewRandomNumber: number = getRandomNumber(film.img_bank.length);
  const filmDiveRandomNumner: number = getRandomNumber(film.img_bank.length);
  const previewBackingImage: string = film.img_bank[previewRandomNumber];
  const filmDiveBackingImage: string = film.img_bank[filmDiveRandomNumner];

  return (
    <>
      <HeaderMiniSearch heading={film.title} />
      <div className={styles.container}>
        <VerticalSwipe>
          <BackingImage image={previewBackingImage}>
            <PreviewView film={film} />
          </BackingImage>
          <BackingImage image={filmDiveBackingImage}>
            <FilmDive film={film} />
          </BackingImage>
        </VerticalSwipe>
      </div>
    </>
  );
};

export default FilmDetailsPage;
