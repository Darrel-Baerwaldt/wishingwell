import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UploadPhoto from "./UploadPhoto";
// import axios from 'axios'

// const selfies = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function HappyAlbum({ selfies }) {
  const [showForm, setShowForm] = useState(false);
  // const [selfies, setSelfies] = useState([])

  // useEffect(() => {
  //   axios.get("/happy").then(res => setSelfies(res.data)).catch(error => console.log(error))
  // })

  function handleClick() {
    setShowForm(!showForm);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <UploadPhoto /> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Feeling Happy?
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Upload a selfie to capture this moment in time!
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              "Find your happiness in yourself." -Albert Camus
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={handleClick}>
                Upload a photo
              </Button>
              {/* <Button variant="outlined">Secondary action</Button> */}
            </Stack>
            {showForm ? <UploadPhoto /> : !showForm}
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          {!selfies ? (
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              You haven't uploaded any photos yet!
            </Typography>
          ) : (
            <Grid container spacing={4}>
              {selfies.map((selfie) => (
                <Grid item key={selfie} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
        {/* } */}
        {/* // )} */}
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        {/* <Copyright /> */}
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
