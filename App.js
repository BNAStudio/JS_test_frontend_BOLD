// import createElement from "./public/helpers/createElement.js";
import { Header, Card, Sales } from "./public/components/index.js"
import { createElement, cts } from "./public/helpers/index.js";

// import "./db/db.json"

export function App() {
    const _root = document.getElementById("root");
    const _mainSection = document.createElement("section");
    _mainSection.classList.add("main-section");

    _mainSection.append(Card("Total de ventas de septiembre", "1'560.000", "***"));
    _mainSection.append(Sales());
    _root.append(Header(cts.LOGO, cts.NAV_ITEMS));
    _root.append(_mainSection);

}