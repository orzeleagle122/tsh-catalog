import styled from 'styled-components';
import {BiSearchAlt2} from 'react-icons/bi';

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
  
`;

export const InputWrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  

  input[type=checkbox] {
    border: 1px solid #E0E2EA;
    border-radius: 8px;
    width: 24px;
    height: 24px;
    background-color: #FFFFFF;
    margin-right: 8px;
  }

  label {
    margin-right: 32px;
  }
`;

export const AccountWrapper=styled.div`
  position: relative;
  margin-left:auto;
  display: inline-block;
  
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;    
  }

  ul {
    display: none;
  }
  
  &:hover {
    ul{
      display: block;
      position: absolute;
      top: 100%;
      right: 0;
      width: 184px;
      z-index: 2;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    li {
      background-color: #FFFFFF;
      height: 56px;
      padding: 16px;
      list-style: none;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    li:hover {
      background-color: #F5F5F5;
      cursor: pointer;
    }
  }


`;

export const SearchInput=styled.div`
  width: 392px;
  height: 48px;
  margin-right: 24px;
  position: relative;
  
  input[id^=search] {
    width: 100%;
    height: 100%;
    border: 1px solid #E0E2EA;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    outline: none;
    padding: 16px 0 16px 16px;
    border-radius: 8px;
  }
`

export const BiSearchAlt2Icon=styled(BiSearchAlt2)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: #1A1B1D;
  font-size: 20px;
  `;


export const OutlinedButton=styled.button`
  width: 88px;
  height: 38px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4460F7;
  border: 1px solid #4460F7;
  border-radius: 4px;
  background-color: #FFFFFF;
  cursor: pointer;
  
  &:hover {
    border: 1px solid #2140E8;
  }
  
  &:disabled {
    border: 1px solid #9194A5;
    color: #9194A5;
    background-color: #FFFFFF;
    cursor: not-allowed;
  }
  `;
