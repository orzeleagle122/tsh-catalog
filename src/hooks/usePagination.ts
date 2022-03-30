import {useState} from "react";
import {useAppSelector} from "../store";
import {useNavigate} from "react-router-dom";

interface IUsePagination {
  PER_PAGE: number;
  totalPages:number;
}

export const usePagination = ({PER_PAGE=8,totalPages}:IUsePagination) => {

  const searchParams= new URLSearchParams(window.location.search);
  const pageParam=parseInt(searchParams.get('page') as string,10);
  const navigate=useNavigate();
  const [page, setPage] = useState(pageParam  || 1);
  const [perPage, setPerPage] = useState(PER_PAGE);
  const [total, setTotal] = useState(totalPages);

  const paginate = (pageNumber: number) => {
    setPage(pageNumber);
    navigate({
      pathname:'/',
      search:`?page=${pageNumber}`
    });
  };

  const setPerPageCount = (perPageCount: number) => {
    setPerPage(perPageCount);
  };

  const setTotalCount = (totalCount: number) => {
    setTotal(totalCount);
  };

  return {
    page,
    perPage,
    total,
    paginate,
    setPerPageCount,
    setTotalCount,
  };
};
