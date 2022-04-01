import React from 'react';
import {
  AiFillStarIcon,
  AiOutlineStarIcon,
  CardWrapper,
  DescriptionWrapper,
  ImageWrapper,
  RatingWrapper,
  StyledButton,
} from './Card.styles';
import { IProduct } from '../../../model/product';

interface ICard {
  item: IProduct;
  setProductInModal: (product: IProduct) => void;
  setIsOpenModal: (isOpen: boolean) => void;
}

const Card = ({ setProductInModal, item, setIsOpenModal }: ICard) => {
  const { promo, rating, image, active, name, description } = item;

  const getRating = () => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStarIcon key={i} />);
    }
    for (let i = rating; i < 5; i++) {
      stars.push(<AiOutlineStarIcon key={i} />);
    }
    return stars;
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        {promo && <span>Promo</span>}
        <img src={image} alt={name} loading="eager" />
      </ImageWrapper>
      <DescriptionWrapper>
        <h2>{name}</h2>
        <p>{description}</p>
      </DescriptionWrapper>
      <RatingWrapper>{getRating()}</RatingWrapper>
      <StyledButton
        disabled={!active}
        onClick={() => {
          setProductInModal(item);
          setIsOpenModal(true);
        }}
      >
        Show details
      </StyledButton>
    </CardWrapper>
  );
};

export default Card;
