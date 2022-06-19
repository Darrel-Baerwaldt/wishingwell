import SleepyParticles from "./SleepyParticles";
import useSound from "use-sound";
import relaxingMusic from "../music/The_Deepest_Ocean.mp3";
import Button from "@mui/material/Button";

export default function SleepyPage() {
  const [play] = useSound(relaxingMusic);
  return (
    // <div style={{backgroundColor: "black", minHeight: "80vh"}}>
    <div>
      <h1 style={{ color: "gray" }}>Ready for bed?</h1>
      <p style={{ color: "gray" }}>
        Shhhhh...drift off to sleep in this interactive stary night sky
      </p>
      {/* <SleepyParticles onClick={play} id="tsparticles"/> */}
      <Button onClick={play} id="tsparticles">
        {<SleepyParticles />}
      </Button>
      ;
      <p style={{color: "darkGray"}}>
     Track: The Deepest Ocean
     Music by https://www.fiftysounds.com 
     </p>
    </div>
  );
}
