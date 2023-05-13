import { getCategories } from '@/lib/getCategories';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'categories',
};

export default async function Page() {
  const data: Promise<string[]> = getCategories();
  const categories = await data;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {categories.map((category) => (
        <div>
          <h5>
            <Link href={`/categories/${category}`}>{category}</Link>
          </h5>
        </div>
      ))}
    </section>
  );

  return content;
}
