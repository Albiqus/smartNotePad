import { useState } from 'react';
import { getCurrentTime } from '../../utils/getCurrentTime';
import { Header, Main, Paragraph, Wrapper } from './Clock-styles';


export const Clock = () => {
    
    const [time, setTime] = useState<any>(null)

    const timer = setInterval(cb, 1000)
    function cb() {
        clearInterval(timer)
        const currentTime = getCurrentTime()
        setTime(currentTime)
    }

    return (
        <Wrapper>
            <Main>
                <Header>{time?.hh} : {time?.mm}</Header>
                <Paragraph>{time?.dd} {time?.month}, {time?.day}</Paragraph>
            </Main>
        </Wrapper>
    )
}