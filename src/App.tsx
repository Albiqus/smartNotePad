import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Clock } from './components/Clock/Clock';
import { List } from './components/List/List';
import { Note } from './components/Note/Note';
import { Settings } from './components/Settings/Settings';
import { RootState } from './store/redux-store';

function App() {
    const clockVisible = useSelector((state: RootState) => state.settings.clockVisible)

    return (
        <div className="App">
            <Settings />
            <List />
            <Note />
            {clockVisible && <Clock />}
        </div>
    );
}

export default App;
