import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const Wrapper = styled.div`
  width: 1248px;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 144px;
  gap: 105px;

  @media (max-width: 420px) {
    height: 248px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 100px;
    grid-template-areas:
      'header avatar'
      'searchInput searchInput';
    padding: 52px 24px 32px 24px;

    h2 {
      grid-area: header;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 420px) {
    grid-area: searchInput;
    margin-top: -150px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 50px;
    grid-template-areas:
      'search search search'
      'activ promo promo';
  }
  }

  input[type='checkbox'] {
    border: 1px solid #e0e2ea;
    border-radius: 8px;
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    margin-right: 8px;    
  }

  label {
    margin-right: 32px;
  }
`;

export const ActiveCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 420px) {
    grid-area: activ;
    margin-top: 24px;
  }
`;

export const PromoCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 420px) {
    grid-area: promo;
    margin-top: 24px;
  }
`;

export const AccountWrapper = styled.div`
  position: relative;
  margin-left: auto;
  display: inline-block;

  @media (max-width: 420px) {
    grid-area: avatar;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  ul {
    display: none;
  }

  &:hover {
    ul {
      display: block;
      position: absolute;
      top: 100%;
      right: 0;
      width: 184px;
      z-index: 2;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    li {
      background-color: #ffffff;
      height: 56px;
      padding: 16px;
      list-style: none;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    li:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
  }
`;

export const SearchInput = styled.div`
  width: 392px;
  height: 48px;
  margin-right: 24px;
  position: relative;

  @media (max-width: 420px) {
    width: 100%;
    margin-right: 0px;
    grid-area: search;
  }

  input {
    width: 100%;
    height: 100%;
    border: 1px solid #e0e2ea;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    outline: none;
    padding: 16px 0 16px 16px;
    border-radius: 8px;
  }
`;

export const BiSearchAlt2Icon = styled(BiSearchAlt2)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: #1a1b1d;
  font-size: 20px;
`;

export const GrCloseIcon = styled(GrClose)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: #1a1b1d;
  font-size: 20px;
  cursor: pointer;
`;
