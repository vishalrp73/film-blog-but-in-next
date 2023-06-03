export const getTopFive = async () => {
  return await fetch('http://localhost:4000/topFive')
    .then((res) => res.json())
    .catch((err) => console.error('suka', err));
};
