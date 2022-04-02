import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 420px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  // https://dev.to/stel/a-little-trick-to-left-align-items-in-last-row-with-flexbox-230l
  i {
    width: 288px;
    margin: 9px;
  }
`;
