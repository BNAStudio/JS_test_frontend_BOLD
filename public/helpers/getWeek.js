
export default function getWeek(day, month) {
    const date = new Date(2023, month - 1, day);
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const pastDays = (date - firstDay) / 86400000;
    const week = Math.ceil((pastDays + firstDay.getDay() + 1) / 7);
    console.log(week)
    return week
}
