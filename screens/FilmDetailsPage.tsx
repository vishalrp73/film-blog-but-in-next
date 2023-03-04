import type { FC } from 'react';
import { Film } from '../lib/types';
import { Header } from '../components/FilmDetails';
import * as styles from '../components/FilmDetails/FilmDetails.css';
import VerticalSwipe from '../components/FilmDetails/VerticalSwipe';
import PreviewView from '../components/FilmDetails/PreviewView';

interface FilmProps {
  film: Film;
}

const FilmDetailsPage: FC<FilmProps> = ({ film }) => {
  return (
    <div className={styles.container}>
      <Header title={film.title} />
      <VerticalSwipe>
        <PreviewView film={film} />
        <>testing</>
      </VerticalSwipe>
    </div>
  );
};

export default FilmDetailsPage;
