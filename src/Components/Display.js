import { Grid } from "@mui/material";
import React from "react";

function Display(props) {
  return (
    <div className="popup">
      <Grid container >
        <Grid item xs={12} md={12} sm={12}>
          {props.content}
        </Grid>
      </Grid>
    </div>
  );
}

export default Display;
