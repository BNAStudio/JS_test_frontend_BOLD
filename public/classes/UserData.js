import { getData, cts } from "../helpers/index.js";

export default class UserData {
    constructor() {
        this.users = []
    }

    async fetchData() {
        try {
            const { users } = await getData(cts.URL);
            this.users = users.map(this.createUserObject);
            console.log(this.users)
        } catch (error) {
            this.handleError(error);
        }
    }

    createUserObject({ id, success, date, payment_method }) {
        return { id, success, date, payment_method };
    }

    handleError(error) {
        console.error(error);
    }

    getUsers() {
        return this.users;
    }

    filterUsers(key, value) {
        return this.users.filter(user => user[key] === value);
    }
}