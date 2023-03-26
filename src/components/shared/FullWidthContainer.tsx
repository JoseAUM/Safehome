import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: string;
}

const Container = styled.div`
  position: relative;
`;

export default function FullWidthContainer({ children, color }: Props) {
  return (
    <Container>
      <div>{children}</div>
      <div className={color && `${color}-full-bg`} />
    </Container>
  );
}
