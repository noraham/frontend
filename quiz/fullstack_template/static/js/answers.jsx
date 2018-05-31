import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false, // this is signal to move on to next question
            // classNames: ['', ''] // how red/green is applied after click
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    checkAnswer(e) {
        let { isAnswered } = this.props;
        
        // Only responds to first click when isAns=F, once T it doesn't respond
        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);

            if(answer === correct){
                this.props.colorsFromParent[answer] = 'right'; // applies green
                increaseScore();
            }
            else {
                this.props.colorsFromParent[answer] = 'wrong'; // applies red
            }

            this.props.showButton();
        }
    }

    render() {
        let { answers } = this.props;
        let { classNames } = this.props.colorsFromParent;

        return (
            <div id="answers">
                <ul>
                    <li onClick={this.checkAnswer} className={this.props.colorsFromParent[0]} data-id="0"><span>T</span> <p>{answers[0]}</p></li>
                    <li onClick={this.checkAnswer} className={this.props.colorsFromParent[1]} data-id="1"><span>F</span> <p>{answers[1]}</p></li>
                    
                </ul>
            </div>
        );
    }
}

export default Answers