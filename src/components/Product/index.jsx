import React from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { images } from "../../images/products/images";
import { useNavigate } from "react-router-dom";
import cart from "../../images/shopping-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { LocalStorage } from "../../service/localStorage";
import { API } from "../../service/api";
export default function Product({ filteredProduct }) {
  const idsInCart = useSelector((state) => state.user.idsInCart)
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const salePercentStyles = {
    width: "40px",
    height: "20px",
    marginLeft: "20px",
    paddingBottom: "5px",
    paddingTop: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "green",
    textAlign: "center",
    color: "white",
    borderRadius: "10px",
  };
  const productNotInCartStyles = {
    backgroundColor: "red",
    width: "50px",
    height: "30px",

  };
  const productInCartStyles = {
    backgroundColor: "green",
    width: "50px",
    height: "30px",
  };


  let handleChange = () =>{
    console.log(filteredProduct.id)
    if(!isLoggedIn){
      return navigate('/logIn')
    }
    else{
      if(idsInCart.includes(filteredProduct.id)){
        dispatch({type:'REMOVE_IDS_FROM_CART',payload: filteredProduct.id})
        let userData = LocalStorage.getItemFromLocalSorage('userData')
        userData.shoppingCart.forEach(element => {
          if(element.id === filteredProduct.id ){
            userData.shoppingCart.splice(userData.shoppingCart.indexOf(element), 1)
          }
        });
        LocalStorage.setItemToLocalSorage('userData', userData)
        API.updateUser(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${userData.id}`, userData)
      }
      else{
        dispatch({type:'ADD_IDS_TO_CART',payload: filteredProduct.id})
        let userData = LocalStorage.getItemFromLocalSorage('userData')
        userData.shoppingCart.push(filteredProduct)
        LocalStorage.setItemToLocalSorage('userData', userData) 
        API.updateUser(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${userData.id}`, userData)
      }

    }
  }
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <Paper elevation={4} sx={{ width: "300px", height: "400px" }}>
        <Box sx={{ width: "150px", height: "150px", marginLeft: "75px" }}>
          <img
            src={images[`${filteredProduct.img}`]}
            alt="product"
            width="150px"
            height="150px"
          />
        </Box>
        <h1>{filteredProduct.title}</h1>
        <Box
          sx={{
            width: "290px",
            height: "50px",
            marginLeft: "10px",
            display: "flex",
          }}
        >
          {filteredProduct.salePercent ? (
            <>
              <Box
                sx={{
                  textDecoration: "line-through",
                  color: "silver",
                  fontWeight: "bold",
                  marginTop: "5px",
                }}
              >
                ${filteredProduct.price}
              </Box>
              <Box sx={salePercentStyles}>{filteredProduct.salePercent}%</Box>
            </>
          ) : (
            <Box></Box>
          )}
        </Box>
        <Stack
        direction={'row'}
          sx={{
            width: "280px",
            marginLeft: "10px",
            textAlign: "left",
            marginTop: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'center'
          }}
        >
          <h1 height="100px">
            $
            {filteredProduct.salePercent
              ? (filteredProduct.price * (100 - filteredProduct.salePercent)) /
                100
              : filteredProduct.price}
          </h1>
          <Button

            variant="contained"
            sx={
              idsInCart.includes(filteredProduct.id)
                ? productInCartStyles
                : productNotInCartStyles
            }
            onClick = {handleChange}
          >
            <img width="30px" height="30px" src={cart} alt="cart" />
          </Button>
        
        </Stack>
      </Paper>
    </Box>
  );
}
