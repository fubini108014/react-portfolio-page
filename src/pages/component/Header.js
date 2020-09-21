import React from "react";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #000;
    box-sizing: border-box;
    height: 10%;
    width: 100vw;
    font-size: 2rem;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
`;

function Header() {
    return <HeaderWrapper>Header</HeaderWrapper>;
}

export default Header;
