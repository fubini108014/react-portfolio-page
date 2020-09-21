import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import {
    PortfolioCard,
    PortfolioTitle,
    PortfolioContainer,
} from "../styled/styledPortfolio";
function Portfolio() {
    return (
        <PortfolioContainer>
            <PortfolioTitle>Web design</PortfolioTitle>
            <ScrollContainer className="scroll-container">
                <PortfolioCard>Portfolio 1</PortfolioCard>
                <PortfolioCard>Portfolio 2</PortfolioCard>
                <PortfolioCard>Portfolio 3</PortfolioCard>
                <PortfolioCard>Portfolio 4</PortfolioCard>
                <PortfolioCard>Portfolio 5</PortfolioCard>
                <PortfolioCard>Portfolio 6</PortfolioCard>
                <PortfolioCard>Portfolio 7</PortfolioCard>
                <PortfolioCard>Portfolio 8</PortfolioCard>
                <PortfolioCard>Portfolio 9</PortfolioCard>
            </ScrollContainer>
            <PortfolioTitle>FrameWork</PortfolioTitle>
            <ScrollContainer className="scroll-container">
                <PortfolioCard>Portfolio 1</PortfolioCard>
                <PortfolioCard>Portfolio 2</PortfolioCard>
                <PortfolioCard>Portfolio 3</PortfolioCard>
                <PortfolioCard>Portfolio 4</PortfolioCard>
                <PortfolioCard>Portfolio 5</PortfolioCard>
                <PortfolioCard>Portfolio 6</PortfolioCard>
                <PortfolioCard>Portfolio 7</PortfolioCard>
                <PortfolioCard>Portfolio 8</PortfolioCard>
                <PortfolioCard>Portfolio 9</PortfolioCard>
            </ScrollContainer>
            <PortfolioTitle>Others </PortfolioTitle>
            <ScrollContainer className="scroll-container">
                <PortfolioCard>Portfolio 1</PortfolioCard>
                <PortfolioCard>Portfolio 2</PortfolioCard>
                <PortfolioCard>Portfolio 3</PortfolioCard>
                <PortfolioCard>Portfolio 4</PortfolioCard>
                <PortfolioCard>Portfolio 5</PortfolioCard>
                <PortfolioCard>Portfolio 6</PortfolioCard>
                <PortfolioCard>Portfolio 7</PortfolioCard>
                <PortfolioCard>Portfolio 8</PortfolioCard>
                <PortfolioCard>Portfolio 9</PortfolioCard>
            </ScrollContainer>
        </PortfolioContainer>
    );
}

export default Portfolio;
