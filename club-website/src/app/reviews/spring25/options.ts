import { ISourceOptions } from "@tsparticles/engine";

export const particlesOptions: ISourceOptions = {
    "autoPlay": true,
    "background": {
      "opacity": 0
    },
    "fullScreen": { "enable": false },
    "fpsLimit": 60,
    "particles": {
      "collisions": { "enable": false },
      "move": {
        "enable": true,
        "direction": "bottom",
        "speed": { "min": 1, "max": 4 },
        "straight": false,
        "random": false,
        "outModes": { "default": "out" },
        "angle": { "offset": 0, "value": { "min": -15, "max": 15 } },
        "gravity": {
          "enable": false
        },
        "path": { "enable": false }
      },
      "rotate": {
        "value": { "min": 0, "max": 360 },
        "animation": {
          "enable": true,
          "speed": {
            "min": 0,
            "max": 10
          },
          "sync": false
        }
      },
      "number": { "value": 15, "density": { "enable": true } },
      "opacity": { "value": { "min": 0.7, "max": 1 } },
      "shape": {
        "type": "image",
        "options": {
          "image": [
            { "src": "/petals/petal1.png" },
            { "src": "/petals/petal2.png" },
            { "src": "/petals/petal3.png" },
            { "src": "/petals/petal4.png" },
            { "src": "/petals/petal5.png" },
            { "src": "/petals/petal6.png" },
            { "src": "/petals/petal7.png" },
            { "src": "/petals/petal8.png" }
          ]
        }
      },
      "size": { "value": { "min": 12, "max": 20 } },
      "detectRetina": true
    }
  }
  