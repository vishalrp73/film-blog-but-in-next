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
    const base = type === 'random' ? 'FEELING LUCKY' : type;
    if (order === 'asc') return `${base} ascending`;
    if (order === 'desc') return `${base} descending`;
    return base;
}

export const getRandomFilm = async () => {
    const films = await fetch('http://localhost:4000/films').then(r => r.json());
    const randomNumber = Math.floor(Math.random() * films.length - 1)
    return films[randomNumber];
}