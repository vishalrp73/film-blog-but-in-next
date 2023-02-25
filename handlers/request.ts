import { Film } from "../lib/types";

type Endpoint = 'films' | 'topFive' | 'genres';

export const fetchHttpBasic = async (endpoint: Endpoint) => {
    const data: Film[] = await fetch(`http://localhost:4000/${endpoint}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error('fuck', err));
    return data;
};

export const fetchHttpRoute = async (id: number) => {
    const data = await fetch(`http://localhost:4000/films/${id}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error('fuck', err))
    return data;
}