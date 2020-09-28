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
    overflow-y: auto;
    padding: 5px 10px;
    & .container {
        .overflow: hidden;
    }
    & .masonryIn {
        margin: 0 auto;
    }
    & .masonryItem {
        background: hsla(0, 0%, 100%, 0.4);
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
            rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
            rgba(0, 0, 0, 0.07) 0px 8px 16px;
        border-radius: 10px;
        margin: 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 160px;
        &:hover {
            background: hsla(0, 0%, 100%, 0.75);
            box-shadow: rgba(0, 0, 0, 0.27) 0px 1px 2px,
                rgba(0, 0, 0, 0.27) 0px 2px 4px, rgba(0, 0, 0, 0.27) 0px 4px 8px,
                rgba(0, 0, 0, 0.27) 0px 8px 16px;
        }
        @media screen and (max-width: 450px) {
            width: 100%;
        }
    }
    & .grid-item1 {
        width: 330px;
    }
    & .grid-item2 {
        height: 160px;
    }
    & .grid-item3 {
        height: 330px;
        width: 330px;
    }
    & .grid-item4 {
        height: 240px;
    }
    @media screen and (max-width: 450px) {
        & .grid-item1,
        & .grid-item2,
        & .grid-item3,
        & .grid-item4 {
            width: 100%;
        }
    }
`;
