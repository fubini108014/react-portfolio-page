import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import PortfolioCard from "./component/PortfolioCard";
import { PortfolioTitle, PortfolioContainer } from "../styled/styledPortfolio";
function Portfolio() {
    return (
        <PortfolioContainer>
            <PortfolioTitle>Web design</PortfolioTitle>
            <ScrollContainer className="scroll-container">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((item) => (
                    <PortfolioCard text={`Portfolio ${item}`} />
                ))}
            </ScrollContainer>
            <PortfolioTitle>ReactJS</PortfolioTitle>
            <ScrollContainer className="scroll-container">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <PortfolioCard text={`Portfolio ${item}`} />
                ))}
            </ScrollContainer>
            <PortfolioTitle>Others </PortfolioTitle>
            <ScrollContainer className="scroll-container">
                {["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((item) => (
                    <PortfolioCard text={`Portfolio ${item}`} />
                ))}
            </ScrollContainer>
        </PortfolioContainer>
    );
}

export default Portfolio;
