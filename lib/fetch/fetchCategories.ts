export const getCategories = async () => {
  return await fetch('http://localhost:4000/categories')
    .then((res) => res.json())
    .catch((err) => console.error('blyat', err));
};

export const getCategory = async (category: string) => {
  return await fetch(`http://localhost:4000/categories/${category}`)
    .then((res) => res.json())
    .catch((err) => console.error('suka', err));
};
