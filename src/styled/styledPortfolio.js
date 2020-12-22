import styled from "styled-components";

export const PortfolioContainer = styled.div`
    & .scroll-container {
        display: flex;
        margin: 5px 0;
    }
`;

export const PortfolioTitle = styled.div`
    color: #fff;
    padding: 5px 0;
    font-size: 1.2rem;
    border-bottom: 1px solid #fff;
`;

export const ProCardContainer = styled.div`
    border-radius: 3px;
    width: 180px;
    min-width: 180px;
    height: 200px;
    position: relative;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 5px;
    background-color: #113679;
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.32),
        0px 3px 4px 0px rgba(0, 0, 0, 0.24), 0px 1px 8px 0px rgba(0, 0, 0, 0.2);
    &::after {
        content: "";
        display: block;
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.05) 0%,
            rgba(0, 0, 0, 0.111) 11.7%,
            rgba(0, 0, 0, 0.186) 22.1%,
            rgba(0, 0, 0, 0.234) 31.2%,
            rgba(0, 0, 0, 0.254) 39.4%,
            rgba(0, 0, 0, 0.321) 46.6%,
            rgba(0, 0, 0, 0.364) 53.1%,
            rgba(0, 0, 0, 0.4) 58.9%,
            rgba(0, 0, 0, 0.454) 64.3%,
            rgba(0, 0, 0, 0.508) 69.3%,
            rgba(0, 0, 0, 0.54) 74.1%,
            rgba(0, 0, 0, 0.607) 78.8%,
            rgba(0, 0, 0, 0.668) 83.6%,
            rgba(0, 0, 0, 0.721) 88.7%,
            rgba(0, 0, 0, 0.762) 94.1%,
            rgba(0, 0, 0, 0.79) 100%
        );

        transition: opacity calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1),
            -webkit-opacity calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:hover::after {
        opacity: 1;
    }
    & .showModalBtn {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: opacity calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);
    }

    &:hover .showModalBtn {
        opacity: 1;
    }
`;
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;
