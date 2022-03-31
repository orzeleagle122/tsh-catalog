import React, {useEffect} from 'react';
import {

    AccountWrapper,
    BiSearchAlt2Icon,
    InputWrapper,
    NavWrapper,
    OutlinedButton,
    PageWrapper,
    SearchInput,
    Wrapper
} from './Navbar.styles';
import {useAppDispatch} from "../../store";
import {getProductsAction} from "../../redux/slices/productSlice";

interface INavbarProps {
    setSearchCheckbox: (value: checkbox) => void;
    searchCheckbox: checkbox;
}

interface checkbox {
    active: boolean,
    promo: boolean,
}

const Navbar = ({searchCheckbox, setSearchCheckbox}:INavbarProps) => {

    const [isLogin, setIsLogin] = React.useState(true);
    const dispatch = useAppDispatch();

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchCheckbox({
            ...searchCheckbox,
            [e.target.name]: e.target.checked,
        });
    };

    return (
        <PageWrapper>
            <Wrapper>
                <NavWrapper>
                    <h2>join.tsh.io</h2>
                    <InputWrapper>
                        <SearchInput>
                            <input
                                id="search"
                                type="text"
                                placeholder="Search"
                            />
                            <BiSearchAlt2Icon/>
                        </SearchInput>

                        <input type="checkbox" id="active" name="active" onChange={(e)=>handleCheckbox(e)}/>
                        <label htmlFor="active"> Active</label>
                        <input type="checkbox" id="promo" name="promo" onChange={(e)=>handleCheckbox(e)}/>
                        <label htmlFor="promo"> Promo</label>
                    </InputWrapper>

                    <AccountWrapper>
                        {isLogin ? (
                            <>
                                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" />
                                <ul>
                                    <li>Logout</li>
                                    <li>Logout</li>
                                </ul>
                            </>
                        ) : (
                            <OutlinedButton>Login in</OutlinedButton>
                        )}
                    </AccountWrapper>

                </NavWrapper>
            </Wrapper>
        </PageWrapper>
    );
};

export default Navbar;