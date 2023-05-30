import axios from 'axios'
export const API = {
    getProducts: (link) => {
        return axios.get(link);
      },
    getUsers: (link) => {
      return axios.get(link);
    },
    updateUser: (link, data) =>{
      return axios.put(link, data);
    },
    addUser : (link, data) =>{
      return axios.post(link, data);
    }
}