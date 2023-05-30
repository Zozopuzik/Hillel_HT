export const LocalStorage = {
    getItemFromLocalSorage : (key) =>{
        let localStorageData = null
        localStorageData = JSON.parse(localStorage.getItem(key))
        return localStorageData
    },
    setItemToLocalSorage: (key, value) =>{
        localStorage.setItem(key, JSON.stringify(value))
    },
    clearLocalStorage : () =>{
        localStorage.clear()
    }, 
}