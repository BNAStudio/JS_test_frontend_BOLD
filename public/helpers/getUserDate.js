import { cts } from "./index.js";

export default function getUserDate(date) {
    const parsedDate = new Date(date);
    const day = parsedDate.getUTCDate();
    const week = parsedDate.getUTCDay();
    const month = parsedDate.getUTCMonth();
    const MONTHS = cts.MONTHS;
    const DAYSWEEK = cts.DAYSWEEK;
    // return { day: day, month: MONTHS[month] };
    return { day, week, month };
}
