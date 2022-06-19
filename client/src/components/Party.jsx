import PartyParticles from './PartyParticles'
import partySong from '../music/Neon_Lights.mp3'
import Button from '@mui/material/Button'
import useSound from 'use-sound'

export default function PartyPage() {
  const [play] = useSound(partySong)

  return (
    // <div style={{backgroundColor: "black", minHeight: "80vh"}}>
    <div>
      <h1 style={{color: "red"}}>Who's Ready to PARTY!!</h1>
      <p style={{color: "yellow"}}>Go ahead and throw yourself a firework show!</p>
      {/* <PartyParticles id="tsparticles"/> */}
      <Button onClick={play} id="tsparticles">{<PartyParticles />}</Button>;

    </div>
  );
}
