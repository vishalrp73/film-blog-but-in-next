import type { FC } from 'react';
import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import FilmPanel from './FilmPanel';
import { Film } from '../../lib/types';
import * as styles from './Carousel.css';

interface Props {
  films: Film[];
}

export const EmblaCarousel: FC<Props> = ({ films }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    slidesToScroll: 4,
    draggable: true,
    loop: true,
  });
  const [renderCarousel, setRenderCarousel] = useState<boolean>(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      console.log(emblaApi.slidesInView());
      console.log(emblaApi.scrollSnapList());
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      console.log(emblaApi.slidesInView());
      console.log(emblaApi.scrollSnapList());
    }
  }, [emblaApi]);

  return (
    <div
      className={styles.carouselWrapper}
      ref={renderCarousel ? emblaRef : null}
    >
      <div className={styles.carouselContainer}>
        {films.map((film) => (
          <FilmPanel
            carousel
            id={film.film_id}
            title={film.title}
            thumbnail={film.thumbnail}
          />
        ))}
      </div>
      {renderCarousel && (
        <>
          <button className={styles.emblaPrev} onClick={scrollPrev}>
            previous
          </button>
          <button className={styles.emblaNext} onClick={scrollNext}>
            next
          </button>
        </>
      )}
    </div>
  );
};
