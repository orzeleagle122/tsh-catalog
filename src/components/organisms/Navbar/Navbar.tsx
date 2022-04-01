import React, { useEffect } from 'react';
import {
  AccountWrapper,
  BiSearchAlt2Icon,
  GrCloseIcon,
  InputWrapper,
  NavWrapper,
  OutlinedButton,
  PageWrapper,
  SearchInput,
  Wrapper,
} from './Navbar.styles';
import { useAppDispatch, useAppSelector } from '../../../store';
import { reset, search } from '../../../redux/slices/searchSlice';
import { useNavigate } from 'react-router-dom';
import Input from '../../atoms/Input/Input.styles';
import Button from '../../atoms/Button/Button.styles';

const Navbar = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const dispatch = useAppDispatch();
  const searchCheckbox = useAppSelector((state) => state.search);
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = parseInt(searchParams.get('page') as string, 10);
  const pageActive = searchParams.get('active');
  const pagePromo = searchParams.get('promo');
  const pageSearch = searchParams.get('search');
  const options = {
    active: pageActive === 'true',
    promo: pagePromo === 'true',
    search: pageSearch ? pageSearch : '',
  };

  useEffect(() => {
    dispatch(search(options));
  }, []);

  useEffect(() => {
    navigate({
      pathname: '/',
      search: `${pageParam ? `page=${pageParam}` : ''}${
        searchCheckbox.search ? `&search=${searchCheckbox.search}` : ''
      }${searchCheckbox.active ? `&active=${searchCheckbox.active}` : ''}${
        searchCheckbox.promo ? `&promo=${searchCheckbox.promo}` : ''
      }`,
    });
  }, [searchCheckbox]);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'search') {
      dispatch(search({ search: e.target.value }));
    } else {
      dispatch(search({ [e.target.name]: e.target.checked }));
    }
  };

  return (
    <PageWrapper>
      <Wrapper>
        <NavWrapper>
          <h2>join.tsh.io</h2>
          <InputWrapper>
            <SearchInput>
              <Input
                id="search"
                type="text"
                placeholder="Search"
                name="search"
                value={searchCheckbox.search}
                onChange={(e) => handleCheckbox(e)}
              />
              {searchCheckbox.search ? (
                <GrCloseIcon
                  onClick={() => {
                    dispatch(reset());
                    // dispatch(getProductsAction(1,false,false,""));
                  }}
                />
              ) : (
                <BiSearchAlt2Icon />
              )}
            </SearchInput>

            <input
              type="checkbox"
              id="active"
              name="active"
              checked={searchCheckbox.active}
              onChange={(e) => handleCheckbox(e)}
            />
            <label htmlFor="active"> Active</label>
            <input
              type="checkbox"
              id="promo"
              name="promo"
              checked={searchCheckbox.promo}
              onChange={(e) => handleCheckbox(e)}
            />
            <label htmlFor="promo"> Promo</label>
          </InputWrapper>

          <AccountWrapper>
            {isLogin ? (
              <>
                <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                  alt="avatar"
                />
                <ul>
                  <li>Logout</li>
                  <li>Logout</li>
                </ul>
              </>
            ) : (
              <Button outlined>Login in</Button>
            )}
          </AccountWrapper>
        </NavWrapper>
      </Wrapper>
    </PageWrapper>
  );
};

export default Navbar;
