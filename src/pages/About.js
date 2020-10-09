import React from "react";
import HoverRating from "./component/HoverRating";
import styled from "styled-components";
const AboutMeContent = styled.div`
    color: #fff;
    padding: 10px;
    overflow-y: auto;
`;
const RatingContainer = styled.div``;
const MyPic = styled.div`
    margin: 5px 0;
    width: 200px;
    height: 250px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MyName = styled.div`
    margin: 10px 0;
    font-size: 20px;
`;

const MyDesc = styled.div`
    margin: 5px 0;
    font-size: 16px;
`;
function About() {
    return (
        <AboutMeContent>
            <h1>關於</h1>
            <MyPic>image</MyPic>
            <MyName>張 群 | Josh Chang</MyName>
            <MyDesc>
                文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述。
            </MyDesc>

            <h1>工作經歷</h1>
            <h1>教育背景</h1>
            <h1>技能</h1>
            <RatingContainer>
                <HoverRating text="Python" defalutValue={2.5} />
                <HoverRating text="Javascript" defalutValue={3} />
                <HoverRating text="React Js" defalutValue={4} />
                <HoverRating text="C#" defalutValue={2} />
                <HoverRating text="HTML5/CSS3" defalutValue={4.5} />
            </RatingContainer>
            <h1>興趣</h1>
        </AboutMeContent>
    );
}

export default About;
