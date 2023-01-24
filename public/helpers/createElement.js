export default function createElement(type, addClass, text, src) {
    let el = document.createElement(type);
    el.classList.add(addClass)
    el.textContent = text
    if (src) el.src = src;

    return {
        getElm() {
            return el
        }
        ,
        setType(type) {
            el = document.createElement(type)
            return el
        },
        setClass(addClass) {
            return el.classList.add(addClass)
        },
        setText(text) {
            return el.textContent = text
        }
    }
}
