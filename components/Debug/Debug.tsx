'use client'; // debugging client side components
import { type FC } from 'react';

interface Props {}

const Debug: FC<Props> = () => {
  return (
    <div>
      <h1>DEBUG COMPONENT -- PLACE ON PAGE -- </h1>
      <div>
        <p>testing</p>
      </div>
    </div>
  );
};

export default Debug;
