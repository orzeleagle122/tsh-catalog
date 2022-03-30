import React, {useEffect} from 'react';
import Card from '../../components/Card/Card';
import Template from "../../template/Template";
import { CardsWrapper } from './ProductsPage.styles';
import {useAppDispatch, useAppSelector} from "../../store";
import {IProduct} from "../../model/product";
import {getProductsAction} from "../../redux/slices/productSlice";
import Pagination from "../../components/Pagination/Pagination";

const ProductsPage = () => {


    const items=useAppSelector(state=>state.products.items);
    const dispatch=useAppDispatch();

    useEffect(()=>{
        dispatch(getProductsAction());
    },[dispatch]);


    if(items.length===0) return <Template>Loading...</Template>;


    return (
        <Template>

            <CardsWrapper>
                {items.map((item:IProduct)=>{
                    return <Card key={item.id} {...item}/>
                })}
            </CardsWrapper>
            <Pagination/>


        </Template>
    );
};

export default ProductsPage;