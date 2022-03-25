import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
    localStorage.clear();
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") == true) {
      // window.history.forward();
      console.log("check");
      if (window.location.pathname == "/login") {
        window.location.replace("/logout");
        console.log("check1");
      }
    }
  });

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <Grid container>
        <Grid item xs={12} md={12} sm={12}>
          <Typography variant="h6" gutterBottom paragraph align="center">
            Welcome to Home Page
          </Typography>
        </Grid>

        <Grid item xs={12} md={12} sm={12}>
          <Button
            variant="contained"
            align="center"
            fullWidth
            onClick={handleClick}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Logout;
