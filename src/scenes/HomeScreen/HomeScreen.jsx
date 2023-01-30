import Applications from 'components/Applications';
import Dock from 'components/Dock';
import Widgets from 'components/Widgets';
import React from 'react';
import { Container, Wrapper } from './HomeScreen.styled';

const HomeScreen = () => {
  return (
    <Wrapper>
      <Container>
        <Widgets />
        <Applications />
      </Container>
      <Dock />
    </Wrapper>
  );
};

export default HomeScreen;
