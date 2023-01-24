
import { cts, createUser, getDate, getData, getTransactionDate } from "../helpers/index.js";

const userOBJ = createUser().getUser();
let infoUsers = [];

async function createInfoUser() {
    const newData = await getData(cts.URL)

    const { users } = newData;

    users.map(item => {
        const { id, success, date, payment_method } = item;
        userOBJ.id = id;
        userOBJ.success = success;
        userOBJ.date = date;
        userOBJ.card = payment_method;
        infoUsers.push(userOBJ)
    })
}


document.addEventListener("DOMContentLoaded", createInfoUser);

// TODO: Renderizar tabla de usuarios

export default function createTable() {
    const user = createUser().getUser()
    // return console.log(user)
}

createTable()

