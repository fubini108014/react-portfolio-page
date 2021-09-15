import React from "react";
import { ServiceContainer } from "../styled/styledService";
import Masonry from "react-masonry-component";
import { motion } from "framer-motion";
import Fade from "@material-ui/core/Fade";
import clsx from "clsx";
const animate = { y: [20, 13, 7, 0], opacity: [0, 0.4, 0.7, 1] };
const transition = { times: [0, 0.4, 0.7, 1] };
function Service() {
    const masonryOptions = {
        //fitWidth: true,
        itemSelector: ".masonryItem",
        //columnWidth: 160,
        gutter: 10,
    };

    const serviceContentLists = [
        "使用版本控制工具Git、GitHub、GitLab經驗",
        "React js、Redux、 ES6/7、Typescript 開發經驗",
        "串接第三方 API 經驗 Google、Facebook、Youtbue、Instagram",
        "熟悉RWD響應式網頁切版設計製作/美工繪圖軟體(PS、Ai...等)",
        "熟悉UI Library應用 Bootstrap、styled-component、Material UI、Ant Design、Framer Motion、D3.js",
        "React Native、Fluttter 雙平台開發 Android、IOS APP",
        "瀏覽器相容性、PWA實作經驗",
        "熟悉 Jenkins 或其他 CI 相關工具",
        "使用Python fastapi建構Web API服務",
        "機器學習、神經網路",
        "熟悉 Microsoft SQL Server  及 MongoDB 資料庫",
    ];

    return (
        <Fade in={true}>
            <ServiceContainer>
                <Masonry className="masonryIn" options={masonryOptions}>
                    {serviceContentLists.map((el, idx) => (
                        <motion.div
                            className={clsx("masonryItem", {
                                "grid-item1": idx === 2 || idx === 8,
                                "grid-item2": idx === 0 || idx === 5,
                                "grid-item3": idx === 4,
                                "grid-item4": idx === 3,
                            })}
                            key={idx}
                            animate={animate}
                            transition={{
                                ...transition,
                                delay: idx * 0.3 + 0.1,
                            }}
                        >
                            <div className="textContent">{el}</div>
                        </motion.div>
                    ))}
                </Masonry>
            </ServiceContainer>
        </Fade>
    );
}

export default Service;
