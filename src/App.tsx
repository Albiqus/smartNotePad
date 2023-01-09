import React from 'react';
import './App.css';
import { Clock } from './components/Clock/Clock';
import { List } from './components/List/List';
import { Note } from './components/Note/Note';
import { Settings } from './components/Settings/Settings';

function App() {
  return (
      <div className="App">
          <Settings/>
          <List />
          <Note />
          <Clock/>
    </div>
  );
}

export default App;
