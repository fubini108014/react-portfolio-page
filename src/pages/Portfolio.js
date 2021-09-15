import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import PortfolioCard from "./component/PortfolioCard/PortfolioCard";
import { PortfolioTitle, PortfolioContainer } from "../styled/styledPortfolio";
import { motion } from "framer-motion";
import Fade from "@material-ui/core/Fade";
import Masonry from "react-masonry-component";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const animate = { y: [20, 13, 7, 0], opacity: [0, 0.4, 0.7, 1] };
const transition = { times: [0, 0.4, 0.7, 1] };
const masonryOptions = {
    itemSelector: ".masonryItem",
};

//'xs' | 'sm' | 'md' | 'lg' | 'xl';
const useStyles = makeStyles((theme) =>
    createStyles({
        masonryItem: {
            width: "25%",
            [theme.breakpoints.between(650, 960)]: {
                width: "33%",
            },
            [theme.breakpoints.between(450, 650)]: {
                width: "50%",
            },
            [theme.breakpoints.down(450)]: {
                width: "100%",
            },
        },
    })
);

function Portfolio() {
    const classes = useStyles();
    return (
        <Fade in={true}>
            <Masonry className="masonryIn" options={masonryOptions}>
                {webDataSource.map((item, idx) => (
                    <PortfolioCard
                        key={`${idx}_1`}
                        title={item.title}
                        link={item.link}
                        introduction={item.introduction}
                        image={item.image}
                        content={item.content}
                        className={clsx("masonryItem", classes.masonryItem)}
                    />
                ))}
            </Masonry>
            {/*<PortfolioContainer>
           
                <motion.div
                    animate={animate}
                    transition={{ ...transition, delay: 0 }}
                >
                    <PortfolioTitle>Web design</PortfolioTitle>
                    <ScrollContainer className="scroll-container">
                        {webDataSource.map((item, idx) => (
                            <PortfolioCard
                                key={`${idx}_1`}
                                title={item.title}
                                link={item.link}
                                introduction={item.introduction}
                                image={item.image}
                                content={item.content}
                            />
                        ))}
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
            </PortfolioContainer>*/}
        </Fade>
    );
}

export default Portfolio;

const webDataSource = [
    {
        title: "元大銀行理財網 ",
        introduction: "aaaaaa",
        image: "yuanta",
        link: "http://yuantabank.moneydj.com/",
        content: "這是元大銀行理財網~~~~",
    },
    {
        title: "B",
        introduction: "bbbbbb",
        image: "",
        link: "https://www.youtube.com/",
        content: "bbbbbbb",
    },
    {
        title: "C",
        introduction: "ccccccc",
        image: "",
        link: "https://www.youtube.com/",
        content: "ccccccccccc",
    },
    {
        title: "D",
        introduction: "ddddddd",
        image: "",
        link: "https://www.youtube.com/",
        content: "dddddddddddd",
    },
];
