const KEY = 'deliverii'

const createStorage = () => {
    const handler = {
        set: (target, prop, value) => {
            target[prop] = value
            localStorage.setItem(KEY, JSON.stringify(target))
            return true
        },
        deleteProperty: (target, prop) => {
            delete target[prop]
            localStorage.setItem(KEY, JSON.stringify(target))
            return true
        }
    }
    let data = {}
    try {
        const storageItem = localStorage.getItem(KEY)
        data = JSON.parse(storageItem)
        if (data === null) {
            localStorage.setItem(KEY, '{}')
            data = {}
        }
    } catch (e) {
        localStorage.setItem(KEY, '{}')
    }
    return new Proxy(data, handler)
}

export {
    createStorage
}
