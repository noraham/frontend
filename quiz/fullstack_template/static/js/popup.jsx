import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        
        // set these states to start with, will change them as quiz progresses
        this.state = {
            time: 'start',
            title: 'Title',
            text: 'Text' ,
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
            // starts quiz in App.js
            this.props.startQuiz();
        } else {            
            location.reload(); // restart the application
        }
    }

    // why is this necessary?
    createMarkup(text) {
        return {__html: text};
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
                            <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                            <button className="fancy-btn" onClick={this.popupHandle}>{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup
