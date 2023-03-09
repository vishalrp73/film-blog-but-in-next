import type { FC } from 'react';
import { GetStaticPropsContext } from 'next';
import CategoryPage from '../../screens/CategoryPage';
import { Film } from '../../lib/types';

interface Props {
  category: string;
  films: Film[];
}

const CategoryScreen: FC<Props> = ({ category, films }) => {
  if (category && films) {
    return <CategoryPage category={category} films={films} />;
  }

  return null;
};

export default CategoryScreen;

export async function getStaticPaths() {
  const categoryList: string[] = await fetch('http://localhost:4000/categories')
    .then((r) => r.json())
    .then((d) => d);

  const paths = categoryList.map((category) => ({
    params: { category: category },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  if (params) {
    const response = await fetch(
      `http://localhost:4000/categories/${params.category}`,
    );
    const data = await response.json();

    return {
      props: {
        category: params.category,
        films: data,
      },
    };
  }
}
