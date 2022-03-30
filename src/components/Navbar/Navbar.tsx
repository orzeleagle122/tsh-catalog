import React from 'react';
import {InputWrapper, NavWrapper, PageWrapper,Wrapper} from './Navbar.styles';

const Navbar = () => {
    return (
        <PageWrapper>
            <Wrapper>
                <NavWrapper>
                    <h2>join.tsh.io</h2>
                    <InputWrapper>
                        <input
                            type="text"
                            placeholder="Search"
                        />
                        <select>
                            <option>English</option>
                            <option>French</option>
                            <option>Spanish</option>
                        </select>
                    </InputWrapper>

                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" />
                </NavWrapper>
            </Wrapper>
        </PageWrapper>
    );
};

export default Navbar;