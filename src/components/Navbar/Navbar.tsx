import React from 'react';
import Template from "../../template/Template";
import {Container, InputWrapper, NavWrapper } from './Navbar.styles';

const Navbar = () => {
    return (
        <Template>
            <Container>
                <NavWrapper>
                    <h2>join.tsh.io</h2>
                    <InputWrapper>
                        <input />
                        <select>
                            <option>English</option>
                            <option>French</option>
                            <option>Spanish</option>
                        </select>
                    </InputWrapper>

                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" />
                </NavWrapper>
            </Container>
        </Template>
    );
};

export default Navbar;