import { useState } from 'react';
import { useAppDispatch } from '../store';
import { useNavigate } from 'react-router-dom';

//TODO: usunac paramentry strony bo nie uzywane

interface IUsePagination {
  PER_PAGE: number;
  totalPages: number;
  searchCheckbox: {
    search: string;
    active: boolean;
    promo: boolean;
  };
}

export const usePagination = ({
  PER_PAGE = 8,
  totalPages,
  searchCheckbox,
}: IUsePagination) => {
  const dispatch = useAppDispatch();

  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = parseInt(searchParams.get('page') as string, 10);

  const navigate = useNavigate();
  const [page, setPage] = useState(pageParam || 1);
  const [perPage, setPerPage] = useState(PER_PAGE);
  const [total, setTotal] = useState(totalPages);

  const paginate = (pageNumber: number) => {
    setPage(pageNumber);
    navigate({
      pathname: '/',
      search: `page=${pageNumber}${
        searchCheckbox.active ? '&active=true' : ''
      }${searchCheckbox.promo ? '&promo=true' : ''}${
        searchCheckbox.search ? `&search=${searchCheckbox.search}` : ''
      }`,
    });
  };

  return {
    page,
    perPage,
    total,
    paginate,
    setTotal,
  };
};
