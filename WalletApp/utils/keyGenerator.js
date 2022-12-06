const chars = "1234567890abcdefghijklmnopqrstuvwxyz"

export default function genKey(size) {

    let key = ""

    for (let i = 0; i < size; i++) {
        const index = Math.random() * chars.length
        key += chars.at(index)
    }

    return key
}