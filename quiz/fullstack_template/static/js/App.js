// App.jsx
import React from "react";
import Popup from './popup.jsx';
import quizLegend from './assets/quizLegend.js'; // bringing this in as JS object
// require('../css/app.css');

export default class Quiz extends React.Component {
    constructor (props) {
        super (props);

        // set initial states for quiz
        this.state = {
            spot: 0, // question number
            total: 10, // hard coding total since it is defined in project description
            showButton: false, // continue button that appears when question is answered
            questionAnswered: false, // keeps track of where we are in question presentation
            score: 0,
            displayPopup: 'flex' // determines whether popup will be rendered in DOM
        };

        this.getQuest = this.getQuest.bind(this); // required to bind the correct this
        // this.nextQuestion = this.nextQuestion.bind(this);
        // this.handleShowButton = this.handleShowButton.bind(this);
        // this.handleStartQuiz = this.handleStartQuiz.bind(this);
        // this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    getQuest() {
        alert(quizLegend.questions[this.state.spot].question)
        this.state.spot += 1
        if (this.state.spot == 10) {
            this.endQuiz();
        }
    }

    endQuiz() {
        // shuttled here when through questions
        // need to prevent clicking of other buttons
        console.log("done")
    }

    render() {
        let { spot, total, showButton, questionAnswered, displayPopup, score} = this.state;

        return (
            <div className="container">

                // This calls Popup component and decides whether to display based on state of displayPopup
                <Popup style={{display: displayPopup}} startQuiz={this.handleStartQuiz}/>

                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                        <div id="question">
                            <h4>Question {spot + 1}/{total}</h4>
                            
                        </div>
                        <div id="submit">
                            /* deciding what to show: checks if question is answered or if quiz is over, displays correct text. Does not appear until question is answered */
                            {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{spot===total ? 'Finish quiz' : 'Next question'}</button> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// components to build
// Question
// Question Count
// Answer Options
// Result

