export const getArtists = async () => {
  return await fetch('http://localhost:4000/artists')
    .then((res) => res.json())
    .catch((err) => console.error('suka', err));
};

export const getArtist = async (artist: string) => {
  return await fetch(`http://localhost:4000/artist/${artist}`)
    .then((res) => res.json())
    .catch((err) => console.error('blyat', err));
};
