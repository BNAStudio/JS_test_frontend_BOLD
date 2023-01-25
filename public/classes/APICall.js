import { cts } from "../helpers/index.js";

const URL = cts.URL

class APICall {
    constructor(url) {
        this.url = url
    }
    async fetchData() {
        const response = await fetch(this.url)
        const data = await response.json()
        const { users } = data
        return users
    }
}

export default new APICall(URL);

// https://my-json-server.typicode.com/