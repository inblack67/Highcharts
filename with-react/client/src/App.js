import React from 'react';
import './App.css';
import Visualization from './components/Visualization';
import Drilldown from './components/Drilldown';

function App() {
  return (
    <div className="App">
      <Visualization />
      <hr/>
      <Drilldown />
    </div>
  );
}

export default App;
