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

export const getButtonValue = (order: 'asc' | 'desc' | null, type: 'year' | 'alpha') => {
    const base = type === 'year' ? 'year' : 'alpha';
    if (order === 'asc') return `${base} ascending`;
    if (order === 'desc') return `${base} descending`;
    return base;
}