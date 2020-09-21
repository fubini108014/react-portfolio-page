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
`;

export const RightSide = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    height: 80%;
    display: flex;
    flex-direction: row;
`;
