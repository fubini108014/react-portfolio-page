import React from "react";
import styled, { css } from "styled-components";
/*淡出淡入 元件*/
const FadeInOutBox = styled.div`
    will-change: opacity, transform, visibility;
    ${(props) =>
        props.isFadeIn
            ? css`
                  opacity: 1;
                  visibility: visible;
                  transition: opacity 1200ms ease-in-out,
                      transform 600ms ease-in-out, visibility 1200ms ease-in-out;
              `
            : css`
                  opacity: 0;
                  visibility: hidden;
                  transition: opacity 600ms ease-in-out,
                      transform 300ms ease-in-out, visibility 600ms ease-in-out;
              `}
`;

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};

export const FadeSection = (props) => {
    const [isFadeIn, setIsFadeIn] = React.useState(true);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsFadeIn(entry.isIntersecting);
                } else {
                    setIsFadeIn(entry.isIntersecting);
                }
            });
        }, observerOptions);
        observer.observe(domRef.current);
    }, []);

    return (
        <FadeInOutBox ref={domRef} isFadeIn={isFadeIn}>
            {props.children}
        </FadeInOutBox>
    );
};
