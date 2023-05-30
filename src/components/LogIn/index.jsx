import Header from '../Header/index.jsx'
import * as React from 'react';
import SingInFrom from '../SingInForm/index'
import LogInForm from '../LogInForm/index'
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
export default function LogIn({userInfo, setUserInfo}) {
  const emails = useSelector(state => state.emails.data)

  return (
    <>
    <Header userInfo = {userInfo} ></Header>
    <Box sx={{display:'flex', width:'90%', marginLeft:'5%', justifyContent:'space-around'}}>
      <SingInFrom  />
      <LogInForm /> 
    </Box>
    
    </>
  )
}