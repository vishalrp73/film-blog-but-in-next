import type { FC } from 'react';
import { GetStaticPropsContext } from 'next';
import { Film } from '../../lib/types';
import Artists from '../../components/Artists/Artists';

interface Props {
  artist: string;
  films: Film[];
}

const ArtistPage: FC<Props> = ({ artist, films }) => {
  if (artist && films) {
    return <Artists artist={artist} films={films} />;
  }

  return null;
};

export default ArtistPage;

export async function getStaticPaths() {
  const artistList: string[] = await fetch(
    'http://localhost:4000/artists',
  ).then((r) => r.json().then((d) => d));

  const paths = artistList.map((artist) => ({
    params: { artist: artist },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  if (params) {
    const response = await fetch(
      `http://localhost:4000/artist/${params.artist}`,
    );
    const data = await response.json();
    return {
      props: {
        artist: params.artist,
        films: data,
      },
    };
  }
}
