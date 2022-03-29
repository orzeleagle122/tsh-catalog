import React from 'react';
import { CardWrapper, DescriptionWrapper, ImageWrapper, RatingWrapper, StyledButton } from './Card.styles';
import {AiOutlineStar,AiFillStar} from "react-icons/ai";

const Card = () => {
    return (
        <CardWrapper>
            <ImageWrapper>
                <span>Promo</span>
                    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="shoes" />
            </ImageWrapper>
            <DescriptionWrapper>
                <h2>Nike Running Shoes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quisquam.</p>
            </DescriptionWrapper>
            <RatingWrapper>
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </RatingWrapper>
            <StyledButton disabled={false}>
                Show details
            </StyledButton>
        </CardWrapper>
    );
};

export default Card;