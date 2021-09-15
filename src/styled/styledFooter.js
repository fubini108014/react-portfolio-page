import styled from "styled-components";
import QRCodeImg from "../assets/img/QRcode.png";
export const FooterWapper = styled.div`
    box-sizing: border-box;
    color: #fff;
    height: 9%;
    width: 100%;
    font-size: 2rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 760px) {
        height: 8%;
        min-height: 50px;
    }
`;

export const CopyRight = styled.div`
    color: #fff;
    flex: 1 0 30%;
    margin: 5px;
    font-size: 0.5rem;
    justify-content: center;
    align-items: center;
`;

export const MessageMe = styled.div`
    color: #fff;
    flex: 1 0 30%;
    margin: 0 10px;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & .SmsIconFab {
        width: 48px;
        height: 48px;
        & .SmsIconItem {
            margin: 5px;
            cursor: pointer;
        }
        @media screen and (max-width: 760px) {
            width: 40px;
            height: 40px;
        }
    }
`;
export const IconGroup = styled.div`
    color: #fff;
    flex: 1 0 30%;
    margin: 0 7px;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    & .IconItem {
        margin: 5px 10px;
        cursor: pointer;
    }
`;
export const QRcodeIcon = styled.div`
    height: 24px;
    width: 24px;
    display: inline-flex;
    background-size: cover;
    background-image: url(${QRCodeImg});
    @media screen and (max-width: 760px) {
        display: none;
    }
`;
