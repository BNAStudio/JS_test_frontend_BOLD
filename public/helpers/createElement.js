export default function createElement(type, addClass, text, src) {
    const el = document.createElement(type);
    el.classList.add(addClass);
    el.textContent = text;
    if (src) el.src = src;

    return {
        getElm() {
            return el;
        },
        setType(newType) {
            el.setAttribute("type", newType);
        },
        addClass(newClass) {
            el.classList.add(newClass);
        },
        removeClass(removeClass) {
            el.classList.remove(removeClass);
        },
        setText(newText) {
            el.textContent = newText;
        },
        setSrc(newSrc) {
            el.src = newSrc;
        }
    };
}
