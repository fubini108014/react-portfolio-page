import styled from "styled-components";
export const itemCard = styled.div`
    background: hsla(0, 0%, 100%, 0.35);
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
        rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px;
    position: relative;
    overflow: hidden;
    margin: 1rem;
    border-radius: 5px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        filter: blur(20px);
        z-index: -1;
        margin: -30px;
    }
`;

export const MasonryOut = styled.div`
    & .masonryIn {
        margin: 0 auto;
    }
`;
export const MasonryItem = styled.div`
    background: hsla(0, 0%, 100%, 0.35);
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
        rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px;
    margin: 0.5rem;
    border-radius: 3px;
    height: 200px;
    display: flex;
    flex: 1 0 calc(33% - 16px);
    min-width: 300px;
    width: calc(33% - 16px);
    justify-content: center;
    align-items: center;
`;
