import React from 'react';

import * as S from './styles';

interface Props {
  label: string;
  description: string;
}

const DefaultOverlayContent: React.FC<Props> = ({ description, label }) => {
  return (
    <S.Container>
      <S.Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </S.Heading>

      <S.Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </S.Buttons>
    </S.Container>
  );
};

export default DefaultOverlayContent;
