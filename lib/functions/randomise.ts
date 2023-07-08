import { Artists, Film } from '../types';

export const randomiseFilms = (films: Film[]): Film[] => {
  for (let i = films.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = films[i];
    films[i] = films[j];
    films[j] = temp;
  }
  return films;
};

export const randomiseStrings = (strings: string[]): string[] => {
  for (let i = strings.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = strings[i];
    strings[i] = strings[j];
    strings[j] = temp;
  }
  return strings;
};

export const getRandomNumber = (length: number): number => {
  const randomNumber = Math.random() * length;
  return Math.floor(randomNumber);
};

export const getRandomFilm = (films: Film[]): Film => {
  const randomNumber = getRandomNumber(films.length);
  return films[randomNumber];
};

export const jumbleArtistStrings = (artists: Artists): Artists => {
  const { directors, writers, cinematographers, musicians, actors } = artists;
  const reconstructedArtists: Artists = {
    directors: randomiseStrings(directors),
    writers: randomiseStrings(writers),
    cinematographers: randomiseStrings(cinematographers),
    musicians: randomiseStrings(musicians),
    actors: randomiseStrings(actors),
  };

  return reconstructedArtists;
};
