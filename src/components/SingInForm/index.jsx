import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { API } from '../../service/api';
import Button from "@mui/material/Button";
import { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { LocalStorage } from '../../service/localStorage';
export default function SingInFrom( ) {
    const [userData, setuserData] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()

    let navigate = useNavigate();

    let handleChange = (e) =>{
        setuserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    let signIn = () => {
      API.getUsers('https://634e9f834af5fdff3a625f84.mockapi.io/users').then(res => {
        res.data.forEach(user => {
          if (userData.email === user.email && userData.password === user.password) {
            dispatch({ type: 'SET_USER_DATA', payload: user });
            user.status = true 
            API.updateUser(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${user.id}`, user)
            LocalStorage.setItemToLocalSorage('userData',user )
            user.shoppingCart.forEach(element => {
            dispatch({type: 'ADD_IDS_TO_CART', payload: element.id})
           });
          }
        });
      });
      return navigate("/");
    };
    
    console.log(userData)
  return (
    <Box>
      <h1>Secure Sing In</h1>
      <h3>For current customer</h3>
    <Stack sx={{
        width: 500,
        maxWidth: '100%',
        marginTop:'20px'
      }} spacing ={3}>
      <TextField fullWidth label="Email Address" name='email' onChange={(e) =>handleChange(e)}/>
      <TextField fullWidth label="Password" type={'password'} name ='password' onChange={(e) =>handleChange(e)}/>
      <Button variant="contained" sx={{
        width:'300px', 
        backgroundColor:'red',
        color:'white',
        borderRadius:'50px',
        height:'50px'
      }}
      onClick ={signIn}
      >Sing In</Button>
    </Stack>
    </Box>
    )
}
