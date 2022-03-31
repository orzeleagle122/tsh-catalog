import React, {useEffect} from 'react';
import {usePagination} from "../../hooks/usePagination";
import {useAppDispatch, useAppSelector} from "../../store";
import {getProductsAction} from "../../redux/slices/productSlice";
import { PaginationWrapper } from './Pagination.styles';
import {useNavigate} from "react-router-dom";

interface IPaginationProps {
    setSearchCheckbox: (value: checkbox) => void;
    searchCheckbox: checkbox;
}

interface checkbox {
    active: boolean,
    promo: boolean,
}

const Pagination = ({searchCheckbox, setSearchCheckbox}:IPaginationProps) => {
    const dispatch=useAppDispatch();
    const PER_PAGE:number = 8;
    const totalPages=useAppSelector(state=>state.products.meta.totalPages);

    useEffect(()=>{
        setTotal(totalPages)
    },[totalPages])

    const { total, paginate, page, setTotal } = usePagination({PER_PAGE,totalPages});

    const pageButton = (totalPage:number) => {
        // @ts-ignore
        return [...Array(totalPage).keys()];
    };

    const handlePagination = (page:number) => {
        dispatch(getProductsAction(page,searchCheckbox.active,searchCheckbox.promo));
        paginate(page);
    }


    return (
        <PaginationWrapper>
            <button onClick={()=>handlePagination(1)} disabled={1===page}>First</button>
            {pageButton(total).map((pageIndex, index) => {
                return (
                    <button key={index} onClick={()=> {
                        handlePagination(pageIndex + 1)
                    }} disabled={pageIndex+1===page}>{pageIndex+1}</button>
                )
            })}
            <button onClick={()=>handlePagination(total)} disabled={total===page}>Last</button>
        </PaginationWrapper>
    );
};

export default Pagination;