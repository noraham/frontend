// App.jsx
import React from "react";
import Popup from './popup.jsx';
import Answers from './answers.jsx';
import quizLegend from './assets/quizLegend.js'; // bringing this in as JS object

require('../css/app.css');

export default class Quiz extends React.Component {
    constructor (props) {
        super (props);

        // set initial states for quiz
        this.state = {
            spot: 0, // question number
            total: 10, // hard coding total since it is defined in project description
            showButton: false, // continue button that appears when question is answered
            questionAnswered: false, // keeps track of where we are in question presentation
            score: 0, // user's soore, live updated during quiz
            displayPopup: 'flex', // determines whether popup will be rendered in DOM
            quest: quizLegend.questions[0].question,
            answerOptions: [quizLegend.questions[0].answers[0], quizLegend.questions[0].answers[1]],
            correct: quizLegend.questions[0].correct,
            classNames: ['', ''],
            finalText: ""
        };

        this.getQuest = this.getQuest.bind(this); // required to bind the correct this
        this.nextStep = this.nextStep.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    getQuest() {
        // re-assign these states with each question
        this.setState({
            quest: quizLegend.questions[this.state.spot].question,
            answerOptions: [quizLegend.questions[this.state.spot].answers[0], quizLegend.questions[this.state.spot].answers[1]],
            correct: quizLegend.questions[this.state.spot].correct
        });
    }

    nextStep() {
        if (this.state.spot == 9) {
            // if all questions have been shown, bring popup back
            this.setState({
                displayPopup: 'flex',
            });
            if (this.state.score === 6) {
                this.setState({
                    finalText: 'You have completed the quiz. <br /> You got ' + this.state.score + ' questions right, which matches the average American score.'
                });
            }
            if (this.state.score > 6) {
                this.setState({
                    finalText: 'You have completed the quiz. <br /> You got ' + this.state.score + ' questions right, which is above the average American score. <br /> Great job!'
                });
            }
            if (this.state.score < 6) {
                this.setState({
                    finalText: 'You have completed the quiz. <br /> You got ' + this.state.score + ' questions right, which is below the average American score. <br /> The US lags behind dozens of countries in STEM degrees, which could impair our future capacity for innovation and success.'
                });
            }
        } else {
            // else, advance spot, reassign states for new question
            this.state.spot += 1;
            this.getQuest();
            this.setState({
                showButton: false,
                questionAnswered: false,
                classNames: ['', '']
            });
        }
    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    handleStartQuiz() {
        this.setState({
            displayPopup: 'none'
        });
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        let { spot, total, showButton, questionAnswered, displayPopup, score, quest, answerOptions, correct, classNames, finalText} = this.state;

        return (
            <div className="container">

                <Popup style={{display: displayPopup}} score={score} startQuiz={this.handleStartQuiz} finalText={finalText}/>

                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                        <div id="question">
                            <h4>Question {spot + 1}/{total}</h4>
                            <p>{quest}</p>
                        </div>
                        <Answers answers={answerOptions} correct={correct} showButton={this.handleShowButton} isAnswered={questionAnswered} increaseScore={this.handleIncreaseScore} colorsFromParent={classNames}/>
                        <div id="submit">
                            {showButton ? <button className="fancy-btn" onClick={this.nextStep} >{spot===9 ? 'Finish quiz' : 'Next question'}</button> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
