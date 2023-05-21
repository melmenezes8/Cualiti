import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="">
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={12} sm={7}>
            <TextField
              id="filled-basic"
              placeholder="Nombre"
              variant="filled"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <TextField
              id="filled-basic"
              placeholder="Email"
              variant="filled"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <TextField
              id="filled-basic"
              placeholder="Phone"
              variant="filled"
              fullWidth
            />
          </Grid>

          <Grid sx={6}>
            <Button variant="contained" sx={{ marginTop: "2" }}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;