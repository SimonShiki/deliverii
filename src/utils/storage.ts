const KEY = 'deliverii'

export type StorageData = {
    [key: string]: any
};

const createStorage = () => {
    let data: StorageData = {}
    const handler = {
        set: (target: StorageData, prop: string, value: any) => {
            target[prop as keyof typeof data] = value
            localStorage.setItem(KEY, JSON.stringify(target))
            return true
        },
        deleteProperty: (target: StorageData, prop: string) => {
            delete target[prop as keyof typeof data]
            localStorage.setItem(KEY, JSON.stringify(target))
            return true
        }
    }
    try {
        const storageItem = localStorage.getItem(KEY)
        if (storageItem === null) {
            localStorage.setItem(KEY, '{}')
            data = {}
        } else data = JSON.parse(storageItem)
    } catch (e) {
        localStorage.setItem(KEY, '{}')
    }
    return new Proxy(data, handler)
}

export {
    createStorage
}
