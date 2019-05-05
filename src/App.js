import React from 'react';
import './App.css';
import SmartQuestionsList from './view/SmartQuestionList';
import SmartLogin from './view/SmartLogin';
import {HashRouter, Switch, Route} from 'react-router-dom';
import SmartCreateQuestion from './view/SmartCreateQuestion';

/*const questions =  [{
  title: "How to dispatch an action?",
  text: "I need to dispatch an action using Redux",
  author: "Dave",
  date: "02/05/2019",
  tags: ["React  ", "React-Native"]
},
{
  title: "maven dependency failing",
  text: "maven fails to install",
  author: "Anna",
  date: "03/05/2019",
  tags: ["Java  ", "Maven"]
}];*/


const App = () => (
  <div className="App">
      <HashRouter>
        <Switch>
          <Route exact = {true} component = {SmartLogin} path = "/" />
          <Route exact = {true} component = {SmartQuestionsList} path = "/question-list" />
          <Route exact = {true} component = {SmartCreateQuestion} path = "/create-question" />
        </Switch>
      </HashRouter>
    </div>
);

export default App;
