import styled from 'styled-components';
import { HiOutlineDocumentSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 344px;
  width: 600px;
  padding: 0;
  margin: 0;
  background-color: #fff;

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;
    color: #1a1b1d;
    margin-bottom: 8px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #9194a5;
  }
`;

export const HiOutlineDocumentSearchIcon = styled(HiOutlineDocumentSearch)`
  font-size: 80px;
  color: #9194a5;
  margin-bottom: 22px;
`;
