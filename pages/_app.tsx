import { FilmProvider } from '../context/films';
import { SortProvider } from '../context/sort';
import Footer from '../components/Footer';
import type { AppProps } from 'next/app';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FilmProvider>
      <SortProvider>
        <Component {...pageProps} />
        <Footer />
      </SortProvider>
    </FilmProvider>
  );
}

export default MyApp;
