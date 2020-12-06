import React from "react";
import { useParams, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { BLOG_ITEM_LISTS } from "./component/Helper";
import Button from "@material-ui/core/Button";
function Article() {
    let { id = "" } = useParams();
    let history = useHistory();
    const findArticalItem = BLOG_ITEM_LISTS.find((item) => item.id === id);
    return (
        <div style={{ color: "#FFF" }}>
            <Button onClick={() => history.goBack()} style={{ color: "#FFF" }}>
                <ArrowBackIcon />
                回前頁
            </Button>
            <h1>{findArticalItem.title}</h1>
            <h3>{findArticalItem.content}</h3>
        </div>
    );
}

export default Article;
