import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { sounds } from '../data';


export const Sound = ({ sound }) => {

    const volume = useSelector((state) => state.settings.volume)
    

    useEffect(() => {
        if (soundRef.current) soundRef.current.volume = volume / 100
    }, [volume])

    const soundRef = React.useRef()
    return (
        <audio ref={soundRef} src={sounds[sound]} autoPlay muted={false} hidden loop={true}></audio>
    )
}




