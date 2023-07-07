import { type FC } from 'react';
import { Module, PanelContainer } from '../Generics';

interface Props {
  notable_actors: string[];
  genre: string[];
  writers: string[];
  cinematography: string[];
  soundtrack: string[];
}

const InfoPanel: FC<Props> = ({
  notable_actors,
  genre,
  writers,
  cinematography,
  soundtrack,
}) => {
  return (
    <PanelContainer>
      <Module heading="actors" content={notable_actors} />
      <Module heading="genres" content={genre} />
      <Module heading="writers" content={writers} />
      <Module heading="cinematography" content={cinematography} />
      <Module heading="soundtrack" content={soundtrack} />
    </PanelContainer>
  );
};

export default InfoPanel;
