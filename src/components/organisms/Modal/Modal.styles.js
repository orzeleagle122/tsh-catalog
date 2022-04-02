import styled from 'styled-components';

export const OpacityBackground = styled.div`
  background: black;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const ModalWrapper = styled.div`
  opacity: 1 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 530px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  @media only screen and (max-width: 375px) {
    width: 80%;
    height: 80%;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin: 10px 32px 0 32px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    color: #1a1b1d;
    @media only screen and (max-width: 375px) {
      font-size: 18px;
      line-height: initial;
    }
  }

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #9194a5;

    @media only screen and (max-width: 375px) {
      font-size: 14px;
      line-height: initial;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;

  @media only screen and (max-width: 375px) {
    max-height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  color: white;
  position: absolute;
  background-color: transparent;
  top: 20px;
  right: 20px;
  
  svg {
    background-color: inherit;
  }
`;
