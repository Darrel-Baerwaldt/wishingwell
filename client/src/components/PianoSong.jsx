import CalmingBeach from "./CalmingBeach";
import useSound from "use-sound";
import piano from "../music/The_Beginning.mp3";
import React from "react";
// import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

export default function PianoSong() {
  const [play] = useSound(piano);
  return <Button onClick={play}>{<CalmingBeach />}</Button>;
}
