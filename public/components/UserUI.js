import { usePersistence } from "../helpers/index.js"
import { UserFilter } from "../classes/index.js";

export default function UserUI(data) {
    const user = new UserFilter(data)
    console.log(user.userData())

    /**
     * Save data in session storage
     */
    let storageObject = new usePersistence();
    storageObject.saveLocalStorage("user_info", data);
    const userInfo = storageObject.getFromLocalStorage("user_info");



    return
}


// function createCheckBox(data) {
//     console.log(data.map(item => item))
// }

function createCheckBox(obj) {
}

function createHTML(obj) {
    console.log(obj)
}