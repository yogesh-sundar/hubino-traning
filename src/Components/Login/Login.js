import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (email && password) {
      localStorage.setItem(
        "Details",
        JSON.stringify({ userName: email, password: password })
      );

      localStorage.setItem("isLoggedIn", true);
      // setIsLoggedin(!isLoggedIn);

      
      navigate("/logout");
    } else {
      alert("Login to your details");
    }
  };

  useEffect(() => {
    // window.history.forward();
    if (window.location.pathname == "/logout") {
      window.location.replace("/login");
      console.log("check1");
    }
  });

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={12} sx={{ m: 1 }}>
            <Typography variant="h5" align="center">
              LogIn to Your Account
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ m: 1 }}>
            <TextField
              variant="outlined"
              color="primary"
              label="UserName"
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ m: 1 }}>
            <TextField
              variant="outlined"
              color="primary"
              label="Password"
              type="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ m: 1 }}>
            <Button variant="contained" onClick={handleClick} fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
