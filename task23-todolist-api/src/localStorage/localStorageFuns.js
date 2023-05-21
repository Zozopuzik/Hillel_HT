export let getFromLocalStorage = (key) =>{
    let data = JSON.parse(localStorage.getItem(key))
    return data
}

export let addToLocalStorage = (key, value) =>{
    let dataToPush = JSON.stringify(value)
    localStorage.setItem(key, dataToPush)
}
export const setLocalStorage = async (key, link) => {
    try {
      const response = await fetch(link);
      const jsonData = await response.json();
      addToLocalStorage(key, jsonData);
      console.log(jsonData)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };