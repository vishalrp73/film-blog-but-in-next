import { FilmProvider } from '../context/films';
import type { AppProps } from 'next/app';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FilmProvider>
      <Component {...pageProps} />
    </FilmProvider>
  );
}

export default MyApp;
