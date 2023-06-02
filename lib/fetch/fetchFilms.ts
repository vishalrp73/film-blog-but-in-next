export const getFilms = async () => {
  return await fetch('http://localhost:4000/films')
    .then((res) => res.json())
    .catch((err) => console.error('suka', err));
};

export const getFilm = async (filmId: string) => {
  return await fetch(`http://localhost:4000/films/${filmId}`)
    .then((res) => res.json())
    .catch((err) => console.error('blyat', err));
};
