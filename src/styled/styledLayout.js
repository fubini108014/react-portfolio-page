import styled from "styled-components";
import backGroundImage from "../images/pexels-simon-migaj-1920x1212.jpg";
export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
            63.01% 63.01% at 50% 40.99%,
            rgb(0 0 0 / 13%) 12.5%,
            rgb(0 0 0 / 58%) 50%,
            rgb(0 0 0 / 85%) 89.38%
        ),
        url(${backGroundImage});
    display: flex;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    background-size: cover;
    flex-direction: column;
`;

export const Body = styled.div`
    height: 80%;
    display: flex;
    flex-direction: row;
    flex: 1;
`;
