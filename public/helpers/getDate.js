import cts from './constants.js'

export default function getDate(num) {
    const _DATE = new Date();
    const today = () => {
        const day = _DATE.getDay();
        return day
    }
    const year = () => {
        const year = _DATE.getFullYear();
        return year
    }
    return {
        today,
        month() {
            const month = num ? _DATE.getMonth() : cts.MONTHS[_DATE.getMonth()];
            return month
        },
        year
    }

}


