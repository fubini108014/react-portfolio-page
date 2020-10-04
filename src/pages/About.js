import React from "react";
import HoverRating from "./component/HoverRating";
import styled from "styled-components";

const RatingContainer = styled.div`
    margin: 10px;
`;

function About() {
    return (
        <div>
            <h1>About me</h1>
            <RatingContainer>
                <HoverRating text="Python" defalutValue={2.5} />
                <HoverRating text="Javascript" defalutValue={3} />
                <HoverRating text="React Js" defalutValue={4} />
                <HoverRating text="C#" defalutValue={2} />
                <HoverRating text="HTML5/CSS3" defalutValue={4.5} />
            </RatingContainer>
        </div>
    );
}

export default About;
