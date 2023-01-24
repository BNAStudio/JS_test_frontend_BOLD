import { UserData } from "../classes/index.js";
import { getCurrentDate, getUserDate } from "./index.js"


const setUser = new UserData();
setUser.fetchData();
setUser.filterUsers()

const filteredUsers = setUser.filterUsers("success", false)


// const users = setUser.getUsers();
console.log(filteredUsers)

export default function filterByDate() {

}

