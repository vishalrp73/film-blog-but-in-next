export const getFilms = async () => {
  const data = await fetch('http://localhost:4000/films').then((res) =>
    res.json(),
  );
  if (data === undefined) throw new Error('failed to fetch data');
  return data;
};
