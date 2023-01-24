import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Clock } from './components/Clock/Clock';
import { Content } from './components/Content/Content';
import { List } from './components/List/List';
import { Settings } from './components/Settings/Settings';
import { Sound } from './components/Sound';
import { RootState } from './store/redux-store';
import { ThemeProvider } from 'styled-components';

function App() {
    const clockMode = useSelector((state: RootState) => state.settings.clock)
    const sound: string = useSelector((state: RootState) => state.settings.sound)
    const currentTheme: string = useSelector((state: RootState) => state.settings.theme)

    const darkTheme = {
        title: 'dark',
        primaryColor: '#7a7a7a;',
        secondaryColor: '#5a5a5a',
        fontColor: 'white',
        hoverColor: 'silver',
        additionalColor: 'rgb(56, 56, 56)'
    }
    const lightTheme = {
        title: 'light',
        primaryColor: '#f3f3f3;' ,
        secondaryColor: '#c8c8c8',
        fontColor: 'black',
        hoverColor: 'rgb(85, 85, 85)',
        additionalColor: 'rgb(143, 143, 143)'
    }

    useEffect(() => {
        document.title = "smartNotePad"
    }, []);


    return (
        <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
            <div className="App">
                {sound && <Sound sound={sound} />}
                <Settings />
                <List />
                <Content />
                {clockMode && <Clock />}
            </div>
        </ThemeProvider>
    );
}

export default App;
