import styled from 'styled-components';

export const PageWrapper=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  background-color: #FFFFFF;
  margin-bottom: 50px;
  `;

export const Wrapper = styled.div`
    width: 1248px;    
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
  
  input {
    width: 392px;
    height: 48px;
    border: 1px solid #E0E2EA;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    outline: none;
    padding: 16px 0 16px 16px;
    border-radius: 8px;
  }
`;