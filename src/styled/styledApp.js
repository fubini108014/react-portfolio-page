import styled from "styled-components";
import backGroundImage from "../images/pexels-simon-migaj-1920x1212.jpg";
export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backGroundImage});
    display: flex;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    background-size: cover;
`;

export const Sider = styled.div`
    //background-color: green;
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
    //background-color: gray;
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    //background-color: yellow;
    height: 10%;
    font-size: 2rem;
    display: flex;
    justify-content: center;
`;
export const Content = styled.div`
    height: 80%;
    background: hsla(0, 0%, 100%, 0.3);
    position: relative;
    overflow: hidden;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
        rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
        rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        filter: blur(20px);
        z-index: -1;
        margin: -30px;
    }
`;
export const Footer = styled.div`
    color: #fff;
    height: 10%;
    font-size: 2rem;
    display: inline-flex;
    justify-content: center;
`;
