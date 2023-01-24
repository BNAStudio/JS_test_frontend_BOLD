import { createElement } from "../helpers/index.js";

export default function Header(logo, items) {
    const _header = createElement("header", "header", "").getElm();
    const _logo = createElement("img", "nav-logo", "", logo).getElm();
    const _containerItems = createElement("div", "c-nav-item", "").getElm()

    items.map((item, index) => {
        const elm = createElement("a").getElm();
        elm.textContent = `${item.name} ${item.icon ? item.icon : ''}`;
        elm.id = `btn-${index}`;
        _containerItems.append(elm);
    })

    _header.appendChild(_logo);
    _header.appendChild(_containerItems);

    return _header
}