import styled from 'styled-components';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

export const CardWrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap:18px;
  width: 288px;
  border-radius: 8px;
  margin: 12px 8px;
  background-color: #FFFFFF;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    img {
      transform: scale(1.3) rotate(5deg);
      //transform: rotate(1deg);
    }
  }
  
  
`;

export const ImageWrapper=styled.div`
  position: relative;
  overflow: hidden;
  
  span {
    position: absolute;
    top: 18px;
    left: 0;
    width: 75px;
    height: 24px;
    background-color: #F9A52B;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    line-height: 16px;
    z-index: 2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    transition: all 0.3s ease-in-out;
  }
`;

export const DescriptionWrapper=styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin: 0 16px;
  
  h2 {
    font-size: 18px;
  }
  
  p{
    font-size: 14px;
    color: #9194A5;
  }
`;

export const RatingWrapper=styled.div`
  display: flex;
  margin: auto 16px 0 16px;
  gap:10px;
`;

export const StyledButton=styled.button`
  margin: 0 16px 24px 16px;
  background-color: #4460F7;
  color: white;
  border: none;
  border-radius: 4px;
  height: 38px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #2140E8;
  }
  :disabled {
    background-color: #9194A5;
    cursor: not-allowed;
  }
`;

export const AiFillStarIcon=styled(AiFillStar)`
  color:#F9A52B;
`;

export const AiOutlineStarIcon=styled(AiOutlineStar)`
  color:#B1B5C9;
`;