import { getRandomFilm, getRandomNumber } from '@/lib/functions';
import { Film } from '@/lib/types';
import { StaticImageData } from 'next/image';
import julia from '../../lib/img/julia-fox.jpg';

const backgroundImages: StaticImageData[] = [julia];
const bannerTextOptions: string[] = [
  'Now in Smell-O-Vision!',
  'JOE MAMA',
  "It's 90% white people!",
  'This is peak film-bro (circa 2021)',
  'Powered by hater-ade',
];
const randomBackroundImageNumber = getRandomNumber(backgroundImages.length);
const bannerTextRandomNumber: number = getRandomNumber(
  bannerTextOptions.length,
);

type HeaderExports = {
  selectedBannerImage: StaticImageData;
  bannerText: string;
  placeholderTitle: string;
};

export const getHeaderContent = (films: Film[]): HeaderExports => {
  const selectedBannerImage = backgroundImages[randomBackroundImageNumber];
  const bannerText: string = bannerTextOptions[bannerTextRandomNumber];
  const randomFilm = getRandomFilm(films);
  const { title } = randomFilm;
  return {
    selectedBannerImage,
    bannerText,
    placeholderTitle: title,
  };
};
