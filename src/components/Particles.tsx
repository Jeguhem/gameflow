"use client";
import { Particles } from "react-tsparticles";

const ParticleEffect = () => {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          line_linked: {
            enable: true,
            color: "#ffffff",
            opacity: 0.5,
            width: 2,
          },
          move: { enable: true, speed: 2 },
        },
      }}
    />
  );
};

export default ParticleEffect;
