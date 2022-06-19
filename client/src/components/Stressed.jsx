// import CalmingBeach from "./CalmingBeach";
// import CalmingRainbow from "./CalmingRainbow";
// import CalmingJellyFish from "./CalmingJellyFish";
// import { useState } from 'react'
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";
import PianoSong from "./PianoSong";
// import { render } from "@testing-library/react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

export default function StressedPage() {
  //   const [jellyFish, setJellyFish] = useState(true)

  // function handleClick() {
  //   setJellyFish(!jellyFish)

  // }
  return (
    <div>
      <h1>Stress...its a killer</h1>
      <h3>Take a moment to yourself</h3>
      <p>Click the image below and see what unfolds</p>

      <Button>{<ArrowBackIosNewIcon />}</Button>

      {/* <Button onclick={handleClick}></Button> */}
      <Button>
        {<ArrowForwardIosIcon />}
        {/* {jellyFish ? <CalmingJellyFish /> : <CalmingRainbow />} */}
      </Button>

      <Container component="main" maxWidth="md">
        <CssBaseline />
        <PianoSong />
        {/* <CalmingBeach minWidth="md" /> */}
      </Container>
    </div>
  );
}
