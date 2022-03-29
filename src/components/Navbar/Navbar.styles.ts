import styled from 'styled-components';


export const Container = styled.div`
  background-color: #FFFFFF;
`;

export const NavWrapper=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 144px;
  gap:105px;
  
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-left:auto;
  }
`;

export const InputWrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:32px;
`;