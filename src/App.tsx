import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Clock } from './components/Clock/Clock';
import { Content } from './components/Content/Content';
import { List } from './components/List/List';
import { Settings } from './components/Settings/Settings';
import { Sound } from './components/Sound';
import { RootState } from './store/redux-store';


function App() {
    const clockMode = useSelector((state: RootState) => state.settings.clock)
    const sound : string = useSelector((state: RootState) => state.settings.sound)
 
    return (
        <div className="App">
            {sound && <Sound sound={sound} />}
            <Settings />
            <List />
            <Content />
            {clockMode && <Clock />}
        </div>
    );
}

export default App;
