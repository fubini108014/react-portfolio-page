import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    superScrollbar: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        padding: "0px 10px",
        flex: 1,
        "& .ps__rail-x": {
            display: "none !important",
        },
        "&.ps .ps__rail-x:hover,&.ps .ps--clicking": {
            background: "transparent !important",
            opacity: "0.6 !important",
        },

        "&.ps__thumb-x ": {
            height: "6px !important",
            backgroundColor: "#aaa !important",
        },
        "&.ps .ps__rail-y:hover": {
            backgroundColor: "transparent",
        },
    },

    // &::-webkit-scrollbar-track {
    //     -webkit-box-shadow: inset 0 0 6px 1px rgb(76 76 76 / 68%);
    //     box-shadow: inset 0 0 6px 1px rgb(76 76 76 / 68%);
    //     border-radius: 10px;
    //     border: 3px solid transparent;
    // }

    // &::-webkit-scrollbar {
    //     width: 8px;
    //     background-color: transparent;
    // }

    // &::-webkit-scrollbar-thumb {
    //     border-radius: 10px;
    //     -webkit-box-shadow: inset 0 0 5px 2px rgb(255 255 255 / 86%);
    //     box-shadow: inset 0 0 5px 2px rgb(255 255 255 / 86%);
    //     background-color: #2b2b2b8c;
    // }
}));

export const RouterWrapper = ({ children }) => {
    const classes = useStyles();
    const { pathname } = useLocation();

    React.useEffect(() => {
        const container = document.querySelector("#scrollContainer");
        container.scrollTop = 0;
    }, [pathname]);

    return (
        <PerfectScrollbar
            id="scrollContainer"
            className={classes.superScrollbar}
        >
            {children}
        </PerfectScrollbar>
    );
};
