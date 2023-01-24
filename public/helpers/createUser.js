
export default function createUser() {
    let obj = {
        id: null,
        success: null,
        date: '',
        card: '',
    }

    const getUser = () => {
        return obj;
    };

    return { getUser }
}