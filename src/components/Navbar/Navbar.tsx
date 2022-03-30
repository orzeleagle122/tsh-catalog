import React from 'react';
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

const Navbar = () => {

    const [isLogin, setIsLogin] = React.useState(true);

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

                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label htmlFor="vehicle1"> Active</label>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                        <label htmlFor="vehicle2"> Promo</label>
                    </InputWrapper>

                    <AccountWrapper>
                        {isLogin ? (
                            <>
                                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" />
                                <ul>
                                    <li>Logout</li><li>Logout</li>
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