import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import cart from "../../images/shopping-cart.png";
import { useDispatch } from 'react-redux';
import { LocalStorage } from "../../service/localStorage";
import { API } from "../../service/api";
export default function Header() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch()
  let counterStyles = {
    color: "green",
    backgroundColor: "white",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    borderRadius: "50%",
  };
  const logOut = () =>{
    dispatch({type: 'SET_USER_DATA', payload:null})
    dispatch({type: 'CLEAR_CART'})
    let userData = LocalStorage.getItemFromLocalSorage('userData')
    userData.status = false
    API.updateUser(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${userData.id}`, userData)
    LocalStorage.clearLocalStorage()

  }
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "green" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to='/'><Avatar alt="Remy Sharp" src={logo} /></Link>
          {user.data === null ? (
            <Box sx={{ display: "flex" }}>
              <Box>
                Hi,
                <Link to='logIn'>Log in</Link>
              </Box>
              <Link to='logIn'>
                <Avatar
                  alt="Log In"
                  src={cart}
                  sx={{ borderRadius: "0px", marginLeft: "10px" }}
                />
              </Link>
              <Box sx={counterStyles}>
                0
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              <Box>
                Hi,
                <Link sx={{ color: "white" }}>{user.data.name}</Link>
              </Box>
              <Link>
                <Avatar
                  alt="Log In"
                  src={cart}
                  sx={{ borderRadius: "0px", marginLeft: "10px" }}
                />
              </Link>
              <Box sx={counterStyles}>
                {user.idsInCart.length}
              </Box>
              <Box sx={{textDecoration:'underline'}} onClick = {logOut}>Log Out</Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
