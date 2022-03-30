import React, {useEffect} from 'react';
import Card from '../../components/Card/Card';
import Template from "../../template/Template";
import { CardsWrapper } from './ProductsPage.styles';
import {useAppDispatch, useAppSelector} from "../../store";
import {IProduct} from "../../model/product";
import {getProductsAction} from "../../redux/slices/productSlice";
import Pagination from "../../components/Pagination/Pagination";
import Modal from "../../components/Modal/Modal";

const ProductsPage = () => {

    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const items=useAppSelector(state=>state.products.items);
    const [productInModal, setProductInModal] = React.useState<IProduct | null>(null);
    const dispatch=useAppDispatch();

    useEffect(()=>{
        dispatch(getProductsAction());
    },[dispatch]);


    if(items.length===0) return <Template>Loading...</Template>;


    return (
        <Template>

            <CardsWrapper>
                {items.map((item:IProduct)=>{
                    return <Card key={item.id} item={item} setProductInModal={setProductInModal} setIsOpenModal={setIsOpenModal}/>
                })}
            </CardsWrapper>

            {isOpenModal ? (
                <Modal
                    handleCloseModal={() => setIsOpenModal(false)}
                    productInModal={productInModal}
                />
            ) : null}

            <Pagination/>


        </Template>
    );
};

export default ProductsPage;