// import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";
// import "./styles.css";


const round = (n: number, step = 20) => Math.ceil(n / step) * step;

const STEP = 30;

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude < 255;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 50,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
  initialVelocity: ({image}) => new Vector((Math.random() - .5)*1000, (Math.random() - 1)*1000)
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

export default function CalmingBeach() {
  // const { innerWidth, innerHeight } = useWindowSize();

  return (
    <ParticleImage
      className="App"
      src={"./images/beach-rise.jpg"}
      // width={Number(innerWidth)}
      // height={Number(innerHeight)}
      scale={0.50}
      entropy={20}
      maxParticles={15000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#191D1F"
      {...<iframe title="Piano Song" src='https://embed.music.apple.com/us/album/piano-wellness/547510896?i=547510977' />}
    />
  );
}