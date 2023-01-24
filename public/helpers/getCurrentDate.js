import { cts } from "./index.js";

export default function getCurrentDate() {
    const date = new Date();
    const today = date.getUTCDate();
    const week = date.getUTCDay();
    const month = date.getUTCMonth();
    const MONTHS = cts.MONTHS;
    const DAYSWEEK = cts.DAYSWEEK;
    return { today, week: DAYSWEEK[week], month: MONTHS[month] };
}


