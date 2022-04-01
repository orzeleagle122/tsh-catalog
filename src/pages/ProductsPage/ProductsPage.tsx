import React, { useEffect } from 'react';
import Card from '../../components/molecules/Card/Card';
import Template from '../../template/Template';
import { CardsWrapper } from './ProductsPage.styles';
import { useAppDispatch, useAppSelector } from '../../store';
import { IProduct } from '../../model/product';
import { getProductsAction } from '../../redux/slices/productSlice';
import Pagination from '../../components/organisms/Pagination/Pagination';
import Modal from '../../components/organisms/Modal/Modal';
import Loader from '../../components/molecules/Loader/Loader';
import EmptyResult from '../../components/molecules/EmptyResult/EmptyResult';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const items = useAppSelector((state) => state.products.items);
  const [productInModal, setProductInModal] = React.useState<IProduct | null>(
    null
  );
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchCheckbox = useAppSelector((state) => state.search);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const pageParam = parseInt(searchParams.get('page') as string, 10);
    const pageActive = searchParams.get('active') ? true : false;
    const pagePromo = searchParams.get('promo') ? true : false;
    const pageSearch = searchParams.get('search')
      ? `${searchParams.get('search')}`
      : '';

    const options = {
      active: pageActive,
      promo: pagePromo,
      search: pageSearch ? pageSearch : '',
    };
    setIsLoading(true);
    const cleanTimeout = setTimeout(() => {
      dispatch(getProductsAction(1, pageActive, pagePromo, pageSearch))
        .then(response => {
          const totalPages = response?.data.meta.totalPages;
          if (pageParam > totalPages) {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set('page', totalPages.toString());
            console.log(searchParams.get('page'));
            navigate({
              pathname: '/',
              search: searchParams.toString(),
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
        }
      );
    }, 500);
    return () => clearTimeout(cleanTimeout);
  }, [searchCheckbox]);

  if (isLoading) return <Loader />;
  if (items.length === 0)
    return (
      <Template>
        <EmptyResult />
      </Template>
    );

  return (
    <Template>
      <CardsWrapper>
        {items.map((item: IProduct) => {
          return (
            <Card
              key={item.id}
              item={item}
              setProductInModal={setProductInModal}
              setIsOpenModal={setIsOpenModal}
            />
          );
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

      <Pagination setIsLoading={setIsLoading} />
    </Template>
  );
};

export default ProductsPage;
