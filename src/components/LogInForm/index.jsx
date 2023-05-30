import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../../service/api";
import { LocalStorage } from "../../service/localStorage";
import { useNavigate } from "react-router-dom";

export default function LogInForm() {
  const emails = useSelector((state) => state.emails.data);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [userData, setuserData] = useState({
    email: "",
    password: "",
    name: "",
    verifyPassword: "",
    status: true,
  });
  let handleChange = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(userData);
  const logIn = () => {
    if (userData.password === userData.verifyPassword) {
      let dataToPost = {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        status: userData.status,
      };
      if (emails.includes(userData.email)) {
        alert("user with such email already exists");
      } else {
        API.addUser(
          "https://634e9f834af5fdff3a625f84.mockapi.io/users",
          dataToPost
        ).then((res) => {
          dispatch({ type: 'SET_USER_DATA', payload: res.data });
          LocalStorage.setItemToLocalSorage("userData", res.data);
          setuserData({
            email: "",
            password: "",
            name: "",
            verifyPassword: "",
            status: true,
          });
          navigate('/')
        });
      }
      console.log(emails);
    } else {
      alert(`your passwords don't match each other`);
    }
  };
  return (
    <Box sx={{ marginLeft: "20px" }}>
      <h1>Quick Registration</h1>
      <h3>For new customer</h3>
      <Stack
        sx={{
          width: 500,
          maxWidth: "100%",
          marginTop: "20px",
        }}
        spacing={3}
      >
        <TextField
          fullWidth
          label="Full name"
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          fullWidth
          label="Password"
          type={"password"}
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          fullWidth
          label="Verify Password"
          type={"password"}
          name="verifyPassword"
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant="contained"
          sx={{
            width: "300px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "50px",
            height: "50px",
          }}
          onClick={logIn}
        >
          Sing In
        </Button>
      </Stack>
    </Box>
  );
}
