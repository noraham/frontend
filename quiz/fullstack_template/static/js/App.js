// App.jsx
import React from "react";
import quizLegend from './assets/quizLegend.js';


export default class Quiz extends React.Component {
    constructor (props) {
        super (props);
        this.state = {spot:0};
        this.getQuest = this.getQuest.bind(this); // required to bind the correct this
    }
    
    getQuest() {
        alert(quizLegend.questions[this.state.spot].question)
        this.state.spot += 1
        if (this.state.spot == 10) {
            this.endQuiz();
        }
    }

    endQuiz() {
        console.log("done")
    }

    render() {
        return  <button onClick={this.getQuest}>
                    Get question with fetch
                </button>
  }
}

// components to build
// Question
// Question Count
// Answer Options
// Result

