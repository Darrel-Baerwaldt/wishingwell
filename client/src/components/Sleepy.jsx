import SleepyParticles from "./SleepyParticles";

export default function SleepyPage() {
    return (
      // <div style={{backgroundColor: "black", minHeight: "80vh"}}>
      <div>
      <h1 style={{color: "gray"}}>Ready for bed?</h1>
      <p style={{color: "gray"}}>Shhhhh...drift off to sleep in this interactive stary night sky</p>
      <SleepyParticles id="tsparticles"/>
    </div>
    )
  }