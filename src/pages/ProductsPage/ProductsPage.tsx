import React from 'react';
import Card from '../../components/Card/Card';
import Template from "../../template/Template";
import { CardsWrapper } from './ProductsPage.styles';

const ProductsPage = () => {
    return (
        <Template>
            <CardsWrapper>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </CardsWrapper>
        </Template>
    );
};

export default ProductsPage;