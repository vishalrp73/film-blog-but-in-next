import type { FC } from 'react';
import { GetStaticPropsContext } from 'next';
import { Film } from '../../lib/types';
import CollectionPage from '../../components/Collection/CollectionPage';

interface Props {
  genre: string;
  films: Film[];
}

const GenreScreen: FC<Props> = ({ genre, films }) => {
  if (genre && films) {
    return <CollectionPage heading={genre} films={films} />;
  }

  return null;
};

export default GenreScreen;

export async function getStaticPaths() {
  const genreList: string[] = await fetch('http://localhost:4000/genres')
    .then((r) => r.json())
    .then((d) => d);

  const paths = genreList.map((genre) => ({ params: { genre: genre } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  if (params) {
    const response = await fetch(
      `http://localhost:4000/genres/${params.genre}`,
    );
    const data = await response.json();
    return {
      props: {
        genre: params.genre,
        films: data,
      },
    };
  }
}
