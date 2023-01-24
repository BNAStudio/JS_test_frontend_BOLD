

export default function getTransactionDate(id) {
    const date = id;
    const parsedDate = new Date(date);
    const month = parsedDate.getUTCMonth();
    return { month }
}

