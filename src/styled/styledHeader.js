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
        min-height: 50px;
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
            top: 3px;
            right: 3px;
            bottom: 3px;
            left: 3px;
            border-radius: 50%;
            background: linear-gradient(
                225deg,
                rgba(45, 178, 253, 1) 0%,
                rgba(47, 97, 187, 1) 49%,
                rgba(6, 34, 71, 1) 100%
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
                225deg,
                rgba(45, 178, 253, 1) 0%,
                rgba(47, 97, 187, 1) 49%,
                rgba(6, 34, 71, 1) 100%
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
        background: linear-gradient(
            121deg,
            rgba(65, 149, 255, 1) 0%,
            rgba(30, 83, 186, 1) 53%,
            rgba(11, 37, 87, 1) 100%
        );
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
        top: 40px;
        width: 100px;
    }

    li {
        list-style: none;
        margin-bottom: 20px;
        height: 70px;
        display: flex;
        align-items: center;
        cursor: pointer;
        flex-direction: column;
        &:hover {
            background: radial-gradient(
                circle,
                rgba(207, 204, 220, 0.4) 0%,
                rgba(207, 204, 220, 0.5) 50%,
                rgba(207, 204, 220, 0.6) 100%
            );
            border: 1px solid #c6c2da91;
            & .icon-placeholder,
            & .text-placeholder {
                color: #fff !important;
            }
        }

        & .icon-placeholder {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            flex: 1;
            margin-bottom: 7px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
        & .text-placeholder {
            border-radius: 5px;
            width: 100px;
            height: 20px;
            flex: 1;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
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
