import type { HyperspeedOptions } from "@/components/Hyperspeed";

export const homeLikeHyperspeedEffect: Partial<HyperspeedOptions> = {
  roadWidth: 10,
  lanesPerRoad: 3,
  fov: 95,
  speedUp: 3,
  movingAwaySpeed: [95, 125],
  movingCloserSpeed: [-185, -245],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x04030a,
    shoulderLines: 0x2f2a42,
    brokenLines: 0x2f2a42,
    leftCars: [0xff4dcd, 0xcd4fff, 0xff7b4d],
    rightCars: [0x5de7ff, 0x6ba8ff, 0xb3f7ff],
    sticks: 0x7af4ff,
  },
};
