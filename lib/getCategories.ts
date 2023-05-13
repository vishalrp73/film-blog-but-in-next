export const getCategories = async () => {
  return await fetch('http://localhost:4000/categories')
    .then((res) => res.json())
    .catch((err) => console.error('blyat', err));
};
