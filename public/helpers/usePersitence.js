export default function usePersistence(data) {
    this.saveLocalStorage = (key, object) => {
        sessionStorage.setItem(key, JSON.stringify(object));
    }

    this.getFromLocalStorage = function (key) {
        return JSON.parse(sessionStorage.getItem(key));
    }
}