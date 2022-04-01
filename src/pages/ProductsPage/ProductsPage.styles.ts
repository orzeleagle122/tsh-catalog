import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  // https://dev.to/stel/a-little-trick-to-left-align-items-in-last-row-with-flexbox-230l
  i {
    width: 288px;
    margin: 9px;
  }
`;
