import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBg: React.FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.3,
                color: "#8b5cf6",
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#8b5cf6", "#06b6d4", "#ec4899"],
          },
          links: {
            color: "#8b5cf6",
            distance: 150,
            enable: true,
            opacity: 0.08,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 60,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesBg;
