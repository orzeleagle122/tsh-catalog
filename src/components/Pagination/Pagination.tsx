import React, {useEffect} from 'react';
import {usePagination} from "../../hooks/usePagination";
import {useAppDispatch, useAppSelector} from "../../store";
import {getProductsAction} from "../../redux/slices/productSlice";
import {PaginationWrapper} from './Pagination.styles';

interface IPaginationProps {
    setIsLoading: (value: boolean) => void;
}

const Pagination = ({setIsLoading}:IPaginationProps) => {
    const dispatch=useAppDispatch();
    const PER_PAGE:number = 8;
    const totalPages=useAppSelector(state=>state.products.meta.totalPages);
    const searchCheckbox = useAppSelector(state=>state.search);

    useEffect(()=>{
        setTotal(totalPages)
    },[totalPages,searchCheckbox])

    const { total, paginate, page, setTotal } = usePagination({PER_PAGE,totalPages,searchCheckbox});

    const pageButton = (totalPage:number) => {
        // @ts-ignore
        return [...Array(totalPage).keys()];
    };

    const handlePagination = (page:number) => {
        setIsLoading(true);
        dispatch(getProductsAction(page,searchCheckbox.active,searchCheckbox.promo,searchCheckbox.search)).finally(()=>{
            setIsLoading(false);
        });
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