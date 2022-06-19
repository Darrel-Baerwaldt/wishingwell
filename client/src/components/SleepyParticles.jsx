import Particles from "react-tsparticles";
// import { loadSlim } from 'tsparticles-slim'
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function SleepyParticles(props) {
  const options = useMemo((engine) => {
    // an empty object here will load default options
    return {
      background: {
        color: "#000",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        // detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push", //add particles onclick
          },
          onHover: {
            enable: true,
            mode: ["grab", "bubble", "repulse"], //makes particles run away from cursor
            links: {
              enable: false,
            },
          },
        },
        modes: {
          push: {
            quantity: 25, // numbers of particles on click
          },
          grab: {
            distance: 100, // distance between particles
            duration: 10,
            // color: "red",
            opacity: 20,
          },
        },
      },
      particles: {
        links: {
          enable: true, //links particles together
          distance: 60, // max distance between particles
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 }, //randomize speed
        },
        opactity: {
          value: { min: 0.3, max: 0.7 }, // different opacities for variation
        },
        size: {
          value: { min: 1, max: 3 }, // randomizes the particle size
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    // loadSlim(engine)
    loadFull(engine); // choose whether want slim or full
  }, []);

  return (
    <>
      <Particles id={props.id} init={particlesInit} options={options} />

      <p style={{ color: "darkGray" }}>{<PlayCircleOutlineIcon />}</p>
    </>
  );
}
