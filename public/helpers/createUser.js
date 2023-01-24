
export default function createUser() {
    const obj = {
        id: null,
        success: null,
        date: '',
        card: '',
    }

    return {
        getUser() {
            return obj;
        }
    }
}