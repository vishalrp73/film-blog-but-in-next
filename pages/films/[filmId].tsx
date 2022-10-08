import { GetStaticPropsContext } from 'next';
import { Film } from '../../lib/types';
import FilmDetails from '../../components/FilmDetails';

interface PageProps {
  film: Film;
}

function FilmPage({ film }: PageProps) {
  return <FilmDetails film={film} />;
}

export default FilmPage;

export async function getStaticPaths() {
  const filmsAPICheck = await fetch('http://localhost:4000/films').then((r) =>
    r.json().then((d) => d.length),
  );
  const pathParams = [];
  for (let i = 1; i <= filmsAPICheck; i++) {
    pathParams.push({ params: { filmId: `${i}` } });
  }
  return {
    paths: pathParams,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  if (params) {
    const response = await fetch(
      `http://localhost:4000/films/${params.filmId}`,
    );
    const data = await response.json();
    return {
      props: {
        film: data,
      },
    };
  }
}
