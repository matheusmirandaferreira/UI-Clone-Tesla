import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { ModelsSection, ModelsWrapper } from '../Model';

import * as S from './styles';

const Page: React.FC = () => {
  return (
    <S.Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map((modelName) => (
            <ModelsSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </S.Container>
  );
};

export default Page;
