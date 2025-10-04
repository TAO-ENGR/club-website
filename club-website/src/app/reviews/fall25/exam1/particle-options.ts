import { ISourceOptions } from "@tsparticles/engine";

export const particlesOptions: ISourceOptions = {
  autoPlay: true,
  background: {
    opacity: 0,
  },
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    collisions: { enable: false },
    move: {
      enable: true,
      direction: "bottom",
      speed: { min: 1, max: 4 },
      straight: false,
      random: false,
      outModes: { default: "out" },
      angle: { offset: 0, value: { min: -15, max: 15 } },
      gravity: {
        enable: false,
      },
      path: { enable: false },
    },
    rotate: {
      value: { min: 0, max: 360 },
      animation: {
        enable: true,
        speed: {
          min: 0,
          max: 10,
        },
        sync: false,
      },
    },
    number: { value: 15, density: { enable: true } },
    opacity: { value: { min: 0.7, max: 1 } },
    shape: {
      type: "image",
      options: {
        image: [
          { src: "/leaves/leaf-1.svg" },
          { src: "/leaves/leaf-2.svg" },
          { src: "/leaves/leaf-3.svg" },
        ],
      },
    },
    size: { value: { min: 12, max: 20 } },
    detectRetina: true,
  },
};
