import React from "react";
import { useParams, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
function Article() {
    let { id = "" } = useParams();
    let history = useHistory();
    return (
        <div style={{ color: "#FFF" }}>
            <Button onClick={() => history.goBack()} style={{ color: "#FFF" }}>
                <ArrowBackIcon />
                回前頁
            </Button>
            <h1>Article ID: {id}</h1>
        </div>
    );
}

export default Article;
