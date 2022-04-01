import React from 'react';
import { Container, HiOutlineDocumentSearchIcon, Wrapper } from './EmptyResult.styles';

const EmptyResult = () => {
  return (
    <Wrapper>
      <Container>
        <HiOutlineDocumentSearchIcon/>
        <h3>Ooops... It's empty here</h3>
        <p>There are no products on the list</p>
      </Container>
    </Wrapper>
  );
};

export default EmptyResult;