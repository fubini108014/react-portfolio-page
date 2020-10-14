import React from "react";
import TimeLine from "./component/TimeLine";
import ChipGroup from "./component/ChipGroup";
import styled from "styled-components";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const AboutContainer = styled.div`
    color: #fff;
`;
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

const chipLanguagesLists = [
    { icon: <FaceIcon />, label: "Python", color: "#FF008C" },
    { icon: <FaceIcon />, label: "Javascript", color: "#FF008C" },
    { icon: <DoneIcon />, label: "HTML", color: "#FF008C" },
    { icon: <FaceIcon />, label: "CSS", color: "#FF008C" },
    { icon: <DoneIcon />, label: "Less", color: "#FF008C" },
];
const chipFrameworksLists = [
    { icon: <FaceIcon />, label: "Redux", color: "#D309E1" },
    { icon: <FaceIcon />, label: "Unity", color: "#D309E1" },
    { icon: <DoneIcon />, label: "React Native", color: "#D309E1" },
    { icon: <FaceIcon />, label: "Express.js", color: "#D309E1" },
    { icon: <DoneIcon />, label: "ASP.NET MVC", color: "#D309E1" },
];
const chipLibrariesLists = [
    { icon: <FaceIcon />, label: "TensorFlow", color: "#9C1AFF" },
    { icon: <FaceIcon />, label: "React", color: "#9C1AFF" },
    { icon: <DoneIcon />, label: "React Redux", color: "#9C1AFF" },
    { icon: <FaceIcon />, label: "React Router", color: "#9C1AFF" },
    { icon: <DoneIcon />, label: "jQuery", color: "#9C1AFF" },
    { icon: <DoneIcon />, label: "D3.js", color: "#9C1AFF" },
];
const chipOthersLists = [
    { icon: <FaceIcon />, label: "Machine Learning", color: "#7700FF" },
    { icon: <FaceIcon />, label: "Unity or Unity3D", color: "#7700FF" },
    { icon: <DoneIcon />, label: "Software Developer", color: "#7700FF" },
];

const chipStorageLists = [
    { icon: <FaceIcon />, label: "MySQL", color: "#4400FF" },
    { icon: <FaceIcon />, label: "MongoDB", color: "#4400FF" },
    { icon: <DoneIcon />, label: "Microsoft SQL Server", color: "#4400FF" },
];

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
            Languages:
            <ChipGroup chipLists={chipLanguagesLists} />
            Frameworks:
            <ChipGroup chipLists={chipFrameworksLists} />
            Libraries/APIs:
            <ChipGroup chipLists={chipLibrariesLists} />
            Others:
            <ChipGroup chipLists={chipOthersLists} />
            Storage:
            <ChipGroup chipLists={chipStorageLists} />
            <h1>興趣</h1>
        </AboutContainer>
    );
}

export default About;
