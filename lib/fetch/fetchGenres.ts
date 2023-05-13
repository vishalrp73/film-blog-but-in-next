export const getGenres = async () => {
  return await fetch('http://localhost:4000/genres')
    .then((res) => res.json())
    .catch((err) => console.error('suka', err));
};

export const getGenre = async (genre: string) => {
  return await fetch(`http://localhost:4000/genres/${genre}`)
    .then((res) => res.json())
    .catch((err) => console.error('blyat', err));
};
