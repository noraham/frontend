import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        
        // set these states to start with, will change them as quiz progresses
        this.state = {
            time: 'start',
            title: "10 simple questions to test the public\'s knowledge of science.",
            text: "Every two years, the National Science Foundation is required to tell the president how the US is doing in regard to science and engineering.<br /><br /> As part of their report, they develop these 10 questions to get a general gauge on the public\'s understanding of science. <br /><br /> Can you correctly answer them all?" ,
            buttonText: 'Start the quiz' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }

    popupHandle() {
        let { time } = this.state;
        
        // change these states after popup is dismissed, popup is ready to be called at end of quiz
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });
            // calls handleStartQuiz in App.js
            this.props.startQuiz();
        } else {            
            location.reload(); // restart the application to retake quiz
        }
    }

    showScore() {
        // if time is end, generate this before showing end popup
        this.setState({
            //if else for below or above average
            text: 'You have completed the quiz. <br /> You got: <strong>' + this.props.score + '</strong> questions right. The average American scored 6/10'
        })
    }

    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props; // not sure
        
        return (
            <div className="popup-container" style={style}>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="popup">
                            <h1>{title}</h1>
                            <div> {text.split("<br />").map(i => {
                                    return <p>{i}</p>;
                                    })}
                            </div>
                            <button className="fancy-btn" onClick={this.popupHandle}>{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup
