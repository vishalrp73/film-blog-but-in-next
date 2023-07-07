import { Offer, ProviderShortNames } from '@/lib/justwatch/types';
import { StaticImageData } from 'next/image';
import {
  AppleTVPlus,
  DisneyPlus,
  Mubi,
  Neon,
  Netflix,
  PrimeVideo,
  Shudder,
  TVNZ,
} from '@/lib/img/streaming-icons';

export type Option = {
  key: ProviderShortNames;
  name: string;
  image: StaticImageData;
};

export const getOptions = (responses: Offer[]) => {
  const short_names: ProviderShortNames[] = responses.map(
    ({ package_short_name }) => package_short_name,
  );
  const matches: Option[] = optionsMap.filter((option) =>
    short_names.includes(option.key),
  );
  return matches;
};

export const optionsMap: Option[] = [
  { key: 'nfx', name: 'Netflix', image: Netflix },
  { key: 'prv', name: 'Prime Video', image: PrimeVideo },
  { key: 'nev', name: 'Neon', image: Neon },
  { key: 'dnp', name: 'Disney+', image: DisneyPlus },
  { key: 'atp', name: 'Apple TV+', image: AppleTVPlus },
  { key: 'mbi', name: 'MUBI', image: Mubi },
  { key: 'tnz', name: 'TVNZ', image: TVNZ },
  { key: 'shd', name: 'Shudder', image: Shudder },
];
