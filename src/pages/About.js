import React from "react";
import TimeLine from "./component/TimeLine";
import ChipGroup from "./component/ChipGroup";
import styled from "styled-components";
import FaceIcon from "@material-ui/icons/Face";
import Slide from "@material-ui/core/Slide";
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

const chipFrontEndList = [
    { icon: <FaceIcon />, label: "HTML", color: "rgba(225,0,140,.75)" },
    { icon: <FaceIcon />, label: "CSS", color: "rgba(225,0,140,.75)" },
    { icon: <FaceIcon />, label: "Javascript", color: "rgba(225,0,140,.75)" },
    { icon: <FaceIcon />, label: "Less / Sass", color: "rgba(225,0,140,.75)" },
    { icon: <FaceIcon />, label: "Typescript", color: "rgba(225,0,140,.75)" },
    { icon: <FaceIcon />, label: "Node.js", color: "rgba(225,0,140,.75)" },
    { icon: <FaceIcon />, label: "Webpack", color: "rgba(225,0,140,.75)" },
    { icon: <FaceIcon />, label: "Flutter", color: "rgba(225,0,140,.75)" },
];
const chipUILibrariesList = [
    { icon: <FaceIcon />, label: "jQuery", color: "rgba(211,9,225,.75)" },
    { icon: <FaceIcon />, label: "Bootstrap 4", color: "rgba(211,9,225,.75)" },
    { icon: <FaceIcon />, label: "DataTables", color: "rgba(211,9,225,.75)" },
    { icon: <FaceIcon />, label: "D3.js", color: "rgba(211,9,225,.75)" },
    { icon: <FaceIcon />, label: "Three.js", color: "rgba(211,9,225,.75)" },
    { icon: <FaceIcon />, label: "Material-UI", color: "rgba(211,9,225,.75)" },
    { icon: <FaceIcon />, label: "Ant Design ", color: "rgba(211,9,225,.75)" },
    {
        icon: <FaceIcon />,
        label: "Styled-Components",
        color: "rgba(211,9,225,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "Emotion",
        color: "rgba(211,9,225,.75)",
    },
];
const chipLibrariesList = [
    {
        icon: <FaceIcon />,
        label: "React Hook",
        color: "rgba(156, 26, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "React Redux",
        color: "rgba(156, 26, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "React Router",
        color: "rgba(156, 26, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "React Native",
        color: "rgba(156, 26, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "第三方API串接 Google、Facebook",
        color: "rgba(156, 26, 255,.75)",
    },
];
const chipPythonList = [
    {
        icon: <FaceIcon />,
        label: "數據分析 Scikit-learn",
        color: "rgba(119, 0, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "資料視覺化 Matplotlib、Pandas",
        color: "rgba(119, 0, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "網頁爬蟲 BeautifulSoup、Selenium",
        color: "rgba(119, 0, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "Machine Learning",
        color: "rgba(119, 0, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "電腦視覺 OpenCV、GluonCV",
        color: "rgba(119, 0, 255,.75)",
    },
    { icon: <FaceIcon />, label: "FastAPI", color: "rgba(119, 0, 255,.75)" },
];

const chipStorageList = [
    { icon: <FaceIcon />, label: "MySQL", color: "rgba(68, 0, 255,.75)" },
    { icon: <FaceIcon />, label: "MongoDB", color: "rgba(68, 0, 255,.75)" },
    {
        icon: <FaceIcon />,
        label: "Microsoft SQL Server",
        color: "rgba(68, 0, 255,.75)",
    },
];
const chipToolsList = [
    {
        icon: <FaceIcon />,
        label: "Visual Studio Code",
        color: "rgba(39, 0, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "Sublime Text",
        color: "rgba(39, 0, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "Jupyter Notebook",
        color: "rgba(39, 0, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "Github、GitLab",
        color: "rgba(39, 0, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "sourcetree",
        color: "rgba(39, 0, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "Photoshop",
        color: "rgba(39, 0, 255,.75)",
    },
    {
        icon: <FaceIcon />,
        label: "Figma",
        color: "rgba(39, 0, 255,.75)",
    },
];

function About() {
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
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
                <div>Front-end:</div>
                <ChipGroup key={"Languages"} chipList={chipFrontEndList} />
                <div>UILibraries:</div>
                <ChipGroup key={"UILibraries"} chipList={chipUILibrariesList} />
                <div>Libraries/APIs:</div>
                <ChipGroup key={"Libraries"} chipList={chipLibrariesList} />
                <div>Python:</div>
                <ChipGroup key={"Python"} chipList={chipPythonList} />
                <div>Storage:</div>
                <ChipGroup key={"Storage"} chipList={chipStorageList} />
                <div>Tools:</div>
                <ChipGroup key={"Tools"} chipList={chipToolsList} />
                {/*<h1>興趣</h1>*/}
            </AboutContainer>
        </Slide>
    );
}

export default About;
