import React from "react";
import TimeLine from "./component/TimeLine";
import ChipGroup from "./component/ChipGroup";
import styled from "styled-components";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import Slide from "@material-ui/core/Slide";
import { FadeSection } from "./component/Helper";
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
    { icon: <DoneIcon />, label: "HTML", color: "#FF008C" },
    { icon: <FaceIcon />, label: "CSS", color: "#FF008C" },
    { icon: <FaceIcon />, label: "Javascript", color: "#FF008C" },
    { icon: <FaceIcon />, label: "Typescript", color: "#FF008C" },
    { icon: <FaceIcon />, label: "Python", color: "#FF008C" },
    { icon: <FaceIcon />, label: "flutter", color: "#FF008C" },
    { icon: <DoneIcon />, label: "C#", color: "#FF008C" },
];
const chipUILibrariesLists = [
    { icon: <FaceIcon />, label: "jQuery", color: "#D309E1" },
    { icon: <FaceIcon />, label: "Bootstrap", color: "#D309E1" },
    { icon: <FaceIcon />, label: "DataTables", color: "#D309E1" },
    { icon: <DoneIcon />, label: "D3.js", color: "#D309E1" },
    { icon: <DoneIcon />, label: "Three.js", color: "#D309E1" },
    { icon: <FaceIcon />, label: "Material-UI", color: "#D309E1" },
    { icon: <FaceIcon />, label: "Ant Design ", color: "#D309E1" },
    { icon: <DoneIcon />, label: "styled-components", color: "#D309E1" },
];
const chipLibrariesLists = [
    { icon: <FaceIcon />, label: "React Hook", color: "#9C1AFF" },
    { icon: <DoneIcon />, label: "React Redux", color: "#9C1AFF" },
    { icon: <FaceIcon />, label: "React Router", color: "#9C1AFF" },
    { icon: <FaceIcon />, label: "React Native", color: "#9C1AFF" },
    { icon: <DoneIcon />, label: "Google API、Maps", color: "#9C1AFF" },
    { icon: <DoneIcon />, label: "Facebook API", color: "#9C1AFF" },
];
const chipOthersLists = [
    { icon: <FaceIcon />, label: "tensorflow", color: "#7700FF" },
    { icon: <FaceIcon />, label: "keras", color: "#7700FF" },
    { icon: <FaceIcon />, label: "Machine Learning", color: "#7700FF" },
    { icon: <FaceIcon />, label: "Unity or Unity3D", color: "#7700FF" },
    { icon: <DoneIcon />, label: "fast api", color: "#7700FF" },
];

const chipStorageLists = [
    { icon: <FaceIcon />, label: "MySQL", color: "#4400FF" },
    { icon: <FaceIcon />, label: "MongoDB", color: "#4400FF" },
    { icon: <DoneIcon />, label: "Microsoft SQL Server", color: "#4400FF" },
];

function About() {
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <AboutContainer>
                <FadeSection>
                    <h1>關於</h1>
                </FadeSection>
                <FadeSection>
                    <MyPic>image</MyPic>
                </FadeSection>
                <FadeSection>
                    <MyName>張 群 | Josh Chang</MyName>
                </FadeSection>
                <FadeSection>
                    <MyDesc>
                        文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述。
                    </MyDesc>
                </FadeSection>
                <FadeSection>
                    <h1>經歷</h1>
                </FadeSection>

                <TimeLine />

                <FadeSection>
                    <h1>技能</h1>
                </FadeSection>
                <FadeSection>
                    Languages:
                    <ChipGroup
                        key={"Languages"}
                        chipLists={chipLanguagesLists}
                    />
                </FadeSection>
                <FadeSection>
                    UILibraries:
                    <ChipGroup
                        key={"UILibraries"}
                        chipLists={chipUILibrariesLists}
                    />
                </FadeSection>
                <FadeSection>
                    Libraries/APIs:
                    <ChipGroup
                        key={"Libraries"}
                        chipLists={chipLibrariesLists}
                    />
                </FadeSection>
                <FadeSection>
                    Others:
                    <ChipGroup key={"Others"} chipLists={chipOthersLists} />
                </FadeSection>
                <FadeSection>
                    Storage:
                    <ChipGroup key={"Storage"} chipLists={chipStorageLists} />
                </FadeSection>
                <FadeSection>
                    <h1>興趣</h1>
                </FadeSection>
            </AboutContainer>
        </Slide>
    );
}

export default About;
