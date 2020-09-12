import React from "react";
import { MasonryOut } from "../styled/styledPortfolio";
import Masonry from "react-masonry-component";
function Portfolio() {
    return (
        <MasonryOut>
            <Masonry>
                {/* array of JSX items */}
                <div>My Element</div>
                <div>My Element</div>
                <div>My Element</div>
                <div>My Element</div>
            </Masonry>
        </MasonryOut>
    );
}

export default Portfolio;
