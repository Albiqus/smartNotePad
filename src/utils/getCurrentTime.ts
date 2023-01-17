import { DAYS, MONTHS } from "../data"

const formatTime = (time: number) => {
    if (String(time).length === 1) return `0${time}`
    return `${time}`
}


export const getCurrentTime = () => {
    const date = new Date()

    const hh = formatTime(date.getHours())
    const mm = formatTime(date.getMinutes())
    const dd = formatTime(date.getDate())
    const month = MONTHS[date.getMonth()]
    const day = DAYS[date.getDay()] 

    return { hh, mm, dd, month, day }
}