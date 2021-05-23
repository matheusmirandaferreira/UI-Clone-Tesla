import React, { ReactNode, useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';

interface ModalsSectionsProps extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: ReactNode;
}

const ModelsSections: React.FC<ModalsSectionsProps> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef });
    }
  }, [modelName, overlayNode, registerModel]);

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
};

export default ModelsSections;
