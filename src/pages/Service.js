import React from "react";
import { MasonryOut } from "../styled/styledService";
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
    return (
        <MasonryOut>
            <Masonry className="masonryIn" options={masonryOptions}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) => (
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
                        Service {el}
                    </motion.div>
                ))}
            </Masonry>
        </MasonryOut>
    );
}

export default Service;
