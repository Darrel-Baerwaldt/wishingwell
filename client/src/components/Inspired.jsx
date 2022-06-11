import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function InspiredPage() {
  return (
    <div>
      <h1>Feeling Inspired Today??</h1>
      <p>Let's do this!!</p>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
        />
      </Box>
    </div>
  );
}
