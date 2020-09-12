import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { SkillCard, SkillContainer } from "../styled/styledSkill";
function Skill() {
    return (
        <SkillContainer>
            <ScrollContainer className="scroll-container">
                <SkillCard>Skill 1</SkillCard>
                <SkillCard>Skill 2</SkillCard>
                <SkillCard>Skill 3</SkillCard>
                <SkillCard>Skill 4</SkillCard>
                <SkillCard>Skill 5</SkillCard>
                <SkillCard>Skill 6</SkillCard>
                <SkillCard>Skill 7</SkillCard>
                <SkillCard>Skill 8</SkillCard>
                <SkillCard>Skill 9</SkillCard>
            </ScrollContainer>
        </SkillContainer>
    );
}

export default Skill;
