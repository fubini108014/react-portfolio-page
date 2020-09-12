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
`;

export const Sider = styled.div`
    color: #fff;
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    & li {
        list-style-type: none;
    }
    & a {
        color: #fff;
    }
`;

export const Right = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    height: 10%;
    font-size: 2rem;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
`;
export const Content = styled.div`
    height: 80%;
`;
export const Footer = styled.div`
    color: #fff;
    height: 10%;
    font-size: 2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;
