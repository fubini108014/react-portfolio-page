import React from "react";
import { MasonryOut, MasonryItem } from "../styled/styledPortfolio";
import Masonry from "react-masonry-component";
function Portfolio() {
    const masonryOptions = {
        fitWidth: true,
    };
    return (
        <MasonryOut>
            <Masonry className="masonryIn" options={masonryOptions}>
                <MasonryItem>My Element 1</MasonryItem>
                <MasonryItem>My Element 2</MasonryItem>
                <MasonryItem>My Element 3</MasonryItem>
                <MasonryItem>My Element 4</MasonryItem>
            </Masonry>
        </MasonryOut>
    );
}

export default Portfolio;
