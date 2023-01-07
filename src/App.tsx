import React from 'react';
import './App.css';
import { List } from './components/List/List';
import { Note } from './components/Note/Note';
import { Settings } from './components/Settings/Settings';

function App() {
  return (
      <div className="App">
          <Settings/>
          <List />
          <Note />
    </div>
  );
}

export default App;
