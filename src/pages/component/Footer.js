import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import SmsIcon from "@material-ui/icons/Sms";
export const FooterWapper = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #000;
    box-sizing: border-box;
    color: #fff;
    height: 10%;
    width: 100%;
    font-size: 2rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 760px) {
        height: 8%;
    }
`;

export const CopyRight = styled.div`
    color: #fff;
    flex: 0 0 300px;
    margin: 5px;
    font-size: 0.5rem;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const IconGroup = styled.div`
    color: #fff;
    flex: 0 0 200px;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    & .IconItem {
        margin: 5px;
        cursor: pointer;
    }
`;

export const MessageMe = styled.div`
    color: #fff;
    flex: 0 0 100px;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    & .SmsIconItem {
        margin: 5px;
        cursor: pointer;
    }
`;
export default function Footer() {
    return (
        <FooterWapper>
            <CopyRight>© 2020 Josh Chang. All rights reserved.</CopyRight>

            <IconGroup>
                <FacebookIcon className="IconItem" />
                <InstagramIcon className="IconItem" />
                <TwitterIcon className="IconItem" />
            </IconGroup>
            <MessageMe>
                <SmsIcon className="SmsIconItem" />
            </MessageMe>
        </FooterWapper>
    );
}
