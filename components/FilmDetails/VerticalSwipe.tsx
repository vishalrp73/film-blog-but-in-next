import type { FC, ReactNode } from 'react';
import { Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import * as styles from './VerticalSwipe.css';

interface Props {
  children: ReactNode[];
  className?: string;
}

const VerticalSwipe: FC<Props> = ({ children, className }) => {
  if (!children) return null;

  return (
    <Swiper
      slidesPerView={1}
      mousewheel={{ releaseOnEdges: true }}
      direction="vertical"
      modules={[Pagination, Mousewheel]}
      scrollbar={{ draggable: true }}
      className={styles.swipeDimensions}
    >
      <div className={className}>
        {children.map((child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default VerticalSwipe;
