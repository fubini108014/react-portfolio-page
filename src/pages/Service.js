import React from "react";
import { ServiceContainer } from "../styled/styledService";
import Masonry from "react-masonry-component";
import { motion } from "framer-motion";
import clsx from "clsx";
const animate = { y: [20, 13, 7, 0], opacity: [0, 0.4, 0.7, 1] };
const transition = { times: [0, 0.4, 0.7, 1] };
function Service() {
    const masonryOptions = {
        //fitWidth: true,
        itemSelector: ".masonryItem",
        columnWidth: 160,
        gutter: 10,
    };

    const serviceContentLists = [
        "串接第三方 API 經驗 Google、Facebook、Youtbue",
        "React、Flux 開發經驗",
        "Git、GitHub、GitLab",
        "熟悉框架應用 Ant Design、Vant、Bootstrap",
        "熟悉網頁切阪、瀏覽器相容性、RWD",
        "APP 雙平台 - React Native 開發 Android、IOS APP",
        6,
        7,
        8,
    ];

    return (
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
                        transition={{ ...transition, delay: idx * 0.3 + 0.1 }}
                    >
                        <div className="textContent">{el}</div>
                    </motion.div>
                ))}
            </Masonry>
        </ServiceContainer>
    );
}

export default Service;
