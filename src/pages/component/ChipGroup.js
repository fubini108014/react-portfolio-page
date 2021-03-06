import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        "@media (max-width:760px)": {
            justifyContent: "center",
        },
        "& > *": {
            margin: theme.spacing(0.5),
        },
        "& .chipStyle": {
            color: "#fff",
            "& svg": {
                color: "#fff",
            },
        },
    },
}));
//TODO: 興趣分顏色 good at 、 soso 、 basic 、
export default function ChipGroup({ chipList }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {chipList.map((item) => (
                <Chip
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    className="chipStyle"
                    style={{ backgroundColor: item.color }}
                />
            ))}
        </div>
    );
}
