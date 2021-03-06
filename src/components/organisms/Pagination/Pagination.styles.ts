import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;  

  button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    margin: 0 8px;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;

    :disabled {
      color: #4460f7;
    }

    :first-child {
      margin-right: 33px;
    }

    :last-child {
      margin-left: 33px;
    }
  }
`;
