import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import PortfolioCard from "./component/PortfolioCard";
import { PortfolioTitle, PortfolioContainer } from "../styled/styledPortfolio";
import { motion } from "framer-motion";
const animate = { y: [20, 13, 7, 0], opacity: [0, 0.4, 0.7, 1] };
const transition = { times: [0, 0.4, 0.7, 1] };
function Portfolio() {
    return (
        <PortfolioContainer>
            <motion.div
                animate={animate}
                transition={{ ...transition, delay: 0 }}
            >
                <PortfolioTitle>Web design</PortfolioTitle>
                <ScrollContainer className="scroll-container">
                    {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map(
                        (item, idx) => (
                            <PortfolioCard
                                key={`${idx}_1`}
                                text={`Portfolio ${item}`}
                            />
                        )
                    )}
                </ScrollContainer>
            </motion.div>
            <motion.div
                animate={animate}
                transition={{ ...transition, delay: 0.4 }}
            >
                <PortfolioTitle>ReactJS</PortfolioTitle>
                <ScrollContainer className="scroll-container">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
                        <PortfolioCard
                            key={`${idx}_2`}
                            text={`Portfolio ${item}`}
                        />
                    ))}
                </ScrollContainer>
            </motion.div>
            <motion.div
                animate={animate}
                transition={{ ...transition, delay: 0.9 }}
            >
                <PortfolioTitle>Others </PortfolioTitle>
                <ScrollContainer className="scroll-container">
                    {["a", "b", "c", "d", "e", "f", "g", "h", "i"].map(
                        (item, idx) => (
                            <PortfolioCard
                                key={`${idx}_3`}
                                text={`Portfolio ${item}`}
                            />
                        )
                    )}
                </ScrollContainer>
            </motion.div>
            <motion.div
                animate={animate}
                transition={{ ...transition, delay: 0.9 }}
            >
                <PortfolioTitle>練習 </PortfolioTitle>
                <ScrollContainer className="scroll-container">
                    {["One", "Two", "Three", "Four"].map((item, idx) => (
                        <PortfolioCard
                            key={`${idx}_3`}
                            text={`Portfolio ${item}`}
                        />
                    ))}
                </ScrollContainer>
            </motion.div>
        </PortfolioContainer>
    );
}

export default Portfolio;
