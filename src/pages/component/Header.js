import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
const HeaderWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #000;
    box-sizing: border-box;
    height: 10%;
    width: 100vw;
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
`;
const AccountBox = styled.div`
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & .accountIcon {
        margin: 5px;
    }
`;
const Others = styled.div`
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & .homeIcon {
        margin-right: 15px;
        cursor: pointer;
    }
`;

function Header() {
    return (
        <HeaderWrapper>
            <AccountBox>
                <AccountCircleIcon className="accountIcon" />
                Josh Chang
            </AccountBox>
            <Others>
                <HomeIcon className="homeIcon" />
            </Others>
        </HeaderWrapper>
    );
}

export default Header;
