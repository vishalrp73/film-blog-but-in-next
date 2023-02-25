import type { Film } from "../lib/types";
import { ButtonType, ButtonOrder } from "./types";
import { useFilmContext } from "../context/films";
import { fetchHttpBasic } from "./request";

export const randomiseFilms = (films: Film[]) => {
    for (let i = films.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = films[i];
        films[i] = films[j];
        films[j] = temp;
      }
      return films;
};

export const getRandomNumber = (length: number) => {
    const randomNumber = Math.random() * length;
    return Math.floor(randomNumber);
}

export const getRandomFilm = (): Film => {
    const { films } = useFilmContext();
    const randomNumber = getRandomNumber(films.length);
    return films[randomNumber];
};

export const getButtonValue = (type: ButtonType, order?: ButtonOrder ) => {
    const base = type === 'random' ? "I'M FEELING LUCKY" : type;
    if (order === 'asc') return `${base} ⇡`;
    if (order === 'desc') return `${base} ⇣`;
    return base;
}

export const sortByYear = (order: ButtonOrder, films: Film[]): Film[] => {
    const sort = films.sort((a, b) => a.year - b.year);
    if (order === 'asc') return sort.reverse();
    if (order === 'desc') return sort;
    return films;
}

export const sortByAlpha = (order: ButtonOrder, films: Film[]): Film[] => {
    const sort = films.sort((a, b) => a.title.localeCompare(b.title))
    if (order === 'asc') return sort;
    if (order === 'desc') return sort.reverse();
    return films;
}

export const getTopFive = (topFive: string[]) => {
    // to do: move this implementation to backend (logic built)
    const { films } = useFilmContext();
    const collection: Film[] = [];
    for (const title of topFive) {
        const retrieve = films.find(film => film.title === title);
        if (retrieve === undefined) return null;
        collection.push(retrieve);
    }
    return collection;
}

export const getAllFilmsByGenre = (fetchedGenre: string, filmsSearched: Film[]) => {
    const filmGenreArray: Film[] = [];
    filmsSearched.forEach(film => film.genre.find(genre => {
        if (genre === fetchedGenre) {
            filmGenreArray.push(film)
        }
    }))
    console.log(filmGenreArray)
    return filmGenreArray;
}

export const sortByGenre = () => {
    const { searchedFilms } = useFilmContext();
    const genreCollection: string[] = [];
    searchedFilms.forEach(film => {
        film.genre.forEach(genre => {
            if (!genreCollection.includes(genre)) {
                genreCollection.push(genre);
            }
        })
    });

    console.log(genreCollection)

}