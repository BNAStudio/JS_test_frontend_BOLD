import { getCurrentDate, getUserDate } from "../helpers/index.js"
import UserUI from "../components/UserUI.js";

export default class UserFilter {
    constructor(users) {
        this.users = users
    }
    userData() {
        return this.users
    }
    filter(key, value) {
        this.users.filter(user => user[key], value)
        UserUI(this.users)
    }
}
