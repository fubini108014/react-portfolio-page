import React from "react";
import HoverRating from "./component/HoverRating";
import TimeLine from "./component/TimeLine";
import ChipGroup from "./component/ChipGroup";
import styled from "styled-components";
const AboutContainer = styled.div`
    color: #fff;
`;
const RatingContainer = styled.div``;
const MyPic = styled.div`
    width: 200px;
    height: 250px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MyName = styled.div`
    font-size: 20px;
`;

const MyDesc = styled.div`
    font-size: 16px;
`;
function About() {
    return (
        <AboutContainer>
            <h1>關於</h1>
            <MyPic>image</MyPic>
            <MyName>張 群 | Josh Chang</MyName>
            <MyDesc>
                文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述。
            </MyDesc>

            <h1>經歷</h1>
            <TimeLine />
            <h1>技能</h1>
            <RatingContainer>
                <HoverRating text="Python" defalutValue={2.5} />
                <HoverRating text="Javascript" defalutValue={3} />
                <HoverRating text="React Js" defalutValue={4} />
                <HoverRating text="C#" defalutValue={2} />
                <HoverRating text="HTML5/CSS3" defalutValue={4.5} />
            </RatingContainer>
            <h1>興趣</h1>
            <ChipGroup />
        </AboutContainer>
    );
}

export default About;
