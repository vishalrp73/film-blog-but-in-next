import { FC, useEffect } from 'react';
import { useState, useCallback } from 'react';
import clsx from 'clsx';
import { randomiseFilms } from '../../handlers';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import FilmPanel from './FilmPanel';
import { Film } from '../../lib/types';
import * as styles from './Carousel.css';

const emblaOptions: EmblaOptionsType = {
  align: 'start',
  slidesToScroll: 1,
  dragFree: true,
  containScroll: 'trimSnaps',
  loop: true,
};

interface Props {
  films: Film[];
}

export const EmblaCarousel: FC<Props> = ({ films }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
  const [renderCarousel, setRenderCarousel] = useState<boolean>(true);
  const movies = randomiseFilms(films);

  useEffect(() => {
    if (emblaApi) {
      const [snapList] = emblaApi.scrollSnapList();
      if (Number.isNaN(snapList)) {
        setRenderCarousel(false);
      }
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <div
      className={styles.carouselWrapper}
      ref={renderCarousel ? emblaRef : null}
    >
      <div className={styles.carouselContainer}>
        {movies.map((film) => (
          <FilmPanel carousel id={film.film_id} thumbnail={film.thumbnail} />
        ))}
      </div>
      {renderCarousel && (
        <div className={styles.btnContainer}>
          <button className={styles.btn} onClick={scrollPrev}>
            &#60;
          </button>
          <button className={styles.btn} onClick={scrollNext}>
            &#62;
          </button>
        </div>
      )}
    </div>
  );
};
