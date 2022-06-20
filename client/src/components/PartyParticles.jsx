import Particles from "react-tsparticles";
// import { loadSlim } from 'tsparticles-slim'
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";


export default function PartyParticles(props) {
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
        events: {
          onClick: {
            enable: true,
            mode: "push", //add particles onclick
          },
          // onHover: {
          //    enable: true,
          //    mode: "respulse" //makes particles run away from cursor
          // }
        },
        modes: {
          push: {
            links: {
              enable: true,
            },
            quantity: 50, // numbers of particles on click
          },
          bubble: {
            distance: 100, // distance between particles
            duration: 10,
            size: 20,
            // quantity: 100,
            color: "#ffffff",
          },
        },
      },
      particles: {
        color: {
          value: "random",
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 }, //randomize speed
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
  )
}
