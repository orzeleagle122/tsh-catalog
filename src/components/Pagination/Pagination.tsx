import React from 'react';
import {usePagination} from "../../hooks/usePagination";
import {useAppDispatch, useAppSelector} from "../../store";
import {getProductsAction} from "../../redux/slices/productSlice";
import { PaginationWrapper } from './Pagination.styles';
import {useNavigate} from "react-router-dom";

const Pagination = () => {

    const PER_PAGE:number = 8;
    const totalPages=useAppSelector(state=>state.products.meta.totalPages);
    const navigate = useNavigate();
    // const [page,setPage]=useState<number>(pageParam);

    const dispatch=useAppDispatch();

    const { total, paginate, page } = usePagination({PER_PAGE,totalPages});

    const pageButton = (totalPage:number) => {
        // @ts-ignore
        return [...Array(totalPage).keys()];
    };

    const handlePagination = (page:number) => {
        dispatch(getProductsAction(page));
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