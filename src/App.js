import { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn';
import MainPage from './components/MainPage';
import { API } from './service/api';
import {LocalStorage} from './service/localStorage'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {

    API.getProducts('https://634e9f834af5fdff3a625f84.mockapi.io/products')
    .then(res => {
      dispatch({type: 'SET_DATA', payload:res.data})
      dispatch({type: 'GET_CATEGORIES', payload:res.data})
    })
    API.getUsers('https://634e9f834af5fdff3a625f84.mockapi.io/users')
    .then(res =>{
      let emails = []
      res.data.forEach(el => {emails.push(el.email)})
      dispatch({type: 'SET_EMAILS', payload:emails})
    }) 
  
  }, [])
  useEffect(() => {
    let data = LocalStorage.getItemFromLocalSorage('userData')
     console.log(data)
     if(data !== null){
      dispatch({type: 'SET_USER_DATA', payload:data})
      data.shoppingCart.forEach(element => {
        dispatch({type: 'ADD_IDS_TO_CART', payload: element.id})
       });
     }
     
  }, [])
  
  
  return (
    <div className="App">
    <Routes>
    <Route path='/' element = {<MainPage   />}/>
    <Route path='logIn' element = {<LogIn />}/>
   </Routes>

    </div>
  );
}

export default App;
