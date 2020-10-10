import React from "react";
import styled from "styled-components";
const HomeContainer = styled.div`
    color: #fff;
    padding: 10px;
    overflow-y: auto;
`;
function Home() {
    return (
        <HomeContainer>
            <h1>Hi I'm Josh Chang.</h1>
            <h1>A Front End Developer.</h1>
        </HomeContainer>
    );
}

export default Home;
