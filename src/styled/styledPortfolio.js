import styled from "styled-components";

export const PortfolioContainer = styled.div`
    width: 100%;
    overflow-y: auto;
    & .scroll-container {
        display: flex;
        margin: 10px;
    }
`;

export const PortfolioTitle = styled.div`
    color: #fff;
    padding: 5px 0;
    margin: 5px 15px;
    font-size: 1.2rem;
    border-bottom: 1px solid #fff;
`;

export const PortfolioCard = styled.div`
    width: 180px;
    min-width: 180px;
    height: 200px;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    margin: 5px;
    background-color: #113679;
`;
