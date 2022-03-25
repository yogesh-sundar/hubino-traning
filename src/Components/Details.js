import React, { useState } from "react";
import Display from "./Display";
import DatePicker from "react-datepicker";
// import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

function Details() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [date, setDate] = useState(null);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (fname && lname && age && gender && (date <new Date())) {
      setIsOpen(!isOpen);
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
    <div className="form-container">
      <label>First Name</label>
      <br />
      <input
        type="text"
        value={fname}
        placeholder="Enter your text"
        required
        onChange={(e) => {
          setFname(e.target.value);
        }}
      ></input>
      <br />
      <label>Last Name</label>
      <br />
      <input
        type="text"
        value={lname}
        placeholder="Enter your text"
        required
        onChange={(e) => {
          setLname(e.target.value);
        }}
      ></input>
      <br />
      <label>Date of Birth</label>
      <br />
      
        <DatePicker
          selected={date}
          value={date}
          onSelect={(date)=>{setDate(date)}}
          placeholderText="select your date"
        />
      
      <label>Age</label>
      <br />
      <input
        type="text"
        value={age}
        placeholder="Enter your text"
        required
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
      <label>Gender</label>
      <br />
      <input
        type="text"
        placeholder="Enter your text"
        value={gender}
        required
        onChange={(e) => {
          setGender(e.target.value);
        }}
      ></input>
      <button onClick={handleClick}>Submit</button>
      {isOpen ? (
        <Display
          content={
            <>
              <h3>Details</h3>
              <p>First Name: {fname}</p>
              <p>Last Name:{lname}</p>
              <p>Date of Birth: {date.toLocaleDateString()}</p>
              <p>Age: {age}</p>
              <p>Gender: {gender}</p>
              <button onClick={handleClose}>Ok</button>
            </>
          }
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Details;
