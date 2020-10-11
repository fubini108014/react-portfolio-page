import styled from "styled-components";
import backGroundImage from "../images/pexels-simon-migaj-1920x1212.jpg";
export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
            63.01% 63.01% at 50% 36.99%,
            rgba(0, 0, 0, 0.075) 12.5%,
            rgba(0, 0, 0, 0.285) 50%,
            rgba(0, 0, 0, 0.4) 84.38%
        ),
        url(${backGroundImage});
    display: flex;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    background-size: cover;
    flex-direction: column;
`;

export const LeftSide = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #000;
    box-sizing: border-box;
    color: #fff;
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    & ul {
        padding: 0;
    }
    & li {
        list-style-type: none;
        margin: 5px;
    }

    & a {
        color: #fff;
    }

    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const RightSide = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px 1px rgb(76 76 76 / 68%);
        box-shadow: inset 0 0 6px 1px rgb(76 76 76 / 68%);
        border-radius: 10px;
        border: 3px solid transparent;
    }

    &::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px 2px rgb(255 255 255 / 86%);
        box-shadow: inset 0 0 5px 2px rgb(255 255 255 / 86%);
        background-color: #2b2b2b8c;
    }

    @media screen and (max-width: 760px) {
        width: 100%;
    }
`;

export const Content = styled.div`
    height: 80%;
    display: flex;
    flex-direction: row;
    flex: 1;
`;
