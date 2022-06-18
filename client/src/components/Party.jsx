import PartyParticles from './PartyParticles'

export default function PartyPage() {
  return (
    // <div style={{backgroundColor: "black", minHeight: "80vh"}}>
    <div>
      <h1 style={{color: "red"}}>Who's Ready to PARTY!!</h1>
      <p style={{color: "yellow"}}>Go ahead and throw yourself a firework show!</p>
      <PartyParticles id="tsparticles"/>
    </div>
  );
}
