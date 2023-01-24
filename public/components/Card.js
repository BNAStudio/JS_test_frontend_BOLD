import { createElement, cts, getDate } from "../helpers/index.js";

export default function TotalCard(title, data, icon) {
    const TEXT = `${title} ${icon}`;
    const AMOUNT = `${data}`;
    const DATE = `${getDate().today()}, ${getDate().year()}`
    const _card = createElement("div", "c-card", "").getElm();
    const _titleContainer = createElement("div", "c-card-title", "").getElm();
    const _title = createElement("h1", "card-title", TEXT).getElm();
    const _totalAmount = createElement("h2", "card-amount", AMOUNT).getElm();
    const _amountDate = createElement("p", "date", DATE).getElm();

    _titleContainer.appendChild(_title);
    _card.appendChild(_titleContainer);
    _card.appendChild(_totalAmount);
    _card.appendChild(_amountDate);

    return _card
}

