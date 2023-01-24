import cts from './constants.js'

export default function getDate() {
    const $DATE = new Date();
    const today = () => {
        const day = $DATE.getDay();
        return day
    }
    const month = () => {
        const month = cts.MONTHS[$DATE.getMonth()];
        return month
    }
    const year = () => {
        const year = $DATE.getFullYear();
        return year
    }
    return { today, month, year }
}

