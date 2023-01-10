import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Clock } from './components/Clock/Clock';
import { List } from './components/List/List';
import { Note } from './components/Note/Note';
import { Settings } from './components/Settings/Settings';
import { RootState } from './store/redux-store';

function App() {
    const clockMode = useSelector((state: RootState) => state.settings.clock)

    return (
        <div className="App">
            <Settings />
            <List />
            <Note />
            {clockMode && <Clock />}
        </div>
    );
}

export default App;
