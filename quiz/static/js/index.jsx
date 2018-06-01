// index.jsx
import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./App";

ReactDOM.render(
    <Quiz />, document.getElementById("content")
);

// need to figure out:
// start quiz (button?)
// how to serve questions and answers from json file
// check answer and update score
// final page with score once quiz is complete
