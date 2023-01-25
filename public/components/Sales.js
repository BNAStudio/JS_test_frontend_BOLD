import { createElement, getDate } from "../helpers/index.js";
import { APICall } from "../classes/index.js";
import { UserUI } from "../components/index.js";


// const onClickHandle = () => {
//     APICall.fetchData().then(item => {
//         const user = new UserFilter(item)
//         UserUI(user.userData())
//     })
// };

const onClickHandle = () => {
    APICall.fetchData().then(item => UserUI(item))
};

export default function sales() {
    const MONTH = getDate().month();
    const _userData = createElement("div", "c-user-data", null).getElm();
    const _btnToday = createElement("button", "btn", "Hoy").getElm();
    const _btnWeek = createElement("button", "btn", "Esta semana").getElm();
    const _btnMonth = createElement("button", "btn", MONTH).getElm();
    const _checkBox = createElement("button", "btn", MONTH).getElm();
    const _tableSection = createElement("div", "c-table", null, "table").getElm();


    _btnToday.addEventListener("click", onClickHandle)

    _userData.appendChild(_btnToday)
    _userData.appendChild(_btnWeek)
    _userData.appendChild(_btnMonth)

    return _userData
}



