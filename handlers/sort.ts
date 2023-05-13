import type { Comment, Film, FilmsByGenre } from '../lib/types';
import { ButtonType, ButtonOrder } from './types';
import { useFilmContext } from '../context/films';

export const randomiseFilms = (films: Film[]): Film[] => {
  for (let i = films.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = films[i];
    films[i] = films[j];
    films[j] = temp;
  }
  return films;
};

export const getRandomNumber = (length: number): number => {
  const randomNumber = Math.random() * length;
  return Math.floor(randomNumber);
};

export const getRandomFilm = (): Film => {
  const { films } = useFilmContext();
  const randomNumber = getRandomNumber(films.length);
  return films[randomNumber];
};

export const getButtonValue = (
  type: ButtonType,
  order?: ButtonOrder,
): string => {
  const base = type === 'random' ? "I'M FEELING LUCKY" : type;
  if (order === 'asc') return `${base} ⇡`;
  if (order === 'desc') return `${base} ⇣`;
  if (type === 'genre' && order === null) {
    return `${base} ○`;
  }
  return base;
};

export const sortByYear = (order: ButtonOrder, films: Film[]): Film[] => {
  const sort = films.sort((a, b) => a.year - b.year);
  if (order === 'asc') return sort.reverse();
  if (order === 'desc') return sort;
  return films;
};

export const sortByGenreAlpha = (
  order: ButtonOrder,
  genreSorted: FilmsByGenre,
): FilmsByGenre | null => {
  const sort = genreSorted.sort((a, b) => {
    const genreA = a.genre;
    const genreB = b.genre;
    return genreA < genreB ? -1 : genreA > genreB ? 1 : 0;
  });
  if (order === 'asc') return sort;
  if (order === 'desc') return sort.reverse();
  return null;
};

export const sortByAlpha = (order: ButtonOrder, films: Film[]): Film[] => {
  const sort = films.sort((a, b) => a.title.localeCompare(b.title));
  if (order === 'asc') return sort;
  if (order === 'desc') return sort.reverse();
  return films;
};

export const getTopFive = (topFive: string[]): Film[] | null => {
  // to do: move this implementation to backend (logic built)
  const { films } = useFilmContext();
  const collection: Film[] = [];
  for (const title of topFive) {
    const retrieve = films.find((film) => film.title === title);
    if (retrieve === undefined) return null;
    collection.push(retrieve);
  }
  return collection;
};

export const sortByGenre = (): FilmsByGenre => {
  const { searchedFilms } = useFilmContext();
  const genreCollection: string[] = [];
  searchedFilms.forEach((film) => {
    film.genre.forEach((genre) => {
      if (!genreCollection.includes(genre)) {
        genreCollection.push(genre);
      }
    });
  });

  const filmsByGenre: FilmsByGenre = [];
  genreCollection.map((collectedGenre) => {
    const moviesByGenre = searchedFilms.filter((searchedFilm) =>
      searchedFilm.genre.includes(collectedGenre),
    );
    filmsByGenre.push({ genre: collectedGenre, films: moviesByGenre });
  });

  return filmsByGenre;
};

export const sortByReviewed = (): Film[] => {
  const { films, searchTerm, searchedFilms } = useFilmContext();
  const filmsToReview = searchTerm !== '' ? searchedFilms : films;
  const reviewedFilms = filmsToReview.filter(
    (film) => film.review_score && film.review_text !== '',
  );
  return randomiseFilms(reviewedFilms);
};

export const sortByReviewScore = (): Film[] => {
  const { searchedFilms } = useFilmContext();
  const filmsFilteredOutNull = searchedFilms.filter(
    (film) => film.review_score !== null,
  );
  const sort = filmsFilteredOutNull.sort(
    (a, b) => a.review_score! - b.review_score!,
  );
  return sort.reverse();
};

export const fetchSpecialCategory = (category: string): Film[] => {
  const { films } = useFilmContext();
  const fetchedFilms: Film[] = [];
  films.forEach((film) => {
    film.special_category.forEach((specialCategory) => {
      if (specialCategory === category) {
        fetchedFilms.push(film);
      }
    });
  });
  return fetchedFilms;
};

export const sortCommentsByUpvotes = (comments: Comment[]): Comment[] => {
  const compareFn = (a: number, b: number): number => {
    return a - b;
  };
  const sort = comments.sort((a, b) => compareFn(a.upvotes, b.upvotes));
  return sort.reverse();
};
