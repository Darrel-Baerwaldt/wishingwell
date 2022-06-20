// Render Prop
import React from "react";
// import { Formik, Form, ErrorMessage } from "formik";
// import { useState } from 'react's
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function UploadPhoto() {
//   const [image, setImage] = useState('')
//   const [date, setDate] = useState('')
//   const [note, setNote] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Button was clicked");
    const data = new FormData(event.currentTarget);
    // console.log(data)
    const newSelfie = {
      imageUrl: data.get("url"),
      date: data.get("date"),
      description: data.get("description"),
    };
    console.log("newSelfie is ", newSelfie);
    await axios.post("/happy", newSelfie).then(res => console.log(res.data)).catch(err => {
      console.log(err)
    })
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
          {/* <LockOutlinedIcon />
            </Avatar> */}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="url"
                  type="url"
                  label="Image URL"
                  // onChange={event => setImage(event.target.value)}
                  name="url"
                  autoComplete="url"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="date"
                  type="date"
                  // onChange={event => setDate(event.target.value)}
                  name="date"
                  autoComplete="date"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Why are you happy today?"
                  type="text"
                  id="description"
                  autoComplete="description"
                />
              </Grid>
            </Grid>
            <Button
              // href="/"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Upload
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
