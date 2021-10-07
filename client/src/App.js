import React from 'react';
import './App.css';
import UiContainer from './containers/UiContainer'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 


const App = () => {
   
    return (
      <Router>
        <div className="App">
          <Header/>
            <UiContainer />
        </div>
      </Router>
    );
  
}



export default App;
