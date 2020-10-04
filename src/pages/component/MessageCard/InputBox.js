import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        "& .textGrid": {
            flex: 1,
            "& .textField": {
                width: "100%",
            },
        },
        "& .iconGrid": {
            marginTop: "15px",
        },
    },
}));

export default function InputWithIcon({ label, icon, ...props }) {
    const classes = useStyles();

    return (
        <div className={classes.margin}>
            <Grid
                container
                spacing={1}
                justify="center"
                alignItems="flex-start"
            >
                <Grid item className="iconGrid">
                    {icon}
                </Grid>
                <Grid item className="textGrid">
                    <TextField
                        id="input-with-icon-grid"
                        className="textField"
                        label={label}
                        variant="outlined"
                        multiline
                        {...props}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
