import React, {useEffect} from 'react';
import Card from '../../components/Card/Card';
import Template from "../../template/Template";
import { CardsWrapper } from './ProductsPage.styles';
import {useAppDispatch, useAppSelector} from "../../store";
import {IProduct} from "../../model/product";
import {getProductsAction} from "../../redux/slices/productSlice";
import Pagination from "../../components/Pagination/Pagination";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";
//TODO: sterowanie inputami dać do slice lub do hooka
//TODO: ogarnąć modele

interface IProductsPageProps {
    setSearchCheckbox: (value: checkbox) => void;
    searchCheckbox: checkbox;
}

interface checkbox {
    active: boolean,
    promo: boolean,
    search: string,
}

const ProductsPage = ({searchCheckbox, setSearchCheckbox}:IProductsPageProps) => {

    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const items=useAppSelector(state=>state.products.items);
    const [productInModal, setProductInModal] = React.useState<IProduct | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const dispatch=useAppDispatch();

    useEffect(() => {
        setIsLoading(true);
        const cleanTimeout = setTimeout(() => {
            dispatch(getProductsAction(1,searchCheckbox.active,searchCheckbox.promo,searchCheckbox.search)).finally(()=>{
                setIsLoading(false);
            });
        }, 500);
        return () => clearTimeout(cleanTimeout);
    }, [searchCheckbox]);

    if(isLoading) return <Loader/>;
    if(items.length===0) return <Template>x(</Template>;

    return (
        <Template>

            <CardsWrapper>
                {items.map((item:IProduct)=>{
                    return <Card key={item.id} item={item} setProductInModal={setProductInModal} setIsOpenModal={setIsOpenModal}/>
                })}
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
            </CardsWrapper>

            {isOpenModal ? (
                <Modal
                    handleCloseModal={() => setIsOpenModal(false)}
                    productInModal={productInModal}
                />
            ) : null}

            <Pagination searchCheckbox={searchCheckbox} setSearchCheckbox={setSearchCheckbox} setIsLoading={setIsLoading}/>

        </Template>
    );
};

export default ProductsPage;