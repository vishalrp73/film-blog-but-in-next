import type { FC } from 'react';
import Link from 'next/link';

interface Props {
  artist: string;
}

const ArtistLink: FC<Props> = ({ artist }) => {
  return (
    <Link href={`/artist/${encodeURIComponent(artist)}`}>
      <a>
        <span>{artist}</span>
      </a>
    </Link>
  );
};

export default ArtistLink;
