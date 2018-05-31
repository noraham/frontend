# React Quiz

## Sources
This is the first Reat app I've made, these are the tutorials I used:

[Angela Branaes' article on Codeburst,](https://codeburst.io/creating-a-full-stack-web-application-with-python-npm-webpack-and-react-8925800503d9) which guides you through constructing a fullstack template<br>

Using the [React Quiz App linked here](https://forum.freecodecamp.org/t/quiz-application-built-with-react/68515) as a template, especially the css file, was extremely helpful.<br>

My quiz was inspired by [this article](http://www.businessinsider.com/science-questions-quiz-public-knowledge-education-2018-5), I wanted to make the slideshow into an interactive quiz.

## Installing and Running
From your terminal, create a new folder and clone this repo 

`git clone https://github.com/noraham/frontend.git`

1) Ensure you have npm, python and pip installed on your machine.
2) Go to the static directory 
`cd frontend/quiz/static` and execute 
`npm install`
This will download and install the dependencies listed in package.json.
3) In the same directory, start the npm watcher to build the front end code, this will run in dev-mode in this terminal window. 
`npm run watch`
4) In a separate terminal window, create a python virtualenv: 
`cd ~/virtualenvironment` 
`virtualenv ~/virtualenvironment/quiz`
`cd ~/virtualenvironment/quiz/bin`
`source activate` 
4) Install flask in your virtual environment. 
`pip install flask`
5) From your virtual environment, cd back to the cloned repo and start the server:
`cd frontend/quiz/server`
`python server.py`
6) The quiz app is now running locally! To access it, open [http://localhost:5000](http://localhost:5000) in your browser.

