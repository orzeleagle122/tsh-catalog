import React from 'react';
import {
    AccountWrapper,
    BiSearchAlt2Icon,
    GrCloseIcon,
    InputWrapper,
    NavWrapper,
    OutlinedButton,
    PageWrapper,
    SearchInput,
    Wrapper
} from './Navbar.styles';
import {useAppDispatch} from "../../store";

interface INavbarProps {
    setSearchCheckbox: (value: checkbox) => void;
    searchCheckbox: checkbox;
}

interface checkbox {
    active: boolean,
    promo: boolean,
    search: string,
}

const Navbar = ({searchCheckbox, setSearchCheckbox}:INavbarProps) => {

    const [isLogin, setIsLogin] = React.useState(true);
    const dispatch = useAppDispatch();

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'search') {
            setSearchCheckbox({...searchCheckbox, search: e.target.value})
        } else {
            setSearchCheckbox({...searchCheckbox, [e.target.name]: e.target.checked})
        }
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
                                name="search"
                                value={searchCheckbox.search}
                                onChange={(e) => handleCheckbox(e)}
                            />
                            {searchCheckbox.search ? <GrCloseIcon onClick={()=>setSearchCheckbox({...searchCheckbox, search:""})}/> : <BiSearchAlt2Icon/>}
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