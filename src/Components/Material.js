import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Display from "./Display";

function Material() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [date, setDate] = useState(null);
  const [age, setAge] = useState("");

  const [gender, setGender] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (fname && lname && age && gender && date) {
      setIsOpen(!isOpen);
      console.log(fname + lname + age + gender + date);
    } else {
      alert("Fields cannot be empty");
    }
  };

  const handleClose = () => {
    setFname("");
    setLname("");
    setDate("");
    setAge("");
    setGender("");
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} sm={12}>
            <Typography variant="h4" sx={{ paddingBottom:"18px", textAlign: "center" }}>
              Personal Details{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <TextField
              fullWidth
              required
              type="text"
              value={fname}
              label="First Name"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <TextField
              fullWidth
              required
              type="text"
              value={lname}
              label="Last Name"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <TextField
              fullWidth
              required
              type="date"
              label="DOB"
              value={date}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <TextField
              fullWidth
              required
              type="Number"
              label="Age"
              value={age}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id="select-label" InputLabelProps={{ shrink: true }}>
                Gender
              </InputLabel>
              <Select
                labelId="select-label"
                id="simple-select"
                label="Gender"
                align="left"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <Button fullWidth variant="contained" onClick={handleClick}>
              Submit
            </Button>
          </Grid>
          {isOpen ? (
            <Display
              content={
                <>
                  <h3>Details</h3>
                  <p>First Name: {fname}</p>
                  <p>Last Name:{lname}</p>
                  <p>Date of Birth: {date}</p>
                  <p>Age: {age}</p>
                  <p>Gender: {gender}</p>
                  <Button
                    variant="contained"
                    width="18px"
                    onClick={handleClose}
                  >
                    OK
                  </Button>
                </>
              }
            />
          ) : (
            ""
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Material;
