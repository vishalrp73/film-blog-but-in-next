export default async function getCategory(category: string) {
  return await fetch(`http://localhost:4000/categories/${category}`)
    .then((res) => res.json())
    .catch((err) => console.error('suka', err));
}
