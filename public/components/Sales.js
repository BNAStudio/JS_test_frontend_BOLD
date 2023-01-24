import { createElement, cts, getData, createUser, getDate } from "../helpers/index.js";

async function createInfoUser() {
    const newData = await getData(cts.URL)
    const { users } = newData;
    users.map(item => console.log(item))
}
createUser().getUser()

export default function sales() {
    const MONTH = getDate().month();
    const _salesList = createElement("div", "c-list", "").getElm();
    const _btnToday = createElement("button", "btn", "Hoy").getElm();
    const _btnWeek = createElement("button", "btn", "Esta semana").getElm();
    const _btnMonth = createElement("button", "btn", MONTH).getElm();

    _salesList.appendChild(_btnToday)
    _salesList.appendChild(_btnWeek)
    _salesList.appendChild(_btnMonth)
    createInfoUser()
    return _salesList
}

function dateFilter(users) {
    const dataFilter = users.filter(user => console.log(user))
}

