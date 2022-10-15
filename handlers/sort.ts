import { Film } from "../lib/types";

export const yearSort = (order: 'asc' | 'desc', films: Film[]): Film[] => {
    const sort = films.sort((a, b) => a.year - b.year);
    if (order === 'asc') return sort.reverse();
    if (order === 'desc') return sort;
    return films;
}

export const alphaSort = (order: 'asc' | 'desc', films: Film[]): Film[] => {
    const sort = films.sort((a, b) => a.title.localeCompare(b.title))
    if (order === 'asc') return sort;
    if (order === 'desc') return sort.reverse();
    return films;
}

export const getButtonValue = (type: 'year' | 'alpha' | 'random', order?: 'asc' | 'desc' | null ) => {
    const base = type === 'random' ? "I'M FEELING LUCKY" : type;
    if (order === 'asc') return `${base} ⇡`;
    if (order === 'desc') return `${base} ⇣`;
    return base;
}

export const getRandomFilm = async () => {
    const films = await fetch('http://localhost:4000/films').then(r => r.json());
    const randomNumber = Math.floor(Math.random() * films.length - 1)
    return films[randomNumber];
}

export const getTopFive = async (topFive: string[]) => {
    const films: Film[] = await fetch('http://localhost:4000/films').then(r => r.json());
    const collection = []
    for (const title of topFive) {
        const [retrieve] = films.filter(film => film.title === title);
        collection.push(retrieve)
    }
    return collection;
}

export const randomiseFilms = (films: Film[]) => {
    for (let i = films.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = films[i];
      films[i] = films[j];
      films[j] = temp;
    }
    return films;
  };