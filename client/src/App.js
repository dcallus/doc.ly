import React from 'react';
import './App.css';
import UiContainer from './containers/UiContainer'
import Header from './components/Header'


const App = () => {
   
    return (
        <div className="App">
          <Header/>
            <UiContainer />
        </div>
    );
  
}



export default App;
