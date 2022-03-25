import { Grid, Typography } from "@mui/material";
import React from "react";

function Practice() {
  return (
    <div>
      <Typography variant="h6" gutterBottom paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta totam
        quod, et neque animi, illo quam eveniet quidem accusamus, rem corrupti
        repellat laboriosam qui. Ratione, officia voluptate reprehenderit
        doloremque distinctio provident odit necessitatibus explicabo impedit
        earum amet a nobis perspiciatis quia velit minus sunt veniam enim eius.
        Iste, velit ullam.
      </Typography>
      <Grid container Spacing={1}>
        <Grid item xs={12} md={6} sm={12}>
          <Typography variant="h6" gutterBottom paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            totam quod, et neque animi, illo quam eveniet quidem accusamus, rem
            corrupti repellat laboriosam qui. Ratione, officia voluptate
            reprehenderit doloremque distinctio provident odit necessitatibus
            explicabo impedit earum amet a nobis perspiciatis quia velit minus
            sunt veniam enim eius. Iste, velit ullam.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Typography variant="h6" gutterBottom paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            totam quod, et neque animi, illo quam eveniet quidem accusamus, rem
            corrupti repellat laboriosam qui. Ratione, officia voluptate
            reprehenderit doloremque distinctio provident odit necessitatibus
            explicabo impedit earum amet a nobis perspiciatis quia velit minus
            sunt veniam enim eius. Iste, velit ullam.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <Typography variant="h6" gutterBottom paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            totam quod, et neque animi, illo quam eveniet quidem accusamus, rem
            corrupti repellat laboriosam qui. Ratione, officia voluptate
            reprehenderit doloremque distinctio provident odit necessitatibus
            explicabo impedit earum amet a nobis perspiciatis quia velit minus
            sunt veniam enim eius. Iste, velit ullam.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Practice;
