import { StaticImageData } from 'next/image';
import { Film } from '@/lib/types';
import Julia from '@/lib/img/julia-fox.jpg';
import { getRandomFilm, getRandomNumber } from '@/lib/functions';

const backgroundImages: StaticImageData[] = [Julia];
const bannerTextOptions: string[] = [
  'Now in Smell-O-Vision!',
  'JOE MAMA',
  "It's 90% white people!",
  'This is peak film-bro (circa 2021)',
  'Powered by hater-ade',
];
const randomBackgroundImageNumber = getRandomNumber(backgroundImages.length);
const bannerTextRandomNumber = getRandomNumber(bannerTextOptions.length);

type HeaderContent = {
  selectedBannerImage: StaticImageData;
  bannerText: string;
  placeholderTitle: string;
};

export const getHeaderContent = (films: Film[]): HeaderContent => {
  const selectedBannerImage = backgroundImages[randomBackgroundImageNumber];
  const bannerText: string = bannerTextOptions[bannerTextRandomNumber];
  const randomFilm = getRandomFilm(films);
  const { title } = randomFilm;

  return {
    selectedBannerImage,
    bannerText,
    placeholderTitle: title,
  };
};
