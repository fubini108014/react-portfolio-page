import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import StarBorderIcon from "@material-ui/icons/StarBorder";
const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
};

const useStyles = makeStyles({
    root: {
        width: 400,
        display: "flex",
        alignItems: "center",
        color: "#FFF",
        "& .MuiRating-iconEmpty": {
            color: "rgb(255 241 203 / 61%)",
        },
        "& .rateTitle": {
            width: "100px",
        },
    },
});

export default function HoverRating({ text = "", defalutValue = 2 }) {
    const [value, setValue] = React.useState(defalutValue);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="rateTitle">{text}</div>：
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                readOnly
            />
            {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </div>
    );
}
