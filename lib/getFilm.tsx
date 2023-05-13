export default async function getFilm(filmId: string) {
  const data = await fetch(`http://localhost:4000/films/${filmId}`).then(
    (res) => res.json(),
  );
  if (data === undefined) throw new Error('failed to fetch individual film');
  return data;
}
