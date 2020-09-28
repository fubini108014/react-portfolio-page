import styled from "styled-components";
export const HeaderWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #000;
    box-sizing: border-box;
    height: 10%;
    width: 100vw;
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 760px) {
        height: 8%;
    }
`;
export const AccountBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & .accountIcon {
        margin: 7px;
        padding: 4px;

        &::after {
            content: "";
            position: absolute;
            top: 4px;
            right: 4px;
            bottom: 4px;
            left: 4px;
            border-radius: 50%;
            background: linear-gradient(
                45deg,
                #ffd800,
                #ff5520,
                #750cf2,
                #0cbcf2
            );
            z-index: 2;
        }
        &::before {
            content: "";
            position: absolute;
            border-radius: 50%;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background: linear-gradient(
                45deg,
                #ffd800,
                #ff5520,
                #750cf2,
                #0cbcf2
            );
            z-index: 1;
            filter: blur(40px);
        }

        & img {
            z-index: 3;
            border-radius: 50%;
            height: 90%;
            width: 90%;
        }
    }
`;

export const MotionMenu = styled.div`
    z-index: 1;
    display: none;
    @media screen and (max-width: 760px) {
        display: flex;
    }

    & nav {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 150px;
        max-height: 100%;
    }

    & .background {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 150px;
        background: #ececec;
    }
    & .MenuBtn {
        outline: none;
        border: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: pointer;
        position: absolute;
        top: 12px;
        right: 12px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: none;

        background: transparent;
        @media screen and (max-width: 760px) {
            display: flex;
            justify-content: center;
            align-items: center;
            top: 6px;
        }
    }
    ul,
    li {
        margin: 0;
        padding: 0;
    }

    ul {
        padding: 20px;
        position: absolute;
        top: 100px;
        width: 110px;
    }

    li {
        list-style: none;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .icon-placeholder {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        flex: 20px 0;
        margin-right: 20px;
    }

    .text-placeholder {
        border-radius: 5px;
        width: 100px;
        height: 20px;
        flex: 1;
    }
`;
export const Others = styled.div`
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & a {
        color: #fff;
    }
    & .homeIcon {
        margin-right: 15px;
        cursor: pointer;
    }
`;
export const AccountInfo = styled.div`
    & .myName {
        font-size: 1rem;
        font-weight: bold;
    }
    & .myJobs {
        font-size: 0.4rem;
        color: rgba(225, 225, 225, 0.8);
    }
`;
