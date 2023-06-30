import { getFilms } from '../fetch';
import { Film } from '../types';
import { randomiseFilms } from '../functions';

const reviewScoreThreshold: number = 0.5;

const cleanseFilms = (
  dirtyFilms: (Film | undefined)[],
  chosenFilmTitle: string,
): Film[] => {
  const test = dirtyFilms.filter(
    (film) => film !== undefined && chosenFilmTitle !== film.title,
  ) as Film[];
  return test;
};

export const searchRelatedFilms = async (movieTitle: string) => {
  const films: Film[] = await getFilms();
  const chosenFilm = films.find(({ title }) => title === movieTitle);
  const {
    title,
    genre: genres,
    review_score: chosenReviewScore,
  } = chosenFilm ?? {};

  if (title && genres && chosenReviewScore) {
    const firstGenreEntry = genres[0];
    const relatedByGenre = films.filter(
      (film) => film.genre.includes(firstGenreEntry) && title !== film.title,
    );

    const dirtyFilms = films.flatMap((film) => {
      const { review_score } = film;
      const upperReviewScore = chosenReviewScore + reviewScoreThreshold;
      const lowerReviewScore = chosenReviewScore - reviewScoreThreshold;
      if (review_score === null) return;
      if (review_score >= lowerReviewScore && review_score <= upperReviewScore)
        return film;
    });
    const relatedByReviewScore = cleanseFilms(dirtyFilms, title);

    const allRelatedFilms = randomiseFilms([
      ...new Set([...relatedByGenre, ...relatedByReviewScore]),
    ]);
    return allRelatedFilms.slice(0, 5);
  }
};
