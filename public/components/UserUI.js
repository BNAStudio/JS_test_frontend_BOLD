import { usePersistence } from "../helpers/index.js"
// import { User } from "../classes/index.js";

export default function userUI(data) {
    let storageObject = new usePersistence();
    const user = new User(data)
    console.log(user)
    storageObject.saveLocalStorage("users_info", user);

    const filterById = (id) => {
        const users = storageObject.getFromLocalStorage("users_info");
        console.log(users)
        const filteredUsers = Object.values(users).filter(user => id !== user.id)
        storageObject.saveLocalStorage("users_info", { [filteredUsers.id]: filteredUsers });
        return filteredUsers
    }

    return {
        filterById
    }
};


