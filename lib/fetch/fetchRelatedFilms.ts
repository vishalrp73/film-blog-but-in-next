export const getRelatedFilms = async (filmId: number) => {
  return await fetch(`http://localhost:4000/related/${filmId}`)
    .then((res) => res.json())
    .catch((err) => console.error('suka', err));
};
